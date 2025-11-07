import { useEffect, useRef, useState } from 'react';
import { Mic, Send, Volume2, Loader2 } from 'lucide-react';

const demoReplies = [
  '你好！今天过得怎么样？(Nǐ hǎo! Jīntiān guò de zěnmeyàng?)',
  '请用中文回答我，我们一起练习。(Qǐng yòng zhōngwén huídá wǒ, wǒmen yīqǐ liànxí.)',
  '你的声调很不错，第四声需要更短更重。',
  '我们来学习今天的词汇：安排 ānpái, 交流 jiāoliú, 准确 zhǔnquè。'
];

export default function ChatTutor() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '欢迎来到 Unlock AI Tutor！告诉我你的学习目标吧。' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  async function handleSend() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    // Placeholder: call backend chat endpoint when available
    // For now, simulate AI response
    await new Promise((r) => setTimeout(r, 700));
    const reply = demoReplies[Math.floor(Math.random() * demoReplies.length)];
    setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    setLoading(false);
  }

  function speak(text) {
    if ('speechSynthesis' in window) {
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'zh-CN';
      window.speechSynthesis.speak(utter);
    }
  }

  function handleVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Voice input not supported in this browser');
      return;
    }
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.lang = 'zh-CN';
    rec.interimResults = false;
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput((prev) => (prev ? prev + ' ' : '') + transcript);
    };
    rec.start();
  }

  return (
    <section className="grid grid-rows-[auto,1fr,auto] h-[560px] rounded-xl border border-red-200 dark:border-red-900 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-red-100 dark:border-red-900 bg-red-50/60 dark:bg-red-950/40 text-red-700 dark:text-red-300 font-medium">
        对话练习 · Conversational Practice
      </div>
      <div ref={listRef} className="p-4 space-y-3 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
            m.role === 'assistant'
              ? 'bg-red-50 dark:bg-zinc-900 border border-red-100 dark:border-red-900 text-zinc-900 dark:text-zinc-200'
              : 'ml-auto bg-red-600 text-white shadow'
          }`}>
            <div className="whitespace-pre-wrap">{m.content}</div>
            {m.role === 'assistant' && (
              <button
                onClick={() => speak(m.content)}
                className="mt-2 inline-flex items-center gap-1 text-xs text-red-700 dark:text-red-300 hover:underline"
              >
                <Volume2 className="h-3 w-3" /> 朗读
              </button>
            )}
          </div>
        ))}
        {loading && (
          <div className="max-w-[80%] rounded-lg px-3 py-2 text-sm bg-red-50 dark:bg-zinc-900 border border-red-100 dark:border-red-900 text-zinc-900 dark:text-zinc-200">
            <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> 正在思考…</span>
          </div>
        )}
      </div>
      <div className="p-3 border-t border-red-100 dark:border-red-900">
        <div className="flex gap-2">
          <button
            onClick={handleVoice}
            className="px-3 py-2 rounded-md border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950"
          >
            <Mic className="h-4 w-4" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="用中文输入你的回答…"
            className="flex-1 px-3 py-2 rounded-md bg-white dark:bg-zinc-900 border border-red-200 dark:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            onClick={handleSend}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            <Send className="h-4 w-4" /> 发送
          </button>
        </div>
      </div>
    </section>
  );
}
