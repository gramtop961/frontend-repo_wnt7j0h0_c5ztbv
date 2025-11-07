import { useEffect, useState } from 'react';
import { Moon, Sun, MessageSquare, Bot } from 'lucide-react';

export default function Header() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b border-red-200 dark:border-red-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-red-600 text-white flex items-center justify-center shadow-md">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight text-red-700 dark:text-red-400">Unlock AI Tutor</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">UnlockLingua.com · 中文对话辅导</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-300">
            <MessageSquare className="h-4 w-4 text-red-600" /> Practice Chinese with AI
          </span>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
