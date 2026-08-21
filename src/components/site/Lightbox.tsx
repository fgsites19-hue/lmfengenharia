import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = { src: string; caption: string };

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
  alt,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  alt: string;
}) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange(((index as number) + 1) % images.length);
      if (e.key === "ArrowLeft")
        onIndexChange(((index as number) - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, images.length, onClose, onIndexChange]);

  if (!open) return null;
  const current = images[index as number]!;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex flex-col bg-ink/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="p-2 text-ink-foreground/70 transition-colors hover:text-ink-foreground"
        >
          <X className="size-6" />
        </button>
      </div>
      <div
        className="relative flex flex-1 items-center justify-center gap-2 sm:gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 && (
          <button
            aria-label="Imagem anterior"
            onClick={() => onIndexChange(((index as number) - 1 + images.length) % images.length)}
            className="absolute left-0 bottom-2 z-10 rounded-full bg-ink/70 p-3 text-ink-foreground/70 transition-colors hover:text-accent sm:static sm:bg-transparent sm:p-2"
          >
            <ChevronLeft className="size-7 sm:size-8" />
          </button>
        )}
        <figure className="max-h-full">
          <img
            src={current.src}
            alt={`${alt} — ${current.caption}`}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
          <figcaption className="label-mono mt-4 text-center text-ink-foreground/60">
            {current.caption} · {(index as number) + 1}/{images.length}
          </figcaption>
        </figure>
        {images.length > 1 && (
          <button
            aria-label="Próxima imagem"
            onClick={() => onIndexChange(((index as number) + 1) % images.length)}
            className="p-2 text-ink-foreground/60 transition-colors hover:text-accent"
          >
            <ChevronRight className="size-8" />
          </button>
        )}
      </div>
    </div>
  );
}
