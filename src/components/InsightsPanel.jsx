import { BookOpen, TrendingUp, Award } from 'lucide-react';

const sampleVocab = [
  { word: '安排', pinyin: 'ānpái', hsk: 4 },
  { word: '交流', pinyin: 'jiāoliú', hsk: 4 },
  { word: '准确', pinyin: 'zhǔnquè', hsk: 5 },
];

export default function InsightsPanel() {
  return (
    <aside className="rounded-xl border border-red-200 dark:border-red-900 bg-white dark:bg-zinc-950 p-4 space-y-4">
      <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
        <BookOpen className="h-5 w-5" />
        <h3 className="font-semibold">Grammar & Tone Tips</h3>
      </div>
      <ul className="list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
        <li>第三声在连续发音时常变为半三声（上声变调）。</li>
        <li>把字句用于突出处理方式，如：把问题解决了。</li>
        <li>注意第四声短促有力，例如“去、看、为”。</li>
      </ul>

      <div className="h-px bg-red-100 dark:bg-red-900" />

      <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
        <TrendingUp className="h-5 w-5" />
        <h3 className="font-semibold">Vocabulary by HSK</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {sampleVocab.map((v) => (
          <div key={v.word} className="rounded-lg border border-red-100 dark:border-red-900 p-3 text-sm">
            <div className="font-medium text-zinc-900 dark:text-zinc-100">{v.word}</div>
            <div className="text-zinc-600 dark:text-zinc-400">{v.pinyin}</div>
            <div className="mt-1 inline-flex items-center gap-1 text-xs bg-red-600/10 text-red-700 dark:text-red-300 px-2 py-0.5 rounded">
              HSK {v.hsk}
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-red-100 dark:bg-red-900" />

      <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
        <Award className="h-5 w-5" />
        <h3 className="font-semibold">Progress</h3>
      </div>
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="rounded-lg border border-red-100 dark:border-red-900 p-3">
          <div className="text-xs text-zinc-500">Words</div>
          <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">128</div>
        </div>
        <div className="rounded-lg border border-red-100 dark:border-red-900 p-3">
          <div className="text-xs text-zinc-500">HSK</div>
          <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">4</div>
        </div>
        <div className="rounded-lg border border-red-100 dark:border-red-900 p-3">
          <div className="text-xs text-zinc-500">Streak</div>
          <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">7🔥</div>
        </div>
      </div>
    </aside>
  );
}
