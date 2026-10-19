import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiZoomIn } from "react-icons/fi";

const AUTO_ADVANCE_MS = 4000;

export default function ProjectCarousel({ shots, onExpand }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused || shots.length <= 1) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % shots.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, shots.length]);

  return (
    <div
      className="group relative mt-5 overflow-hidden rounded-lg border border-white/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        onClick={() => onExpand(index)}
        className="relative block aspect-video w-full"
        aria-label={`Open ${shots[index].caption} screenshot`}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={shots[index].src}
            src={shots[index].src}
            alt={shots[index].caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 opacity-0 transition group-hover:bg-ink-950/40 group-hover:opacity-100">
          <FiZoomIn className="text-2xl text-white" />
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent px-3 pb-2 pt-6 text-left">
          <p className="text-xs text-slate-200">{shots[index].caption}</p>
        </div>
      </button>

      {shots.length > 1 && (
        <div className="absolute right-3 top-3 flex gap-1.5">
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Show screenshot ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-gold-400" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
