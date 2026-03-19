import { motion } from 'motion/react';

const moments = [
  { emoji: '💊', label: 'GP checkup',            active: true  },
  { emoji: '🪪', label: 'Student ID renewal',    active: true  },
  { emoji: '📱', label: 'Phone contract end',    active: false },
  { emoji: '💸', label: 'Wifi bill',             active: true  },
  { emoji: '📞', label: 'Call parents',          active: false },
  { emoji: '🦷', label: 'Dentist visit',         active: false },
  { emoji: '🔑', label: 'Lease renewal',         active: true  },
  { emoji: '💳', label: 'Free trial ending',     active: false },
  { emoji: '🛂', label: 'Passport expiry',       active: false },
  { emoji: '📋', label: 'Tenant inspection',     active: true  },
  { emoji: '🎓', label: 'Enrollment deadline',   active: false },
  { emoji: '🏦', label: 'Tax return',            active: false },
  { emoji: '💉', label: 'Vaccine booster',       active: false },
  { emoji: '🚗', label: 'Car service',           active: false },
  { emoji: '📦', label: 'Return window closing', active: false },
  { emoji: '➕', label: 'Add your own',          active: false },
];

export default function Moments() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-8 bg-d-ink">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[11px] font-extrabold tracking-[1.2px] uppercase mb-3 text-white/30">What Dodo tracks</p>
        <h2 className="font-['Syne'] font-extrabold tracking-[-1.2px] leading-[1.1] mb-6 text-white" style={{ fontSize: 'clamp(26px, 4vw, 42px)' }}>
          The stuff that<br />always slips.
        </h2>
        <div className="flex flex-wrap gap-2">
          {moments.map((m, i) => (
            <motion.div
              key={m.label}
              className={`flex items-center gap-2 px-3.5 py-2 md:px-4 md:py-2.5 rounded-full text-xs md:text-sm font-bold border-[1.5px] cursor-default transition-colors ${
                m.active
                  ? 'bg-d-yellow text-d-ink border-d-yellow'
                  : 'bg-white/[0.06] text-white/75 border-white/[0.12] hover:bg-white/[0.12] hover:text-white'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <span className="text-sm md:text-base">{m.emoji}</span>
              {m.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
