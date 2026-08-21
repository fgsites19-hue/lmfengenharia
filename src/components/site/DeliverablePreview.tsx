import { SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { InstagramPost } from "@/components/site/InstagramPost";

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
              Planilha analítica editável, com cada serviço aberto em composição própria e a curva
              de desembolso mês a mês. Todo valor é rastreável até a prancha do projeto.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ao lado, um exemplo de como esse tipo de análise mostra para onde o dinheiro da obra
              realmente vai.
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
            <InstagramPost
              code="DZ5QNRrRfQx"
              title="Onde o dinheiro da obra realmente vai"
              description="Publicação da LMF com a distribuição de custos por etapa em residências unifamiliares."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
