import Reveal from "./Reveal";
import { pillars } from "../data/content";

export default function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="section-kicker justify-center">
          <span className="h-px w-6 bg-gold-400" />
          What I Do
        </span>
        <h2 className="section-heading mt-4">Three disciplines, one practice</h2>
        <p className="mt-4 text-slate-300">
          Employers hire me to build. Clients hire me to protect what's
          built. Here's how those two worlds meet.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, description, points }, i) => (
          <Reveal key={title} delay={i * 0.12}>
            <div className="card group h-full p-8 transition hover:border-gold-400/40 hover:bg-white/[0.05]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-2xl text-gold-400">
                <Icon />
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {description}
              </p>
              <ul className="mt-5 space-y-2">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
