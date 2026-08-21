import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";

export function WhatsAppButton({ raised = false }: { raised?: boolean }) {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a LMF Engenharia no WhatsApp"
      onClick={() => trackWhatsAppClick("floating_button")}
      data-wa-float
      // `raised` sobe o botão enquanto o aviso de privacidade ocupa o rodapé.
      // Via transform (e não `bottom`) para não disputar com as utilitárias de
      // posicionamento do Tailwind e para animar sem recalcular layout.
      style={raised ? { transform: "translateY(-9.5rem)" } : undefined}
      className="group fixed bottom-4 right-4 z-[56] flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 text-background shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8 md:p-4"
    >
      <MessageCircle className="size-5 shrink-0 text-white md:size-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 group-hover:max-w-[12rem] md:inline">
        Falar no WhatsApp
      </span>
    </a>
  );
}
