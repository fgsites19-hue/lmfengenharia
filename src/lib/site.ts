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
  crea: "",
  education: [
    "Engenharia Civil — Universidade São Francisco",
    "Pós-graduação em Estruturas de Concreto e Metálica — Unicamp",
  ],
} as const;
