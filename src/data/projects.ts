import proj1 from "@/assets/proj1.jpeg.asset.json";
import proj2 from "@/assets/proj2.jpeg.asset.json";
import proj3 from "@/assets/proj3.jpeg.asset.json";
import proj4 from "@/assets/proj4.jpeg.asset.json";

export type ProjectCategory =
  | "Obras Residenciais"
  | "Obras Comerciais"
  | "Reformas e Retrofit"
  | "Empreendimentos";

export type ProjectImage = {
  /** URL da imagem (pointer .asset.json → .url) */
  src: string;
  caption: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  area: string;
  scope: string;
  /** Chips técnicos exibidos na página do projeto */
  meta: string[];
  summary: string;
  text: string;
  images: ProjectImage[];
  featured?: boolean;
};

export const CATEGORIES: ProjectCategory[] = [
  "Obras Residenciais",
  "Obras Comerciais",
  "Reformas e Retrofit",
  "Empreendimentos",
];

export const projects: Project[] = [
  {
    slug: "casa-almarias",
    name: "Casa Almarias",
    category: "Obras Residenciais",
    location: "Jarinu / SP",
    area: "2.300 m²",
    scope: "Orçamento analítico e cronograma físico-financeiro",
    meta: ["2.300 m²", "Jarinu / SP", "Alto padrão", "Implantação em desnível"],
    summary:
      "Residência de alto padrão em platôs, com contenções, piscina de borda infinita e pavilhões independentes.",
    text: "Residência de alto padrão implantada em platôs, com muros de arrimo, piscina de borda infinita, pavilhões independentes e paisagismo estruturado. O orçamento concentrou atenção em terraplenagem, contenções e nas interfaces entre os blocos — itens que normalmente ficam subdimensionados em estimativas por metro quadrado.",
    featured: true,
    images: [
      { src: proj1.url, caption: "Implantação geral em platôs" },
      { src: proj2.url, caption: "Conjunto de pavilhões e piscina" },
      { src: proj3.url, caption: "Vista do paisagismo estruturado" },
      { src: proj4.url, caption: "Fachada e acessos" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function usedCategories(): ProjectCategory[] {
  return CATEGORIES.filter((c) => projects.some((p) => p.category === c));
}

export function coverOf(p: Project) {
  return p.images[0]?.src ?? "";
}
