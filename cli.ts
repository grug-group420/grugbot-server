#!/usr/bin/env bun
// grugbot420 CLI entry point
// grug say: "simple code best code" 🪨

const args = Bun.argv.slice(2);
const command = args[0] || 'help';

const wisdom = [
  "complexity very very bad",
  "say no to complexity demon",
  "shipping is feature",
  "good enough is good enough", 
  "abstraction grow too big, become demon",
  "type system friend but not obsess over",
  "test most important code, not all code",
  "logging always help debug",
  "copy paste better than bad abstraction"
];

const jokes = [
  "why dev cross road? to refactor other side",
  "99 bugs on wall, fix one, 127 bugs on wall",
  "it work on my machine... ship machine then"
];

const responses: Record<string, () => string> = {
  help: () => `🪨 grugbot420 - grug-brained CLI assistant

Commands:
  help     - show this message
  wisdom   - get grug wisdom
  joke     - hear dev joke
  version  - show version

grug say: "complexity bad, simple good"`,
  
  wisdom: () => `🪨 ${wisdom[Math.floor(Math.random() * wisdom.length)]}`,
  
  joke: () => `😂 ${jokes[Math.floor(Math.random() * jokes.length)]}`,
  
  version: () => `grugbot420 v1.0.0 - built with bun 🪨`
};

const handler = responses[command] || responses.help;
console.log(handler());
