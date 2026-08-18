import { SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  meta: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Entramos na negociação com a construtora sabendo linha por linha o que cada item deveria custar. A conversa mudou de patamar — e a proposta final ficou 11% abaixo da primeira.",
    name: "Rodrigo A.",
    role: "Cliente final · residência de alto padrão",
    meta: "2.300 m² · Jarinu/SP",
  },
  {
    quote:
      "A memória de cálculo aberta foi decisiva. Conseguimos auditar cada quantitativo com o nosso projetista e eliminar divergências antes de a obra começar.",
    name: "Marina T.",
    role: "Arquiteta responsável",
    meta: "Projeto executivo · interior de SP",
  },
  {
    quote:
      "O cronograma de desembolso nos deu previsibilidade de caixa mês a mês. Pela primeira vez a obra andou sem surpresa financeira no meio do caminho.",
    name: "Eduardo M.",
    role: "Investidor · incorporação residencial",
    meta: "Controle de custos na execução",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="max-w-2xl">
          <SectionLabel>Depoimentos</SectionLabel>
          <h2 className="mt-5 text-2xl leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
            A confiança vem do número — e de quem precisou defendê-lo.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Clientes, arquitetos e investidores que usaram nossas planilhas para tomar decisão,
            negociar contrato e manter a obra sob controle.
          </p>
        </div>

        <div className="mt-10 grid gap-px border border-border bg-border sm:mt-14 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="bg-background">
              <figure className="flex h-full flex-col justify-between p-6 sm:p-8 transition-colors duration-300 hover:bg-secondary">
                <span aria-hidden className="font-display text-4xl leading-none text-accent">
                  &ldquo;
                </span>
                <blockquote className="mt-5 text-sm leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <p className="font-display text-base">{t.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
                  <p className="label-mono mt-3 text-accent">{t.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
