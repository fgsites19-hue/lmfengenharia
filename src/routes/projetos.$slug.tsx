import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CtaBand, SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getProject, coverOf, neighborsOf } from "@/data/projects";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const p = loaderData;
    const title = p
      ? `${p.name} — ${p.area}, ${p.location} | LMF Engenharia`
      : "Projeto | LMF Engenharia";
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
        {
          property: "og:image",
          content: `${SITE_URL}${p ? coverOf(p) : "/images/predio-argos-1.jpg"}`,
        },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/projetos/${p?.slug ?? ""}` }],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: p.name,
                description: p.summary,
                url: `${SITE_URL}/projetos/${p.slug}`,
                image: p.images.map((img) => `${SITE_URL}${img.src}`),
                inLanguage: "pt-BR",
                creator: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
                about: p.category,
                locationCreated: { "@type": "Place", name: p.location },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Projetos",
                    item: `${SITE_URL}/projetos`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: p.name,
                    item: `${SITE_URL}/projetos/${p.slug}`,
                  },
                ],
              }),
            },
          ]
        : [],
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
          <div className="mt-6">
            <SectionLabel>{p.category}</SectionLabel>
          </div>
          <h1 className="mt-4 max-w-3xl text-[2rem] leading-[1.1] sm:mt-5 sm:text-5xl sm:leading-[1.05] md:text-6xl">
            {p.name}
          </h1>
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
                    width={1600}
                    height={1000}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    decoding="async"
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

      <ProjectNav slug={p.slug} />

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

function ProjectNav({ slug }: { slug: string }) {
  const { prev, next } = neighborsOf(slug);
  if (!prev || !next) return null;

  return (
    <nav aria-label="Navegação entre projetos" className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-px sm:grid-cols-2">
        <Link
          to="/projetos/$slug"
          params={{ slug: prev.slug }}
          className="group flex items-center gap-4 border-b border-border px-4 py-6 transition-colors hover:bg-background sm:border-b-0 sm:border-r sm:px-6 sm:py-8"
        >
          <ArrowLeft className="size-4 shrink-0 text-accent transition-transform group-hover:-translate-x-1" />
          <span className="min-w-0">
            <span className="label-mono block text-muted-foreground">Projeto anterior</span>
            <span className="mt-1 block truncate text-base sm:text-lg">{prev.name}</span>
          </span>
        </Link>
        <Link
          to="/projetos/$slug"
          params={{ slug: next.slug }}
          className="group flex items-center justify-end gap-4 px-4 py-6 text-right transition-colors hover:bg-background sm:px-6 sm:py-8"
        >
          <span className="min-w-0">
            <span className="label-mono block text-muted-foreground">Próximo projeto</span>
            <span className="mt-1 block truncate text-base sm:text-lg">{next.name}</span>
          </span>
          <ArrowRight className="size-4 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </nav>
  );
}
