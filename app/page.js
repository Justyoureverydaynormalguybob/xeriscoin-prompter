'use client';

import { useState, useEffect } from 'react';
import { Search, Copy, Check, Terminal, AlertCircle, ExternalLink, ChevronDown } from 'lucide-react';
import { commands, categoryColors, categoryLabels, platformInfo } from './commands';

export default function Home() {
  const [platform, setPlatform] = useState(null);
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showPlatformMenu, setShowPlatformMenu] = useState(false);

  // Auto-detect platform on mount
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) {
      setPlatform('termux');
    } else if (userAgent.includes('win')) {
      setPlatform('windows');
    } else if (userAgent.includes('mac')) {
      setPlatform('mac');
    } else if (userAgent.includes('linux')) {
      setPlatform('linux');
    } else {
      setPlatform('linux'); // Default fallback
    }
  }, []);

  const copyToClipboard = (command, id) => {
    navigator.clipboard.writeText(command);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const currentCommands = platform ? commands[platform] : [];

  const filteredCommands = currentCommands.filter(cmd => {
    const matchesSearch = search === '' || 
      cmd.keywords.some(kw => kw.toLowerCase().includes(search.toLowerCase())) ||
      cmd.title.toLowerCase().includes(search.toLowerCase()) ||
      cmd.description.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || cmd.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedCommands = [...filteredCommands].sort((a, b) => {
    if (a.step && b.step) return a.step - b.step;
    if (a.step) return -1;
    if (b.step) return 1;
    return 0;
  });

  if (!platform) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-gray-900/95 backdrop-blur z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-black">
                X
              </div>
              <div>
                <h1 className="text-xl font-bold">XerisCoin Testnet</h1>
                <p className="text-xs text-gray-400">Command Prompter</p>
              </div>
            </div>
            
            {/* Platform Selector */}
            <div className="relative">
              <button
                onClick={() => setShowPlatformMenu(!showPlatformMenu)}
                className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 hover:bg-gray-750 transition"
              >
                <span className="text-lg">{platformInfo[platform].icon}</span>
                <span className="text-sm">{platformInfo[platform].name}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              
              {showPlatformMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                  {Object.entries(platformInfo).map(([key, info]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setPlatform(key);
                        setShowPlatformMenu(false);
                        setActiveCategory('all');
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition text-left ${
                        platform === key ? 'bg-gray-700' : ''
                      }`}
                    >
                      <span className="text-lg">{info.icon}</span>
                      <div>
                        <div className="text-sm font-medium">{info.name}</div>
                        <div className="text-xs text-gray-400">{info.terminal}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search: install, build, run, send, keypair, update..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-white placeholder-gray-500"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeCategory === 'all' 
                ? 'bg-yellow-500 text-black' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Commands
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeCategory === key 
                  ? `${categoryColors[key]} text-white` 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-yellow-500 mb-1">Important: Get your XRS Airdrop!</p>
              <p className="text-gray-300">
                After generating your keypair (Step {platform === 'wsl' ? '10' : platform === 'termux' ? '7' : platform === 'mac' ? '7' : platform === 'windows' ? '8' : '6'}), 
                send your <span className="text-yellow-400 font-mono">pubkey</span> to the testnet admin on{' '}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">X</a> or{' '}
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Telegram</a>{' '}
                to receive the mandatory 1,000 XRS for staking.
              </p>
            </div>
          </div>
        </div>

        {/* Commands List */}
        <div className="space-y-4">
          {sortedCommands.map((cmd) => (
            <div
              key={cmd.id}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-5 hover:border-gray-600 transition group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  {cmd.step && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2.5 py-1 rounded-md">
                      Step {cmd.step}
                    </span>
                  )}
                  <span className={`${categoryColors[cmd.category]} text-white text-xs px-2.5 py-1 rounded-md`}>
                    {categoryLabels[cmd.category]}
                  </span>
                </div>
              </div>
              
              <h3 className="font-semibold text-lg mb-1">{cmd.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{cmd.description}</p>
              
              {cmd.note && (
                <p className="text-yellow-500/80 text-xs mb-3 italic">💡 {cmd.note}</p>
              )}
              
              <div className="flex items-stretch gap-2">
                <div className="flex-1 bg-black/50 rounded-lg border border-gray-700 overflow-hidden">
                  <code className="block px-4 py-3 text-sm text-green-400 font-mono overflow-x-auto whitespace-nowrap">
                    {cmd.command}
                  </code>
                </div>
                <button
                  onClick={() => copyToClipboard(cmd.command, cmd.id)}
                  className={`px-4 rounded-lg transition flex items-center gap-2 ${
                    copied === cmd.id 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  title="Copy to clipboard"
                >
                  {copied === cmd.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="text-sm hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-sm hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {sortedCommands.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            <Terminal className="w-16 h-16 mx-auto mb-3 opacity-30" />
            <p className="text-lg">No commands match your search</p>
            <p className="text-sm mt-1">Try different keywords</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span>XerisCoin Testnet</span>
              <span className="text-gray-700">•</span>
              <span>Triple Consensus (PoH + PoW + PoS)</span>
            </div>
            <a
              href="https://github.com/ZZachWWins/xeriscointestnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
