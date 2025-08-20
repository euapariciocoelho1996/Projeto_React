import { useEffect, useState } from "react";
export default function TypewriterLine() {
  const text = "Aprenda HTML + Tailwind + JavaScript + React";
  const typingSpeed = 60;
  const deletingSpeed = 40;
  const pause = 1400;
  const loop = true;

  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let t;

    // Digitando
    if (!deleting && idx < text.length) {
      t = setTimeout(() => setIdx(idx + 1), typingSpeed);
      return () => clearTimeout(t);
    }

    // Terminei de digitar
    if (!deleting && idx === text.length) {
      if (!loop) return;
      t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    // Apagando
    if (deleting && idx > 0) {
      t = setTimeout(() => setIdx(idx - 1), deletingSpeed);
      return () => clearTimeout(t);
    }

    // Acabou de apagar tudo → volta a digitar
    if (deleting && idx === 0) {
      setDeleting(false);
    }
  }, [idx, deleting, text, typingSpeed, deletingSpeed, pause, loop]);

  return (
    <div className="w-full flex items-center justify-center p-8 bg-slate-900">
      <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
        {text.slice(0, idx)}
        <Cursor />
      </h1>
    </div>
  );
}

function Cursor() {
  return (
    <span
      className="inline-block w-[2px] h-[1em] align-[-0.15em] bg-current animate-pulse"
      aria-hidden
    />
  );
}
