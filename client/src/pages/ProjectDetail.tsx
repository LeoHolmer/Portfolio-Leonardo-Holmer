import { useParams, useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Shield,
  Layers,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Terminal,
  Sun,
  Moon,
  Globe,
  ArrowRight,
  Database,
  Lock,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS_DATA, t } from "@/lib/i18n";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === id);
  const project = projectIndex !== -1 ? PROJECTS_DATA[projectIndex] : null;

  const prevProject = projectIndex > 0 ? PROJECTS_DATA[projectIndex - 1] : null;
  const nextProject =
    projectIndex !== -1 && projectIndex < PROJECTS_DATA.length - 1
      ? PROJECTS_DATA[projectIndex + 1]
      : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center p-6">
        <Card className="max-w-md p-8 text-center border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
          <Terminal className="w-12 h-12 mx-auto text-blue-600 mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold mb-2">
            {language === "es" ? "Proyecto no encontrado" : "Project not found"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
            {language === "es"
              ? "El identificador del proyecto no coincide con ninguno de los registros disponibles."
              : "The requested project identifier does not match any registered portfolio projects."}
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === "es" ? "Volver al Portafolio" : "Back to Portfolio"}
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-600/10" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl dark:bg-cyan-600/10" />
      </div>

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 -ml-2 text-sm font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t(language, "projects.modal.back")}</span>
          </Button>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
              title="Switch language / Cambiar idioma"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{language === "es" ? "EN" : "ES"}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => toggleTheme?.()}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
              title={theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Project Header Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge
              variant="outline"
              className="border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-500/10 font-mono text-xs px-3 py-1"
            >
              {project.badge[language]}
            </Badge>
            <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed mb-6 font-medium">
            {project.subtitle[language]}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t(language, "projects.btn.liveDemo")}</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-semibold text-sm transition-all hover:scale-105 shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>{t(language, "projects.btn.github")}</span>
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-12 p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>{language === "es" ? "Stack Tecnológico Implementado" : "Implemented Technology Stack"}</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column: Deep Overview & Architecture (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Card */}
            <Card className="p-6 sm:p-8 bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-blue-600" />
                <span>{language === "es" ? "Descripción & Alcance Técnico" : "Technical Scope & Overview"}</span>
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-base">
                {project.description[language]}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {project.longDescription[language]}
              </p>
            </Card>

            {/* Architecture Breakdown Card */}
            <Card className="p-6 sm:p-8 bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-blue-600" />
                <span>{t(language, "projects.modal.architecture")}</span>
              </h2>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-6 font-mono">
                {project.architecture.pattern[language]}
              </p>

              <div className="space-y-3 mb-6">
                {project.architecture.layers[language].map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800 text-sm flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{layer}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/40 text-xs font-mono text-blue-800 dark:text-blue-300">
                <Database className="w-4 h-4 shrink-0 text-blue-600" />
                <span>
                  <strong>{language === "es" ? "Motor de Persistencia:" : "Persistence Engine:"}</strong>{" "}
                  {project.architecture.database[language]}
                </span>
              </div>
            </Card>

            {/* Security Highlights (Zero-Trust) */}
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-white via-white to-red-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-red-950/10 border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-red-500" />
                <span>{t(language, "projects.modal.security")}</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                {language === "es"
                  ? "Diseño defensivo estricto sin exposición de debilidades ni credenciales sensibles."
                  : "Defensive engineering implemented without exposing internal credentials or vulnerability vectors."}
              </p>

              <ul className="space-y-3">
                {project.securityHighlights[language].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Right Column: Challenges, Solutions & Endpoints (1 col) */}
          <div className="space-y-8">
            {/* Highlights Card */}
            <Card className="p-6 bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-600" />
                <span>{language === "es" ? "Puntos Críticos" : "Key Highlights"}</span>
              </h3>
              <ul className="space-y-3">
                {project.highlights[language].map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Challenges & Solutions */}
            <Card className="p-6 bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>{t(language, "projects.modal.challenges")}</span>
              </h3>
              <ul className="space-y-2 mb-6">
                {project.challenges[language].map((ch, idx) => (
                  <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 bg-amber-50/50 dark:bg-amber-950/20 p-2.5 rounded border border-amber-200/40 dark:border-amber-900/30">
                    {ch}
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-emerald-500" />
                <span>{t(language, "projects.modal.solutions")}</span>
              </h3>
              <ul className="space-y-2">
                {project.solutions[language].map((sol, idx) => (
                  <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 bg-emerald-50/50 dark:bg-emerald-950/20 p-2.5 rounded border border-emerald-200/40 dark:border-emerald-900/30">
                    {sol}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Primary Endpoints Preview */}
            {project.mainEndpoints && project.mainEndpoints.length > 0 && (
              <Card className="p-6 bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-600" />
                  <span>{t(language, "projects.modal.endpoints")}</span>
                </h3>
                <div className="space-y-2.5">
                  {project.mainEndpoints.map((ep, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 font-mono text-xs"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            ep.method === "GET"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : ep.method === "POST"
                              ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                              : ep.method === "PUT"
                              ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                              : "bg-red-500/10 text-red-600 dark:text-red-400"
                          }`}
                        >
                          {ep.method}
                        </span>
                        <span className="text-slate-800 dark:text-slate-200 font-semibold">{ep.path}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                        {ep.desc[language]}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Project Navigation Footer (Prev / Next) */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/project/${prevProject.id}`}
              className="w-full sm:w-auto p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 bg-white dark:bg-slate-900 transition-all text-left flex items-center gap-3 group"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all" />
              <div>
                <span className="text-[11px] text-slate-500 font-mono uppercase block">
                  {language === "es" ? "Proyecto Anterior" : "Previous Project"}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {prevProject.title.split("·")[0]}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/project/${nextProject.id}`}
              className="w-full sm:w-auto p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 bg-white dark:bg-slate-900 transition-all text-right flex items-center justify-end gap-3 group"
            >
              <div>
                <span className="text-[11px] text-slate-500 font-mono uppercase block">
                  {language === "es" ? "Siguiente Proyecto" : "Next Project"}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {nextProject.title.split("·")[0]}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>
    </div>
  );
}
