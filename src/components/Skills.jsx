import Reveal from "./Reveal";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section className="bg-ink-900/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-kicker justify-center">
            <span className="h-px w-6 bg-gold-400" />
            Skills &amp; Tools
          </span>
          <h2 className="section-heading mt-4">A well-rounded toolkit</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.1}>
              <div className="card h-full p-6">
                <h3 className="font-serif text-base font-bold text-gold-400">
                  {category}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
