import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { CtaBand, SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { DeliverablePreview } from "@/components/site/DeliverablePreview";
import { RESPONSIBLE, SITE_URL, whatsappLink } from "@/lib/site";
import { coverOf, portfolioStats, oneProjectPerCategory } from "@/data/projects";

const stats = portfolioStats();
const homeProjects = oneProjectPerCategory();

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
    "Depende do porte e do nível de detalhe do projeto. O prazo é confirmado com você antes do início do orçamento.",
  ],
  [
    "O que vem na entrega?",
    "Planilha analítica com composições, memória de cálculo, resumo por etapa, curva de desembolso e reunião de apresentação dos resultados.",
  ],
  [
    "Atendem fora da minha cidade?",
    "Sim. O trabalho é remoto e atendemos todo o Brasil, com bases de custo regionalizadas conforme a localidade da obra.",
  ],
  [
    "Como é calculado o valor da consultoria?",
    // TROCAR: confirme com o Leonardo como ele precifica (por m², por complexidade, valor fixo por faixa) para deixar esta resposta específica.
    "Depende do porte, da tipologia e do nível de detalhe. A avaliação inicial é sem custo: analisamos o material e apresentamos escopo e valor antes de qualquer compromisso.",
  ],
  [
    "Quais arquivos preciso enviar?",
    "O ideal é o projeto arquitetônico, os complementares que já existirem e o memorial descritivo. Com só a planta, ou só a área estimada, também começamos e indicamos o que falta.",
  ],
  [
    "Vocês emitem ART?",
    "Sim, quando o escopo contratado exige, sob responsabilidade de engenheiro civil registrado no CREA.",
  ],
  [
    "O orçamento serve para negociar com a construtora?",
    "É para isso que ele existe. Com a planilha em mãos você compara propostas item a item, identifica omissões e sobrepreços, e negocia com número próprio.",
  ],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orçamento de Obras com Precisão Técnica | LMF Engenharia" },
      {
        name: "description",
        content:
          "Orçamento analítico de obras com memória de cálculo aberta, quantitativos, cronograma físico-financeiro e controle de custos.",
      },
      { property: "og:title", content: "Orçamento de Obras com Precisão Técnica | LMF Engenharia" },
      {
        property: "og:description",
        content:
          "Planilhas orçamentárias claras e defensáveis para negociar com construtoras e fornecedores. Atendimento em todo o Brasil.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/images/hero-mansao-floresta.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: "/images/hero-mansao-floresta.jpg" },
    ],
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
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

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-ink-foreground">
        <img
          src="/images/hero-mansao-floresta.jpg"
          alt="Residência de alto padrão orçada pela LMF Engenharia"
          width={1400}
          height={787}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-25 motion-safe:animate-[hero-zoom_16s_ease-out_forwards]"
        />
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-36">
          <SectionLabel>Orçamento de obras</SectionLabel>
          <h1 className="mt-6 max-w-4xl text-[2rem] leading-[1.08] sm:mt-7 sm:text-5xl sm:leading-[1.03] md:text-7xl">
            Você não precisa de um palpite.
            <br />
            Precisa do custo real da sua obra.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-foreground/70 sm:mt-7 sm:text-base">
            Consultoria independente em custos de construção. Seu projeto vira uma planilha
            rastreável, com memória de cálculo aberta, para você decidir com número próprio.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero")}
              className="group inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 text-center text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              Receber avaliação inicial
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/projetos"
              className="border border-ink-foreground/30 px-7 py-4 text-center text-xs font-semibold uppercase tracking-widest text-ink-foreground transition-colors hover:border-ink-foreground"
            >
              Ver obras orçadas
            </Link>
          </div>

          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-px border border-ink-foreground/15 bg-ink-foreground/15 sm:mt-20 sm:grid-cols-4">
            {[
              [`+${stats.totalAreaThousands} mil`, "m² orçados em projeto"],
              [`${stats.projectCount}`, "obras no portfólio"],
              ["5+", "anos dedicados a orçamento"],
              ["100%", "memória de cálculo aberta"],
            ].map(([v, k]) => (
              <div key={k} className="bg-ink p-4 sm:p-5">
                <dt className="font-display text-xl sm:text-2xl">
                  <Counter value={v!} />
                </dt>
                <dd className="label-mono mt-2 text-ink-foreground/50">{k}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Problema / posicionamento */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14">
          <div>
            <SectionLabel>O problema</SectionLabel>
            <h2 className="mt-5 text-2xl leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
              A maior parte das obras estoura porque começou sem número confiável.
            </h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
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
              <div key={t} className="border-l-2 border-accent pl-5 sm:pl-6">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços resumo */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
            <div>
              <SectionLabel>Serviços</SectionLabel>
              <h2 className="mt-5 max-w-2xl text-2xl leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
                Especialização em custos, do estudo preliminar à última medição.
              </h2>
            </div>
            <Link to="/servicos" className="label-mono border-b border-accent pb-1 text-foreground">
              Ver todos os serviços
            </Link>
          </div>

          <div className="mt-10 grid gap-px border border-border bg-border sm:mt-14 md:grid-cols-3">
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
                <div className="h-full p-6 transition-colors duration-300 hover:bg-secondary sm:p-8">
                  <h3 className="text-xl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <SectionLabel>Como trabalhamos</SectionLabel>
        <h2 className="mt-5 max-w-2xl text-2xl leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
          Um método fechado, do primeiro contato à planilha entregue.
        </h2>
        <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-10 md:grid-cols-4">
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

      <DeliverablePreview />

      {/* Projetos */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
            <div>
              <SectionLabel>Portfólio</SectionLabel>
              <h2 className="mt-5 text-2xl leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
                Obras que passaram pela nossa planilha.
              </h2>
            </div>
            <Link to="/projetos" className="label-mono border-b border-accent pb-1 text-foreground">
              Ver portfólio
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
            {homeProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="relative overflow-hidden border border-border">
                    <img
                      src={coverOf(p)}
                      alt={`${p.name}, ${p.area}, ${p.location} — obra orçada pela LMF Engenharia`}
                      width={1400}
                      height={875}
                      loading={i < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="label-mono absolute left-0 top-0 bg-ink/85 px-3 py-2 text-ink-foreground backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg transition-colors group-hover:text-accent sm:text-xl">
                        {p.name}
                      </h3>
                      <p className="label-mono mt-2 text-muted-foreground">
                        {p.area} · {p.location}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 size-4 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Tem um projeto parecido? Manda a planta que a gente analisa.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("portfolio")}
              className="group inline-flex shrink-0 items-center gap-2 bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              Receber avaliação inicial
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Autoridade */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <SectionLabel>Por que a LMF</SectionLabel>
            <h2 className="mt-5 text-2xl leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
              Independência técnica é o nosso produto.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Não vendemos material, não executamos obra e não indicamos fornecedor. Essa distância
              é deliberada: é ela que torna o número imparcial e auditável.
            </p>

            <div className="mt-8 border border-border bg-secondary p-5 sm:mt-10 sm:p-6">
              <div className="flex items-start gap-4">
                {RESPONSIBLE.photo && (
                  <img
                    src={RESPONSIBLE.photo}
                    alt={`${RESPONSIBLE.name}, ${RESPONSIBLE.role} da LMF Engenharia`}
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                    className="size-16 shrink-0 object-cover sm:size-18"
                  />
                )}
                <div className="min-w-0">
                  <p className="label-mono text-muted-foreground">Responsável técnico</p>
                  <p className="mt-2 font-display text-lg sm:text-xl">{RESPONSIBLE.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{RESPONSIBLE.role}</p>
                  {RESPONSIBLE.crea && (
                    <p className="label-mono mt-2 text-accent">
                      CREA {RESPONSIBLE.crea}
                      {RESPONSIBLE.creaUf && `/${RESPONSIBLE.creaUf}`}
                    </p>
                  )}
                </div>
              </div>

              <ul className="mt-5 space-y-1.5 border-t border-border pt-5">
                {[RESPONSIBLE.experience, ...RESPONSIBLE.education].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="grid gap-px self-start border border-border bg-border">
            {[
              [
                "Responsável técnico",
                "Engenharia civil registrada, com ART emitida quando aplicável.",
              ],
              [
                "Transparência integral",
                "Planilha editável, composições e memória de cálculo nas suas mãos.",
              ],
              [
                "Bases regionalizadas",
                "SINAPI, SICRO e cotações reais de mercado na praça da sua obra.",
              ],
              [
                "Acompanhamento próximo",
                "Reunião de entrega e suporte técnico durante toda a negociação.",
              ],
            ].map(([t, d]) => (
              <li key={t} className="bg-background p-5 sm:p-6">
                <h3 className="text-base">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <SectionLabel>Dúvidas frequentes</SectionLabel>
          <h2 className="mt-5 text-2xl leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
            O que perguntam antes de contratar.
          </h2>
          <div className="mt-12 border-t border-border">
            {faq.map(([q, a], i) => (
              <FaqItem key={q} q={q!} a={a!} id={String(i)} />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 border border-border bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="text-sm text-muted-foreground">
              Ficou alguma dúvida sobre a sua obra especificamente?
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("faq")}
              className="group inline-flex shrink-0 items-center gap-2 border-b border-accent pb-1 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-accent"
            >
              Falar direto no WhatsApp
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function FaqItem({ q, a, id }: { q: string; a: string; id: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="border-b border-border">
      <h3>
        <button
          id={buttonId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent sm:gap-6 sm:py-6"
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span className="font-display text-base sm:text-lg">{q}</span>
          {open ? (
            <Minus className="size-4 shrink-0 text-accent" aria-hidden="true" />
          ) : (
            <Plus className="size-4 shrink-0 text-accent" aria-hidden="true" />
          )}
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
        <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>
      </div>
    </div>
  );
}
