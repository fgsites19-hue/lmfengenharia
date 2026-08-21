import { SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

/**
 * Representação visual e esquemática do entregável, para tangibilizar o que o
 * cliente recebe. Os rótulos são etapas reais de obra; os valores são ilustrativos
 * e estão marcados como tal na interface — nenhum dado de cliente é exibido aqui.
 */

const etapas = [
  { nome: "Serviços preliminares", peso: 6 },
  { nome: "Fundação", peso: 14 },
  { nome: "Estrutura", peso: 22 },
  { nome: "Alvenaria e vedação", peso: 12 },
  { nome: "Instalações", peso: 18 },
  { nome: "Acabamentos", peso: 28 },
];

/** Pontos de uma curva S genérica (progresso acumulado ao longo do prazo). */
const curvaS = [0, 3, 9, 20, 36, 55, 73, 87, 95, 100];

export function DeliverablePreview() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-14">
          <div>
            <SectionLabel>O que você recebe</SectionLabel>
            <h2 className="mt-5 text-2xl leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
              Não é um número solto. É um documento que você usa.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:mt-6">
              A entrega é uma planilha analítica editável, com cada serviço aberto em composição
              própria, o resumo por etapa e a curva de desembolso mês a mês. Você consegue rastrear
              qualquer valor até a prancha do projeto e levar o documento inteiro para a mesa de
              negociação.
            </p>

            <ul className="mt-8 grid gap-px border border-border bg-border sm:mt-10">
              {[
                ["Orçamento analítico", "Cada serviço com insumos, mão de obra, encargos e BDI."],
                ["Memória de cálculo", "O caminho de cada quantitativo, aberto e auditável."],
                ["Cronograma físico-financeiro", "Curva S e quanto sai do caixa em cada mês."],
                [
                  "Resumo gerencial",
                  "A leitura rápida por etapa, para decidir sem abrir a planilha.",
                ],
              ].map(([titulo, desc]) => (
                <li key={titulo} className="bg-background p-4 sm:p-5">
                  <h3 className="text-sm font-semibold sm:text-base">{titulo}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <Reveal>
            <figure className="border border-border bg-background shadow-sm">
              {/* Barra superior, simulando a janela do documento */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
                <span className="label-mono ml-2 truncate text-muted-foreground">
                  orcamento-analitico.xlsx
                </span>
              </div>

              <div className="space-y-6 p-4 sm:space-y-8 sm:p-6">
                {/* Composição de custos por etapa */}
                <div>
                  <p className="label-mono text-muted-foreground">Composição por etapa</p>
                  <ul className="mt-4 space-y-2.5">
                    {etapas.map((e) => (
                      <li key={e.nome} className="flex items-center gap-3">
                        <span className="w-28 shrink-0 truncate text-[0.7rem] text-muted-foreground sm:w-40 sm:text-xs">
                          {e.nome}
                        </span>
                        <span className="h-2 flex-1 bg-border" aria-hidden="true">
                          <span
                            className="block h-full bg-accent/80"
                            style={{ width: `${(e.peso / 28) * 100}%` }}
                          />
                        </span>
                        <span className="w-8 shrink-0 text-right font-display text-[0.7rem] tabular-nums text-foreground/70 sm:text-xs">
                          {e.peso}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Curva S de desembolso */}
                <div className="border-t border-border pt-5 sm:pt-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="label-mono text-muted-foreground">Curva S de desembolso</p>
                    <p className="label-mono text-accent">Acumulado</p>
                  </div>
                  <svg
                    viewBox="0 0 300 90"
                    className="mt-4 h-20 w-full sm:h-24"
                    role="img"
                    aria-label="Gráfico ilustrativo da curva S, mostrando o desembolso acumulado ao longo do prazo da obra"
                    preserveAspectRatio="none"
                  >
                    {[0, 30, 60, 90].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="300"
                        y2={y}
                        className="stroke-border"
                        strokeWidth="1"
                      />
                    ))}
                    <polyline
                      points={curvaS
                        .map((v, i) => `${(i / (curvaS.length - 1)) * 300},${90 - (v / 100) * 88}`)
                        .join(" ")}
                      fill="none"
                      className="stroke-accent"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="mt-2 flex justify-between">
                    <span className="label-mono text-muted-foreground">Início</span>
                    <span className="label-mono text-muted-foreground">Entrega</span>
                  </div>
                </div>
              </div>

              <figcaption className="border-t border-border px-4 py-3 text-[0.7rem] text-muted-foreground sm:px-6">
                Representação ilustrativa do formato da entrega. Os percentuais variam conforme o
                projeto de cada obra.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
