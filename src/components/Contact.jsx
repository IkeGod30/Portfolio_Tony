import { useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="section-kicker">
            <span className="h-px w-6 bg-gold-400" />
            Contact
          </span>
          <h2 className="section-heading mt-4">
            Let's build or protect something great.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-300">
            Open to full-time roles, contract engineering and ML work, and
            IP consulting engagements. Tell me a bit about what you need —
            I'll follow up promptly.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-gold-400"
            >
              <FiMail className="text-lg text-gold-400" /> {profile.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <FiMapPin className="text-lg text-gold-400" /> {profile.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="card space-y-5 p-8">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none transition focus:border-gold-400/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none transition focus:border-gold-400/60"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full resize-none rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none transition focus:border-gold-400/60"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message <FiSend />
            </button>
            {status === "sent" && (
              <p className="text-center text-sm text-gold-400">
                Opening your email client — thanks for reaching out!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
