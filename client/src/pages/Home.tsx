import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Server,
  Lock,
  Download,
  Moon,
  Sun,
  ChevronDown,
  Zap,
  GitBranch,
  Shield,
  Cpu,
  Cloud,
  Terminal,
  Layers,
  ArrowRight,
  TrendingUp,
  Briefcase,
  CheckCircle,
  Calendar,
  Users,
  Sparkles,
  Rocket,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLocation } from "wouter";

/**
 * DESIGN: Premium Backend Developer Portfolio - ENHANCED VERSION
 * - Maximalist aesthetics with sophisticated animations
 * - Senior-level professionalism
 * - Fluid microinteractions and elegant transitions
 * - Timeline updated to 2026
 */

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  highlights: string[];
  icon: React.ReactNode;
}

interface Skill {
  category: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "education" | "project" | "skill";
}

interface FAQ {
  question: string;
  answer: string;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const [, navigate] = useLocation();
  const projectIds = ["taskflow", "greatevents", "allmusic"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Statistics with counter animation
  const stats = [
    { label: "Projects Completed", value: "3+", icon: <Briefcase className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { label: "Lines of Code", value: "10K+", icon: <Code className="w-6 h-6" />, color: "from-emerald-500 to-teal-500" },
    { label: "Years of Experience", value: "2+", icon: <TrendingUp className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
    { label: "Uptime Rate", value: "99.9%", icon: <CheckCircle className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
  ];

  // Timeline with 2026
  const timeline: TimelineEvent[] = [
    {
      year: "2020",
      title: "Programming Foundations",
      description: "Started Computer Science Engineering studies. First steps in software development",
      type: "education",
    },
    {
      year: "2021",
      title: "Computing Fundamentals",
      description: "Mastered Data Structures, Computer Architecture, Python and Assembler. Strong foundation in algorithms and systems",
      type: "skill",
    },
    {
      year: "2022",
      title: "Technical Stack Expansion",
      description: "Learned Golang, C++, Networking, Operating Systems and Cloud. Preparation for backend specialization",
      type: "skill",
    },
    {
      year: "2024",
      title: "AllMusic API",
      description: "Music platform with user management, songs and playlists. JWT authentication, rigorous validation and Swagger documentation",
      type: "project",
    },
    {
      year: "2024",
      title: "GreatEvents API",
      description: "Event management system with state machines, Domain Events, RBAC and complex business validations",
      type: "project",
    },
    {
      year: "2025",
      title: "TaskFlow API",
      description: "REST API with clean architecture, soft delete, audit trail, >85% testing, Docker and production best practices",
      type: "project",
    },
    {
      year: "2025",
      title: "Backend Expertise Consolidation",
      description: "Mastery in microservices, CI/CD, exhaustive testing, OWASP security, query optimization and production best practices",
      type: "skill",
    },
    {
      year: "2026",
      title: "Junior Backend Developer - Expert Level",
      description: "Available for roles in innovative companies. Specialization in scalable architecture, security, testing and backend excellence",
      type: "education",
    },
  ];

  // FAQ mejorado
  const faqs: FAQ[] = [
    {
      question: "What's your experience with microservices?",
      answer:
        "I have experience designing APIs that can scale to microservices architectures. I understand concepts like service discovery, API gateways, asynchronous communication with RabbitMQ, and resilience patterns like circuit breakers.",
    },
    {
      question: "How do you handle scalability in your projects?",
      answer:
        "I apply clean architecture principles, use strategic caching (Redis), optimize queries with indexes, implement pagination, and design stateless APIs for horizontal scaling. I also consider data sharding when necessary.",
    },
    {
      question: "What testing methodologies do you use?",
      answer:
        "I implement testing pyramid: unit tests with JUnit and Mockito, integration tests with Spring Test, and E2E tests. I aim for >80% coverage on critical code. I also use TDD for important features.",
    },
    {
      question: "What's your approach to security?",
      answer:
        "I implement JWT for authentication, input validation with Bean Validation, HTTPS/TLS, principle of least privilege, and follow OWASP Top 10. I do security-focused code reviews and consider SQL injection, CSRF and XSS.",
    },
    {
      question: "How do you document your code?",
      answer:
        "I use Swagger/OpenAPI for API documentation, detailed JavaDoc for code, and README with setup instructions. I create documentation that's useful for other developers and future code maintainers.",
    },
    {
      question: "Are you available for work?",
      answer:
        "Available for freelance projects, full-time contracts, and mentoring opportunities. Flexible with schedules, willing to learn new technologies, and committed to technical excellence.",
    },
  ];

  const projects: Project[] = [
    {
      title: "TaskFlow API",
      description: "REST API for task management with clean architecture and rigorous validation",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "JUnit"],
      github: "https://github.com/LeoHolmer/taskflow-api",
      highlights: [
        "Clean architecture with layer separation (Controller → Service → Repository)",
        "JWT authentication with role-based access control (RBAC)",
        "Soft delete, change audit trail and unit/integration tests >85%",
        "Dockerized application with docker-compose for multiple environments",
      ],
      icon: <GitBranch className="w-6 h-6" />,
    },
    {
      title: "GreatEvents API",
      description: "Event management platform with complete lifecycle and complex business rules",
      technologies: ["Java", "Spring Boot", "Spring Security", "JPA", "PostgreSQL"],
      github: "https://github.com/LeoHolmer/greatevents",
      highlights: [
        "Domain models with state management and state machines",
        "Strict business rules with multi-layer validation",
        "Role-based access control with granular authorization",
        "Automatic notifications via domain events (Domain Events)",
      ],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "AllMusic API",
      description: "Music platform backend with user management, songs and playlists",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Swagger"],
      github: "https://github.com/LeoHolmer/AllMusic",
      highlights: [
        "JWT authentication with resource ownership validation",
        "Song and playlist management with granular per-user permissions",
        "Exhaustive input validation and real-world consumption-oriented design",
        "Interactive documentation with Swagger/OpenAPI",
      ],
      icon: <Layers className="w-6 h-6" />,
    },
  ];

  const skills: Skill[] = [
    {
      category: "Languages & Frameworks",
      items: ["Java 11+", "Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "Maven"],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "ER Modeling", "Advanced SQL", "Indexes & Optimization", "pgAdmin"],
      icon: <Database className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      category: "DevOps & Infrastructure",
      items: ["Docker", "Docker Compose", "CI/CD", "Git", "Linux", "Gradle"],
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      category: "Security & Testing",
      items: ["JWT", "TLS/SSL", "OWASP Top 10", "JUnit", "Mockito", "Integration Testing"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
    },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Animated Background Gradient - Mejorado */}
      <div
        className={`fixed inset-0 -z-10 transition-opacity duration-500 pointer-events-none ${
          theme === "dark" ? "opacity-30" : "opacity-10"
        }`}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Animated Grid Background */}
      <div
        className={`fixed inset-0 -z-10 pointer-events-none transition-opacity duration-500 ${
          theme === "dark" ? "opacity-5" : "opacity-[0.02]"
        }`}
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.05) 75%, rgba(59, 130, 246, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.05) 75%, rgba(59, 130, 246, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Header Sticky - Mejorado */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? theme === "dark"
              ? "bg-gray-900/90 shadow-2xl shadow-blue-500/10 border-b border-gray-800/50 backdrop-blur-xl"
              : "bg-white/90 shadow-2xl shadow-blue-500/10 border-b border-gray-200/50 backdrop-blur-xl"
            : theme === "dark"
            ? "bg-gray-950/50 border-b border-gray-800/20 backdrop-blur-md"
            : "bg-white/50 border-b border-gray-200/20 backdrop-blur-md"
        }`}
      >
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
  {/* Logo + Name */}
  <div className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity duration-300">
    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 group-hover:rotate-12">
      <Terminal className="w-5 h-5 text-white" />
    </div>
    <div>
      <h1 className={`text-lg font-bold transition-colors duration-300 ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>
        Leonardo Holmer
      </h1>
      <p className="text-xs font-semibold transition-colors duration-300 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
        Backend Developer
      </p>
    </div>
  </div>

  {/* Desktop: Full Navigation + Theme */}
  <div className="hidden md:flex gap-8 items-center">
    <nav className="flex gap-6 items-center">
      {["about", "stats", "timeline", "projects", "skills", "faq", "contact"].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item)}
          className={`text-xs font-semibold transition-all duration-300 relative group whitespace-nowrap uppercase tracking-wide ${
            activeSection === item
              ? "text-blue-600"
              : theme === "dark"
              ? "text-gray-400 hover:text-gray-100"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {item === "stats" ? "Stats" : item === "timeline" ? "Timeline" : item === "faq" ? "FAQ" : item.charAt(0).toUpperCase() + item.slice(1)}
          {activeSection === item && (
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50" />
          )}
        </button>
      ))}
    </nav>

    <button
  onClick={toggleTheme}
  className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
    theme === "dark"
      ? "text-yellow-400 hover:text-yellow-300"
      : "text-gray-700 hover:text-blue-600"
  }`}
  title={theme === "dark" ? "Light mode" : "Dark mode"}
>
  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
</button>
  </div>

  {/* Mobile: Only Theme Toggle */}
  <button
  onClick={toggleTheme}
  className={`p-2 transition-all duration-300 transform hover:scale-110 ${
  theme === "dark"
    ? "text-yellow-400 hover:text-yellow-300"
    : "text-gray-700 hover:text-blue-600"
}`}
  title={theme === "dark" ? "Light mode" : "Dark mode"}
>
  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
</button>
</div>
      </header>

      {/* Hero Section - Mejorado */}
      <section
        className={`pt-32 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950"
            : "bg-gradient-to-b from-blue-50 via-white to-white"
        }`}
      >
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/10 border border-blue-500/30 mb-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
              <Cpu className="w-4 h-4 text-blue-600 group-hover:animate-spin" />
              <span className="text-sm font-semibold text-blue-600">Backend Developer • Java • Spring Boot</span>
            </div>

            <h2
              className={`text-6xl sm:text-7xl lg:text-8xl font-black mb-6 transition-colors duration-300 leading-tight letter-spacing-tight ${
                theme === "dark" ? "text-gray-50" : "text-gray-950"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              Building Scalable
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                & Robust APIs
              </span>
            </h2>

            <p
              className={`text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl transition-colors duration-300 font-light ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Advanced student of Computer Science Engineering specializing in clean architecture, security and production-oriented backend development. Passionate about quality code.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Java", "Spring Boot", "PostgreSQL", "Docker", "REST APIs", "JWT"].map((tech) => (
                <Badge
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-600 border border-blue-500/40 hover:border-blue-500/70 hover:bg-blue-600/30 transition-all duration-300 transform hover:scale-110 cursor-default font-semibold"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg hover:shadow-blue-500/40 flex items-center gap-2 uppercase tracking-wide text-sm"
              >
                <Rocket className="w-5 h-5" />
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/Leonardo_Holmer_CV.pdf"
                download="Leonardo_Holmer_CV.pdf"
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border-2 flex items-center gap-2 uppercase tracking-wide text-sm ${
                  theme === "dark"
                    ? "border-gray-700 hover:border-gray-600 bg-gray-800/50 hover:bg-gray-700/50 text-gray-100 hover:shadow-lg"
                    : "border-gray-300 hover:border-gray-400 bg-gray-100/50 hover:bg-gray-200/50 text-gray-900 hover:shadow-lg"
                }`}
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-blue-600/70" />
          </div>
        </div>
      </section>

      {/* Statistics - Compact */}
      <section
        id="stats"
        className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-900 to-gray-950 border-t border-gray-800/50"
            : "bg-gradient-to-r from-blue-50 to-white border-t border-gray-200/50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h3
              className={`section-title text-3xl font-black mb-2 transition-colors duration-300 ${
                theme === "dark" ? "text-gray-50" : "text-gray-950"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              My Statistics
            </h3>
            <p
              className={`text-sm font-light transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Key metrics showcasing my professional achievements and experience
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`p-4 text-center transition-all duration-500 transform hover:scale-105 hover:shadow-lg animate-in fade-in group cursor-default border-2 ${
                  theme === "dark"
                    ? "border-gray-700/30 bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:from-gray-800/60 hover:to-gray-800/40 hover:border-blue-500/40"
                    : "border-gray-200/40 bg-gradient-to-br from-white/80 to-gray-50/40 hover:from-white hover:to-blue-50/60 hover:border-blue-400/40"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`text-blue-600 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent p-2 rounded-lg`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-black mb-2 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p
                  className={`text-xs font-semibold transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Mejorado */}
      <section
        id="about"
        className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === "dark" ? "border-t border-gray-800/50" : "border-t border-gray-200/50"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h3
            className={`section-title text-5xl font-black mb-12 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-50" : "text-gray-950"
            }`}
            style={{ letterSpacing: "-0.02em" }}
          >
            About Me
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
            <p
              className={`text-base leading-relaxed transition-colors duration-300 font-light ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I am a passionate backend developer dedicated to building scalable, secure, and
              maintainable APIs. Currently studying Computer Science Engineering at UNNOBA, Argentina.
            </p>

            <p
              className={`text-base leading-relaxed transition-colors duration-300 font-light ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              My experience focuses on REST API development with Java and Spring Boot,
              applying Clean Architecture, domain modeling, OWASP security principles, and best
              production practices. Specialized in building robust and scalable systems.
            </p>

              <div
                className={`pt-6 border-t transition-colors duration-300 ${
                  theme === "dark" ? "border-gray-800" : "border-gray-200"
                }`}
              >
                <h4
                  className={`font-bold mb-3 text-lg transition-colors duration-300 flex items-center gap-2 ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  📍 Location
                </h4>
                <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                  Rojas, Buenos Aires, Argentina
                </p>
              </div>
            </div>

            <div
              className={`rounded-2xl p-8 h-fit transition-all duration-500 transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20"
                  : "bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20"
              }`}
            >
              <h4
                className={`font-bold mb-6 text-lg flex items-center gap-2 transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                }`}
              >
                <Layers className="w-5 h-5 text-blue-600" />
                Education
              </h4>

              <div className="space-y-6">
                <div className="group">
                  <p
                    className={`font-bold transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    🎓 Computer Science Engineering
                  </p>
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    UNNOBA • Junin, Argentina
                  </p>
                  <p className="text-xs text-blue-600 font-bold">In Progress</p>
                </div>

                <div
                  className={`transition-colors duration-300 ${
                    theme === "dark" ? "border-t border-gray-700" : "border-t border-blue-200"
                  } pt-6`}
                >
                  <p
                    className={`font-bold transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    📚 Systems Analyst
                  </p>
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    UNNOBA • Junin, Argentina
                  </p>
                  <p className="text-xs text-blue-600 font-bold">In Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Compact */}
      <section
        id="timeline"
        className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50"
            : "bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/50"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h3
            className={`text-3xl font-black mb-8 text-center transition-colors duration-300 ${
              theme === "dark" ? "text-gray-50" : "text-gray-950"
            }`}
            style={{ letterSpacing: "-0.02em" }}
          >
            My Timeline
          </h3>

          <div className="relative">
            {/* Central line - Compact */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full transition-colors duration-300 ${
                theme === "dark" ? "bg-gradient-to-b from-blue-600/50 to-cyan-600/50" : "bg-gradient-to-b from-blue-400/50 to-cyan-400/50"
              }`}
            />

            {/* Timeline items */}
            <div className="space-y-6">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`relative animate-in fade-in slide-in-from-bottom-4 ${
                    index % 2 === 0 ? "md:text-right md:pr-1/2" : "md:pl-1/2"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Dot - Compact */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-4">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full border-3 border-blue-200/50 shadow-lg shadow-blue-500/50 hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Content - Compact */}
                  <Card
                    className={`p-4 transition-all duration-500 transform hover:scale-102 hover:shadow-lg group cursor-pointer border-2 ${
                      theme === "dark"
                        ? "border-gray-700/30 bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:from-gray-800/60 hover:to-gray-800/40 hover:border-blue-500/40"
                        : "border-gray-200/40 bg-gradient-to-br from-white/80 to-gray-50/40 hover:from-white hover:to-blue-50/60 hover:border-blue-400/40"
                    } ${index % 2 === 0 ? "md:mr-auto md:w-5/12" : "md:ml-auto md:w-5/12"}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl font-black text-blue-600 group-hover:scale-110 transition-transform duration-300">{event.year}</span>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                        {event.type === "education"
                          ? "📚 Education"
                          : event.type === "project"
                          ? "💻 Project"
                          : "🎯 Skill"}
                      </span>
                    </div>
                    <h4
                      className={`font-bold mb-1 text-sm transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      {event.title}
                    </h4>
                    <p
                      className={`text-xs transition-colors duration-300 font-light ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {event.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Mejorado */}
      <section
        id="projects"
        className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-900 to-gray-950 border-t border-gray-800/50"
            : "bg-gradient-to-r from-blue-50 to-white border-t border-gray-200/50"
        }`}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-16">
            <h3
              className={`section-title text-5xl font-black mb-4 transition-colors duration-300 ${
                theme === "dark" ? "text-gray-50" : "text-gray-950"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              Experience in Projects
            </h3>
            <p
              className={`text-lg font-light transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Personal and academic projects demonstrating backend expertise
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                onClick={() => navigate(`/project/${projectIds[index]}`)}
                className={`p-8 transition-all duration-500 transform hover:scale-102 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-4 group cursor-pointer border-2 ${
                  theme === "dark"
                    ? "border-gray-700/30 bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:from-gray-800/60 hover:to-gray-800/40 hover:border-blue-500/40"
                    : "border-gray-200/40 bg-gradient-to-br from-white/80 to-gray-50/40 hover:from-white hover:to-blue-50/60 hover:border-blue-400/40"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex gap-4 flex-1">
                    <div
                      className={`p-4 rounded-xl h-fit transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-12 ${
                        theme === "dark"
                          ? "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30"
                          : "bg-blue-100/50 text-blue-600 group-hover:bg-blue-100"
                      }`}
                    >
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`text-2xl font-black mb-2 transition-colors duration-300 ${
                          theme === "dark" ? "text-gray-100" : "text-gray-900"
                        }`}
                      >
                        {project.title}
                      </h4>
                      <p
                        className={`font-light transition-colors duration-300 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold transition-all duration-300 transform hover:scale-110 whitespace-nowrap shadow-lg hover:shadow-blue-500/50 uppercase tracking-wide text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="mb-6">
                  <p
                    className={`text-sm font-bold mb-3 transition-colors duration-300 uppercase tracking-wide ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Technology Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className={`px-4 py-2 transition-all duration-300 transform hover:scale-110 font-semibold ${
                          theme === "dark"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30"
                            : "bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p
                    className={`text-sm font-bold mb-3 transition-colors duration-300 uppercase tracking-wide ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    ✨ Highlights
                  </p>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className={`text-sm flex items-start gap-3 transition-colors duration-300 font-light ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <span className="text-blue-600 font-bold mt-1 text-lg">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>


                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Mejorado */}
      <section
        id="skills"
        className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === "dark" ? "border-t border-gray-800/50" : "border-t border-gray-200/50"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h3
              className={`section-title text-5xl font-black mb-4 transition-colors duration-300 ${
                theme === "dark" ? "text-gray-50" : "text-gray-950"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              Technical Skills
            </h3>
            <p
              className={`text-lg font-light transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Complete stack of modern backend technologies and professional practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className={`p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-in fade-in group cursor-default border-2 ${
                  theme === "dark"
                    ? "border-gray-700/30 bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:from-gray-800/60 hover:to-gray-800/40 hover:border-blue-500/40"
                    : "border-gray-200/40 bg-gradient-to-br from-white/80 to-gray-50/40 hover:from-white hover:to-gray-100/60 hover:border-blue-400/40"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${skillGroup.color} text-white transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}
                  >
                    {skillGroup.icon}
                  </div>
                  <h4
                    className={`text-lg font-bold transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {skillGroup.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <Badge
                      key={item}
                      className={`px-4 py-2 transition-all duration-300 hover:scale-110 cursor-default font-semibold ${
                        theme === "dark"
                          ? "bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-700"
                          : "bg-gray-200/50 text-gray-700 border border-gray-300/50 hover:bg-gray-200"
                      }`}
                    >
                      {item}
                    </Badge>
                  ))}


                </div>
              </Card>
            ))}
          </div>


        </div>
      </section>

      {/* How I Work - Mejorado */}
      <section
        id="how-i-work"
        className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50"
            : "bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/50"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h3
            className={`section-title text-5xl font-black mb-12 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-50" : "text-gray-950"
            }`}
            style={{ letterSpacing: "-0.02em" }}
          >
            How I Work
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Clean Code",
                description: "I write readable, well-documented and easy-to-maintain code following SOLID",
                icon: <Code className="w-6 h-6" />,
              },
              {
                title: "Rigorous Testing",
                description: "Unit tests, integration tests and E2E tests with coverage >80%",
                icon: <CheckCircle className="w-6 h-6" />,
              },
              {
                title: "Automated CI/CD",
                description: "Automation of builds, tests and deployments for reliability",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                title: "Active Code Review",
                description: "Participation in code reviews focused on quality and security",
                icon: <Users className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-in fade-in group cursor-default border-2 ${
                  theme === "dark"
                    ? "border-gray-700/30 bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:from-gray-800/60 hover:to-gray-800/40 hover:border-blue-500/40"
                    : "border-gray-200/40 bg-gradient-to-br from-white/80 to-gray-50/40 hover:from-white hover:to-blue-50/60 hover:border-blue-400/40"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-blue-600 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{item.icon}</div>
                <h4
                  className={`font-bold mb-2 text-lg transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-sm font-light transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Mejorado */}
      <section
        id="faq"
        className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50"
            : "bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/50"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h3
            className={`text-5xl font-black mb-12 text-center transition-colors duration-300 ${
              theme === "dark" ? "text-gray-50" : "text-gray-950"
            }`}
            style={{ letterSpacing: "-0.02em" }}
          >
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 animate-in fade-in group cursor-pointer border-2 ${
                  theme === "dark"
                    ? "border-gray-700/30 bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:from-gray-800/60 hover:to-gray-800/40 hover:border-blue-500/40"
                    : "border-gray-200/40 bg-gradient-to-br from-white/80 to-gray-50/40 hover:from-white hover:to-blue-50/60 hover:border-blue-400/40"
                }`}
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:opacity-80 transition-opacity"
                >
                  <h4
                    className={`font-bold text-left transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-500 flex-shrink-0 ${
                      expandedFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFAQ === index && (
                  <div
                    className={`px-6 pb-6 border-t transition-colors duration-300 animate-in fade-in ${
                      theme === "dark" ? "border-gray-700/50" : "border-gray-200/50"
                    }`}
                  >
                    <p
                      className={`font-light transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Mejorado */}
      <section
        id="contact"
        className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50"
            : "bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50"
        }`}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-5xl font-black mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>Let's Connect</h3>
          <p className="text-gray-300 mb-8 text-base max-w-2xl mx-auto font-light">
            I am interested in opportunities as a Junior Backend Developer. Available for
            projects, mentoring, and technical collaborations.
          </p>

          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 mb-12 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
            <p className="text-blue-300 font-bold text-lg">
              💡 Available for: Freelance Projects • Full-Time Contracts • Technical Mentoring
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:leonardoholmer1@gmail.com?subject=Oportunidad%20Backend%20Developer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/50 uppercase tracking-wide text-sm"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-emerald-500/50 uppercase tracking-wide text-sm"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </a>
            <a
              href="https://linkedin.com/in/leonardoholmer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-110 border border-gray-700 shadow-lg hover:shadow-gray-500/30 uppercase tracking-wide text-sm"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/LeoHolmer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-110 border border-gray-700 shadow-lg hover:shadow-gray-500/30 uppercase tracking-wide text-sm"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/50 uppercase tracking-wide text-sm"
            >
              <Linkedin className="w-5 h-5" />
              Share on LinkedIn
            </a>
            <a
              href="/Leonardo_Holmer_CV.pdf"
              download="Leonardo_Holmer_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-purple-500/50 uppercase tracking-wide text-sm"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>

          <p className="text-gray-400 text-sm font-light">
            ⚡ Typical response time: 24 hours • Flexible with schedules • Willing to learn new technologies
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-950 text-gray-500 border-t border-gray-800/50"
            : "bg-gray-950 text-gray-500 border-t border-gray-800/50"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center text-sm">
          <p className="font-semibold">© 2026 Leonardo Holmer. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-3 font-light">
            Designed and developed with ❤️ using React 19 • Tailwind CSS 4 • TypeScript • Vite
          </p>
        </div>
      </footer>
    </div>
  );
}
