'use client';

import { useState } from 'react';

const terminalLines = [
  { num: '186', type: 'removed', content: '  const effectiveGlow = boostedGlow * distanceFalloff' },
  {
    num: '220',
    type: 'added',
    content: '            shockwaveBoost = Math.max(shockwaveBoost, waveIntensity * 0.6)',
  },
  { num: '221', type: 'added', content: '          }' },
  { num: '222', type: 'added', content: '        }' },
  { num: '223', type: 'added', content: '' },
  { num: '224', type: 'normal', content: '          const boostedGlow = Math.pow(glowValue, 0.7)' },
  {
    num: '225',
    type: 'added',
    content: '  const effectiveGlow = Math.min(1, boostedGlow * distanceFalloff +',
  },
  { num: '', type: 'continued', content: '    shockwaveBoost)' },
  { num: '226', type: 'normal', content: '' },
  {
    num: '227',
    type: 'normal',
    content: '          const color = this.blendWithGlow(this._baseColor, effectiveGlow,',
  },
  { num: '', type: 'continued', content: '    primary, secondary)' },
  { num: '228', type: 'normal', content: '' },
  { num: '229', type: 'normal', content: '          screen.setCell(x, absoluteY, {' },
  { num: '230', type: 'normal', content: '' },
];

const messageLines = [
  { type: 'text', content: "Now let's update " },
  { type: 'highlight', content: 'SplashScreen' },
  { type: 'text', content: ' to manage shockwaves and pass them to both widgets:' },
];

export function TerminalSection() {
  const [activeTab, setActiveTab] = useState<'mac' | 'windows'>('mac');

  return (
    <section className="section-divider px-4 py-section">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
          {/* Left: Label */}
          <div className="accent-bar">
            <p className="font-code text-caption uppercase tracking-widest text-muted-foreground">
              Install
            </p>
            <h2 className="font-serif-display mt-3 text-display-sm font-bold">
              Available in
              <br />
              the terminal
            </h2>
          </div>

          {/* Right: Terminal */}
          <div>
            <div className="terminal-window shadow-2xl">
              {/* Terminal content */}
              <div className="overflow-x-auto p-6">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className={`flex whitespace-pre ${
                      line.type === 'added'
                        ? 'bg-green-accent/10'
                        : line.type === 'removed'
                          ? 'bg-red-500/10'
                          : ''
                    }`}
                  >
                    <span className="terminal-line-number select-none">{line.num}</span>
                    <span className="mr-2 select-none">
                      {line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' '}
                    </span>
                    <span
                      className={
                        line.type === 'added'
                          ? 'terminal-added'
                          : line.type === 'removed'
                            ? 'terminal-removed'
                            : 'text-terminal-fg'
                      }
                    >
                      {highlightSyntax(line.content)}
                    </span>
                  </div>
                ))}

                {/* Message */}
                <div className="mt-6 border-t border-white/10 pt-4 text-terminal-fg">
                  {messageLines.map((part, i) =>
                    part.type === 'highlight' ? (
                      <span key={i} className="terminal-highlight">
                        {part.content}
                      </span>
                    ) : (
                      <span key={i}>{part.content}</span>
                    )
                  )}
                </div>

                {/* Edit link */}
                <div className="mt-3 text-accent">
                  <span className="mr-2 text-muted-foreground">✏</span>
                  Edit /Users/dev/work/cli/src/tui/widgets/splash-screen.ts
                </div>

                {/* Smart prompt */}
                <div className="mt-6 rounded border border-olive-accent/30 bg-olive-accent/5 p-3">
                  <div className="mb-1 text-olive-accent">
                    <span className="line-through">smart</span>
                  </div>
                  <div className="text-muted-foreground/60">Press Ctrl+C to exit</div>
                </div>

                {/* Status bar */}
                <div className="mt-2 flex justify-end text-xs text-muted-foreground/40">
                  <span>~/Users/dev/work/cli</span>
                  <span className="ml-4">27% of 168k</span>
                </div>
              </div>
            </div>

            {/* Install command */}
            <div className="mt-8 flex flex-col items-end gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-code text-caption uppercase tracking-widest text-muted-foreground">
                Install
              </span>

              <div className="flex items-center gap-4">
                <div className="tab-selector">
                  <button
                    className={activeTab === 'mac' ? 'active' : ''}
                    onClick={() => setActiveTab('mac')}
                  >
                    Mac/Linux
                  </button>
                  <button
                    className={activeTab === 'windows' ? 'active' : ''}
                    onClick={() => setActiveTab('windows')}
                  >
                    Windows
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="install-command">
                <code>
                  {activeTab === 'mac'
                    ? 'curl -fsSL https://jsonviz.dev/install.sh | bash'
                    : 'iwr https://jsonviz.dev/install.ps1 | iex'}
                </code>
                <button
                  className="text-muted-foreground/60 transition-colors hover:text-terminal-fg"
                  title="Copy to clipboard"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function highlightSyntax(text: string) {
  const keywords = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'this'];
  const parts = text.split(
    /(\b(?:const|let|var|function|return|if|else|this)\b|Math\.\w+|\.\w+\()/g
  );

  return parts.map((part, i) => {
    if (keywords.includes(part)) {
      return (
        <span key={i} className="terminal-keyword">
          {part}
        </span>
      );
    }
    if (part.startsWith('Math.') || part.match(/^\.\w+\(/)) {
      return (
        <span key={i} className="terminal-function">
          {part}
        </span>
      );
    }
    return part;
  });
}
