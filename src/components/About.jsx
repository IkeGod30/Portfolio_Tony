import Reveal from "./Reveal";

const stats = [
  { value: "5+", label: "Years across engineering & IP consulting" },
  { value: "20+", label: "Projects shipped & clients advised" },
  { value: "3", label: "Disciplines, one cohesive practice" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="section-kicker">
            <span className="h-px w-6 bg-gold-400" />
            About
          </span>
          <h2 className="section-heading mt-4">
            An engineer's precision, a counsel's judgment.
          </h2>
          <p className="mt-6 leading-relaxed text-slate-300">
            I'm Tony Izuogu — a software and machine learning engineer who
            also advises on intellectual property strategy. That
            combination means I don't just build products; I understand
            what's actually novel about them, how to protect it, and how to
            communicate that value to both technical teams and legal
            stakeholders.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            Whether I'm shipping a production application, deploying a
            machine learning model, or reviewing an invention for
            patentability, my approach is the same: rigorous analysis,
            clear communication, and outcomes that hold up under scrutiny.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card flex items-center gap-4 p-6"
              >
                <span className="font-serif text-3xl font-bold text-gold-400">
                  {stat.value}
                </span>
                <span className="text-sm leading-snug text-slate-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
