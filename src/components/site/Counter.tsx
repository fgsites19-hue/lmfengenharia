import { useEffect, useRef, useState } from "react";

/**
 * Anima um número inteiro subindo até `value` quando entra na viewport.
 *
 * O valor final é o estado inicial de propósito: assim o SSR, os buscadores e
 * qualquer cenário sem JS (ou com a aba em segundo plano, onde
 * requestAnimationFrame não dispara) mostram a métrica correta em vez de zero.
 * A contagem só começa se de fato houver animação para rodar.
 */
export function Counter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  const match = value.match(/^(\D*)([\d.]+)(\D*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2]!.replace(/\./g, "")) : 0;
  const suffix = match?.[3] ?? "";
  const usesThousandSep = match?.[2]?.includes(".") ?? false;

  const format = (n: number) =>
    `${prefix}${usesThousandSep ? n.toLocaleString("pt-BR") : n}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.disconnect();

          const duration = 1100;
          const start = performance.now();
          setDisplay(format(0));

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(progress < 1 ? format(Math.round(target * eased)) : value);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
