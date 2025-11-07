import { Mail, Send, ShieldCheck } from 'lucide-react';

export default function AuthPayBar() {
  return (
    <div className="mt-6 rounded-xl border border-red-200 dark:border-red-900 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-red-100 dark:border-red-900">
          <div className="flex items-center gap-2 text-red-700 dark:text-red-300 mb-2">
            <Mail className="h-5 w-5" />
            <h3 className="font-semibold">Log in</h3>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Continue with Telegram Mini App or email to sync progress.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">Open Telegram</button>
            <button className="px-3 py-2 rounded-md border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950">Continue with Email</button>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <div className="flex items-center gap-2 text-red-700 dark:text-red-300 mb-2">
            <ShieldCheck className="h-5 w-5" />
            <h3 className="font-semibold">Premium Lessons</h3>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Upgrade for real-time corrections, custom HSK decks, and unlimited voice minutes.</p>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-red-600 to-rose-600 text-white hover:opacity-90">
            <Send className="h-4 w-4" /> Subscribe with Stripe
          </button>
        </div>
      </div>
    </div>
  );
}
