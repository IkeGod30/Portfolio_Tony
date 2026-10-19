import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { profile, socialLinks } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="section-kicker">
            <span className="h-px w-6 bg-gold-400" />
            Software &middot; Machine Learning &middot; IP Law
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {profile.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {profile.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-300"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href="#contact" className="btn-secondary">
              <FiDownload /> Get In Touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-gold-400/60 hover:text-gold-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex"
        >
          <div className="absolute inset-0 rounded-full border border-gold-400/20" />
          <div className="absolute inset-6 rounded-full border border-white/10" />
          <div className="card flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-full text-center shadow-glow">
            <span className="font-serif text-5xl font-bold text-gold-400">
              TI
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Engineer &amp; Legal Professional
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
