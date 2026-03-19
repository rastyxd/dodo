import { motion } from 'motion/react';
import EmailForm from './EmailForm';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-12 md:pb-16 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 border border-d-yellow-dark/30 bg-d-yellow-light" style={{ color: '#8A6F00' }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-d-yellow-dark"
            animate={{ opacity: [1, 0.4, 1], scale: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Free forever — no credit card
        </div>

        <h1 className="font-['Syne'] font-extrabold leading-[1.05] tracking-[-2px] mb-4 text-d-ink" style={{ fontSize: 'clamp(36px, 7vw, 64px)' }}>
          Less think,<br />
          <span className="h1-accent">more do.</span>
        </h1>

        <p className="text-base md:text-lg leading-[1.7] mb-8 font-normal text-d-ink-mid mx-auto md:mx-0 max-w-[440px]">
          Dodo quietly tracks the life stuff you keep forgetting — bills, appointments, renewals, check-ins. You just live. It's got the rest.
        </p>

        <div className="flex justify-center md:justify-start">
          <EmailForm note="Already 1,200+ people on the list" />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
        <PhoneMockup />
      </motion.div>
    </section>
  );
}
