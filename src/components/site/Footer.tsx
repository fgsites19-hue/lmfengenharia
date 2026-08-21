import { Link } from "@tanstack/react-router";
import { CONTACT_EMAIL, INSTAGRAM_URL, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="LMF Engenharia" className="h-10 w-10 object-contain" />
            <span className="label-mono">LMF Engenharia</span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-ink-foreground/60">
            Orçamento de obras, planilhas, cronogramas e controle de custos para construtoras,
            incorporadoras, escritórios de arquitetura e clientes finais.
          </p>
        </div>

        <div>
          <p className="label-mono text-ink-foreground/50">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="text-ink-foreground/70 hover:text-ink-foreground">
                Início
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="text-ink-foreground/70 hover:text-ink-foreground">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/projetos" className="text-ink-foreground/70 hover:text-ink-foreground">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-ink-foreground/70 hover:text-ink-foreground">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label-mono text-ink-foreground/50">Contato</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-foreground"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink-foreground">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-foreground"
              >
                Instagram
              </a>
            </li>
            <li>Atendimento em todo o Brasil</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 sm:px-6 text-xs text-ink-foreground/45 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} LMF Engenharia. Todos os direitos reservados.</span>
          <span className="label-mono">Orçamento · Custos · Previsibilidade</span>
        </div>
      </div>
    </footer>
  );
}
