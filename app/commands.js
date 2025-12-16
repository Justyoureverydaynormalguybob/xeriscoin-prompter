export const commands = {
  linux: [
    {
      id: 'rust-install',
      keywords: ['install', 'rust', 'setup', 'start', 'begin', 'toolchain'],
      title: 'Install Rust Toolchain',
      description: 'First step - install the Rust programming language',
      command: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`,
      category: 'setup',
      step: 1
    },
    {
      id: 'refresh-shell',
      keywords: ['refresh', 'shell', 'source', 'cargo', 'env', 'path'],
      title: 'Refresh Shell Environment',
      description: 'Load Rust into your current terminal session',
      command: 'source $HOME/.cargo/env',
      category: 'setup',
      step: 2
    },
    {
      id: 'verify-rust',
      keywords: ['verify', 'check', 'version', 'rust', 'cargo', 'confirm'],
      title: 'Verify Installation',
      description: 'Confirm Rust and Cargo are installed correctly',
      command: 'rustc --version && cargo --version',
      category: 'setup',
      step: 3
    },
    {
      id: 'clone-repo',
      keywords: ['clone', 'download', 'git', 'repo', 'repository', 'source', 'code'],
      title: 'Clone Repository',
      description: 'Download the XerisCoin testnet source code',
      command: 'git clone https://github.com/ZZachWWins/xeriscointestnet.git && cd xeriscointestnet',
      category: 'setup',
      step: 4
    },
    {
      id: 'build',
      keywords: ['build', 'compile', 'release', 'cargo', 'make'],
      title: 'Build Release Binaries',
      description: 'Compile the testnet software (may take a few minutes)',
      command: 'cargo build --release',
      category: 'setup',
      step: 5
    },
    {
      id: 'generate-keypair',
      keywords: ['keypair', 'key', 'generate', 'identity', 'wallet', 'create', 'pubkey'],
      title: 'Generate Validator Keypair',
      description: 'Create your validator identity (outputs keypair.json + pubkey)',
      command: 'cargo run --release --bin keypair_gen',
      category: 'keys',
      step: 6
    },
    {
      id: 'rename-keypair',
      keywords: ['rename', 'miner', 'keypair', 'mv', 'move'],
      title: 'Rename Keypair for Runtime',
      description: 'Rename keypair.json to miner.json for the validator',
      command: 'mv keypair.json miner.json',
      category: 'keys',
      step: 7
    },
    {
      id: 'run-validator',
      keywords: ['run', 'start', 'validator', 'node', 'mining', 'sync', 'bootstrap'],
      title: 'Run Validator Node',
      description: 'Start your validator and connect to the testnet seed node',
      command: 'RUST_LOG=info cargo run --release --bin xrs-node -- --validator 138.197.116.81 miner.json ledger.dat',
      category: 'run',
      step: 8
    },
    {
      id: 'send-basic',
      keywords: ['send', 'transfer', 'transaction', 'tx', 'pay'],
      title: 'Send XRS (Basic)',
      description: 'Transfer XRS to another wallet address',
      command: 'cargo run --release --bin send <RECIPIENT_PUBKEY> <AMOUNT>',
      category: 'transactions',
      step: null
    },
    {
      id: 'send-wallet',
      keywords: ['wallet', 'send', 'transfer'],
      title: 'Send via Wallet CLI',
      description: 'Alternative wallet command for sending XRS',
      command: 'cargo run --bin wallet -- send miner.json <RECIPIENT_PUBKEY> <AMOUNT>',
      category: 'transactions',
      step: null
    },
    {
      id: 'kill-process',
      keywords: ['kill', 'stop', 'address', 'use', 'error', 'pkill', 'process'],
      title: 'Kill Stray Processes',
      description: 'Fix "Address already in use" error',
      command: 'pkill xrs-node',
      category: 'troubleshoot',
      step: null
    },
    {
      id: 'update',
      keywords: ['update', 'pull', 'git', 'latest', 'new', 'refresh'],
      title: 'Update & Rebuild',
      description: 'Pull latest changes and rebuild the project',
      command: 'git pull && cargo build --release',
      category: 'troubleshoot',
      step: null
    }
  ],
  
  mac: [
    {
      id: 'rust-install',
      keywords: ['install', 'rust', 'setup', 'start', 'begin', 'toolchain'],
      title: 'Install Rust Toolchain',
      description: 'First step - install the Rust programming language',
      command: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`,
      category: 'setup',
      step: 1
    },
    {
      id: 'refresh-shell',
      keywords: ['refresh', 'shell', 'source', 'cargo', 'env', 'path'],
      title: 'Refresh Shell Environment',
      description: 'Load Rust into your current terminal session',
      command: 'source $HOME/.cargo/env',
      category: 'setup',
      step: 2
    },
    {
      id: 'verify-rust',
      keywords: ['verify', 'check', 'version', 'rust', 'cargo', 'confirm'],
      title: 'Verify Installation',
      description: 'Confirm Rust and Cargo are installed correctly',
      command: 'rustc --version && cargo --version',
      category: 'setup',
      step: 3
    },
    {
      id: 'install-xcode',
      keywords: ['xcode', 'tools', 'developer', 'command', 'line'],
      title: 'Install Xcode Command Line Tools',
      description: 'Required build tools for macOS (if not already installed)',
      command: 'xcode-select --install',
      category: 'setup',
      step: 4
    },
    {
      id: 'clone-repo',
      keywords: ['clone', 'download', 'git', 'repo', 'repository', 'source', 'code'],
      title: 'Clone Repository',
      description: 'Download the XerisCoin testnet source code',
      command: 'git clone https://github.com/ZZachWWins/xeriscointestnet.git && cd xeriscointestnet',
      category: 'setup',
      step: 5
    },
    {
      id: 'build',
      keywords: ['build', 'compile', 'release', 'cargo', 'make'],
      title: 'Build Release Binaries',
      description: 'Compile the testnet software (may take a few minutes)',
      command: 'cargo build --release',
      category: 'setup',
      step: 6
    },
    {
      id: 'generate-keypair',
      keywords: ['keypair', 'key', 'generate', 'identity', 'wallet', 'create', 'pubkey'],
      title: 'Generate Validator Keypair',
      description: 'Create your validator identity (outputs keypair.json + pubkey)',
      command: 'cargo run --release --bin keypair_gen',
      category: 'keys',
      step: 7
    },
    {
      id: 'rename-keypair',
      keywords: ['rename', 'miner', 'keypair', 'mv', 'move'],
      title: 'Rename Keypair for Runtime',
      description: 'Rename keypair.json to miner.json for the validator',
      command: 'mv keypair.json miner.json',
      category: 'keys',
      step: 8
    },
    {
      id: 'run-validator',
      keywords: ['run', 'start', 'validator', 'node', 'mining', 'sync', 'bootstrap'],
      title: 'Run Validator Node',
      description: 'Start your validator and connect to the testnet seed node',
      command: 'RUST_LOG=info cargo run --release --bin xrs-node -- --validator 138.197.116.81 miner.json ledger.dat',
      category: 'run',
      step: 9
    },
    {
      id: 'send-basic',
      keywords: ['send', 'transfer', 'transaction', 'tx', 'pay'],
      title: 'Send XRS (Basic)',
      description: 'Transfer XRS to another wallet address',
      command: 'cargo run --release --bin send <RECIPIENT_PUBKEY> <AMOUNT>',
      category: 'transactions',
      step: null
    },
    {
      id: 'send-wallet',
      keywords: ['wallet', 'send', 'transfer'],
      title: 'Send via Wallet CLI',
      description: 'Alternative wallet command for sending XRS',
      command: 'cargo run --bin wallet -- send miner.json <RECIPIENT_PUBKEY> <AMOUNT>',
      category: 'transactions',
      step: null
    },
    {
      id: 'kill-process',
      keywords: ['kill', 'stop', 'address', 'use', 'error', 'pkill', 'process'],
      title: 'Kill Stray Processes',
      description: 'Fix "Address already in use" error',
      command: 'pkill xrs-node',
      category: 'troubleshoot',
      step: null
    },
    {
      id: 'update',
      keywords: ['update', 'pull', 'git', 'latest', 'new', 'refresh'],
      title: 'Update & Rebuild',
      description: 'Pull latest changes and rebuild the project',
      command: 'git pull && cargo build --release',
      category: 'troubleshoot',
      step: null
    }
  ],
  
  windows: [
    {
      id: 'rust-install',
      keywords: ['install', 'rust', 'setup', 'start', 'begin', 'toolchain'],
      title: 'Install Rust Toolchain',
      description: 'Download and run rustup-init.exe from rustup.rs',
      command: 'winget install Rustlang.Rustup',
      category: 'setup',
      step: 1,
      note: 'Or download from https://rustup.rs and run the installer'
    },
    {
      id: 'install-vs-tools',
      keywords: ['visual', 'studio', 'build', 'tools', 'msvc', 'cpp'],
      title: 'Install Visual Studio Build Tools',
      description: 'Required C++ build tools for Windows',
      command: 'winget install Microsoft.VisualStudio.2022.BuildTools --override "--add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"',
      category: 'setup',
      step: 2,
      note: 'Or download from https://visualstudio.microsoft.com/visual-cpp-build-tools/'
    },
    {
      id: 'restart-terminal',
      keywords: ['restart', 'terminal', 'powershell', 'refresh', 'path'],
      title: 'Restart Terminal',
      description: 'Close and reopen PowerShell to load Rust into PATH',
      command: '# Close this window and open a new PowerShell',
      category: 'setup',
      step: 3
    },
    {
      id: 'verify-rust',
      keywords: ['verify', 'check', 'version', 'rust', 'cargo', 'confirm'],
      title: 'Verify Installation',
      description: 'Confirm Rust and Cargo are installed correctly',
      command: 'rustc --version; cargo --version',
      category: 'setup',
      step: 4
    },
    {
      id: 'install-git',
      keywords: ['git', 'install', 'version', 'control'],
      title: 'Install Git (if needed)',
      description: 'Install Git for Windows',
      command: 'winget install Git.Git',
      category: 'setup',
      step: 5
    },
    {
      id: 'clone-repo',
      keywords: ['clone', 'download', 'git', 'repo', 'repository', 'source', 'code'],
      title: 'Clone Repository',
      description: 'Download the XerisCoin testnet source code',
      command: 'git clone https://github.com/ZZachWWins/xeriscointestnet.git; cd xeriscointestnet',
      category: 'setup',
      step: 6
    },
    {
      id: 'build',
      keywords: ['build', 'compile', 'release', 'cargo', 'make'],
      title: 'Build Release Binaries',
      description: 'Compile the testnet software (may take several minutes)',
      command: 'cargo build --release',
      category: 'setup',
      step: 7
    },
    {
      id: 'generate-keypair',
      keywords: ['keypair', 'key', 'generate', 'identity', 'wallet', 'create', 'pubkey'],
      title: 'Generate Validator Keypair',
      description: 'Create your validator identity (outputs keypair.json + pubkey)',
      command: 'cargo run --release --bin keypair_gen',
      category: 'keys',
      step: 8
    },
    {
      id: 'rename-keypair',
      keywords: ['rename', 'miner', 'keypair', 'mv', 'move'],
      title: 'Rename Keypair for Runtime',
      description: 'Rename keypair.json to miner.json for the validator',
      command: 'Rename-Item keypair.json miner.json',
      category: 'keys',
      step: 9
    },
    {
      id: 'run-validator',
      keywords: ['run', 'start', 'validator', 'node', 'mining', 'sync', 'bootstrap'],
      title: 'Run Validator Node',
      description: 'Start your validator and connect to the testnet seed node',
      command: '$env:RUST_LOG="info"; cargo run --release --bin xrs-node -- --validator 138.197.116.81 miner.json ledger.dat',
      category: 'run',
      step: 10
    },
    {
      id: 'send-basic',
      keywords: ['send', 'transfer', 'transaction', 'tx', 'pay'],
      title: 'Send XRS (Basic)',
      description: 'Transfer XRS to another wallet address',
      command: 'cargo run --release --bin send <RECIPIENT_PUBKEY> <AMOUNT>',
      category: 'transactions',
      step: null
    },
    {
      id: 'send-wallet',
      keywords: ['wallet', 'send', 'transfer'],
      title: 'Send via Wallet CLI',
      description: 'Alternative wallet command for sending XRS',
      command: 'cargo run --bin wallet -- send miner.json <RECIPIENT_PUBKEY> <AMOUNT>',
      category: 'transactions',
      step: null
    },
    {
      id: 'kill-process',
      keywords: ['kill', 'stop', 'address', 'use', 'error', 'process', 'taskkill'],
      title: 'Kill Stray Processes',
      description: 'Fix "Address already in use" error',
      command: 'Get-Process xrs-node -ErrorAction SilentlyContinue | Stop-Process -Force',
      category: 'troubleshoot',
      step: null
    },
    {
      id: 'update',
      keywords: ['update', 'pull', 'git', 'latest', 'new', 'refresh'],
      title: 'Update & Rebuild',
      description: 'Pull latest changes and rebuild the project',
      command: 'git pull; cargo build --release',
      category: 'troubleshoot',
      step: null
    }
  ],
  
  wsl: [
    {
      id: 'install-wsl',
      keywords: ['wsl', 'install', 'linux', 'subsystem', 'ubuntu'],
      title: 'Install WSL (Windows Subsystem for Linux)',
      description: 'Run in PowerShell as Administrator',
      command: 'wsl --install',
      category: 'setup',
      step: 1,
      note: 'Restart your computer after installation'
    },
    {
      id: 'open-wsl',
      keywords: ['open', 'wsl', 'ubuntu', 'terminal'],
      title: 'Open WSL Terminal',
      description: 'Launch Ubuntu from Start Menu or type wsl in PowerShell',
      command: 'wsl',
      category: 'setup',
      step: 2
    },
    {
      id: 'update-packages',
      keywords: ['update', 'apt', 'packages', 'ubuntu'],
      title: 'Update System Packages',
      description: 'Update apt package lists and upgrade existing packages',
      command: 'sudo apt update && sudo apt upgrade -y',
      category: 'setup',
      step: 3
    },
    {
      id: 'install-deps',
      keywords: ['dependencies', 'build', 'essential', 'gcc', 'git'],
      title: 'Install Build Dependencies',
      description: 'Install required build tools',
      command: 'sudo apt install -y build-essential git curl',
      category: 'setup',
      step: 4
    },
    {
      id: 'rust-install',
      keywords: ['install', 'rust', 'setup', 'start', 'begin', 'toolchain'],
      title: 'Install Rust Toolchain',
      description: 'Install the Rust programming language',
      command: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`,
      category: 'setup',
      step: 5
    },
    {
      id: 'refresh-shell',
      keywords: ['refresh', 'shell', 'source', 'cargo', 'env', 'path'],
      title: 'Refresh Shell Environment',
      description: 'Load Rust into your current terminal session',
      command: 'source $HOME/.cargo/env',
      category: 'setup',
      step: 6
    },
    {
      id: 'verify-rust',
      keywords: ['verify', 'check', 'version', 'rust', 'cargo', 'confirm'],
      title: 'Verify Installation',
      description: 'Confirm Rust and Cargo are installed correctly',
      command: 'rustc --version && cargo --version',
      category: 'setup',
      step: 7
    },
    {
      id: 'clone-repo',
      keywords: ['clone', 'download', 'git', 'repo', 'repository', 'source', 'code'],
      title: 'Clone Repository',
      description: 'Download the XerisCoin testnet source code',
      command: 'git clone https://github.com/ZZachWWins/xeriscointestnet.git && cd xeriscointestnet',
      category: 'setup',
      step: 8
    },
    {
      id: 'build',
      keywords: ['build', 'compile', 'release', 'cargo', 'make'],
      title: 'Build Release Binaries',
      description: 'Compile the testnet software (may take a few minutes)',
      command: 'cargo build --release',
      category: 'setup',
      step: 9
    },
    {
      id: 'generate-keypair',
      keywords: ['keypair', 'key', 'generate', 'identity', 'wallet', 'create', 'pubkey'],
      title: 'Generate Validator Keypair',
      description: 'Create your validator identity (outputs keypair.json + pubkey)',
      command: 'cargo run --release --bin keypair_gen',
      category: 'keys',
      step: 10
    },
    {
      id: 'rename-keypair',
      keywords: ['rename', 'miner', 'keypair', 'mv', 'move'],
      title: 'Rename Keypair for Runtime',
      description: 'Rename keypair.json to miner.json for the validator',
      command: 'mv keypair.json miner.json',
      category: 'keys',
      step: 11
    },
    {
      id: 'run-validator',
      keywords: ['run', 'start', 'validator', 'node', 'mining', 'sync', 'bootstrap'],
      title: 'Run Validator Node',
      description: 'Start your validator and connect to the testnet seed node',
      command: 'RUST_LOG=info cargo run --release --bin xrs-node -- --validator 138.197.116.81 miner.json ledger.dat',
      category: 'run',
      step: 12
    },
    {
      id: 'send-basic',
      keywords: ['send', 'transfer', 'transaction', 'tx', 'pay'],
      title: 'Send XRS (Basic)',
      description: 'Transfer XRS to another wallet address',
      command: 'cargo run --release --bin send <RECIPIENT_PUBKEY> <AMOUNT>',
      category: 'transactions',
      step: null
    },
    {
      id: 'send-wallet',
      keywords: ['wallet', 'send', 'transfer'],
      title: 'Send via Wallet CLI',
      description: 'Alternative wallet command for sending XRS',
      command: 'cargo run --bin wallet -- send miner.json <RECIPIENT_PUBKEY> <AMOUNT>',
      category: 'transactions',
      step: null
    },
    {
      id: 'kill-process',
      keywords: ['kill', 'stop', 'address', 'use', 'error', 'pkill', 'process'],
      title: 'Kill Stray Processes',
      description: 'Fix "Address already in use" error',
      command: 'pkill xrs-node',
      category: 'troubleshoot',
      step: null
    },
    {
      id: 'update',
      keywords: ['update', 'pull', 'git', 'latest', 'new', 'refresh'],
      title: 'Update & Rebuild',
      description: 'Pull latest changes and rebuild the project',
      command: 'git pull && cargo build --release',
      category: 'troubleshoot',
      step: null
    }
  ],

  termux: [
    {
      id: 'update-termux',
      keywords: ['update', 'upgrade', 'packages', 'apt', 'pkg'],
      title: 'Update Termux Packages',
      description: 'Update package lists and upgrade existing packages',
      command: 'pkg update && pkg upgrade -y',
      category: 'setup',
      step: 1
    },
    {
      id: 'install-deps',
      keywords: ['dependencies', 'build', 'essential', 'clang', 'git', 'openssl'],
      title: 'Install Build Dependencies',
      description: 'Install required packages for building Rust projects',
      command: 'pkg install -y git clang make libclang openssl pkg-config',
      category: 'setup',
      step: 2
    },
    {
      id: 'rust-install',
      keywords: ['install', 'rust', 'setup', 'start', 'begin', 'toolchain', 'cargo'],
      title: 'Install Rust (Termux Package)',
      description: 'Install Rust via Termux packages (rustup does NOT work on Android)',
      command: 'pkg install -y rust',
      category: 'setup',
      step: 3,
      note: 'Do NOT use rustup/curl method on Termux - it will fail. Use pkg install instead.'
    },
    {
      id: 'verify-rust',
      keywords: ['verify', 'check', 'version', 'rust', 'cargo', 'confirm'],
      title: 'Verify Installation',
      description: 'Confirm Rust and Cargo are installed correctly',
      command: 'rustc --version && cargo --version',
      category: 'setup',
      step: 4
    },
    {
      id: 'clone-repo',
      keywords: ['clone', 'download', 'git', 'repo', 'repository', 'source', 'code'],
      title: 'Clone Repository',
      description: 'Download the XerisCoin testnet source code',
      command: 'git clone https://github.com/ZZachWWins/xeriscointestnet.git && cd xeriscointestnet',
      category: 'setup',
      step: 5
    },
    {
      id: 'build',
      keywords: ['build', 'compile', 'release', 'cargo', 'make'],
      title: 'Build Release Binaries',
      description: 'Compile the testnet software (may take a while on mobile)',
      command: 'cargo build --release',
      category: 'setup',
      step: 6,
      note: 'This can take 10-30+ minutes on mobile. Keep Termux in foreground or use termux-wake-lock'
    },
    {
      id: 'wake-lock',
      keywords: ['wake', 'lock', 'screen', 'sleep', 'background'],
      title: 'Prevent Sleep During Build (Optional)',
      description: 'Keep device awake during long compilation',
      command: 'termux-wake-lock',
      category: 'setup',
      step: null,
      note: 'Run before cargo build to prevent phone sleeping. Use termux-wake-unlock after.'
    },
    {
      id: 'generate-keypair',
      keywords: ['keypair', 'key', 'generate', 'identity', 'wallet', 'create', 'pubkey'],
      title: 'Generate Validator Keypair',
      description: 'Create your validator identity (outputs keypair.json + pubkey)',
      command: 'cargo run --release --bin keypair_gen',
      category: 'keys',
      step: 7
    },
    {
      id: 'rename-keypair',
      keywords: ['rename', 'miner', 'keypair', 'mv', 'move'],
      title: 'Rename Keypair for Runtime',
      description: 'Rename keypair.json to miner.json for the validator',
      command: 'mv keypair.json miner.json',
      category: 'keys',
      step: 8
    },
    {
      id: 'run-validator',
      keywords: ['run', 'start', 'validator', 'node', 'mining', 'sync', 'bootstrap'],
      title: 'Run Validator Node',
      description: 'Start your validator and connect to the testnet seed node',
      command: 'RUST_LOG=info cargo run --release --bin xrs-node -- --validator 138.197.116.81 miner.json ledger.dat',
      category: 'run',
      step: 9,
      note: 'Keep Termux in foreground or use tmux/screen for background running'
    },
    {
      id: 'install-tmux',
      keywords: ['tmux', 'screen', 'background', 'session'],
      title: 'Install tmux (Optional)',
      description: 'For running validator in background',
      command: 'pkg install tmux',
      category: 'run',
      step: null
    },
    {
      id: 'run-tmux',
      keywords: ['tmux', 'background', 'session', 'detach'],
      title: 'Run Validator in tmux',
      description: 'Start validator in detachable session (Ctrl+B then D to detach)',
      command: 'tmux new -s xrs "RUST_LOG=info cargo run --release --bin xrs-node -- --validator 138.197.116.81 miner.json ledger.dat"',
      category: 'run',
      step: null,
      note: 'Detach: Ctrl+B then D. Reattach: tmux attach -t xrs'
    },
    {
      id: 'send-basic',
      keywords: ['send', 'transfer', 'transaction', 'tx', 'pay'],
      title: 'Send XRS (Basic)',
      description: 'Transfer XRS to another wallet address',
      command: 'cargo run --release --bin send <RECIPIENT_PUBKEY> <AMOUNT>',
      category: 'transactions',
      step: null
    },
    {
      id: 'send-wallet',
      keywords: ['wallet', 'send', 'transfer'],
      title: 'Send via Wallet CLI',
      description: 'Alternative wallet command for sending XRS',
      command: 'cargo run --bin wallet -- send miner.json <RECIPIENT_PUBKEY> <AMOUNT>',
      category: 'transactions',
      step: null
    },
    {
      id: 'kill-process',
      keywords: ['kill', 'stop', 'address', 'use', 'error', 'pkill', 'process'],
      title: 'Kill Stray Processes',
      description: 'Fix "Address already in use" error',
      command: 'pkill xrs-node',
      category: 'troubleshoot',
      step: null
    },
    {
      id: 'update',
      keywords: ['update', 'pull', 'git', 'latest', 'new', 'refresh'],
      title: 'Update & Rebuild',
      description: 'Pull latest changes and rebuild the project',
      command: 'git pull && cargo build --release',
      category: 'troubleshoot',
      step: null
    },
    {
      id: 'storage-setup',
      keywords: ['storage', 'permission', 'sdcard', 'access'],
      title: 'Setup Storage Access (If Needed)',
      description: 'Grant Termux access to shared storage',
      command: 'termux-setup-storage',
      category: 'troubleshoot',
      step: null
    },
    {
      id: 'cleanup-rustup',
      keywords: ['rustup', 'cleanup', 'remove', 'delete', 'failed', 'error', 'cargo'],
      title: 'Cleanup Failed Rustup Install',
      description: 'Remove broken rustup installation if you tried curl method',
      command: 'rm -rf ~/.cargo ~/.rustup',
      category: 'troubleshoot',
      step: null,
      note: 'Run this if you previously tried rustup and it failed. Then use pkg install rust'
    }
  ]
};

export const categoryColors = {
  setup: 'bg-blue-500',
  keys: 'bg-purple-500',
  run: 'bg-green-500',
  transactions: 'bg-orange-500',
  troubleshoot: 'bg-red-500'
};

export const categoryLabels = {
  setup: 'Setup',
  keys: 'Keys',
  run: 'Run',
  transactions: 'Transactions',
  troubleshoot: 'Troubleshoot'
};

export const platformInfo = {
  linux: {
    name: 'Linux',
    icon: '🐧',
    terminal: 'Terminal / Bash'
  },
  mac: {
    name: 'macOS',
    icon: '🍎',
    terminal: 'Terminal / Zsh'
  },
  windows: {
    name: 'Windows',
    icon: '🪟',
    terminal: 'PowerShell'
  },
  wsl: {
    name: 'Windows (WSL)',
    icon: '🐧🪟',
    terminal: 'WSL Ubuntu Terminal'
  },
  termux: {
    name: 'Android (Termux)',
    icon: '📱',
    terminal: 'Termux'
  }
};
