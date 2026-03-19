import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const focusEmail = () => {
    document.querySelector<HTMLInputElement>('.email-input')?.focus();
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between h-[60px] px-4 md:px-8 border-b border-black/[0.08] backdrop-blur-xl bg-d-bg/90">
        <a href="#" className="flex items-center gap-2 no-underline">
          <motion.div
            className="w-8 h-8 rounded-[10px] flex items-center justify-center text-lg bg-d-yellow"
            animate={{ rotate: [0, -8, 6, -4, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            🐦
          </motion.div>
          <span className="font-['Syne'] text-xl font-extrabold tracking-tight text-d-ink">dodo</span>
        </a>

        <div className="hidden md:flex items-center gap-3">
          <a href="#how" className="text-sm font-semibold no-underline text-d-ink-mid">How it works</a>
          <motion.button
            className="px-5 py-2 rounded-full text-sm font-bold cursor-pointer border-none font-['Nunito'] bg-d-ink text-d-bg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={focusEmail}
          >
            Get early access
          </motion.button>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="block w-5 h-0.5 bg-d-ink rounded" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-0.5 bg-d-ink rounded" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="block w-5 h-0.5 bg-d-ink rounded" />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden sticky top-[60px] z-40 bg-d-bg border-b border-black/[0.08] px-4 py-4 flex flex-col gap-3"
          >
            <a href="#how" className="text-sm font-semibold text-d-ink-mid no-underline" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <button
              className="w-full px-5 py-3 rounded-full text-sm font-bold bg-d-ink text-d-bg border-none font-['Nunito'] cursor-pointer"
              onClick={() => { setMenuOpen(false); focusEmail(); }}
            >
              Get early access
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
