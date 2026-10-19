import { profile, socialLinks, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <a href="#top" className="font-serif text-lg font-bold text-white">
            Tony<span className="text-gold-400">.</span>Izuogu
          </a>
          <p className="mt-1 text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-gold-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-gold-400/50 hover:text-gold-400"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
