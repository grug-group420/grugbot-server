# Contributing to grugbot-server

Thanks for your interest in contributing! 🤖

## Getting Started

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/grugbot-server.git`
3. **Install** [Bun](https://bun.sh): `curl -fsSL https://bun.sh/install | bash`
4. **Branch**: `git checkout -b my-feature`
5. **Run**: `bun run serve`
6. **Push** and open a pull request

## Project Structure

```
grugbot-server/
├── index.js          # grugbot420 core (Node.js/Bun compatible)
├── server/
│   └── index.ts      # Bun.js web server
├── package.json
└── README.md
```

## What to Contribute

- **UI improvements**: Better playground interface
- **Server features**: New endpoints, WebSocket improvements
- **Performance**: Optimization, caching
- **Docs**: README improvements, usage examples
- **Bug fixes**: Cross-browser issues, server edge cases

## Code Style

- Zero external dependencies where possible
- Bun.js APIs preferred over Node.js polyfills
- Keep it simple — grug-brained principles

## Pull Requests

- One feature or fix per PR
- Test locally before submitting
- Update README if adding new features

---

*Part of [grug-group420](https://github.com/grug-group420) — "complexity very very bad" 🪨*
