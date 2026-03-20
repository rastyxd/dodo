import { Link } from "react-router";

export default function Footer() {
  const links = [
    { name: "Privacy Policy", to: "/privacy" },
    { name: "Terms of Service", to: "/terms" },
  ];
  return (
    <footer className="max-w-[1100px] mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/[0.08] text-[13px] font-semibold text-d-ink-soft">
      <div className="flex items-center gap-2">
        <span className="text-lg">🐦</span>
        <span className="font-['Syne'] font-extrabold text-[15px] text-d-ink">
          dodo
        </span>
      </div>
      <div className="flex gap-5">
        {links.map((link) => (
          <Link key={link.name} to={link.to} className="hover:text-d-ink">
            {link.name}
          </Link>
        ))}
      </div>
      <span>© 2025 Dodo</span>
    </footer>
  );
}
