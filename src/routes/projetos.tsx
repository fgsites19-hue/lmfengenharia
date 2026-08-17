import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SITE_URL } from "@/lib/site";
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
          "Residências de alto padrão, condomínios e empreendimentos orçados pela LMF Engenharia: quantitativos, curva de desembolso, auditoria e controle de custos.",
      },
      { property: "og:title", content: "Projetos Orçados | LMF Engenharia" },
      {
        property: "og:description",
        content:
          "Seleção de obras com orçamento analítico, cronograma de desembolso e acompanhamento de custos na execução.",
      },
      { property: "og:url", content: `${SITE_URL}/projetos` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/projetos` }],
  }),
  component: ProjetosPage,
});


const almarias = {
  name: "Casa Almarias",
  location: "Jarinu / SP",
  area: "2.300 m²",
  category: "Obras Residenciais",
  scope: "Orçamento analítico e cronograma físico-financeiro",
  meta: ["2.300 m²", "Jarinu / SP", "Alto padrão", "Implantação em desnível"],
  text: "Residência de alto padrão implantada em platôs, com muros de arrimo, piscina de borda infinita, pavilhões independentes e paisagismo estruturado. O orçamento concentrou atenção em terraplenagem, contenções e nas interfaces entre os blocos — itens que normalmente ficam subdimensionados em estimativas por metro quadrado.",
  images: [
    { src: proj1.url, caption: "Implantação geral em platôs" },
    { src: proj2.url, caption: "Conjunto de pavilhões e piscina" },
    { src: proj3.url, caption: "Vista do paisagismo estruturado" },
    { src: proj4.url, caption: "Fachada e acessos" },
  ],
};

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
        <SectionLabel>{almarias.category}</SectionLabel>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl leading-tight md:text-4xl">{almarias.name}</h2>
            <p className="label-mono mt-3 text-accent">
              {almarias.area} · {almarias.location}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{almarias.text}</p>
          </div>
          <dl className="grid grid-cols-2 gap-px self-start border border-border bg-border">
            {almarias.meta.map((m) => (
              <dd key={m} className="label-mono bg-background p-5 text-foreground/70">
                {m}
              </dd>
            ))}
            <dd className="label-mono col-span-2 bg-background p-5 text-foreground/70">
              {almarias.scope}
            </dd>
          </dl>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {almarias.images.map((img, i) => (
            <Reveal key={img.src} delay={i * 90}>
              <figure className="group">
                <div className="overflow-hidden border border-border">
                  <img
                    src={img.src}
                    alt={`${almarias.name}, ${almarias.area}, ${almarias.location} — ${img.caption}`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="label-mono mt-3 text-muted-foreground">
                  {img.caption}
                </figcaption>
              </figure>
            </Reveal>
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
