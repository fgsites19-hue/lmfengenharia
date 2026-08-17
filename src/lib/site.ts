export const SITE_URL = "https://lmfengenharia.lovable.app";

export const SITE_NAME = "LMF Engenharia";

/** Número do WhatsApp em formato internacional, apenas dígitos. */
export const WHATSAPP_NUMBER = "5511999999999";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de solicitar um orçamento de obra com a LMF Engenharia.";

export const whatsappLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACT_EMAIL = "contato@lmfengenharia.com.br";
