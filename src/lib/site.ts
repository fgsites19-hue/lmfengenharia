export const SITE_URL = "https://lmfengenharia.lovable.app";

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
