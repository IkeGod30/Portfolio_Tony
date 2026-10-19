import Reveal from "./Reveal";
import { FiCheckCircle } from "react-icons/fi";
import { legalServices } from "../data/content";

export default function Legal() {
  return (
    <section id="legal" className="bg-ink-900/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <span className="section-kicker">
              <span className="h-px w-6 bg-gold-400" />
              IP Law Consulting
            </span>
            <h2 className="section-heading mt-4">
              Protecting what you've built
            </h2>
            <p className="mt-5 leading-relaxed text-slate-300">
              Technical founders and engineering teams often under-protect
              their most valuable asset: their ideas. I bridge that gap —
              combining hands-on engineering experience with intellectual
              property expertise to help you understand what's protectable,
              what isn't, and what to do about it.
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">
              I work alongside founders, inventors, and engineering teams to
              prepare for formal legal filings, often in coordination with
              registered patent attorneys and agents.
            </p>

            <div className="mt-8 rounded-xl border border-gold-400/20 bg-gold-500/5 p-5 text-sm leading-relaxed text-slate-300">
              <strong className="text-gold-400">Disclosure:</strong> IP
              consulting services provide strategic and technical guidance
              only and do not constitute legal advice or create an
              attorney-client relationship. Formal filings are prepared or
              reviewed in conjunction with a licensed patent attorney or
              agent as required.
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-5">
              {legalServices.map((service) => (
                <div key={service.title} className="card flex gap-4 p-6">
                  <FiCheckCircle className="mt-1 shrink-0 text-xl text-gold-400" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
