export default function Footer() {
  return (
    <footer className="max-w-[1100px] mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/[0.08] text-[13px] font-semibold text-d-ink-soft">
      <div className="flex items-center gap-2">
        <span className="text-lg">🐦</span>
        <span className="font-['Syne'] font-extrabold text-[15px] text-d-ink">dodo</span>
      </div>
      <div className="flex gap-5">
        {['Twitter', 'Privacy', 'Contact'].map(link => (
          <a key={link} href="#" className="no-underline text-d-ink-soft hover:text-d-ink transition-colors">{link}</a>
        ))}
      </div>
      <span>© 2025 Dodo</span>
    </footer>
  );
}
