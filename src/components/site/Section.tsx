import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="label-mono flex items-center gap-3 text-muted-foreground">
      <span className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}

export function CtaBand({
  title = "Quer saber quanto realmente custa a sua obra?",
  text = "Envie o projeto ou o escopo. Retornamos com prazo, método e valor do orçamento em até 24 horas úteis.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <SectionLabel>Próximo passo</SectionLabel>
          <h2 className="mt-5 text-3xl leading-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-sm text-ink-foreground/60">{text}</p>
        </div>
        <div className="md:justify-self-end">
          <Link
            to="/contato"
            className="inline-flex items-center bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}
