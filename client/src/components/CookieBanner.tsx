import { useState, useEffect } from "react";
import { Cookie, Shield, Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CookieBannerProps {
  onOpenPrivacy?: () => void;
}

export function CookieBanner({ onOpenPrivacy }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();
  const isEs = language === "es";

  useEffect(() => {
    const consent = localStorage.getItem("portfolio_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("portfolio_cookie_consent", "accepted");
    window.dispatchEvent(new Event("portfolio_cookie_consent_updated"));
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("portfolio_cookie_consent", "declined");
    window.dispatchEvent(new Event("portfolio_cookie_consent_updated"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xl">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>{isEs ? "Aviso de Privacidad y Cookies" : "Privacy & Cookie Notice"}</span>
              <Shield className="w-3.5 h-3.5 text-blue-500" />
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              {isEs
                ? "Este portafolio utiliza únicamente almacenamiento local para recordar tus preferencias de tema (claro/oscuro) e idioma. No se rastrea información personal sin tu consentimiento."
                : "This portfolio uses only local storage to remember your theme (light/dark) and language preferences. No personal information is tracked without your consent."}
            </p>
            {onOpenPrivacy && (
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-xs text-blue-600 dark:text-blue-400 underline hover:opacity-80 mt-1 cursor-pointer"
              >
                {isEs ? "Leer política de privacidad" : "Read privacy policy"}
              </button>
            )}
            <div className="flex items-center gap-2.5 mt-4">
              <button
                type="button"
                onClick={handleAccept}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{isEs ? "Aceptar" : "Accept"}</span>
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>{isEs ? "Solo esenciales" : "Essential only"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default CookieBanner;
