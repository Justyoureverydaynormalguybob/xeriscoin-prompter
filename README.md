# XerisCoin Testnet Command Prompter

A simple, cross-platform command helper for installing and running the XerisCoin testnet validator node.

![XerisCoin Prompter](https://img.shields.io/badge/XerisCoin-Testnet-yellow)
![Platform](https://img.shields.io/badge/Platform-Linux%20%7C%20macOS%20%7C%20Windows%20%7C%20WSL-blue)

## Features

- 🔍 **Keyword Search** - Find commands by typing keywords like `install`, `build`, `run`, `send`
- 🖥️ **Cross-Platform** - Auto-detects your OS and shows platform-specific commands
  - Linux (Bash)
  - macOS (Terminal)
  - Windows (PowerShell)
  - Windows WSL (Ubuntu)
  - Android Termux (📱 Mobile-optimized with tmux support)
- 📋 **One-Click Copy** - Copy any command to clipboard instantly
- 📝 **Step-by-Step** - Commands are numbered in the correct order
- 🏷️ **Categories** - Filter by Setup, Keys, Run, Transactions, or Troubleshoot

## Quick Start

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/xeriscoin-prompter)

### Run Locally

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/xeriscoin-prompter.git
cd xeriscoin-prompter

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supported Commands

| Category | Commands |
|----------|----------|
| **Setup** | Install Rust, Clone repo, Build binaries |
| **Keys** | Generate keypair, Rename to miner.json |
| **Run** | Start validator node |
| **Transactions** | Send XRS |
| **Troubleshoot** | Kill processes, Update & rebuild |

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons

## Contributing

Feel free to open issues or PRs to add more commands or improve the UI!

## Links

- [XerisCoin Testnet Repository](https://github.com/ZZachWWins/xeriscointestnet)
- [Rust Installation](https://rustup.rs/)

## License

MIT
