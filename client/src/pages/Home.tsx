import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Download,
  Copy,
  Check,
  Sun,
  Moon,
  Globe,
  Code,
  Database,
  Server,
  Shield,
  Layers,
  Cpu,
  Cloud,
  ArrowRight,
  Briefcase,
  GraduationCap,
  BookOpen,
  MapPin,
  Sparkles,
  Terminal,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  Lock,
  Zap,
  TrendingUp,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  PROJECTS_DATA,
  SKILLS_DATA,
  TIMELINE_DATA,
  FAQ_DATA,
  t,
  ProjectData,
} from "@/lib/i18n";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "metrics", "principles", "projects", "skills", "timeline", "faq", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("leonardoholmer1@gmail.com");
    setCopiedEmail(true);
    toast.success(t(language, "hero.copied"));
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (projectFilter === "all") return true;
    if (projectFilter === "production") return project.category === "production";
    if (projectFilter === "backend")
      return project.technologies.some((tech) => tech.includes("Java") || tech.includes("Spring"));
    if (projectFilter === "academic") return project.category === "academic";
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      {/* Header Sticky Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <div
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-mono font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              LH
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white block group-hover:text-blue-600 transition-colors">
                Leonardo Holmer
              </span>
              <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 block -mt-1">
                Backend Developer
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {[
              { id: "about", label: t(language, "nav.about") },
              { id: "projects", label: t(language, "nav.projects") },
              { id: "principles", label: t(language, "nav.principles") },
              { id: "skills", label: t(language, "nav.skills") },
              { id: "timeline", label: t(language, "nav.timeline") },
              { id: "faq", label: t(language, "nav.faq") },
              { id: "contact", label: t(language, "nav.contact") },
            ].map((navItem) => (
              <button
                key={navItem.id}
                onClick={() => scrollToSection(navItem.id)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 ${
                  activeSection === navItem.id
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {navItem.label}
                {activeSection === navItem.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-cyan-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Header Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-900/50 transition-colors"
              title="Cambiar Idioma / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>{language === "es" ? "EN" : "ES"}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => toggleTheme?.()}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:border-blue-500 bg-white/50 dark:bg-slate-900/50 transition-colors"
              title={theme === "dark" ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* CV Download CTA */}
            <a
              href="/Leonardo_Holmer_CV.pdf"
              download="Leonardo_Holmer_CV.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-sm transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => toggleTheme?.()}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2">
            {[
              { id: "about", label: t(language, "nav.about") },
              { id: "projects", label: t(language, "nav.projects") },
              { id: "principles", label: t(language, "nav.principles") },
              { id: "skills", label: t(language, "nav.skills") },
              { id: "timeline", label: t(language, "nav.timeline") },
              { id: "faq", label: t(language, "nav.faq") },
              { id: "contact", label: t(language, "nav.contact") },
            ].map((navItem) => (
              <button
                key={navItem.id}
                onClick={() => scrollToSection(navItem.id)}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {navItem.label}
              </button>
            ))}
            <div className="pt-2">
              <a
                href="/Leonardo_Holmer_CV.pdf"
                download="Leonardo_Holmer_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-xs shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>{t(language, "hero.cta.cv")}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
            <span>{t(language, "hero.badge")}</span>
          </div>

          {/* Main Title & Value Proposition */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            {t(language, "hero.title")}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              {t(language, "hero.titleHighlight")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8 font-normal">
            {t(language, "hero.description")}
          </p>

          {/* Quick Credibility Chips */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              t(language, "hero.chip.clean"),
              t(language, "hero.chip.security"),
              t(language, "hero.chip.production"),
              t(language, "hero.chip.tests"),
            ].map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm"
              >
                ✓ {chip}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
            >
              <span>{t(language, "hero.cta.projects")}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <a
              href="/Leonardo_Holmer_CV.pdf"
              download="Leonardo_Holmer_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all hover:scale-105 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>{t(language, "hero.cta.cv")}</span>
            </a>

            <a
              href="https://linkedin.com/in/leonardoholmer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-all hover:scale-105 shadow-sm"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/LeoHolmer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-all hover:scale-105 shadow-sm"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <button
              onClick={copyEmailToClipboard}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all hover:scale-105 shadow-sm"
              title="Copiar leonardoholmer1@gmail.com"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>{t(language, "hero.cta.copyEmail")}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                count: t(language, "metrics.projectsCount"),
                label: t(language, "metrics.projectsLabel"),
                desc: t(language, "metrics.projectsDesc"),
                icon: <Briefcase className="w-5 h-5 text-blue-600" />,
              },
              {
                count: t(language, "metrics.experienceCount"),
                label: t(language, "metrics.experienceLabel"),
                desc: t(language, "metrics.experienceDesc"),
                icon: <GraduationCap className="w-5 h-5 text-indigo-600" />,
              },
              {
                count: t(language, "metrics.testingCount"),
                label: t(language, "metrics.testingLabel"),
                desc: t(language, "metrics.testingDesc"),
                icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
              },
              {
                count: t(language, "metrics.securityCount"),
                label: t(language, "metrics.securityLabel"),
                desc: t(language, "metrics.securityDesc"),
                icon: <Shield className="w-5 h-5 text-red-500" />,
              },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono">
                    {metric.count}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">{metric.icon}</div>
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{metric.label}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Bio Column */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase block mb-3">
                {t(language, "about.tag")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                {t(language, "about.title")}
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                <p>{t(language, "about.p1")}</p>
                <p>{t(language, "about.p2")}</p>
              </div>

              {/* Languages */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  {t(language, "about.languagesTitle")}
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm">
                    🇦🇷 {t(language, "about.lang1")}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm">
                    🇺🇸 {t(language, "about.lang2")}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm">
                    🇧🇷 {t(language, "about.lang3")}
                  </span>
                </div>
              </div>
            </div>

            {/* University & Credentials Column */}
            <div className="lg:col-span-5 space-y-4">
              <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {t(language, "about.degree1")}
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-cyan-400 font-mono">
                      {t(language, "about.degree1Sub")}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Universidad Nacional del Noroeste de la Prov. de Buenos Aires (UNNOBA). Carrera orientada a sistemas de alta disponibilidad, desarrollo concurrente, redes y algoritmos.
                </p>
              </Card>

              <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {t(language, "about.degree2")}
                    </h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                      {t(language, "about.degree2Sub")}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Título intermedio de grado universitario enfocado en diseño de bases de datos, análisis de requerimientos empresariales y arquitectura de software.
                </p>
              </Card>

              <Card className="p-5 bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block">
                    {t(language, "about.locationTitle")}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {t(language, "about.locationValue")}
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles Section */}
      <section
        id="principles"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase block mb-3">
              {t(language, "principles.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {t(language, "principles.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {t(language, "principles.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Layers className="w-6 h-6 text-blue-600" />,
                title: t(language, "principles.1.title"),
                desc: t(language, "principles.1.desc"),
              },
              {
                icon: <Shield className="w-6 h-6 text-red-500" />,
                title: t(language, "principles.2.title"),
                desc: t(language, "principles.2.desc"),
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
                title: t(language, "principles.3.title"),
                desc: t(language, "principles.3.desc"),
              },
              {
                icon: <Terminal className="w-6 h-6 text-amber-500" />,
                title: t(language, "principles.4.title"),
                desc: t(language, "principles.4.desc"),
              },
            ].map((principle, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-5 border border-slate-200/60 dark:border-slate-700/60">
                  {principle.icon}
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Section (The 4 Star Projects) */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase block mb-3">
                {t(language, "projects.tag")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t(language, "projects.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
                {t(language, "projects.subtitle")}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              {[
                { id: "all", label: t(language, "projects.filter.all") },
                { id: "production", label: t(language, "projects.filter.production") },
                { id: "backend", label: t(language, "projects.filter.backend") },
                { id: "academic", label: t(language, "projects.filter.academic") },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    projectFilter === tab.id
                      ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project: ProjectData) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6 sm:p-8">
                  {/* Top Bar with Badge & Category */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className={`font-mono text-xs px-2.5 py-0.5 ${
                        project.category === "production"
                          ? "border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
                          : "border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-500/10"
                      }`}
                    >
                      {project.badge[language]}
                    </Badge>

                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 font-medium leading-relaxed">
                    {project.subtitle[language]}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights[language].slice(0, 3).map((hl, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 shrink-0 mt-1.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={`/project/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>{t(language, "projects.btn.viewDetails")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>{t(language, "projects.btn.liveDemo")}</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 text-xs font-semibold"
                      >
                        <Github className="w-3 h-3" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase block mb-3">
              {t(language, "skills.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {t(language, "skills.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {t(language, "skills.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.map((cat, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${cat.color}`} />
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {cat.title[language]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border border-slate-200/70 dark:border-slate-800 font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase block mb-3">
              {t(language, "timeline.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {t(language, "timeline.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t(language, "timeline.subtitle")}
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
            {TIMELINE_DATA.map((entry, idx) => (
              <div key={idx} className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-600 group-hover:scale-125 transition-transform" />

                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                    {entry.year}
                  </span>
                  {entry.institution && (
                    <span className="text-xs text-slate-500 font-mono">· {entry.institution}</span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {entry.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {entry.description[language]}
                </p>

                {entry.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter & Tech Lead FAQ */}
      <section
        id="faq"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase block mb-3">
              {t(language, "faq.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {t(language, "faq.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t(language, "faq.subtitle")}
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <Card
                key={idx}
                className="overflow-hidden bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-sm"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-sm sm:text-base hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.question[language]}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      expandedFAQ === idx ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
                </button>
                {expandedFAQ === idx && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-2 pt-4">
                    {faq.answer[language]}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase block mb-3">
              {t(language, "contact.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {t(language, "contact.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t(language, "contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  {t(language, "contact.emailCard")}
                </h3>
                <p className="text-xs text-slate-500 font-mono break-all mb-4">
                  leonardoholmer1@gmail.com
                </p>
              </div>
              <Button
                onClick={copyEmailToClipboard}
                variant="outline"
                className="w-full text-xs font-semibold border-slate-200 dark:border-slate-700"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500 mr-1.5" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 mr-1.5" />
                    <span>{t(language, "contact.btn.email")}</span>
                  </>
                )}
              </Button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  {t(language, "contact.linkedinCard")}
                </h3>
                <p className="text-xs text-slate-500 font-mono mb-4">/in/leonardoholmer</p>
              </div>
              <a
                href="https://linkedin.com/in/leonardoholmer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t(language, "contact.btn.linkedin")}</span>
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-500/10 text-slate-800 dark:text-slate-200 flex items-center justify-center mx-auto mb-4">
                  <Github className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  {t(language, "contact.githubCard")}
                </h3>
                <p className="text-xs text-slate-500 font-mono mb-4">@LeoHolmer</p>
              </div>
              <a
                href="https://github.com/LeoHolmer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 text-slate-800 dark:text-slate-200 font-semibold text-xs shadow-sm transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t(language, "contact.btn.github")}</span>
              </a>
            </div>

            {/* CV Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  {t(language, "contact.cvCard")}
                </h3>
                <p className="text-xs text-slate-500 font-mono mb-4">PDF Oficial 2026</p>
              </div>
              <a
                href="/Leonardo_Holmer_CV.pdf"
                download="Leonardo_Holmer_CV.pdf"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t(language, "contact.btn.cv")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">Leonardo Holmer</span>
            <span>·</span>
            <span>© 2026 {t(language, "footer.rights")}</span>
          </div>

          <p>{t(language, "footer.builtWith")}</p>
        </div>
      </footer>
    </div>
  );
}
