import { useState } from "react";
import { X, Send, Briefcase, Rocket, PhoneCall, FileCheck2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export function WhatsAppButton({
  phoneNumber = "5492475400532",
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const { language } = useLanguage();
  const isEs = language === "es";

  const defaultMessage = isEs
    ? "¡Hola Leonardo! Vi tu portafolio y me gustaría conversar sobre una oportunidad laboral / proyecto de desarrollo."
    : "Hi Leonardo! I saw your portfolio and would like to discuss a job opportunity or development project.";

  const quickQuestions = isEs
    ? [
        {
          icon: <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0" />,
          label: "💼 Conversar sobre una propuesta laboral / vacante",
          text: "¡Hola Leonardo! Me interesa tu perfil para una vacante laboral (Backend / Full Stack). ¿Podríamos conversar?",
        },
        {
          icon: <Rocket className="w-3.5 h-3.5 text-cyan-400 shrink-0" />,
          label: "🚀 Consultar por desarrollo de software a medida",
          text: "¡Hola Leonardo! Me gustaría consultar por el desarrollo de un sistema / aplicación a medida.",
        },
        {
          icon: <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
          label: "💬 Coordinar una breve entrevista o llamada técnica",
          text: "¡Hola Leonardo! Me gustaría coordinar una breve llamada técnica para conocer más sobre tu experiencia.",
        },
        {
          icon: <FileCheck2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
          label: "📄 Consultar referencias de proyectos en producción",
          text: "¡Hola Leonardo! Vi tus proyectos Becerro Servicios y Yerba Buena en producción y quisiera hacerte unas consultas.",
        },
      ]
    : [
        {
          icon: <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0" />,
          label: "💼 Discuss a job opportunity or opening",
          text: "Hi Leonardo! I'm interested in your profile for a software engineering position (Backend / Full Stack). Could we talk?",
        },
        {
          icon: <Rocket className="w-3.5 h-3.5 text-cyan-400 shrink-0" />,
          label: "🚀 Inquire about custom software development",
          text: "Hi Leonardo! I would like to inquire about building a custom software platform or system.",
        },
        {
          icon: <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
          label: "💬 Schedule a brief technical call or interview",
          text: "Hi Leonardo! I would like to coordinate a brief technical interview / call to learn more about your experience.",
        },
        {
          icon: <FileCheck2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
          label: "📄 Inquire about your production projects",
          text: "Hi Leonardo! I reviewed your live systems (Becerro Servicios & Yerba Buena) and have a few questions.",
        },
      ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || customMsg || defaultMessage;
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div
      className="fixed z-[9999] flex flex-col items-end pointer-events-auto"
      style={{
        bottom: "calc(18px + env(safe-area-inset-bottom, 0px))",
        right: "calc(18px + env(safe-area-inset-right, 0px))",
      }}
    >
      {/* Ventana de Chat Rápido */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] sm:w-96 max-w-[360px] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-xs">
          {/* Header WhatsApp Verde Oficial */}
          <div className="bg-[#128C7E] text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white shadow-inner text-sm tracking-wider">
                  LH
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#128C7E]" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">Leonardo Holmer</h4>
                <p className="text-[11px] text-emerald-100 font-medium">
                  {isEs ? "En línea • Software Engineer & Full Stack" : "Online • Software Engineer & Full Stack"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer border-none bg-transparent"
              aria-label={isEs ? "Cerrar chat" : "Close chat"}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cuerpo del chat con estilo WhatsApp */}
          <div className="p-4 space-y-3 bg-[#0f172a] text-slate-200">
            {/* Burbuja de bienvenida */}
            <div className="bg-slate-800/90 text-slate-100 p-3.5 rounded-2xl rounded-tl-none border border-slate-700/50 shadow-sm leading-relaxed text-[12.5px]">
              {isEs ? (
                <>
                  👋 ¡Hola! Soy <strong>Leonardo Holmer</strong>. ¿En qué puedo ayudarte? Podés contactarme directamente para propuestas laborales, entrevistas o proyectos de desarrollo a medida.
                </>
              ) : (
                <>
                  👋 Hi! I'm <strong>Leonardo Holmer</strong>. How can I help you? Feel free to reach out directly for job opportunities, interviews, or custom software projects.
                </>
              )}
            </div>

            {/* Consultas frecuentes */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {isEs ? "Opciones rápidas:" : "Quick options:"}
              </span>
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSend(q.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 active:bg-slate-700 border border-slate-700/40 text-[11.5px] text-slate-200 transition-all font-medium cursor-pointer flex items-center gap-2"
                >
                  <span className="shrink-0">{q.icon}</span>
                  <span className="truncate">{q.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input de mensaje libre y botón de envío */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder={isEs ? "Escribí tu mensaje o propuesta..." : "Type your message or inquiry..."}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 py-2 px-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#25D366]"
            />
            <button
              type="button"
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md transition-transform hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer border-none"
              aria-label={isEs ? "Enviar por WhatsApp" : "Send via WhatsApp"}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Botón Flotante Principal Circular */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar chat de WhatsApp" : "Abrir chat directo de WhatsApp con Leonardo Holmer"}
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer border-none outline-none"
      >
        {/* Anillo de pulso suave (solo cuando está cerrado) */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40 pointer-events-none" />
        )}

        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 text-white" />
        ) : (
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 fill-current text-white" />
        )}

        {/* Badge flotante opcional en desktop */}
        {!isOpen && (
          <span className="hidden sm:inline-block absolute right-16 sm:right-20 bg-slate-900/95 text-white border border-slate-700/60 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {isEs ? "¡Hablemos por WhatsApp! (+54 9 2475 400532)" : "Let's chat on WhatsApp! (+54 9 2475 400532)"}
          </span>
        )}
      </button>
    </div>
  );
}

export default WhatsAppButton;

