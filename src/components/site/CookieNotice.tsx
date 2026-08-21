import { useEffect, useState } from "react";

const STORAGE_KEY = "lmf-cookie-notice";

export function CookieNotice({
  onVisibilityChange,
}: {
  /** Avisa o componente pai para que o botão do WhatsApp não fique coberto. */
  onVisibilityChange?: (visible: boolean) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage indisponível (modo privado, por exemplo): não mostra o aviso
    }
    return;
  }, []);

  useEffect(() => {
    onVisibilityChange?.(visible);
  }, [visible, onVisibilityChange]);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // sem localStorage o aviso volta na próxima visita, o que é aceitável
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de privacidade"
      className="fixed inset-x-0 bottom-0 z-[55] border-t border-ink-foreground/15 bg-ink px-4 py-4 text-ink-foreground sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-xs leading-relaxed text-ink-foreground/70 sm:text-sm">
          Este site não usa cookies de rastreamento nem publicidade. Guardamos apenas uma marcação
          local no seu navegador para lembrar que você já viu este aviso.
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
