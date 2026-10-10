import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPage() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="outline"
          onClick={() => setLocation("/")}
          className="mb-8 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {isEs ? "Volver al Portafolio" : "Back to Portfolio"}
        </Button>

        <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-600">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{isEs ? "Política de Privacidad" : "Privacy Policy"}</h1>
                <p className="text-xs text-slate-500 font-mono">
                  {isEs ? "Última actualización: Octubre 2026" : "Last updated: October 2026"}
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-6">
              <section>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  {isEs ? "1. Responsable del Tratamiento" : "1. Data Controller"}
                </h3>
                <p>
                  {isEs
                    ? "Este sitio web es el portafolio profesional de Leonardo Holmer, Desarrollador de Software enfocado en backend y arquitectura de sistemas."
                    : "This website is the professional portfolio of Leonardo Holmer, Software Developer specializing in backend and systems architecture."}
                </p>
              </section>

              <section>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  {isEs ? "2. Tratamiento de Datos y Cookies" : "2. Data Processing & Cookies"}
                </h3>
                <p>
                  {isEs
                    ? "El portafolio opera con una política de recolección mínima. No se registran datos personales ni se comercializa información con terceros. El navegador almacena únicamente preferencias de interfaz (modo oscuro y lenguaje) en localStorage."
                    : "The portfolio strictly adheres to data minimization. No personal information is gathered or sold to third parties. Only interface preferences (dark theme and language) are kept in browser localStorage."}
                </p>
              </section>

              <section>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  {isEs ? "3. Canales de Contacto" : "3. Contact Channels"}
                </h3>
                <p>
                  {isEs
                    ? "Para consultas técnicas, oportunidades laborales o dudas sobre esta política, puedes comunicarte directamente a leonardoholmer1@gmail.com o a través de mi perfil de LinkedIn."
                    : "For technical queries, work opportunities, or questions regarding this policy, reach out directly at leonardoholmer1@gmail.com or via LinkedIn."}
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
