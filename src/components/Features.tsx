import { motion } from 'motion/react';

const features = [
  { icon: '⚡', bgClass: 'bg-d-yellow-light',   title: 'Zero setup',                          desc: 'No accounts to configure, no calendars to connect. Open it, tap your life, done. Works in 60 seconds.' },
  { icon: '🔕', bgClass: 'bg-d-mint-light',     title: 'Quietly in the background',           desc: "Dodo doesn't bother you unless something actually needs you. No daily check-ins, no guilt trips." },
  { icon: '✏️', bgClass: 'bg-d-peach-light',    title: 'Add your own moments',                desc: "Missing something? Add it in two taps. Dodo learns what's part of your life and tracks it automatically." },
  { icon: '📱', bgClass: 'bg-d-lavender-light', title: 'Feels like an app, works in browser', desc: "No download required. Add it to your home screen and it feels native. Snap — it's just there." },
];

export default function Features() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-8 py-14 md:py-20">
      <p className="text-[11px] font-extrabold tracking-[1.2px] uppercase mb-3 text-d-ink-soft">Why Dodo</p>
      <h2 className="font-['Syne'] font-extrabold tracking-[-1.2px] leading-[1.1] mb-10 md:mb-12 text-d-ink" style={{ fontSize: 'clamp(26px, 4vw, 42px)' }}>
        Built to stay<br />
        <em className="font-['Nunito'] font-bold not-italic text-d-yellow-dark">out of your way.</em>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="bg-white border border-black/[0.08] rounded-[20px] p-6 md:p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: '0 4px 24px rgba(26,23,20,0.08)' }}
          >
            <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl mb-4 ${f.bgClass}`}>{f.icon}</div>
            <h3 className="text-base font-extrabold mb-2 text-d-ink">{f.title}</h3>
            <p className="text-sm leading-[1.65] text-d-ink-mid">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
