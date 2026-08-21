export type ProjectCategory =
  "Obras Residenciais" | "Residencial Vertical" | "Obras Comerciais" | "Institucional e Saúde";

export type ProjectImage = {
  src: string;
  caption: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  area: string;
  location: string;
  scope: string;
  meta: string[];
  summary: string;
  text: string;
  images: ProjectImage[];
  featured?: boolean;
};

export const CATEGORIES: ProjectCategory[] = [
  "Obras Residenciais",
  "Residencial Vertical",
  "Obras Comerciais",
  "Institucional e Saúde",
];

export const projects: Project[] = [
  // ===================== RESIDENCIAL =====================
  {
    slug: "casa-jm",
    name: "Casa JM",
    category: "Obras Residenciais",
    area: "1.500 m²",
    location: "Quinta da Baroneza, Itatiba/SP",
    scope: "Orçamento analítico",
    meta: ["Residencial", "Alto padrão"],
    summary: "Residência de alto padrão de 1.500 m², na Quinta da Baroneza, Itatiba/SP.",
    text: "Residência de alto padrão com 1.500 m², implantada em condomínio na Quinta da Baroneza, em Itatiba/SP. O orçamento tratou com atenção os itens de acabamento, paisagismo e área de lazer, que concentram parte relevante do custo total em obras desse porte.",
    featured: true,
    images: [
      { src: "/images/casa-jm-aerea.jpg", caption: "Vista aérea" },
      { src: "/images/casa-jm-floresta.jpg", caption: "Implantação" },
      { src: "/images/casa-jm-piscina.jpg", caption: "Área de piscina e lazer" },
    ],
  },
  {
    slug: "casa-sa",
    name: "Casa SA",
    category: "Obras Residenciais",
    area: "800 m²",
    location: "Quinta da Baroneza, Itatiba/SP",
    scope: "Orçamento analítico",
    meta: ["Residencial", "Alto padrão"],
    summary: "Residência de 800 m² na Quinta da Baroneza, Itatiba/SP.",
    text: "Residência térrea de alto padrão com 800 m², na Quinta da Baroneza, em Itatiba/SP. O levantamento considerou a área de lazer integrada com cozinha externa e piscina de borda infinita.",
    images: [
      { src: "/images/casa-sa-fachada.jpg", caption: "Fachada" },
      { src: "/images/casa-sa-piscina.jpg", caption: "Área de piscina" },
      { src: "/images/casa-sa-piscina2.jpg", caption: "Área de lazer" },
    ],
  },
  {
    slug: "casa-kp",
    name: "Casa KP",
    category: "Obras Residenciais",
    area: "500 m²",
    location: "Alphaville, Belo Horizonte/MG",
    scope: "Orçamento analítico",
    meta: ["Residencial", "Alto padrão"],
    summary: "Residência de 500 m² em Alphaville, Belo Horizonte/MG.",
    text: "Residência contemporânea de 500 m², em Alphaville, Belo Horizonte/MG. O orçamento acompanhou de perto os itens de marcenaria, revestimentos em pedra e a piscina com cascata integrada à área social.",
    images: [
      { src: "/images/casa-kp-fachada.jpg", caption: "Fachada" },
      { src: "/images/casa-kp-fachada2.jpg", caption: "Fachada, vista lateral" },
      { src: "/images/casa-kp-garagem.jpg", caption: "Garagem" },
      { src: "/images/casa-kp-rua.jpg", caption: "Vista da rua" },
    ],
  },
  {
    slug: "casa-fbv",
    name: "Casa FBV",
    category: "Obras Residenciais",
    area: "600 m²",
    location: "Fazenda Boa Vista, Porto Feliz/SP",
    scope: "Orçamento analítico",
    meta: ["Residencial", "Alto padrão"],
    summary: "Residência de 600 m² na Fazenda Boa Vista, Porto Feliz/SP.",
    text: "Residência de 600 m² no condomínio Fazenda Boa Vista, em Porto Feliz/SP. O orçamento incluiu a área externa de lazer, com cozinha gourmet, lareira e piscina de borda infinita.",
    images: [{ src: "/images/casa-fbv-terraco.jpg", caption: "Terraço e área de lazer" }],
  },
  {
    slug: "casa-br",
    name: "Casa BR",
    category: "Obras Residenciais",
    area: "600 m²",
    location: "Vinhedo/SP",
    scope: "Orçamento analítico",
    meta: ["Residencial", "Alto padrão"],
    summary: "Residência de 600 m² em Vinhedo/SP.",
    text: "Residência de 600 m² em Vinhedo/SP, com fachada em pedra e pilares em destaque. O levantamento cobriu desde a estrutura até os acabamentos da área de piscina.",
    images: [
      { src: "/images/casa-br-fachada.jpg", caption: "Fachada" },
      { src: "/images/casa-br-fachada2.jpg", caption: "Fachada, outro ângulo" },
      { src: "/images/casa-br-piscina.jpg", caption: "Área de piscina" },
    ],
  },
  {
    slug: "casa-fb",
    name: "Casa FB",
    category: "Obras Residenciais",
    area: "530 m²",
    location: "Riviera de São Lourenço/SP",
    scope: "Orçamento analítico",
    meta: ["Residencial", "Alto padrão"],
    summary: "Residência de 530 m² na Riviera de São Lourenço/SP.",
    text: "Residência de 530 m² na Riviera de São Lourenço/SP, com piscina interna e cascata integrada ao ambiente social. O orçamento detalhou os itens de marcenaria e a estrutura de vidro da fachada.",
    images: [
      { src: "/images/casa-fb-fachada.jpg", caption: "Fachada" },
      { src: "/images/casa-fb-piscina.jpg", caption: "Piscina interna" },
    ],
  },
  {
    slug: "casa-ea",
    name: "Casa EA",
    category: "Obras Residenciais",
    area: "700 m²",
    location: "Itatiba/SP",
    scope: "Orçamento analítico",
    meta: ["Residencial", "Alto padrão"],
    summary: "Residência de 700 m² em Itatiba/SP.",
    text: "Residência de 700 m² em Itatiba/SP, com volumetria horizontal e brises em madeira. O orçamento considerou a estrutura em desnível e a piscina integrada ao paisagismo.",
    images: [
      { src: "/images/casa-ea-fachada.jpg", caption: "Fachada" },
      { src: "/images/casa-ea-fachada2.jpg", caption: "Fachada, outro ângulo" },
      { src: "/images/casa-ea-piscina.jpg", caption: "Área de piscina" },
    ],
  },

  // ===================== RESIDENCIAL VERTICAL =====================
  {
    slug: "argos",
    name: "Argos",
    category: "Residencial Vertical",
    area: "6.300 m²",
    location: "Jundiaí/SP",
    scope: "Orçamento analítico",
    meta: ["Residencial vertical", "Torre multifamiliar"],
    summary: "Torre residencial vertical de 6.300 m², em Jundiaí/SP.",
    text: "Empreendimento residencial vertical de 6.300 m², em Jundiaí/SP. O orçamento concentrou atenção nas interfaces entre fundação, estrutura e fachada, itens que pesam de forma desproporcional em obras verticais quando estimados por índice genérico.",
    featured: true,
    images: [
      { src: "/images/predio-argos-2.jpg", caption: "Fachada, entrada" },
      { src: "/images/predio-argos-1.jpg", caption: "Torre Argos, vista noturna" },
      { src: "/images/predio-argos-3.jpg", caption: "Vista aérea" },
    ],
  },
  {
    slug: "espaco-360",
    name: "Espaço 360",
    category: "Residencial Vertical",
    area: "4.500 m²",
    location: "Belo Horizonte/MG",
    scope: "Orçamento analítico",
    meta: ["Residencial vertical", "Torre multifamiliar"],
    summary: "Torre residencial vertical de 4.500 m², em Belo Horizonte/MG.",
    text: "Empreendimento residencial vertical de 4.500 m², em Belo Horizonte/MG. O levantamento considerou a fachada em corten e a implantação em terreno com desnível acentuado.",
    images: [
      { src: "/images/predio-espaco360-1.jpg", caption: "Fachada" },
      { src: "/images/predio-espaco360-2.jpg", caption: "Vista aérea" },
      { src: "/images/predio-espaco360-3.jpg", caption: "Vista aérea, outro ângulo" },
    ],
  },
  {
    slug: "predio-op",
    name: "Prédio OP",
    category: "Residencial Vertical",
    area: "4.000 m²",
    location: "Belo Horizonte/MG",
    scope: "Orçamento analítico",
    meta: ["Residencial vertical", "Torre multifamiliar"],
    summary: "Torre residencial vertical de 4.000 m², em Belo Horizonte/MG.",
    text: "Empreendimento residencial vertical de 4.000 m², em Belo Horizonte/MG, com varandas jardinadas em todos os pavimentos. O orçamento tratou com atenção os itens de impermeabilização e paisagismo suspenso.",
    images: [
      { src: "/images/predio-op-1.jpg", caption: "Fachada" },
      { src: "/images/predio-op-2.jpg", caption: "Fachada frontal" },
    ],
  },
  {
    slug: "predio-pina",
    name: "Prédio Pina",
    category: "Residencial Vertical",
    area: "2.800 m²",
    location: "São Paulo/SP",
    scope: "Orçamento analítico",
    meta: ["Residencial vertical", "Torre multifamiliar"],
    summary: "Torre residencial vertical de 2.800 m², em São Paulo/SP.",
    text: "Empreendimento residencial vertical de 2.800 m², em São Paulo/SP, com área de lazer no rooftop. O orçamento incluiu os itens de acabamento das áreas comuns e da piscina elevada.",
    images: [
      { src: "/images/predio-pina-1.jpg", caption: "Fachada, vista noturna" },
      { src: "/images/predio-pina-2.jpg", caption: "Rooftop, piscina" },
      { src: "/images/predio-pina-3.jpg", caption: "Rooftop, área de descanso" },
    ],
  },
  {
    slug: "complexo-residencial",
    name: "Complexo residencial",
    category: "Residencial Vertical",
    area: "Duas torres residenciais",
    location: "Brasil",
    scope: "Orçamento analítico",
    meta: ["Residencial vertical", "Duas torres"],
    // TROCAR: confirme com o Leonardo o nome do empreendimento e a cidade
    summary: "Complexo com duas torres residenciais, orçado com quantitativos por bloco.",
    text: "Empreendimento residencial vertical composto por duas torres. O levantamento foi feito por bloco, permitindo comparar o custo por unidade entre as duas edificações.",
    images: [
      { src: "/images/complexo-residencial-2.jpg", caption: "Vista geral" },
      { src: "/images/complexo-residencial-1.jpg", caption: "Fachada" },
      { src: "/images/complexo-residencial-3.jpg", caption: "Fachada, detalhe" },
    ],
  },

  // ===================== COMERCIAL / INSTITUCIONAL =====================
  {
    slug: "hotel-vc",
    name: "Hotel VC",
    category: "Obras Comerciais",
    area: "2.800 m²",
    location: "Chapecó/SC",
    scope: "Orçamento analítico",
    meta: ["Hotelaria", "2.800 m²"],
    summary: "Hotel de 2.800 m² em Chapecó/SC, estilo rural europeu.",
    text: "Hotel de 2.800 m² em Chapecó/SC, com arquitetura de inspiração rural europeia. O orçamento considerou os padrões de acabamento e a repetição de unidades típica desse segmento.",
    images: [
      { src: "/images/hotel-vc-1.jpg", caption: "Fachada principal" },
      { src: "/images/hotel-vc-2.jpg", caption: "Acesso" },
    ],
  },
  {
    slug: "mall-jk",
    name: "Mall JK",
    category: "Obras Comerciais",
    area: "850 m²",
    location: "Mogi Mirim/SP",
    scope: "Quantitativos e levantamento",
    meta: ["Comercial", "Strip mall"],
    summary: "Centro comercial de 850 m² em Mogi Mirim/SP.",
    text: "Centro comercial de 850 m² em Mogi Mirim/SP, com lojas térreas e estacionamento integrado. O levantamento priorizou os itens de fachada e infraestrutura compartilhada entre as lojas.",
    images: [
      { src: "/images/mall-jk-1.jpg", caption: "Fachada" },
      { src: "/images/mall-jk-2.jpg", caption: "Acesso principal" },
    ],
  },
  {
    slug: "galpoes-bv",
    name: "Galpões BV",
    category: "Obras Comerciais",
    area: "5.000 m²",
    location: "Valinhos/SP",
    scope: "Quantitativos e levantamento",
    meta: ["Comercial", "Condomínio de galpões"],
    summary: "Condomínio de galpões de 5.000 m² em Valinhos/SP.",
    text: "Condomínio de galpões comerciais totalizando 5.000 m², em Valinhos/SP. O levantamento priorizou os itens de estrutura e cobertura, que concentram a maior parte do custo nesse tipo de edificação.",
    images: [
      { src: "/images/galpoes-bv-1.jpg", caption: "Vista aérea" },
      { src: "/images/galpoes-bv-2.jpg", caption: "Fachada" },
      { src: "/images/galpoes-bv-3.jpg", caption: "Portaria" },
    ],
  },
  {
    slug: "edificio-cm",
    name: "Edifício CM",
    category: "Obras Comerciais",
    area: "400 m²",
    location: "Campinas/SP",
    scope: "Quantitativos e levantamento",
    meta: ["Comercial", "Edifício corporativo"],
    summary: "Edifício comercial de 400 m² em Campinas/SP.",
    text: "Edifício comercial de 400 m² em Campinas/SP, com pé-direito duplo e fachada em vidro. O levantamento cobriu a estrutura, a esquadria e os acabamentos internos.",
    images: [
      { src: "/images/edificio-cm-1.jpg", caption: "Fachada" },
      { src: "/images/edificio-cm-2.jpg", caption: "Térreo" },
    ],
  },
  {
    slug: "unidade-saude",
    name: "Unidade de saúde",
    category: "Institucional e Saúde",
    area: "Unidade de saúde",
    location: "Brasil",
    scope: "Orçamento analítico",
    meta: ["Institucional", "Saúde"],
    // TROCAR: confirme com o Leonardo o nome, m² e cidade deste projeto
    summary: "Unidade de saúde com exigências técnicas específicas de instalações.",
    text: "Obra institucional de saúde, com exigências técnicas específicas de instalações elétricas, hidráulicas e de climatização que exigem levantamento detalhado por especialidade.",
    images: [{ src: "/images/hospital-saude.jpg", caption: "Fachada de acesso" }],
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

/**
 * Métricas derivadas do próprio portfólio, para nunca divergirem dos projetos publicados.
 * `totalArea` soma apenas os projetos com metragem confirmada, por isso é apresentada
 * como valor mínimo ("+") no site.
 */
export function portfolioStats() {
  const areas = projects
    .map((p) => p.area.match(/^([\d.]+)\s*m²$/))
    .filter((m): m is RegExpMatchArray => m !== null)
    .map((m) => Number(m[1]!.replace(/\./g, "")));

  return {
    projectCount: projects.length,
    totalArea: areas.reduce((sum, a) => sum + a, 0),
    /** Milhares de m², arredondado para baixo — mantém o "+" honesto. */
    totalAreaThousands: Math.floor(areas.reduce((sum, a) => sum + a, 0) / 1000),
  };
}

/** Projeto anterior e próximo na ordem do portfólio, com volta ao início/fim. */
export function neighborsOf(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
