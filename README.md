# 🤖 grugbot-server

Run grugbot420 locally with a web interface. Bun.js server + portal playground.

## 📋 Requirements

- [Bun](https://bun.sh) v1.0+ (fast JavaScript runtime)

### Install Bun

```bash
# Linux/macOS
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"

# Homebrew
brew install oven-sh/bun/bun
```

Verify installation:
```bash
bun --version
```

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/grug-group420/grugbot-server.git
cd grugbot-server

# Start the server
bun run serve
```

Open http://localhost:3420 in your browser. Done! 🦴

## 📁 What's Included

```
grugbot-server/
├── index.js          # grugbot420 core (Node.js/Bun compatible)
├── server/
│   └── index.ts      # Bun.js web server
├── package.json
└── README.md
```

## 🖥️ Running the Server

```bash
# Default port 3420
bun run serve

# Custom port
bun run server/index.ts --port 8080

# Dev mode (auto-reload on changes)
bun run serve:dev
```

## �� Using the Portal

Once running, open http://localhost:3420

The playground will show **🟢 server** mode, meaning commands run through your local CLI instead of the embedded fallback.

Type `server` in the playground to check connection status.

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Portal web interface |
| `/api/cmd?cmd=wisdom` | GET | Run command (query param) |
| `/api/cmd` | POST | Run command (JSON body) |
| `/api/health` | GET | Health check |
| `/api/commands` | GET | List available commands |

### Examples

```bash
# GET request
curl "http://localhost:3420/api/cmd?cmd=wisdom"

# POST request
curl -X POST http://localhost:3420/api/cmd \
  -H "Content-Type: application/json" \
  -d '{"cmd":"ship"}'

# Health check
curl http://localhost:3420/api/health
```

## 🤖 CLI Commands

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
| `stack` | Tech stack |
| `manifesto` | The grug way |
| `about` | About grugbot420 |
| `server` | Connection status |

## 🔧 Troubleshooting

### "bun: command not found"
Bun isn't installed or not in PATH. Run the install command above, then restart your terminal.

### Port already in use
```bash
# Use a different port
bun run server/index.ts --port 3421
```

### CORS errors
The server allows all origins by default. If you still have issues, make sure you're accessing via `http://localhost:3420`, not `file://`.

## 📦 Using as Node.js Module

The core bot works without Bun too:

```javascript
const grugbot = require('./index.js');

console.log(grugbot.wisdom());
console.log(grugbot.process('ship'));
```

## 🦴 Philosophy

- Zero npm dependencies
- Works offline
- Simple > clever
- Ship fast

---

**grug-group420** | [GitHub](https://github.com/grug-group420) | [Portal](https://grug-group420.github.io/portal)
