import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { CtaBand, SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { SITE_URL } from "@/lib/site";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const p = loaderData;
    const title = p ? `${p.name} — ${p.area}, ${p.location} | LMF Engenharia` : "Projeto | LMF Engenharia";
    const description = p?.summary ?? "Obra orçada pela LMF Engenharia.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `${SITE_URL}/projetos/${p?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/projetos/${p?.slug ?? ""}` }],
    };
  },
  component: ProjetoPage,
});

function ProjetoPage() {
  const p = Route.useLoaderData();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <Link
            to="/projetos"
            className="label-mono inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" /> Voltar aos projetos
          </Link>
          <SectionLabel>{p.category}</SectionLabel>
          <h1 className="mt-4 max-w-3xl text-[2rem] leading-[1.1] sm:mt-5 sm:text-5xl sm:leading-[1.05] md:text-6xl">{p.name}</h1>
          <p className="label-mono mt-4 text-accent">
            {p.area} · {p.location}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10">
          <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          <dl className="grid grid-cols-2 gap-px self-start border border-border bg-border">
            {p.meta.map((m) => (
              <dd key={m} className="label-mono bg-background p-4 text-foreground/70 sm:p-5">
                {m}
              </dd>
            ))}
            <dd className="label-mono col-span-2 bg-background p-4 text-foreground/70 sm:p-5">
              {p.scope}
            </dd>
          </dl>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
          {p.images.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <figure className="group">
                <button
                  onClick={() => setOpen(i)}
                  className="block w-full overflow-hidden border border-border"
                  aria-label={`Ampliar imagem: ${img.caption}`}
                >
                  <img
                    src={img.src}
                    alt={`${p.name}, ${p.area}, ${p.location} — ${img.caption}`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </button>
                <figcaption className="label-mono mt-3 text-muted-foreground">
                  {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        images={p.images}
        index={open}
        onClose={() => setOpen(null)}
        onIndexChange={setOpen}
        alt={p.name}
      />

      <CtaBand
        title="Quer o custo real de uma obra como esta?"
        text="Envie plantas, memorial ou apenas a área estimada. Retornamos com escopo, prazo e valor do orçamento."
      />
    </>
  );
}
