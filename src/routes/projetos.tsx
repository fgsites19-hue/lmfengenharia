import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, SectionLabel } from "@/components/site/Section";
import proj1 from "@/assets/proj1.jpeg.asset.json";
import proj2 from "@/assets/proj2.jpeg.asset.json";
import proj3 from "@/assets/proj3.jpeg.asset.json";
import proj4 from "@/assets/proj4.jpeg.asset.json";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos Orçados | LMF Engenharia" },
      {
        name: "description",
        content:
          "Obras residenciais de alto padrão, condomínios e empreendimentos com orçamento analítico, cronograma e controle de custos pela LMF Engenharia.",
      },
      { property: "og:title", content: "Projetos Orçados | LMF Engenharia" },
      {
        property: "og:description",
        content: "Seleção de projetos com orçamento analítico e controle de custos.",
      },
    ],
  }),
  component: ProjetosPage,
});

const projects = [
  {
    img: proj1.url,
    name: "Residência em platôs",
    scope: "Orçamento analítico completo",
    meta: ["1.480 m²", "Alto padrão", "Área rural"],
    text: "Implantação em desnível com muros de arrimo, piscina de borda e paisagismo estruturado. Foco do orçamento em terraplenagem e contenções.",
  },
  {
    img: proj2.url,
    name: "Conjunto de pavilhões",
    scope: "Quantitativos e cronograma",
    meta: ["Curva S", "3 blocos", "Fase de projeto"],
    text: "Distribuição do desembolso em 18 meses com marcos por bloco, permitindo à família programar aportes sem paralisação de obra.",
  },
  {
    img: proj3.url,
    name: "Casa térrea integrada",
    scope: "Revisão de orçamento",
    meta: ["Auditoria", "3 propostas", "Parecer técnico"],
    text: "Comparativo de propostas de construtoras com identificação de itens omissos em fundação e instalações antes da contratação.",
  },
  {
    img: proj4.url,
    name: "Residência em condomínio",
    scope: "Controle de custos na execução",
    meta: ["Medições", "Previsto x realizado", "24 meses"],
    text: "Acompanhamento mensal com relatórios gerenciais e conferência de medições ao longo de toda a execução.",
  },
];

function ProjetosPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionLabel>Projetos</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] md:text-6xl">
            Projetos que passaram pela nossa planilha antes do canteiro.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Uma seleção de obras em que atuamos no orçamento, no planejamento de desembolso
            ou no controle de custos durante a execução.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="space-y-20">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>figure]:order-2" : ""}`}
            >
              <figure className="overflow-hidden border border-border">
                <img
                  src={p.img}
                  alt={`${p.name} — projeto orçado pela LMF Engenharia`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
              <div>
                <span className="label-mono text-accent">{p.scope}</span>
                <h2 className="mt-4 text-2xl md:text-3xl">{p.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
                  {p.meta.map((m) => (
                    <dd key={m} className="label-mono text-foreground/70">
                      {m}
                    </dd>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Seu projeto pode ser o próximo a sair do achismo."
        text="Envie plantas, memorial ou apenas a área estimada. Retornamos com o escopo do orçamento e o prazo de entrega."
      />
    </>
  );
}
