import { motion } from 'motion/react';

const cards = [
  { icon: '💊', bgClass: 'bg-d-yellow-light',   title: 'GP checkup due',     due: 'Overdue by 2 weeks', done: false },
  { icon: '🪪', bgClass: 'bg-d-peach-light',    title: 'Student ID renewal', due: 'Expires in 12 days', done: false },
  { icon: '📱', bgClass: 'bg-d-mint-light',     title: 'Wifi bill split',    due: 'Due tomorrow',       done: true  },
  { icon: '📞', bgClass: 'bg-d-lavender-light', title: 'Call mum',           due: 'Next week',          done: false },
];

export default function PhoneMockup() {
  return (
    <div className="flex justify-center">
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [2, -1, 2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-[200px] sm:w-[240px] rounded-[36px] p-3"
          style={{ background: 'var(--ink)', boxShadow: '0 32px 64px rgba(26,23,20,0.22), 0 0 0 1px rgba(255,255,255,0.08)' }}
        >
          <div className="w-20 h-6 mx-auto mb-2 rounded-b-2xl bg-d-ink" />
          <div className="rounded-[28px] px-4 pt-5 pb-6 min-h-[420px] sm:min-h-[460px] bg-d-bg">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-1 font-['Syne'] text-base font-extrabold text-d-ink">
                <div className="w-[22px] h-[22px] rounded-[7px] flex items-center justify-center text-xs bg-d-yellow">🐦</div>
                dodo
              </div>
              <span className="text-[10px] font-bold text-d-ink-soft">9:41 AM</span>
            </div>
            <p className="text-[13px] font-extrabold mb-1 text-d-ink">Hey Zara 👋</p>
            <p className="text-[11px] font-semibold mb-4 text-d-ink-mid">3 things need your attention</p>
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="phone-card flex items-center gap-2.5 bg-white rounded-[14px] px-3.5 py-3 mb-2 border border-black/[0.08]"
                initial={{ opacity: 0, scale: 0.92, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.2, duration: 0.4 }}
              >
                <div className={`w-8 h-8 rounded-[9px] flex items-center justify-center text-base flex-shrink-0 ${card.bgClass}`}>{card.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-bold text-d-ink truncate">{card.title}</div>
                  <div className="text-[10px] font-semibold text-d-ink-soft">{card.due}</div>
                </div>
                <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border-2 ${card.done ? 'check-done bg-d-mint border-d-mint' : 'border-black/[0.08]'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
