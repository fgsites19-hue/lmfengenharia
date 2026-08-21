import { useState } from "react";
import { Instagram, Play } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/site";

/**
 * Publicação do Instagram carregada só depois de um clique.
 *
 * O embed do Instagram traz scripts e cookies da Meta. Carregá-lo de imediato
 * tornaria falso o aviso de privacidade do site ("não usa cookies de
 * rastreamento"), então mostramos uma capa local e só montamos o iframe quando
 * o visitante escolhe ver. Também evita o custo de rede em quem nunca clica.
 */
export function InstagramPost({
  code,
  title,
  description,
}: {
  /** Código do post: o trecho depois de /p/ na URL. */
  code: string;
  title: string;
  description: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const postUrl = `https://www.instagram.com/p/${code}/`;

  return (
    <figure className="border border-border bg-background">
      {loaded ? (
        <iframe
          src={`https://www.instagram.com/p/${code}/embed/captioned/`}
          title={title}
          loading="lazy"
          scrolling="no"
          allowTransparency
          className="h-[36rem] w-full border-0 sm:h-[42rem]"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group flex w-full flex-col items-center justify-center gap-4 px-6 py-16 text-center transition-colors hover:bg-secondary sm:py-24"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:scale-105">
            <Play className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg">{title}</span>
          <span className="max-w-sm text-sm text-muted-foreground">{description}</span>
          <span className="label-mono mt-2 text-accent">Carregar publicação</span>
        </button>
      )}

      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3 sm:px-6">
        <span className="text-[0.7rem] text-muted-foreground">
          {loaded ? "Conteúdo carregado do Instagram." : "Carrega ao clicar, direto do Instagram."}
        </span>
        <a
          href={loaded ? postUrl : INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="label-mono inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
        >
          <Instagram className="size-3.5" aria-hidden="true" />
          {loaded ? "Ver no Instagram" : "@_lmfengenharia"}
        </a>
      </figcaption>
    </figure>
  );
}
