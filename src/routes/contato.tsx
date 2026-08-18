import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/site/Section";
import { SITE_URL, CONTACT_EMAIL, whatsappLink } from "@/lib/site";
import { trackLeadSubmit, trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Solicitar Orçamento de Obra | LMF Engenharia" },
      {
        name: "description",
        content:
          "Solicite o orçamento da sua obra com a LMF Engenharia. Retorno em até 24 horas úteis com escopo, método e prazo de entrega definidos.",
      },
      { property: "og:title", content: "Solicitar Orçamento de Obra | LMF Engenharia" },
      {
        property: "og:description",
        content:
          "Envie plantas, memorial ou apenas a área estimada. Retorno em até 24 horas úteis com escopo e prazo.",
      },
      { property: "og:url", content: `${SITE_URL}/contato` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contato` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contato — LMF Engenharia",
          url: `${SITE_URL}/contato`,
          about: { "@type": "Organization", name: "LMF Engenharia", email: CONTACT_EMAIL },
        }),
      },
    ],
  }),
  component: ContatoPage,
});


const fieldClass =
  "mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_1.1fr]">
      <div>
        <SectionLabel>Contato</SectionLabel>
        <h1 className="mt-6 text-4xl leading-[1.05] md:text-5xl">
          Solicite o orçamento da sua obra.
        </h1>
        <p className="mt-6 text-muted-foreground">
          Quanto mais informação você enviar, mais preciso é o nosso retorno. Se ainda não
          tiver projeto, tudo bem — trabalhamos também com estimativa preliminar por área.
        </p>

        <ul className="mt-10 space-y-6 border-t border-border pt-8">
          {[
            ["Resposta", "Até 24 horas úteis"],
            ["Atendimento", "Todo o Brasil, remoto"],
            ["E-mail", CONTACT_EMAIL],
          ].map(([k, v]) => (
            <li key={k}>
              <p className="label-mono text-muted-foreground">{k}</p>
              <p className="mt-1 text-foreground">{v}</p>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("contato_page")}
          className="mt-8 inline-block border border-foreground px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
        >
          Chamar no WhatsApp
        </a>
      </div>

      <div className="border border-border bg-card p-8 md:p-10">
        {sent ? (
          <div className="py-16 text-center">
            <p className="label-mono text-accent">Solicitação registrada</p>
            <h2 className="mt-4 text-2xl">Obrigado pelo contato.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Retornamos em até 24 horas úteis com o escopo e o prazo do orçamento.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              trackLeadSubmit({
                tipo_obra: String(data.get("tipo") ?? ""),
                tem_area: Boolean(String(data.get("area") ?? "").trim()),
              });
              setSent(true);
            }}
            className="space-y-6"
          >
            <div>
              <label className="label-mono text-muted-foreground" htmlFor="nome">Nome</label>
              <input id="nome" name="nome" required className={fieldClass} />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="label-mono text-muted-foreground" htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" required className={fieldClass} />
              </div>
              <div>
                <label className="label-mono text-muted-foreground" htmlFor="tel">Telefone</label>
                <input id="tel" name="tel" className={fieldClass} />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="label-mono text-muted-foreground" htmlFor="tipo">Tipo de obra</label>
                <select id="tipo" name="tipo" className={fieldClass}>
                  <option>Residencial</option>
                  <option>Comercial</option>
                  <option>Industrial</option>
                  <option>Reforma</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="label-mono text-muted-foreground" htmlFor="area">Área aproximada (m²)</label>
                <input id="area" name="area" className={fieldClass} />
              </div>
            </div>
            <div>
              <label className="label-mono text-muted-foreground" htmlFor="msg">
                Sobre o projeto
              </label>
              <textarea id="msg" name="msg" rows={5} className={fieldClass} />
            </div>
            <button
              type="submit"
              className="w-full bg-foreground px-6 py-4 text-xs font-semibold uppercase tracking-widest text-background transition-opacity hover:opacity-90"
            >
              Enviar solicitação
            </button>
            <p className="text-xs text-muted-foreground">
              Suas informações são usadas apenas para elaborar a proposta de orçamento.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
