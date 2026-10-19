import { useState, useMemo } from "react";
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Reveal from "./Reveal";
import ProjectCarousel from "./ProjectCarousel";
import { projects } from "../data/content";

const categories = ["All", "Software Engineering", "Machine Learning", "IP Law"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null); // { shots, index }

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  const showShot = (delta) =>
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index + delta + lb.shots.length) % lb.shots.length,
    }));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="section-kicker justify-center">
          <span className="h-px w-6 bg-gold-400" />
          Selected Work
        </span>
        <h2 className="section-heading mt-4">Projects &amp; case studies</h2>
      </Reveal>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === cat
                ? "bg-gold-500 text-ink-950"
                : "border border-white/10 bg-white/5 text-slate-300 hover:border-gold-400/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filtered.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <div className="card h-full p-7 transition hover:border-gold-400/40">
              <span className="text-xs font-semibold uppercase tracking-wide text-gold-400">
                {project.category}
              </span>
              <h3 className="mt-3 font-serif text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.screenshots && (
                <ProjectCarousel
                  shots={project.screenshots}
                  onExpand={(idx) =>
                    setLightbox({ shots: project.screenshots, index: idx })
                  }
                />
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition hover:text-gold-500"
                >
                  View Live <FiExternalLink />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-gold-400/50 hover:text-gold-400"
          >
            <FiX className="text-xl" />
          </button>

          {lightbox.shots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showShot(-1);
                }}
                aria-label="Previous screenshot"
                className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-gold-400/50 hover:text-gold-400 sm:left-8"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showShot(1);
                }}
                aria-label="Next screenshot"
                className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-gold-400/50 hover:text-gold-400 sm:right-8"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </>
          )}

          <div
            className="max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.shots[lightbox.index].src}
              alt={lightbox.shots[lightbox.index].caption}
              className="max-h-[75vh] w-full rounded-xl border border-white/10 object-contain"
            />
            <p className="mt-4 text-center text-sm text-slate-300">
              {lightbox.shots[lightbox.index].caption}
              <span className="ml-2 text-slate-500">
                {lightbox.index + 1} / {lightbox.shots.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
