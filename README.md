# 🤖 grugbot420

A simple bot built the grug way. Zero dependencies. Just works.

## Install

```bash
npm install grugbot420
# or
bun add grugbot420
```

## CLI Usage

```bash
npx grugbot420 wisdom
npx grugbot420 ship
npx grugbot420 help
```

## Module Usage

```javascript
const grugbot = require('grugbot420');

console.log(grugbot.wisdom());  // Get grug wisdom
console.log(grugbot.ship());    // Ship some code
console.log(grugbot.joke());    // Tell a joke
console.log(grugbot.debug());   // Debug protocol
```

## �� Web Server (Bun.js)

Run grugbot420 as a local web server that serves the portal with live CLI:

```bash
# Start server on port 3420
bun run serve

# Or with custom port
bun run server/index.ts --port 8080

# Dev mode with auto-reload
bun run serve:dev
```

Then open http://localhost:3420 - the portal playground will connect to your local server!

### API Endpoints

```
GET  /api/cmd?cmd=wisdom    # Query param
POST /api/cmd               # JSON body { "cmd": "wisdom" }
GET  /api/health            # Health check
GET  /api/commands          # List all commands
```

### Example

```bash
curl http://localhost:3420/api/cmd?cmd=wisdom
# {"success":true,"command":"wisdom","result":"🦴 \"Complexity very very bad...\""}

curl -X POST http://localhost:3420/api/cmd \
  -H "Content-Type: application/json" \
  -d '{"cmd":"ship"}'
```

## Commands

| Command | Description |
|---------|-------------|
| `help` | Show all commands |
| `wisdom` | Get grug wisdom |
| `ship` | Ship some code |
| `think` | Grug thoughts |
| `debug` | Debug protocol |
| `complexity` | Check complexity level |
| `joke` | Tell a grug joke |
| `coffee` | Coffee status |

## Philosophy

- Zero dependencies
- Works offline
- No build step
- Copy paste friendly
- Simple > clever

## License

MIT - do what want

---

🦴 **grug-group420** | [Portal](https://grug-group420.github.io/portal) | [Playground](https://grug-group420.github.io/portal#playground)
