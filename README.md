# 🐦 Dodo

> Less think, more do.

Dodo quietly tracks the life stuff you keep forgetting — GP checkups, bill splits, ID renewals, lease dates. You tap what applies to your life once, and it handles the rest in the background. No setup, no system, no guilt. Just a gentle nudge when something actually needs you.

**Free forever. No account needed.**

---

## What it does

Most reminder apps ask you to think. Dodo doesn't. You tap what's part of your life — it figures out the timing, tracks the frequency, and shows up only when something actually needs your attention.

- 🏥 GP checkups & dentist visits
- 🪪 ID and passport renewals
- 💸 Bills, subscriptions, and splits
- 🔑 Lease renewals and tenant inspections
- 📦 Return windows and trial endings
- ➕ Anything else you add yourself

---

## Stack

- **Vite** — build tooling
- **React 19** — UI
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling tokens
- **Motion** — animations

---

## Project structure

```
src/
├── App.tsx                 # Root component, blob decorations
├── main.tsx                # Entry point
├── index.css               # Tailwind v4 tokens + base styles
└── components/
    ├── Nav.tsx             # Sticky nav with wobbling logo
    ├── Hero.tsx            # Headline + email form + phone mockup
    ├── PhoneMockup.tsx     # Animated phone UI
    ├── EmailForm.tsx       # Waitlist signup form
    ├── HowItWorks.tsx      # 3-step explainer
    ├── Moments.tsx         # What Dodo tracks (dark section)
    ├── Features.tsx        # Why Dodo (feature cards)
    ├── CTA.tsx             # Bottom CTA with email form
    └── Footer.tsx          # Footer
```

---

## License

Dodo is a product by [Rasty](https://rasty.uk) — all rights reserved © 2026.