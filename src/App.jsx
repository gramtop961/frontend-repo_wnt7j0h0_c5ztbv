import Header from './components/Header';
import ChatTutor from './components/ChatTutor';
import InsightsPanel from './components/InsightsPanel';
import AuthPayBar from './components/AuthPayBar';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="relative overflow-hidden rounded-2xl border border-red-200 dark:border-red-900 bg-gradient-to-br from-white via-red-50 to-rose-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-red-950 p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-red-700 dark:text-red-300">Unlock AI Tutor · 中文学习</h1>
                <p className="mt-2 text-sm md:text-base text-zinc-700 dark:text-zinc-300 max-w-2xl">
                  Practice natural Chinese conversations with real-time grammar and tone feedback. Track vocabulary by HSK level, speak with voice input, and listen with AI.
                </p>
              </div>
              <div className="shrink-0 inline-flex rounded-lg ring-1 ring-red-200 dark:ring-red-900 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-red-700 dark:text-red-300">
                Built for web + Telegram Mini App
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ChatTutor />
            <AuthPayBar />
          </div>
          <div>
            <InsightsPanel />
          </div>
        </section>
      </main>

      <footer className="border-t border-red-200 dark:border-red-900 py-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} UnlockLingua.com · Red & White theme · Made for learners worldwide
      </footer>
    </div>
  );
}

export default App;
