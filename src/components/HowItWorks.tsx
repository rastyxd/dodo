import { motion } from 'motion/react';

const steps = [
  { num: '01', icon: '👆', bgClass: 'bg-d-yellow-light', title: "Pick what's your life", desc: 'Dodo shows you a pre-built set of life moments. Tap the ones that apply to you. Takes 60 seconds.' },
  { num: '02', icon: '🐦', bgClass: 'bg-d-mint-light',   title: 'Dodo takes over',      desc: 'It tracks frequencies, due dates, and timing automatically. No setup, no calendar syncing, no configuration.' },
  { num: '03', icon: '✨', bgClass: 'bg-d-peach-light',  title: 'Get a gentle tap',     desc: "When something needs you, Dodo shows up quietly. You handle it. Then forget it again — that's fine." },
];

export default function HowItWorks() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-8 py-14 md:py-20" id="how">
      <p className="text-[11px] font-extrabold tracking-[1.2px] uppercase mb-3 text-d-ink-soft">How it works</p>
      <h2 className="font-['Syne'] font-extrabold tracking-[-1.2px] leading-[1.1] mb-10 md:mb-12 text-d-ink" style={{ fontSize: 'clamp(26px, 4vw, 42px)' }}>
        Three taps.<br />
        <em className="font-['Nunito'] font-bold not-italic text-d-yellow-dark">Then nothing.</em>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="bg-white border border-black/[0.08] rounded-[20px] p-6 md:p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className="font-['Syne'] text-5xl font-extrabold leading-none mb-4 tracking-[-2px] text-d-yellow">{step.num}</div>
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-[22px] mb-3.5 ${step.bgClass}`}>{step.icon}</div>
            <h3 className="text-base font-extrabold mb-2 text-d-ink">{step.title}</h3>
            <p className="text-sm leading-[1.65] text-d-ink-mid">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
