#!/usr/bin/env bun
/**
 * grugbot420 web server
 * 
 * Bun.js server that:
 * 1. Serves the portal static files
 * 2. Exposes grugbot420 CLI via /api/cmd endpoint
 * 
 * Zero complexity. Just works.
 * 
 * Usage:
 *   bun run server/index.ts
 *   bun run server/index.ts --port 3420
 */

// Import grugbot420 (works with both Bun and Node)
const grugbot = require('../index.js');

// Parse args
const args = Bun.argv.slice(2);
const portIndex = args.indexOf('--port');
const PORT = portIndex !== -1 ? parseInt(args[portIndex + 1]) : 3420;

// CORS headers - grug keep it simple
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// JSON response helper
const json = (data: any, status = 200) => 
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders }
  });

// Serve portal static files
const serveStatic = async (path: string): Promise<Response> => {
  // Try portal directory first
  const portalPath = new URL(`../../portal${path}`, import.meta.url).pathname;
  const file = Bun.file(portalPath);
  
  if (await file.exists()) {
    const contentType = getContentType(path);
    return new Response(file, {
      headers: { 'Content-Type': contentType, ...corsHeaders }
    });
  }
  
  // 404
  return new Response('404 - grug not find', { status: 404, headers: corsHeaders });
};

// Content type helper
const getContentType = (path: string): string => {
  const ext = path.split('.').pop()?.toLowerCase();
  const types: Record<string, string> = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    json: 'application/json',
    png: 'image/png',
    jpg: 'image/jpeg',
    svg: 'image/svg+xml',
    ico: 'image/x-icon',
  };
  return types[ext || ''] || 'text/plain';
};

// Main server
const server = Bun.serve({
  port: PORT,
  
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;
    
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    
    // API: Process grugbot420 command
    if (path === '/api/cmd') {
      if (req.method === 'POST') {
        try {
          const body = await req.json();
          const command = body.cmd || body.command || '';
          const result = grugbot.process(command);
          return json({ 
            success: true, 
            command,
            result,
            version: grugbot.version 
          });
        } catch (e) {
          return json({ success: false, error: 'Invalid request' }, 400);
        }
      }
      
      // GET with query param
      const cmd = url.searchParams.get('cmd') || 'help';
      const result = grugbot.process(cmd);
      return json({ success: true, command: cmd, result, version: grugbot.version });
    }
    
    // API: Health check
    if (path === '/api/health') {
      return json({ 
        status: 'ok', 
        bot: 'grugbot420',
        version: grugbot.version,
        uptime: process.uptime(),
        philosophy: 'complexity bad'
      });
    }
    
    // API: List all commands (dynamic from bot)
    if (path === '/api/commands') {
      const commands = Object.keys(grugbot).filter(
        k => typeof grugbot[k] === 'function' && !['random', 'process'].includes(k)
      );
      return json({ commands, version: grugbot.version });
    }
    
    // Serve portal
    if (path === '/' || path === '') {
      return serveStatic('/index.html');
    }
    
    return serveStatic(path);
  },
});

console.log(`
🤖 grugbot420 server running!

   Local:   http://localhost:${PORT}
   Portal:  http://localhost:${PORT}/
   API:     http://localhost:${PORT}/api/cmd?cmd=wisdom

Commands:
   GET  /api/cmd?cmd=wisdom    - Query param
   POST /api/cmd               - JSON body { "cmd": "wisdom" }
   GET  /api/health            - Health check
   GET  /api/commands          - List commands

🦴 Complexity is the enemy. Ship code.
`);
