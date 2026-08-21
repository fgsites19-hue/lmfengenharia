import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de Orçamento de Obras | LMF Engenharia" },
      {
        name: "description",
        content:
          "Orçamento analítico, quantitativos, composições de custo, cronograma físico-financeiro, auditoria de propostas e controle de custos na execução da obra.",
      },
      { property: "og:title", content: "Serviços de Orçamento de Obras | LMF Engenharia" },
      {
        property: "og:description",
        content:
          "Do estudo de viabilidade à última medição: orçamento analítico, curva S, auditoria de propostas e controle de custos.",
      },
      { property: "og:url", content: `${SITE_URL}/servicos` },
      { property: "og:image", content: `${SITE_URL}/images/predio-argos-1.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/servicos` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Serviços de orçamento de obras — LMF Engenharia",
          itemListElement: [
            "Orçamento analítico de obras",
            "Quantitativos e levantamento",
            "Cronograma físico-financeiro",
            "Revisão e auditoria de orçamento",
            "Controle de custos na execução",
            "Viabilidade de empreendimentos",
          ].map((name, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name,
              provider: { "@type": "Organization", name: "LMF Engenharia" },
            },
          })),
        }),
      },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    n: "01",
    title: "Orçamento analítico de obras",
    text: "Levantamento completo com composições de custo unitário, insumos, mão de obra, BDI e encargos. Cada item rastreável até o projeto.",
    items: ["Composições por serviço", "Base SINAPI/SICRO e mercado", "BDI e encargos detalhados"],
  },
  {
    n: "02",
    title: "Quantitativos e levantamento",
    text: "Extração de quantidades a partir de projetos arquitetônicos e complementares, com memória de cálculo aberta e auditável.",
    items: ["Memória de cálculo", "Planilha por etapa", "Checagem de compatibilidade"],
  },
  {
    n: "03",
    title: "Cronograma físico-financeiro",
    text: "Distribuição do custo ao longo do tempo para você saber quanto sai do caixa em cada mês da obra.",
    items: ["Curva S", "Desembolso mensal", "Marcos de etapa"],
  },
  {
    n: "04",
    title: "Revisão e auditoria de orçamento",
    text: "Análise crítica de orçamentos de terceiros para identificar omissões, sobrepreços e riscos antes da assinatura do contrato.",
    items: ["Comparativo de propostas", "Parecer técnico", "Pontos de risco"],
  },
  {
    n: "05",
    title: "Controle de custos na execução",
    text: "Acompanhamento do previsto versus realizado, medições e relatórios periódicos para manter a obra dentro do planejado.",
    items: ["Previsto x realizado", "Medições", "Relatórios gerenciais"],
  },
  {
    n: "06",
    title: "Viabilidade de empreendimentos",
    text: "Estimativas paramétricas para decisão rápida na fase inicial, antes do investimento em projetos executivos.",
    items: ["Custo por m²", "Cenários", "Estudo preliminar"],
  },
];

/** Os quatro escopos, na ordem da fase do projeto em que fazem sentido. */
const scopeLevels = [
  {
    escopo: "Estimativa preliminar",
    quando: "Ainda decidindo se a obra fecha",
    envia: "Área e padrão pretendido",
    recebe: "Faixa de custo para viabilidade",
  },
  {
    escopo: "Orçamento analítico",
    quando: "Projeto pronto, antes de contratar",
    envia: "Projeto e memorial descritivo",
    recebe: "Planilha com composições e curva S",
  },
  {
    escopo: "Revisão e auditoria",
    quando: "Já tem proposta de construtora",
    envia: "Orçamento recebido de terceiros",
    recebe: "Parecer técnico e pontos de risco",
  },
  {
    escopo: "Controle na execução",
    quando: "Obra em andamento",
    envia: "Medições e notas do período",
    recebe: "Previsto x realizado por etapa",
  },
];

function ServicosPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <SectionLabel>Serviços</SectionLabel>
          <h1 className="mt-5 max-w-3xl text-[2rem] leading-[1.1] sm:mt-6 sm:text-5xl sm:leading-[1.05] md:text-6xl">
            Cada número da sua obra com origem, método e responsável técnico.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
            Trabalhamos exclusivamente com custos de construção. Isso significa profundidade em
            levantamento, composição e controle — sem conflito de interesse com a execução.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {services.map((s, idx) => (
            <Reveal key={s.n} delay={(idx % 2) * 90} className="bg-background">
              <article className="h-full p-6 transition-colors duration-300 hover:bg-secondary sm:p-8 md:p-10">
                <span className="label-mono text-accent">{s.n}</span>
                <h2 className="mt-4 text-lg sm:text-xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-6 space-y-2">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="h-1 w-1 shrink-0 bg-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <SectionLabel>Qual escopo é o seu</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-2xl leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
            Depende da fase em que o seu projeto está.
          </h2>

          <div className="mt-10 overflow-x-auto sm:mt-12">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <caption className="sr-only">
                Comparação entre os escopos de trabalho da LMF Engenharia
              </caption>
              <thead>
                <tr className="border-b border-foreground/80">
                  {["Escopo", "Quando usar", "Você envia", "Você recebe"].map((h) => (
                    <th key={h} scope="col" className="label-mono py-4 pr-6 text-muted-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scopeLevels.map((l) => (
                  <tr key={l.escopo} className="border-b border-border align-top">
                    <th scope="row" className="py-5 pr-6 font-display text-base font-normal">
                      {l.escopo}
                    </th>
                    <td className="py-5 pr-6 text-sm text-muted-foreground">{l.quando}</td>
                    <td className="py-5 pr-6 text-sm text-muted-foreground">{l.envia}</td>
                    <td className="py-5 text-sm text-muted-foreground">{l.recebe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Na dúvida, mande o que você já tem. A primeira avaliação indica o escopo adequado, sem
            custo e sem compromisso.
          </p>
        </div>
      </section>

      <CtaBand
        title="Não sabe qual escopo se aplica ao seu momento?"
        text="Descreva a fase do projeto. Indicamos o escopo adequado, mesmo que seja menor do que você imaginava."
      />
    </>
  );
}
