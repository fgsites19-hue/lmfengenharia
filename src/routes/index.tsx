import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { CtaBand, SectionLabel } from "@/components/site/Section";
import { Testimonials } from "@/components/site/Testimonials";
import { Reveal } from "@/components/site/Reveal";
import { SITE_URL } from "@/lib/site";
import proj2 from "@/assets/proj2.jpeg.asset.json";
import { projects, coverOf } from "@/data/projects";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orçamento de Obras com Precisão Técnica | LMF Engenharia" },
      {
        name: "description",
        content:
          "Orçamento analítico de obras com memória de cálculo aberta, quantitativos, cronograma físico-financeiro e controle de custos. Retorno em até 24h úteis.",
      },
      { property: "og:title", content: "Orçamento de Obras com Precisão Técnica | LMF Engenharia" },
      {
        property: "og:description",
        content:
          "Planilhas orçamentárias claras e defensáveis para negociar com construtoras e fornecedores. Atendimento em todo o Brasil.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "LMF Engenharia",
          url: SITE_URL,
          inLanguage: "pt-BR",
        }),
      },
    ],
  }),
  component: Home,
});


const steps = [
  ["01", "Diagnóstico", "Entendemos a fase do projeto, o escopo e o nível de detalhe necessário."],
  ["02", "Levantamento", "Extração de quantitativos com memória de cálculo aberta e auditável."],
  ["03", "Composição", "Custos unitários com insumos, mão de obra, encargos e BDI definidos."],
  ["04", "Entrega", "Planilha analítica, resumo gerencial e cronograma de desembolso."],
];

