import Reveal from "./Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="section-kicker justify-center">
          <span className="h-px w-6 bg-gold-400" />
          Experience
        </span>
        <h2 className="section-heading mt-4">Where I've made an impact</h2>
      </Reveal>

      <div className="relative mt-14 space-y-10 border-l border-white/10 pl-8">
        {experience.map((item, i) => (
          <Reveal key={item.role} delay={i * 0.12}>
            <div className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold-400 bg-ink-950" />
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
                {item.period}
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-white">
                {item.role}
              </h3>
              <p className="text-sm text-slate-400">{item.org}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
