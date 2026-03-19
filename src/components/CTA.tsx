import { motion } from 'motion/react';
import EmailForm from './EmailForm';

export default function CTA() {
  return (
    <section className="max-w-[700px] mx-auto px-4 md:px-8 pt-14 md:pt-16 pb-20 md:pb-24 text-center">
      <motion.span
        className="text-5xl md:text-6xl mb-4 block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        🐦
      </motion.span>
      <h2 className="font-['Syne'] font-extrabold tracking-[-1.5px] leading-[1.1] mb-4 text-d-ink" style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}>
        Dodo's got you.
      </h2>
      <p className="text-base md:text-[17px] mb-8 md:mb-9 text-d-ink-mid">
        Free forever. No account needed. Just tap what's yours and let it run.
      </p>
      <EmailForm note="1,200+ people already waiting" centered />
    </section>
  );
}
