import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Shield, FileText, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LegalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialTab?: "privacy" | "terms";
}

export function LegalModal({ open, onOpenChange, initialTab = "privacy" }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">(initialTab);
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 p-6 rounded-2xl">
        <DialogHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <button
              type="button"
              onClick={() => setActiveTab("privacy")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === "privacy"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{isEs ? "Política de Privacidad" : "Privacy Policy"}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("terms")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === "terms"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isEs ? "Términos y Condiciones" : "Terms & Conditions"}</span>
            </button>
          </div>
          <DialogTitle className="text-xl font-bold">
            {activeTab === "privacy"
              ? isEs
                ? "Política de Privacidad"
                : "Privacy Policy"
              : isEs
              ? "Términos y Condiciones de Uso"
              : "Terms and Conditions of Use"}
          </DialogTitle>
          <p className="text-xs text-slate-500 font-mono">
            {isEs ? "Última actualización: Octubre 2026" : "Last updated: October 2026"}
          </p>
        </DialogHeader>

        <div className="space-y-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
          {activeTab === "privacy" ? (
            isEs ? (
              <>
                <section>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    1. Responsable del Tratamiento
                  </h4>
                  <p>
                    El presente sitio web es el portafolio profesional de <strong>Leonardo Holmer</strong>, Desarrollador de Software y estudiante de Ingeniería en Informática.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    2. Datos Recopilados y Almacenamiento Local
                  </h4>
                  <p>
                    Este sitio opera de forma estática y orientada a la privacidad. No almacena bases de datos con información personal identificable. Las únicas tecnologías de almacenamiento empleadas corresponden a <code>localStorage</code> del navegador con el fin exclusivo de recordar tus preferencias de visualización (modo claro/oscuro e idioma seleccionado).
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    3. Contacto Directo
                  </h4>
                  <p>
                    Cualquier comunicación iniciada mediante correo electrónico (<code>leonardoholmer1@gmail.com</code>), perfil de LinkedIn o repositorio de GitHub se realiza directamente a través de dichas plataformas de terceros bajo sus respectivas políticas de privacidad.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    4. Enlaces a Sitios de Terceros
                  </h4>
                  <p>
                    El sitio contiene enlaces a proyectos en producción y redes externas (como <code>yerbabuenaok.com</code>, <code>becerroservicios.com</code>, LinkedIn y GitHub). Leonardo Holmer no tiene control ni asume responsabilidad por las políticas o prácticas de privacidad de dichos sitios.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    1. Data Controller
                  </h4>
                  <p>
                    This website serves as the professional portfolio of <strong>Leonardo Holmer</strong>, Backend Developer and Computer Engineering student.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    2. Collected Data & Local Storage
                  </h4>
                  <p>
                    This portfolio operates with strict privacy principles. It does not collect or store personal identifying data in backend databases. The only storage mechanisms used are browser <code>localStorage</code> to preserve your preferred theme (dark/light) and language.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    3. Direct Contact
                  </h4>
                  <p>
                    Any correspondence initiated via email (<code>leonardoholmer1@gmail.com</code>), LinkedIn, or GitHub is governed by those third-party platforms and their respective privacy policies.
                  </p>
                </section>
              </>
            )
          ) : isEs ? (
            <>
              <section>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  1. Objeto y Propiedad Intelectual
                </h4>
                <p>
                  Este sitio web tiene carácter exclusivamente divulgativo y profesional. Todo el diseño, código del portafolio y marcas son propiedad intelectual de Leonardo Holmer. Los logotipos de tecnologías (Java, Spring, PostgreSQL, React, etc.) pertenecen a sus respectivos titulares.
                </p>
              </section>

              <section>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  2. Uso del Currículum Vitae (CV)
                </h4>
                <p>
                  El documento oficial de Currículum Vitae descargable desde este portal se ofrece con el fin de evaluación laboral y contacto profesional. Queda prohibida su alteración, reproducción comercial no autorizada o divulgación maliciosa.
                </p>
              </section>

              <section>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  3. Disponibilidad y Exención de Responsabilidad
                </h4>
                <p>
                  El portafolio se ofrece &ldquo;tal cual&rdquo; sin garantías explícitas de disponibilidad ininterrumpida. Leonardo Holmer no se responsabiliza de eventuales fallos técnicos de proveedores de hosting o redes externas.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  1. Purpose & Intellectual Property
                </h4>
                <p>
                  This website is for professional showcase purposes. All portfolio content, design, and source code belong to Leonardo Holmer. Third-party technology trademarks belong to their respective owners.
                </p>
              </section>

              <section>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  2. CV Document Use
                </h4>
                <p>
                  The downloadable Curriculum Vitae PDF is made available solely for recruitment, hiring evaluation, and professional inquiries. Unauthorized commercial reuse or modification is prohibited.
                </p>
              </section>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default LegalModal;
