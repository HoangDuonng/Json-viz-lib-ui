'use client';

import { useState } from 'react';

const terminalLines = [
  { num: '12', type: 'normal', content: '  "id": "retail-kpi-pack",' },
  { num: '13', type: 'normal', content: '  "name": "Retail KPI Dashboard Pack",' },
  { num: '14', type: 'normal', content: '  "author": "jsonviz-team",' },
  { num: '15', type: 'added', content: '  "category": "dashboards",' },
  { num: '16', type: 'added', content: '  "license": "MIT",' },
  { num: '17', type: 'normal', content: '  "version": "1.3.0",' },
  { num: '18', type: 'normal', content: '  "tags": ["sales", "kpi", "retail"],' },
  { num: '19', type: 'added', content: '  "preview": "https://jsonviz.online/libraries/retail-kpi-pack",' },
  { num: '20', type: 'normal', content: '  "items": [' },
  { num: '21', type: 'normal', content: '    "charts/sales-funnel.json",' },
  { num: '22', type: 'normal', content: '    "layouts/executive-summary.json",' },
  { num: '23', type: 'normal', content: '    "themes/ocean-contrast.json"' },
  { num: '24', type: 'normal', content: '  ]' },
  { num: '25', type: 'normal', content: '}' },
];

const messageLines = [
  { type: 'text', content: "Ready to publish " },
  { type: 'highlight', content: 'Retail KPI Dashboard Pack' },
  { type: 'text', content: ' to JsonViz Libraries.' },
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
              Manifest
            </p>
            <h2 className="font-serif-display mt-3 text-display-sm font-bold">
              Portable
              <br />
              library format
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
                  Edit /libraries/retail-kpi-pack/library.json
                </div>

                {/* Schema status */}
                <div className="mt-6 rounded border border-olive-accent/30 bg-olive-accent/5 p-3">
                  <div className="mb-1 text-olive-accent">Schema check: passed</div>
                  <div className="text-muted-foreground/60">
                    Valid against JsonViz Library Schema v1
                  </div>
                </div>

                {/* Status bar */}
                <div className="mt-2 flex justify-end text-xs text-muted-foreground/40">
                  <span>~/workspace/jsonviz-libraries</span>
                  <span className="ml-4">3 templates • 1 theme • MIT</span>
                </div>
              </div>
            </div>

            {/* Import command */}
            <div className="mt-8 flex flex-col items-end gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-code text-caption uppercase tracking-widest text-muted-foreground">
                Import
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
                    ? 'npx @jsonviz/library pull retail-kpi-pack --target ./public/libraries'
                    : 'npx @jsonviz/library pull retail-kpi-pack --target .\\public\\libraries'}
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
  const keywords = ['true', 'false', 'null'];
  const parts = text.split(/("(?:[^"\\]|\\.)*"\s*:|\b(?:true|false|null)\b)/g);

  return parts.map((part, i) => {
    if (/^"(?:[^"\\]|\\.)*"\s*:$/.test(part)) {
      return (
        <span key={i} className="terminal-function">
          {part}
        </span>
      );
    }
    if (keywords.includes(part)) {
      return (
        <span key={i} className="terminal-keyword">
          {part}
        </span>
      );
    }
    return part;
  });
}
