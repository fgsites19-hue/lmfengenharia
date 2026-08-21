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
          "Solicite o orçamento da sua obra com a LMF Engenharia. Conte o escopo do projeto e receba o método e o prazo do orçamento.",
      },
      { property: "og:title", content: "Solicitar Orçamento de Obra | LMF Engenharia" },
      {
        property: "og:description",
        content:
          "Envie plantas, memorial ou apenas a área estimada. Retornamos com escopo e prazo.",
      },
      { property: "og:url", content: `${SITE_URL}/contato` },
      { property: "og:image", content: `${SITE_URL}/images/predio-argos-1.jpg` },
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
  "mt-2 w-full border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent sm:text-sm";

type FormStatus = "idle" | "sending" | "sent" | "error";

function ContatoPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [lastMessage, setLastMessage] = useState("");
  const sent = status === "sent";

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_1.1fr] md:gap-16">
      <div>
        <SectionLabel>Contato</SectionLabel>
        <h1 className="mt-5 text-[2rem] leading-[1.1] sm:mt-6 sm:text-4xl sm:leading-[1.05] md:text-5xl">
          Solicite o orçamento da sua obra.
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
          Quanto mais informação você enviar, mais preciso é o nosso retorno. Se ainda não tiver
          projeto, tudo bem — trabalhamos também com estimativa preliminar por área.
        </p>

        <ul className="mt-8 space-y-5 border-t border-border pt-6 sm:mt-10 sm:space-y-6 sm:pt-8">
          {[
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
          className="mt-8 inline-block w-full border border-foreground px-6 py-3 text-center sm:w-auto sm:text-left text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
        >
          Chamar no WhatsApp
        </a>
      </div>

      <div className="border border-border bg-card p-6 sm:p-8 md:p-10">
        {sent ? (
          <div className="py-12 text-center" role="status" aria-live="polite">
            <p className="label-mono text-accent">Próximo passo</p>
            <h2 className="mt-4 text-2xl">Abrimos o WhatsApp com seus dados.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Confira a mensagem e toque em enviar. Se a janela não abriu, use o botão abaixo.
            </p>
            <a
              href={whatsappLink(lastMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              Abrir WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 block w-full text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Enviar outra solicitação
            </button>
          </div>
        ) : (
          <form
            noValidate={false}
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("sending");
              const data = new FormData(e.currentTarget);
              const nome = String(data.get("nome") ?? "");
              const email = String(data.get("email") ?? "");
              const tel = String(data.get("tel") ?? "");
              const tipo = String(data.get("tipo") ?? "");
              const area = String(data.get("area") ?? "");
              const fase = String(data.get("fase") ?? "");
              const briefing = String(data.get("briefing") ?? "");
              const msg = String(data.get("msg") ?? "");
              trackLeadSubmit({
                tipo_obra: tipo,
                tem_area: Boolean(area.trim()),
                tem_briefing: Boolean(briefing.trim()),
                fase_projeto: fase,
              });

              const lines = [
                "Olá! Gostaria de solicitar um orçamento de obra com a LMF Engenharia.",
                `Nome: ${nome}`,
                email && `E-mail: ${email}`,
                tel && `Telefone: ${tel}`,
                `Tipo de projeto: ${tipo}`,
                fase && `Fase do projeto: ${fase}`,
                area && `Área aproximada: ${area} m²`,
                briefing && `Projeto/briefing: ${briefing}`,
                msg && `Sobre o projeto: ${msg}`,
              ].filter(Boolean);

              const message = lines.join("\n");
              setLastMessage(message);

              // O bloqueador de pop-up pode impedir a abertura: nesse caso mostramos
              // o estado de erro, com o link direto para o usuário concluir na mão.
              const win = window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
              setStatus(win ? "sent" : "error");
            }}
            className="space-y-6"
          >
            <div>
              <label className="label-mono text-muted-foreground" htmlFor="nome">
                Nome
              </label>
              <input id="nome" name="nome" required className={fieldClass} />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="label-mono text-muted-foreground" htmlFor="email">
                  E-mail
                </label>
                <input id="email" name="email" type="email" required className={fieldClass} />
              </div>
              <div>
                <label className="label-mono text-muted-foreground" htmlFor="tel">
                  Telefone
                </label>
                <input id="tel" name="tel" className={fieldClass} />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="label-mono text-muted-foreground" htmlFor="tipo">
                  Tipo de projeto
                </label>
                <select id="tipo" name="tipo" className={fieldClass}>
                  <option>Residencial alto padrão</option>
                  <option>Residencial</option>
                  <option>Comercial</option>
                  <option>Incorporação</option>
                  <option>Institucional</option>
                  <option>Reforma</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="label-mono text-muted-foreground" htmlFor="area">
                  Área aproximada (m²)
                </label>
                <input
                  id="area"
                  name="area"
                  inputMode="numeric"
                  placeholder="Opcional"
                  className={fieldClass}
                />
              </div>
            </div>
            <div>
              <label className="label-mono text-muted-foreground" htmlFor="fase">
                Fase do projeto
              </label>
              <select id="fase" name="fase" className={fieldClass}>
                <option>Projeto executivo pronto</option>
                <option>Projeto arquitetônico apenas</option>
                <option>Estudo preliminar</option>
                <option>Ainda sem projeto</option>
              </select>
            </div>
            <div>
              <label className="label-mono text-muted-foreground" htmlFor="briefing">
                Link do projeto ou briefing
              </label>
              <input
                id="briefing"
                name="briefing"
                type="url"
                inputMode="url"
                placeholder="Drive, Dropbox, WeTransfer (opcional)"
                aria-describedby="briefing-help"
                className={fieldClass}
              />
              <p id="briefing-help" className="mt-2 text-xs text-muted-foreground">
                Se preferir, envie os arquivos direto pelo WhatsApp depois.
              </p>
            </div>
            <div>
              <label className="label-mono text-muted-foreground" htmlFor="msg">
                Sobre o projeto
              </label>
              <textarea
                id="msg"
                name="msg"
                rows={5}
                placeholder="Conte o que você já tem definido e o que precisa saber."
                className={fieldClass}
              />
            </div>
            {status === "error" && (
              <p
                role="alert"
                className="border-l-2 border-accent bg-secondary p-4 text-sm text-foreground"
              >
                Não conseguimos abrir o WhatsApp automaticamente, provavelmente por um bloqueador de
                pop-up.{" "}
                <a
                  href={whatsappLink(lastMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-4"
                >
                  Abrir manualmente
                </a>
                .
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-foreground px-6 py-4 text-xs font-semibold uppercase tracking-widest text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Abrindo WhatsApp…" : "Receber avaliação inicial"}
            </button>
            <p className="text-xs text-muted-foreground">
              Seus dados são usados apenas para preparar a avaliação. Você revisa a mensagem antes
              de enviar.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
