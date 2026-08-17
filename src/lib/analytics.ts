/**
 * Camada de analytics leve.
 * Envia eventos para o dataLayer (GTM) e para o gtag (GA4), quando disponíveis.
 * Configure o ID do GA4 em VITE_GA_MEASUREMENT_ID para ativar a coleta.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID: string | undefined =
  (import.meta.env["VITE_GA_MEASUREMENT_ID"] as string | undefined) || undefined;

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  window.gtag?.("event", name, params);
  if (import.meta.env.DEV) console.info("[analytics]", name, params);
}

/** Conversão principal: envio do formulário de orçamento. */
export function trackLeadSubmit(params: AnalyticsParams = {}) {
  trackEvent("generate_lead", { form: "orcamento", ...params });
}

/** Clique no botão flutuante do WhatsApp. */
export function trackWhatsAppClick(location: string) {
  trackEvent("whatsapp_click", { location });
}
