import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CtaBand, SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SITE_URL } from "@/lib/site";
import { projects, usedCategories, coverOf } from "@/data/projects";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos Orçados | LMF Engenharia" },
      {
        name: "description",
        content:
          "Residências de alto padrão, obras comerciais e reformas orçadas pela LMF Engenharia: quantitativos, curva de desembolso, auditoria e controle de custos.",
      },
      { property: "og:title", content: "Projetos Orçados | LMF Engenharia" },
      {
        property: "og:description",
        content:
          "Seleção de obras com orçamento analítico, cronograma de desembolso e acompanhamento de custos na execução.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${SITE_URL}/projetos` },
      { property: "og:image", content: `${SITE_URL}/images/predio-argos-1.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/projetos` }],
  }),
  component: ProjetosPage,
});

function ProjetosPage() {
  const cats = useMemo(() => usedCategories(), []);
  const [filter, setFilter] = useState<string>("Todos");

  const list = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <SectionLabel>Projetos</SectionLabel>
          <h1 className="mt-5 max-w-3xl text-[2rem] leading-[1.1] sm:mt-6 sm:text-5xl sm:leading-[1.05] md:text-6xl">
            Projetos que passaram pela nossa planilha antes do canteiro.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
            Uma seleção de obras em que atuamos no orçamento, no planejamento de desembolso ou no
            controle de custos durante a execução.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {cats.length > 1 && (
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {["Todos", ...cats].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`label-mono shrink-0 border px-4 py-2 transition-colors ${
                  filter === c
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link to="/projetos/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden border border-border">
                  <img
                    src={coverOf(p)}
                    alt={`${p.name}, ${p.area}, ${p.location} — obra orçada pela LMF Engenharia`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="label-mono mt-5 text-accent">{p.category}</p>
                <h2 className="mt-2 text-xl transition-colors group-hover:text-accent sm:text-2xl">
                  {p.name}
                </h2>
                <p className="label-mono mt-2 text-muted-foreground">
                  {p.area} · {p.location}
                </p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-12 text-sm text-muted-foreground">
            Nenhum projeto publicado nesta categoria ainda.
          </p>
        )}
      </section>

      <CtaBand
        title="Seu projeto pode ser o próximo a sair do achismo."
        text="Envie plantas, memorial ou apenas a área estimada. Retornamos com o escopo do orçamento e o prazo de entrega."
      />
    </>
  );
}
