import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/projetos", label: "Projetos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid h-14 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="LMF Engenharia"
            className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
          />
          <span className="label-mono truncate text-foreground">LMF Engenharia</span>
        </Link>

        <nav className="hidden items-center justify-self-end gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="border border-foreground bg-foreground px-4 py-2 text-xs font-semibold uppercase tracking-widest text-background transition-colors hover:bg-transparent hover:text-foreground"
          >
            Solicitar orçamento
          </Link>
        </nav>

        <button
          className="-mr-2 shrink-0 p-2 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="animate-in slide-in-from-top-2 fade-in border-t border-border bg-background duration-200 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-foreground last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-3 bg-foreground px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-background"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