const faq = [
  [
    "Vocês executam obras?",
    "Não. A LMF atua exclusivamente com orçamento, planejamento e controle de custos. Isso garante um número livre de conflito de interesse com quem vai executar.",
  ],
  [
    "Preciso ter o projeto pronto?",
    "Não necessariamente. Com projeto executivo entregamos orçamento analítico; sem projeto, produzimos estimativa paramétrica para decisão de viabilidade.",
  ],
  [
    "Qual o prazo de entrega?",
    "Depende do porte e do nível de detalhe. Obras residenciais costumam ficar entre 7 e 15 dias úteis, com prazo confirmado antes do início.",
  ],
  [
    "O que vem na entrega?",
    "Planilha analítica com composições, memória de cálculo, resumo por etapa, curva de desembolso e reunião de apresentação dos resultados.",
  ],
  [
    "Atendem fora da minha cidade?",
    "Sim. O trabalho é remoto e atendemos todo o Brasil, com bases de custo regionalizadas conforme a localidade da obra.",
  ],
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-ink-foreground">
        <img
          src={proj2.url}
          alt="Empreendimento residencial de alto padrão orçado pela LMF Engenharia"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
          <SectionLabel>Orçamento de obras</SectionLabel>
          <h1 className="mt-7 max-w-4xl text-4xl leading-[1.03] md:text-7xl">
            Você não precisa de um palpite.
            <br />
            Precisa do custo real da sua obra.
          </h1>
          <p className="mt-7 max-w-xl text-base text-ink-foreground/70">
            Consultoria independente em custos de construção. Transformamos projetos em
            orçamentos analíticos rastreáveis, com memória de cálculo aberta e o rigor
            necessário para sustentar cada decisão de investimento.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contato"
              className="bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              Solicitar orçamento
            </Link>
            <Link
              to="/servicos"
              className="border border-ink-foreground/30 px-7 py-4 text-xs font-semibold uppercase tracking-widest text-ink-foreground transition-colors hover:border-ink-foreground"
            >
              Ver serviços
            </Link>
          </div>

          <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-px border border-ink-foreground/15 bg-ink-foreground/15 sm:grid-cols-4">
            {[
              ["+120", "obras orçadas"],
              ["24h", "para retorno"],
              ["100%", "memória de cálculo aberta"],
              ["0", "obras executadas por nós"],
            ].map(([v, k]) => (
              <div key={k} className="bg-ink p-5">
                <dt className="font-display text-2xl">{v}</dt>
                <dd className="label-mono mt-2 text-ink-foreground/50">{k}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Problema / posicionamento */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionLabel>O problema</SectionLabel>
            <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
              A maior parte das obras estoura porque começou sem número confiável.
            </h2>
          </div>
          <div className="space-y-8">
            {[
              [
                "Estimativa por m² não é orçamento",
                "Um índice genérico ignora terreno, contenção, acabamento e as decisões que realmente pesam no custo final.",
              ],
              [
                "Propostas sem base comparável",
                "Sem uma planilha de referência, comparar construtoras vira comparação de PDFs com escopos diferentes.",
              ],
              [
                "Caixa desalinhado do cronograma",
                "Saber o total não basta. O que trava a obra é não saber quanto sai do caixa em cada mês.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-accent pl-6">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços resumo */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>Serviços</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-3xl leading-tight md:text-4xl">
                Especialização em custos, do estudo preliminar à última medição.
              </h2>
            </div>
            <Link to="/servicos" className="label-mono border-b border-accent pb-1 text-foreground">
              Ver todos os serviços
            </Link>
          </div>

          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
            {[
              [
                "Orçamento analítico",
                "Cada serviço com composição própria: insumos, mão de obra, encargos e BDI abertos, rastreáveis até a prancha do projeto.",
              ],
              [
                "Cronograma físico-financeiro",
                "Curva S e desembolso mês a mês, para você saber exatamente quanto sai do caixa em cada etapa da obra.",
              ],
              [
                "Controle e auditoria",
                "Conferência de medições, previsto x realizado e análise crítica de propostas antes de assinar contrato.",
              ],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 90} className="bg-background">
                <div className="h-full p-8 transition-colors duration-300 hover:bg-secondary">
                  <h3 className="text-xl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Processo */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionLabel>Como trabalhamos</SectionLabel>
        <h2 className="mt-6 max-w-2xl text-3xl leading-tight md:text-4xl">
          Um método fechado, do primeiro contato à planilha entregue.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-4">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 90}>
              <div className="border-t border-foreground/80 pt-5">
                <span className="label-mono text-accent">{n}</span>
                <h3 className="mt-3 text-lg">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </section>

      {/* Projetos */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>Portfólio</SectionLabel>
              <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
                Obras que passaram pela nossa planilha.
              </h2>
            </div>
            <Link to="/projetos" className="label-mono border-b border-accent pb-1 text-foreground">
              Ver portfólio
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="overflow-hidden border border-border">
                    <img
                      src={coverOf(p)}
                      alt={`${p.name}, ${p.area}, ${p.location} — obra orçada pela LMF Engenharia`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 text-lg transition-colors group-hover:text-accent">
                    {p.name}
                  </h3>
                  <p className="label-mono mt-2 text-muted-foreground">
                    {p.area} · {p.location}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>


        </div>
      </section>

      {/* Autoridade */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionLabel>Por que a LMF</SectionLabel>
            <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
              Independência técnica é o nosso produto.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Não vendemos material, não executamos obra e não indicamos fornecedor com
              comissão. Nosso único compromisso é com a exatidão do número que entregamos —
              e com a sua capacidade de defendê-lo em qualquer negociação.
            </p>
          </div>
          <ul className="grid gap-px self-start border border-border bg-border">
            {[
              ["Responsável técnico", "Engenharia civil registrada, com ART quando aplicável."],
              ["Transparência total", "Você recebe a planilha editável e a memória de cálculo."],
              ["Bases atualizadas", "SINAPI, SICRO e cotações de mercado por região."],
              ["Acompanhamento", "Reunião de entrega e suporte para dúvidas na negociação."],
            ].map(([t, d]) => (
              <li key={t} className="bg-background p-6">
                <h3 className="text-base">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />


      {/* FAQ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 py-24">
          <SectionLabel>Dúvidas frequentes</SectionLabel>
          <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
            O que perguntam antes de contratar.
          </h2>
          <div className="mt-12 border-t border-border">
            {faq.map(([q, a]) => (
              <FaqItem key={q} q={q!} a={a!} />
            ))}

          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg">{q}</span>
        {open ? (
          <Minus className="size-4 shrink-0 text-accent" />
        ) : (
          <Plus className="size-4 shrink-0 text-accent" />
        )}
      </button>
      {open && <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}
