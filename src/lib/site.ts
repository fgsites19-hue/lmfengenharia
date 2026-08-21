export const SITE_URL = "https://lmf-engenharia.vercel.app";

export const SITE_NAME = "LMF Engenharia";

/** Número do WhatsApp em formato internacional, apenas dígitos. */
export const WHATSAPP_NUMBER = "5511994055789";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de solicitar um orçamento de obra com a LMF Engenharia.";

export const whatsappLink = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const CONTACT_EMAIL = "leonardo.lmfengenharia@gmail.com";

export const INSTAGRAM_HANDLE = "_lmfengenharia";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;

/**
 * Números de trajetória da empresa, informados pelo Leonardo.
 *
 * Diferem de propósito do que o portfólio do site soma: o portfólio publicado é
 * uma seleção de obras, enquanto estes são os totais acumulados de atuação. Por
 * isso os rótulos falam em "orçados/orçadas", e não em "no portfólio" — se um
 * dia passarem a dizer "portfólio", vão contradizer as obras listadas no site.
 *
 * TROCAR: revalide com o Leonardo antes de cada atualização do site.
 */
export const TRACK_RECORD = {
  areaOrcada: "+100 mil",
  obrasOrcadas: "+200",
  empresasParceiras: "+30",
} as const;

/**
 * Responsável técnico.
 *
 * `name` está com o primeiro nome apenas e `crea` está vazio porque são os dados
 * que ainda não foram confirmados. Campos vazios não são renderizados no site,
 * então nada aparece quebrado para o visitante enquanto não forem preenchidos.
 * TROCAR: complete o nome completo e o número do CREA.
 */
export const RESPONSIBLE = {
  name: "Leonardo",
  role: "Engenheiro civil, responsável técnico",
  /** Número do registro, sem o UF. Ex.: "5070552696". */
  crea: "",
  /** Sigla do estado do registro. Ex.: "SP". */
  creaUf: "",
  /**
   * Caminho da foto em /public. Está vazio de propósito: o Leonardo pediu para
   * não publicar a foto dele. Basta apontar para um arquivo (ex.: "/images/leonardo.jpg")
   * caso ele mude de ideia, que o retrato passa a aparecer na seção de autoridade.
   */
  photo: "",
  experience: "Mais de 5 anos dedicados a orçamento de obras",
  education: [
    "Engenharia Civil — Universidade São Francisco",
    "Pós-graduação em Estruturas de Concreto e Metálica — Unicamp",
  ],
} as const;
