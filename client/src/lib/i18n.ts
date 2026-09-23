import { Language } from "@/contexts/LanguageContext";

export interface ProjectData {
  id: string;
  title: string;
  category: "all" | "production" | "backend" | "academic" | "fullstack";
  badge: { es: string; en: string };
  badgeVariant?: "default" | "secondary" | "outline" | "destructive";
  subtitle: { es: string; en: string };
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: { es: string[]; en: string[] };
  architecture: {
    pattern: { es: string; en: string };
    layers: { es: string[]; en: string[] };
    database: { es: string; en: string };
  };
  securityHighlights: { es: string[]; en: string[] };
  challenges: { es: string[]; en: string[] };
  solutions: { es: string[]; en: string[] };
  mainEndpoints?: { method: string; path: string; desc: { es: string; en: string } }[];
}

export interface SkillCategory {
  title: { es: string; en: string };
  color: string;
  skills: { name: string; level?: string }[];
}

export interface TimelineEntry {
  year: string;
  period?: string;
  title: { es: string; en: string };
  institution?: string;
  description: { es: string; en: string };
  type: "education" | "project" | "milestone";
  tags?: string[];
}

export interface FAQItem {
  question: { es: string; en: string };
  answer: { es: string; en: string };
  category?: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "becerro-servicios",
    title: "Becerro Servicios · ERP, Catálogo & PWA",
    category: "production",
    badge: { es: "En Producción Real", en: "Live Production" },
    badgeVariant: "default",
    subtitle: {
      es: "Plataforma integral de gestión técnica, operaciones en campo y catálogo comercial para taller pesado",
      en: "Comprehensive technical management, field operations & digital catalog ERP for heavy machinery workshop",
    },
    description: {
      es: "Solución digital integral en producción activa (becerroservicios.com) para un taller especializado en maquinaria agrícola pesada. Incluye web institucional SEO-optimizada, PWA offline para tablets y celulares, padrón de clientes comercial, facturación con autocompletado fiscal, cotizaciones bimonetarias (ARS/USD), partes de trabajo diarios con firma digital del técnico y control de inventario de repuestos críticos.",
      en: "Full-scale production ERP & PWA (becerroservicios.com) for a heavy agricultural machinery service center. Features SEO public landing, offline-capable PWA for mobile and tablets, commercial customer database, bi-currency quotations (ARS/USD), digital signature work orders, and critical spare parts inventory tracking.",
    },
    longDescription: {
      es: "Desarrollado y desplegado para Becerro Servicios en Rojas, Buenos Aires. El sistema resuelve la desconexión entre el trabajo en campo y la administración de oficina mediante una PWA multiplataforma instalable que funciona sin depender de tiendas de aplicaciones. Cuenta con una arquitectura de persistencia híbrida, cálculos bimonetarios en tiempo real y generación automática de comprobantes membretados en formato PDF con firma estampada.",
      en: "Engineered and deployed for Becerro Servicios in Buenos Aires, Argentina. Bridges the gap between technical field repairs and office administration through an installable PWA. Implements a hybrid persistence model, real-time bi-currency arithmetic, and automated PDF receipt generation with verifiable technician digital signatures.",
    },
    technologies: [
      "TypeScript",
      "React",
      "Node.js / Express",
      "Supabase Cloud",
      "Tailwind CSS",
      "PWA / Service Worker",
      "Scrypt / HMAC",
      "Lucide Icons",
    ],
    liveUrl: "https://becerroservicios.com",
    highlights: {
      es: [
        "PWA multiplataforma instalable en iOS y Android con soporte offline vía Service Worker",
        "Cotizaciones bimonetarias inteligentes (ARS/USD) con cálculo de IVA y márgenes",
        "Partes de trabajo diarios con firma digital automática del técnico responsable y exportación PDF",
        "Buscadores globales en tiempo real en todas las entidades operativas con filtrado reactivo",
        "Hardening de seguridad integral: hasheo scrypt, tokens HMAC-SHA256 y rate limiters anti-fuerza bruta",
      ],
      en: [
        "Cross-platform installable PWA for iOS & Android with offline support via custom Service Worker",
        "Smart bi-currency quotations (ARS/USD) with automatic tax and margin calculations",
        "Daily technical work orders featuring automated digital signature stamping and PDF generation",
        "Real-time reactive global search across all operational modules",
        "Comprehensive security hardening: scrypt hashing, HMAC-SHA256 tokens, and brute-force rate limiters",
      ],
    },
    architecture: {
      pattern: {
        es: "Arquitectura Cliente-Servidor Desacoplada con PWA y Persistencia Híbrida",
        en: "Decoupled Client-Server Architecture with PWA and Hybrid Persistence",
      },
      layers: {
        es: [
          "Frontend SPA + PWA: React, TypeScript, Tailwind CSS, Radix UI",
          "Service Worker: Gestión de cache dinámico y experiencia offline",
          "API Gateway & Servidor: Express con middlewares de seguridad y sanitización",
          "Persistencia Híbrida: Almacenamiento local atómico sincronizado con Supabase Cloud",
        ],
        en: [
          "Frontend SPA + PWA: React, TypeScript, Tailwind CSS, Radix UI",
          "Service Worker: Dynamic cache management and offline resilience",
          "API Gateway & Server: Express with strict security & sanitization middlewares",
          "Hybrid Persistence: Local atomic storage synced with Supabase Cloud",
        ],
      },
      database: {
        es: "Persistencia Híbrida Atómica Local + Supabase (PostgreSQL Cloud)",
        en: "Hybrid Persistence Atomic Local Storage + Supabase (PostgreSQL Cloud)",
      },
    },
    securityHighlights: {
      es: [
        "Control de Acceso Basado en Roles (RBAC) con separación estricta entre Administrador y Técnico Profesional",
        "Contraseñas protegidas mediante scrypt con sales criptográficas únicas",
        "Tokens de sesión firmados con HMAC-SHA256 (clave de 256 bits) y validación en tiempo constante contra timing attacks",
        "Limitadores de tasa (rate limiting) en memoria contra ataques de fuerza bruta y saturación de API",
        "Cabeceras de seguridad estrictas: HSTS forzado, CSP, X-Frame-Options anti-clickjacking y política CORS controlada",
        "Purga integral de tokens y claves de sesión en servidor y navegador al cerrar sesión",
      ],
      en: [
        "Role-Based Access Control (RBAC) strictly isolating Administrator from Technician permissions",
        "Passwords hashed with scrypt using cryptographically secure unique salts",
        "Session tokens signed via HMAC-SHA256 (256-bit key) with constant-time equality validation against timing attacks",
        "In-memory rate limiting defense against brute-force logins and endpoint flooding",
        "Strict HTTP security headers: mandatory HSTS, CSP, anti-clickjacking X-Frame-Options, and tight CORS policies",
        "Full token and session key purge across client and server upon logout",
      ],
    },
    challenges: {
      es: [
        "Garantizar disponibilidad operativa en áreas rurales con conectividad intermitente",
        "Manejar cotizaciones y facturas bimonetarias con fluctuaciones cambiarias sin errores de redondeo",
        "Proteger datos sensibles de clientes y costos de taller en dispositivos compartidos",
      ],
      en: [
        "Ensuring seamless operation in rural environments with intermittent cellular reception",
        "Handling bi-currency quotes and invoices with currency fluctuations without precision loss",
        "Protecting sensitive customer data and wholesale costs on shared shop floor devices",
      ],
    },
    solutions: {
      es: [
        "Implementación de PWA con Service Worker personalizado y persistencia local atómica de respaldo",
        "Aritmética financiera con precisión decimal fija y almacenamiento separado de montos y tipos de cambio",
        "Arquitectura RBAC estricta donde los operarios nunca reciben márgenes ni costos en las respuestas de la API, más purga total al logout",
      ],
      en: [
        "Implementation of custom Service Worker caching paired with resilient atomic local persistence",
        "Fixed-decimal arithmetic separating currency units and exchange rates cleanly",
        "Strict RBAC architecture ensuring technician API responses never leak wholesale margins, plus complete cache purging",
      ],
    },
    mainEndpoints: [
      { method: "GET", path: "/api/health", desc: { es: "Verificación de salud y estado del sistema", en: "System health check" } },
      { method: "POST", path: "/api/auth/login", desc: { es: "Autenticación segura con rate limiting y scrypt", en: "Secure login with scrypt & rate limiting" } },
      { method: "GET", path: "/api/clientes", desc: { es: "Padrón comercial de clientes con métricas", en: "Customer directory with metric counters" } },
      { method: "GET", path: "/api/filtros", desc: { es: "Inventario de repuestos con alertas de stock crítico", en: "Spare parts catalog with low-stock alerts" } },
      { method: "POST", path: "/api/trabajos", desc: { es: "Registro de parte técnico con estampa de firma", en: "Work order registration with digital signature" } },
    ],
  },
  {
    id: "taskflow",
    title: "TaskFlow API · REST API de Producción",
    category: "backend",
    badge: { es: "Arquitectura Limpia & Docker", en: "Clean Arch & Docker" },
    badgeVariant: "secondary",
    subtitle: {
      es: "API REST moderna para gestión de proyectos construida con Spring Boot 3.2.5, Java 17 y PostgreSQL",
      en: "Production-oriented REST API for project workflows built with Spring Boot 3.2.5, Java 17 & PostgreSQL",
    },
    description: {
      es: "API REST orientada a producción diseñada bajo los principios de Clean Architecture y Domain-Driven Design. Incorpora autenticación stateless con JWT, control de acceso granular (RBAC), borrado lógico (Soft Delete) para preservación de datos históricos, auditoría automática de entidades (JPA Auditing), paginación dinámica, cobertura de pruebas >85% con JUnit 5 y Mockito, y orquestación multi-entorno con Docker Compose.",
      en: "Production-grade REST API engineered following Clean Architecture and Domain-Driven Design principles. Implements stateless JWT authentication, fine-grained RBAC, soft deletion for audit preservation, automatic JPA auditing, dynamic pagination, >85% test coverage with JUnit 5/Mockito, and multi-environment Docker Compose orchestration.",
    },
    longDescription: {
      es: "TaskFlow fue desarrollado como un referente de ingeniería backend robusta en el ecosistema Java moderno. Cada capa (Controller, Service, Repository) está completamente desacoplada mediante DTOs tipados y validaciones declarativas Jakarta. Dispone de perfiles configurados para ejecutar en memoria con H2 durante el ciclo de pruebas y con PostgreSQL 15 en producción.",
      en: "TaskFlow serves as a benchmark for robust modern Java backend engineering. Layers (Controller, Service, Repository) are fully decoupled using typed DTOs and declarative Jakarta validation. Features isolated profiles for running against in-memory H2 during integration tests and PostgreSQL 15 in production.",
    },
    technologies: [
      "Java 17",
      "Spring Boot 3.2.5",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL 15",
      "Docker & Compose",
      "JWT",
      "JUnit 5 & Mockito",
      "Swagger / OpenAPI 3",
      "Lombok",
    ],
    githubUrl: "https://github.com/LeoHolmer/taskflow-api",
    highlights: {
      es: [
        "Clean Architecture con separación rigurosa de responsabilidades y DTOs independientes",
        "Autenticación stateless con tokens JWT y autorización basada en roles (USER, ADMIN)",
        "Soft Delete para preservar integridad referencial y auditoría automática (createdAt, updatedAt)",
        "Paginación y filtrado dinámico en todos los endpoints de listado",
        "Cobertura de testing unitario y de integración superior al 85% con JUnit 5 y Mockito",
        "Dockerización completa de la aplicación y base de datos con perfiles dev y prod",
      ],
      en: [
        "Clean Architecture with strict separation of concerns and decoupled data transfer objects",
        "Stateless JWT authentication and role-based access control (USER, ADMIN)",
        "Soft Delete for referential integrity alongside automatic JPA auditing (createdAt, updatedAt)",
        "Dynamic pagination and filtering across all collection endpoints",
        "Over 85% unit and integration test coverage using JUnit 5 and Mockito",
        "Full containerization of application and database with dev and prod profiles",
      ],
    },
    architecture: {
      pattern: {
        es: "Arquitectura en Capas Limpia (Controller → Service → Repository)",
        en: "Clean Layered Architecture (Controller → Service → Repository)",
      },
      layers: {
        es: [
          "Capa Web / API: Controladores REST, OpenAPI 3 annotations, manejo centralizado de excepciones",
          "Capa de Negocio / Service: Lógica de dominio, reglas de asignación y transacciones declarativas @Transactional",
          "Capa de Datos / Repository: Spring Data JPA con consultas optimizadas y soft-delete filters",
          "Infraestructura: Dockerfile multi-stage, docker-compose con PostgreSQL y perfiles Spring",
        ],
        en: [
          "Web / API Layer: REST Controllers, OpenAPI 3 annotations, centralized exception handler",
          "Business / Service Layer: Domain logic, assignment rules, declarative @Transactional boundaries",
          "Data / Repository Layer: Spring Data JPA with optimized queries and soft-delete filters",
          "Infrastructure: Multi-stage Dockerfile, docker-compose with PostgreSQL and Spring profiles",
        ],
      },
      database: {
        es: "PostgreSQL 15 (Producción) / H2 In-Memory (Test & Dev)",
        en: "PostgreSQL 15 (Production) / H2 In-Memory (Test & Dev)",
      },
    },
    securityHighlights: {
      es: [
        "Autenticación stateless con JWT y almacenamiento seguro de credenciales con BCrypt",
        "Autorización basada en roles (USER, ADMIN) con filtros de seguridad Spring Security 6",
        "Protección integral contra CSRF y configuración estricta de CORS para consumo seguro de clientes",
        "Validación exhaustiva de entradas con Jakarta Bean Validation evitando inyecciones y datos malformados",
        "Manejo centralizado de excepciones que previene la fuga de stacktraces internos en las respuestas HTTP",
      ],
      en: [
        "Stateless JWT authentication with BCrypt password hashing",
        "Role-based authorization (USER, ADMIN) via custom Spring Security 6 filters",
        "CSRF protection and strict CORS setup for secure frontend consumption",
        "Exhaustive input validation via Jakarta Bean Validation preventing injections and malformed payloads",
        "Centralized exception handling preventing internal stacktrace leakage in HTTP responses",
      ],
    },
    challenges: {
      es: [
        "Evitar el acoplamiento entre entidades JPA y el contrato público de la API",
        "Garantizar que las entidades eliminadas lógicamente no rompan las restricciones de unicidad ni consultas de negocio",
        "Mantener velocidad de ejecución de tests manteniendo una alta cobertura",
      ],
      en: [
        "Avoiding tight coupling between JPA entities and public API contracts",
        "Ensuring soft-deleted records do not corrupt uniqueness constraints or business queries",
        "Maintaining high test execution speed while maintaining strict >85% coverage",
      ],
    },
    solutions: {
      es: [
        "Uso de DTOs independientes para requests y responses con mappers dedicados",
        "Filtros automáticos de Hibernate (@SQLDelete y @Where/@SQLRestriction) para aislamiento de registros activos",
        "Tests unitarios aislados con Mockito para lógica de negocio y tests de integración focalizados con @SpringBootTest",
      ],
      en: [
        "Dedicated request/response DTOs with isolated mapping layer",
        "Automated Hibernate filters (@SQLDelete and @SQLRestriction) isolating active records cleanly",
        "Isolated unit tests using Mockito for business rules and focused integration tests with @SpringBootTest",
      ],
    },
    mainEndpoints: [
      { method: "POST", path: "/api/auth/register", desc: { es: "Registro de usuario con validación y cifrado BCrypt", en: "User registration with BCrypt hashing" } },
      { method: "POST", path: "/api/auth/login", desc: { es: "Autenticación de credenciales y emisión de token JWT", en: "Credential authentication & JWT issuance" } },
      { method: "GET", path: "/api/tasks", desc: { es: "Listado paginado de tareas con filtros de estado y prioridad", en: "Paginated task list with status/priority filtering" } },
      { method: "POST", path: "/api/tasks", desc: { es: "Creación de tarea con asignación y validación de reglas", en: "Task creation with assignment & validation" } },
      { method: "DELETE", path: "/api/tasks/{id}", desc: { es: "Borrado lógico (soft delete) y registro de auditoría", en: "Soft delete with audit trail logging" } },
    ],
  },
  {
    id: "greatevents",
    title: "GreatEvents API · Eventos & Notificaciones",
    category: "academic",
    badge: { es: "Concurrencia & Domain Events", en: "Concurrency & Domain Events" },
    badgeVariant: "outline",
    subtitle: {
      es: "Plataforma de gestión de eventos con máquina de estados finitos y eventos de dominio",
      en: "Event management platform featuring finite state machine & reactive domain event notifications",
    },
    description: {
      es: "Sistema backend para la gestión integral del ciclo de vida de eventos musicales, artistas y usuarios, desarrollado para la cátedra de Programación Concurrente y Distribuida de la UNNOBA. Incorpora una máquina de estados finitos que valida rigurosamente las transiciones de estado (TENTATIVE → CONFIRMED → RESCHEDULED / CANCELLED), eventos de dominio con notificaciones automáticas para seguidores y endpoints públicos protegidos donde los eventos en borrador nunca son expuestos.",
      en: "Backend system for music event lifecycles, artists, and attendees, developed for the Distributed & Concurrent Programming course at UNNOBA. Implements a finite state machine strictly enforcing valid lifecycle transitions (TENTATIVE → CONFIRMED → RESCHEDULED / CANCELLED), automated domain event notifications, and protected public endpoints guaranteeing unconfirmed events are never leaked.",
    },
    longDescription: {
      es: "El proyecto pone en práctica patrones avanzados de programación concurrente y modelado de dominio. La máquina de estados impide que eventos cerrados o con fechas pasadas sean modificados. Cuando un evento es confirmado o reprogramado, el sistema dispara Domain Events que notifican automáticamente a los usuarios que siguen a los artistas participantes.",
      en: "Applies advanced concurrency patterns and rich domain modeling. The state machine guarantees closed or past events cannot be mutated. Whenever an event is confirmed or rescheduled, the system dispatches Domain Events that notify all registered followers of the attending artists.",
    },
    technologies: [
      "Java 17+",
      "Spring Boot 3.x",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "JWT (HMAC-512)",
      "ModelMapper",
      "Swagger / OpenAPI",
      "Maven",
    ],
    githubUrl: "https://github.com/LeoHolmer/greatevents",
    highlights: {
      es: [
        "Máquina de estados finitos para el ciclo de vida de eventos (TENTATIVE, CONFIRMED, RESCHEDULED, CANCELLED)",
        "Sistema de notificaciones automáticas activado por eventos de dominio (Domain Events)",
        "Seguridad criptográfica reforzada: tokens JWT firmados con algoritmo HMAC-512",
        "Control de acceso por roles: Administradores, Usuarios Registrados y Visitantes Públicos",
        "Protección estricta de datos: los eventos en estado tentativo nunca son expuestos en la API pública",
        "Documentación interactiva completa generada con Swagger UI y OpenAPI",
      ],
      en: [
        "Finite state machine managing event lifecycles (TENTATIVE, CONFIRMED, RESCHEDULED, CANCELLED)",
        "Automated notification dispatcher powered by internal Domain Events",
        "High-grade cryptographic security: JWT tokens signed with HMAC-512 algorithm",
        "Multi-tier role access: Administrators, Authenticated Attendees, and Public Visitors",
        "Data protection: tentative draft events are strictly filtered out from public feeds",
        "Interactive API documentation powered by Swagger UI and OpenAPI",
      ],
    },
    architecture: {
      pattern: {
        es: "Arquitectura en Capas Orientada a Eventos de Dominio y Máquina de Estados",
        en: "Layered Architecture with Domain Events and Finite State Machine",
      },
      layers: {
        es: [
          "Controladores de Presentación: Endpoints públicos (/api/public), de usuarios (/api/users) y administrativos (/admin)",
          "Servicios de Dominio: Máquina de estados, validación temporal y despacho de notificaciones",
          "Mapeo y DTOs: ModelMapper desacoplando entidades de persistencia",
          "Persistencia JPA: Repositorios Spring Data JPA con transaccionalidad concurrente",
        ],
        en: [
          "Presentation Controllers: Public endpoints (/api/public), user endpoints (/api/users), admin (/admin)",
          "Domain Services: State machine, temporal validations, and event notification dispatching",
          "Mapping & DTOs: ModelMapper ensuring domain encapsulation",
          "JPA Persistence: Spring Data JPA repositories handling concurrent transactions",
        ],
      },
      database: {
        es: "PostgreSQL (Configurable) / H2 In-Memory (Desarrollo)",
        en: "PostgreSQL (Production ready) / H2 In-Memory (Development)",
      },
    },
    securityHighlights: {
      es: [
        "Tokens JWT con algoritmo HMAC-512 con expiración controlada y autorización Bearer",
        "Segmentación estricta de rutas: /admin/** (solo admin), /api/users/** (autenticados), /api/public/** (abierto)",
        "Filtrado de datos sensibles en la capa de servicio: ningún evento preliminar o datos privados son serializados al público",
        "Validación de fechas e integridad temporal para prevenir manipulaciones indebidas",
      ],
      en: [
        "HMAC-512 signed JWT tokens with controlled expiration and standard Bearer authorization",
        "Strict route segmentation: /admin/** (admin only), /api/users/** (authenticated), /api/public/** (open)",
        "Service-level sensitive data sanitization: no draft events or private fields ever reach public feeds",
        "Temporal validation preventing invalid retroactive event scheduling",
      ],
    },
    challenges: {
      es: [
        "Prevenir condiciones de carrera al confirmar o cancelar eventos con múltiples seguidores suscritos",
        "Garantizar que solo los eventos en estados válidos sean accesibles públicamente",
        "Gestionar el ciclo de vida sin dispersar la lógica de estados en múltiples controladores",
      ],
      en: [
        "Preventing race conditions when updating event states with active follower listeners",
        "Ensuring only confirmed/rescheduled events are accessible by unauthenticated visitors",
        "Managing lifecycle transitions without scattering state rules across controllers",
      ],
    },
    solutions: {
      es: [
        "Encapsulamiento del ciclo de vida en una máquina de estados con métodos de transición explícitos",
        "Consultas JPA especializadas con cláusulas WHERE que restringen el alcance a estados públicos",
        "Despacho asíncrono y desacoplado de notificaciones mediante observadores de eventos",
      ],
      en: [
        "Encapsulating state transitions into a dedicated domain state machine with explicit methods",
        "Specialized JPA query methods filtering public scopes at database level",
        "Decoupled asynchronous notification dispatching via domain event observers",
      ],
    },
    mainEndpoints: [
      { method: "GET", path: "/api/public/events", desc: { es: "Listado público de eventos confirmados (sin tentativos)", en: "Public list of confirmed events (drafts excluded)" } },
      { method: "POST", path: "/admin/events", desc: { es: "Creación de evento en estado tentativo (Solo Admin)", en: "Create tentative event (Admin only)" } },
      { method: "PUT", path: "/admin/events/{id}/confirm", desc: { es: "Transición de estado a CONFIRMADO y disparo de notificaciones", en: "Transition to CONFIRMED & notify followers" } },
      { method: "POST", path: "/api/users/favorites", desc: { es: "Seguimiento de artistas y suscripción a novedades", en: "Follow artists and subscribe to updates" } },
    ],
  },
  {
    id: "allmusic",
    title: "AllMusic API · Ecosistema Musical & Playlists",
    category: "academic",
    badge: { es: "Spring Boot 3.4 & Java 21", en: "Spring Boot 3.4 & Java 21" },
    badgeVariant: "secondary",
    subtitle: {
      es: "API REST para gestión musical con validación estricta de propiedad de recursos",
      en: "RESTful music ecosystem API featuring strict resource-ownership access validation",
    },
    description: {
      es: "API REST desarrollada con Java 21 LTS y Spring Boot 3.4.2 para la cátedra de Programación Orientada a Objetos de la UNNOBA. Modela un ecosistema con dos roles: Artistas Musicales (crean y administran sus propias canciones) y Entusiastas (organizan playlists colaborativas). Destaca por su verificación de propiedad de recursos (*Resource Ownership*), impidiendo accesos no autorizados a contenidos ajenos, y seguridad con Password4j.",
      en: "RESTful API built with Java 21 LTS and Spring Boot 3.4.2 for the Object-Oriented Programming course at UNNOBA. Models a dual-role ecosystem: Musical Artists (create and manage their own tracks) and Enthusiasts (curate playlists). Highlights strict Resource Ownership validation preventing unauthorized modifications, paired with Password4j password hashing.",
    },
    longDescription: {
      es: "Implementa principios rigurosos de POO y buenas prácticas REST. Cada solicitud de edición o eliminación valida criptográficamente la identidad del usuario contra la entidad persistida. La persistencia se realiza sobre PostgreSQL 18.1 con HikariCP para gestión eficiente del pool de conexiones.",
      en: "Applies rigorous OOP and modern REST best practices. Every mutation request cryptographically validates the token subject against the persisted entity owner. Backed by PostgreSQL 18.1 and HikariCP connection pooling.",
    },
    technologies: [
      "Java 21 LTS",
      "Spring Boot 3.4.2",
      "Spring Security 6.4.2",
      "Spring Data JPA",
      "PostgreSQL 18.1",
      "JWT (JSON Web Token)",
      "Password4j",
      "HikariCP",
      "Swagger / OpenAPI 3",
      "Lombok",
    ],
    githubUrl: "https://github.com/LeoHolmer/AllMusic",
    highlights: {
      es: [
        "Control de acceso basado en propiedad del recurso (Resource Ownership Validation)",
        "Ecosistema con roles diferenciados: Artistas Musicales y Entusiastas",
        "Seguridad de contraseñas de última generación con la biblioteca criptográfica Password4j",
        "Playlists colaborativas con vinculación de canciones de múltiples artistas",
        "Documentación interactiva viva con SpringDoc OpenAPI y Swagger UI",
        "Configuración CORS lista para integración con clientes web y móviles",
      ],
      en: [
        "Strict Resource Ownership Validation preventing unauthorized entity manipulation",
        "Role-differentiated ecosystem: Musical Artists and Enthusiasts",
        "Next-generation password hashing powered by Password4j library",
        "Collaborative playlist management referencing multi-artist tracks",
        "Live interactive documentation with SpringDoc OpenAPI and Swagger UI",
        "Production-ready CORS configuration for web and mobile frontends",
      ],
    },
    architecture: {
      pattern: {
        es: "Arquitectura en Capas RESTful con Validación de Propiedad",
        en: "RESTful Layered Architecture with Ownership Verification",
      },
      layers: {
        es: [
          "Controllers: Endpoints REST con Bean Validation (@Valid)",
          "Security Filters: Verificación de JWT y extracción del Subject",
          "Service Layer: Reglas de negocio y chequeo de autoría de canciones",
          "Data Layer: Spring Data JPA con PostgreSQL 18.1 y pooling HikariCP",
        ],
        en: [
          "Controllers: REST endpoints with declarative Bean Validation (@Valid)",
          "Security Filters: JWT verification and principal subject extraction",
          "Service Layer: Business rules and track ownership enforcement",
          "Data Layer: Spring Data JPA with PostgreSQL 18.1 & HikariCP pool",
        ],
      },
      database: {
        es: "PostgreSQL 18.1 con Hibernate 6.6 y Pool HikariCP",
        en: "PostgreSQL 18.1 with Hibernate 6.6 and HikariCP Pooling",
      },
    },
    securityHighlights: {
      es: [
        "Validación estricta de que solo el artista creador puede modificar o eliminar sus pistas",
        "Hasheo seguro de credenciales con Password4j superando esquemas legados",
        "Validación de payloads de entrada con Jakarta Validation contra inyecciones y desbordes",
        "Tokens JWT firmados con verificación de expiración en cada solicitud",
      ],
      en: [
        "Strict ownership checks ensuring only the originating artist can mutate tracks",
        "Secure credential hashing with Password4j exceeding legacy algorithms",
        "Jakarta Validation guarding input payloads against injections and oversized buffers",
        "Signed JWT tokens with expiration verification on every request",
      ],
    },
    challenges: {
      es: [
        "Diseñar un modelo relacional eficiente para canciones dentro de múltiples playlists sin duplicación",
        "Asegurar que los usuarios solo puedan mutar recursos de su propiedad sin duplicar código en los controladores",
      ],
      en: [
        "Designing an efficient many-to-many model for songs and playlists without redundancy",
        "Ensuring users only mutate owned resources without repetitive boilerplate in controllers",
      ],
    },
    solutions: {
      es: [
        "Modelado de relaciones ManyToMany con tablas intermedias indexadas en JPA",
        "Anotaciones de seguridad @PreAuthorize y validaciones en la capa de servicio comparando el ID del usuario autenticado",
      ],
      en: [
        "Indexed ManyToMany JPA mapping with optimal fetch strategies",
        "Service-level ownership validations matching authenticated principal identity against entity owners",
      ],
    },
    mainEndpoints: [
      { method: "POST", path: "/auth/login", desc: { es: "Autenticación y entrega de token Bearer", en: "User authentication & Bearer token issue" } },
      { method: "POST", path: "/canciones", desc: { es: "Publicación de canción (Solo Artistas)", en: "Publish new song (Artists only)" } },
      { method: "PUT", path: "/canciones/{id}", desc: { es: "Edición con verificación de autoría del artista", en: "Update song with author ownership verification" } },
      { method: "POST", path: "/playlists", desc: { es: "Creación de playlist personalizada", en: "Create custom user playlist" } },
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: { es: "Backend & Lenguajes", en: "Backend & Languages" },
    color: "from-blue-600 to-cyan-600",
    skills: [
      { name: "Java 21 / 17 / 8" },
      { name: "Spring Boot 3.x" },
      { name: "Spring Security" },
      { name: "Spring Data JPA" },
      { name: "Hibernate ORM" },
      { name: "TypeScript" },
      { name: "Node.js / Express" },
      { name: "Python (Bases)" },
      { name: "Go & C++ (Bases)" },
    ],
  },
  {
    title: { es: "Bases de Datos & Persistencia", en: "Databases & Persistence" },
    color: "from-emerald-600 to-teal-600",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Supabase Cloud" },
      { name: "H2 Database" },
      { name: "Modelado Relacional (DER)" },
      { name: "SQL Avanzado & Índices" },
      { name: "Transacciones ACID" },
      { name: "HikariCP Pooling" },
    ],
  },
  {
    title: { es: "Arquitectura & Buenas Prácticas", en: "Architecture & Practices" },
    color: "from-violet-600 to-purple-600",
    skills: [
      { name: "Clean Architecture" },
      { name: "Domain-Driven Design (DDD)" },
      { name: "Arquitectura en Capas" },
      { name: "Principios SOLID" },
      { name: "Patrones de Diseño" },
      { name: "State Machine" },
      { name: "Domain Events" },
      { name: "Soft Delete & Auditoría" },
    ],
  },
  {
    title: { es: "Seguridad & Calidad (Zero Trust)", en: "Security & QA (Zero Trust)" },
    color: "from-red-600 to-rose-600",
    skills: [
      { name: "JWT (HMAC-256 / HMAC-512)" },
      { name: "RBAC (Role-Based Access)" },
      { name: "Resource Ownership Verification" },
      { name: "Scrypt & BCrypt Hashing" },
      { name: "Mitigación OWASP Top 10" },
      { name: "Jakarta Bean Validation" },
      { name: "Rate Limiting & Anti-Spam" },
      { name: "JUnit 5 & Mockito" },
    ],
  },
  {
    title: { es: "DevOps, Cloud & Herramientas", en: "DevOps, Cloud & Tools" },
    color: "from-amber-600 to-orange-600",
    skills: [
      { name: "Docker & Docker Compose" },
      { name: "Linux (Ubuntu / Debian / WSL)" },
      { name: "Git & GitHub" },
      { name: "Swagger / OpenAPI 3" },
      { name: "Maven & Gradle" },
      { name: "Render & Vercel" },
      { name: "PWA / Service Workers" },
      { name: "IntelliJ IDEA & VS Code" },
    ],
  },
];

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    year: "2020",
    period: "Marzo 2020",
    title: {
      es: "Inicio de Ingeniería en Informática",
      en: "Started Computer Science Engineering",
    },
    institution: "UNNOBA · Universidad Nacional del Noroeste de Bs. As.",
    description: {
      es: "Comienzo de los estudios universitarios de grado en Junín, Argentina. Primeros pasos formales en algoritmos, estructuras de datos, lógica proposicional y fundamentos de ingeniería de software.",
      en: "Commenced formal undergraduate university engineering degree at UNNOBA (Junín, Argentina). Foundations in algorithms, data structures, propositional logic, and software engineering principles.",
    },
    type: "education",
    tags: ["UNNOBA", "Algoritmos", "Lógica", "Ingeniería"],
  },
  {
    year: "2021",
    period: "2021",
    title: {
      es: "Bases de Computación & Estructuras de Datos",
      en: "Computing Foundations & Data Structures",
    },
    institution: "UNNOBA",
    description: {
      es: "Dominio de estructuras de datos complejas (árboles, grafos, pilas, colas), arquitectura de computadores, ensamblador y programación orientada a objetos en Python.",
      en: "Deep dive into advanced data structures (trees, graphs, queues), computer architecture, assembly language, and OOP with Python.",
    },
    type: "milestone",
    tags: ["Data Structures", "Python", "Computer Architecture", "Assembly"],
  },
  {
    year: "2022",
    period: "2022",
    title: {
      es: "Sistemas Operativos, Redes & Concurrencia",
      en: "Operating Systems, Networking & Concurrency",
    },
    institution: "UNNOBA",
    description: {
      es: "Estudio profundo del funcionamiento interno de sistemas operativos (gestión de memoria, procesos, hilos, sincronización), protocolos de red TCP/IP y programación de bajo nivel con C++ y Go.",
      en: "In-depth study of operating systems internals (memory management, threads, synchronization), TCP/IP networking, and low-level systems programming in C++ and Go.",
    },
    type: "milestone",
    tags: ["Linux", "Operating Systems", "Networking", "C++", "Go"],
  },
  {
    year: "2024",
    period: "2024",
    title: {
      es: "AllMusic API & Especialización Java/Spring",
      en: "AllMusic API & Java/Spring Specialization",
    },
    institution: "UNNOBA · Cátedra POO",
    description: {
      es: "Desarrollo de AllMusic API con Java 21 y Spring Boot 3.4. Implementación pionera de control de propiedad de recursos, autenticación JWT, hashing moderno con Password4j y documentación interactiva en Swagger.",
      en: "Engineered AllMusic API with Java 21 and Spring Boot 3.4. Implemented resource-ownership access verification, JWT authentication, modern hashing with Password4j, and OpenAPI documentation.",
    },
    type: "project",
    tags: ["Java 21", "Spring Boot 3.4", "JWT", "PostgreSQL", "Swagger"],
  },
  {
    year: "2025",
    period: "2025",
    title: {
      es: "TaskFlow API & GreatEvents API (Clean Arch & Concurrencia)",
      en: "TaskFlow API & GreatEvents API (Clean Arch & Concurrency)",
    },
    institution: "UNNOBA & Proyectos Personales",
    description: {
      es: "Creación de TaskFlow API (Clean Architecture, Docker, Soft Delete, JPA Auditing, >85% testing) y GreatEvents API (máquina de estados, eventos de dominio y notificaciones distribuidas para la cátedra de Programación Concurrente).",
      en: "Built TaskFlow API (Clean Architecture, Docker, Soft Delete, JPA Auditing, >85% testing) and GreatEvents API (finite state machine, domain events, and notifications for Concurrent Programming course).",
    },
    type: "project",
    tags: ["Spring Boot 3", "Clean Architecture", "Docker", "Domain Events", "JUnit 5"],
  },
  {
    year: "2025 - 2026",
    period: "Producción Activa",
    title: {
      es: "Becerro Servicios · Despliegue de ERP & PWA Comercial",
      en: "Becerro Servicios · Commercial ERP & PWA Deployment",
    },
    institution: "Becerro Servicios (becerroservicios.com)",
    description: {
      es: "Diseño, desarrollo y puesta en producción del sistema integral de gestión para taller pesado y servicios agrícolas en Rojas, Buenos Aires. Incluye PWA offline, cotizaciones bimonetarias, firma digital de partes de trabajo y hardening de seguridad scrypt/HMAC.",
      en: "Designed, engineered, and shipped to production a comprehensive ERP & PWA for agricultural machinery services. Features offline capabilities, bi-currency quotes, digital signatures, and scrypt/HMAC hardening.",
    },
    type: "project",
    tags: ["TypeScript", "PWA", "Supabase", "Producción", "ERP"],
  },
  {
    year: "2026",
    period: "Actualidad",
    title: {
      es: "Backend Developer · Nivel Profesional Senior-Ready",
      en: "Backend Developer · Senior-Ready Professional",
    },
    institution: "Disponible para Nuevas Oportunidades",
    description: {
      es: "Estudiante avanzado de Ingeniería en Informática y Analista en Sistemas. Sólida experiencia demostrable en producción real, Clean Architecture, APIs REST seguras y diseño de software orientado a alta mantenibilidad.",
      en: "Advanced Computer Engineering & Systems Analyst student. Proven track record in production systems, Clean Architecture, secure REST APIs, and high-maintainability software engineering.",
    },
    type: "milestone",
    tags: ["Backend Developer", "Java", "Spring Boot", "Clean Code"],
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: "Architecture",
    question: {
      es: "¿Cómo abordás el diseño de arquitectura: Clean Architecture vs. sobreingeniería?",
      en: "How do you approach architecture: Clean Architecture vs. over-engineering?",
    },
    answer: {
      es: "Aplico una arquitectura en capas pragmática basada en el tamaño y evolución del problema: Controllers delgados enfocados en transporte HTTP, Services ricos que protegen las invariantes del negocio, y Repositories que encapsulan la persistencia. Desacoplo la API pública mediante DTOs para no exponer entidades de base de datos directamente, evitando patrones innecesarios hasta que el dominio realmente lo justifique.",
      en: "I adopt a pragmatic layered approach scaled to problem complexity: thin controllers focused strictly on HTTP transport, rich service layers preserving domain invariants, and repositories encapsulating persistence. I cleanly decouple public contracts using DTOs, avoiding speculative over-engineering until domain complexity genuinely calls for it.",
    },
  },
  {
    category: "Security",
    question: {
      es: "¿Cuál es tu filosofía respecto a la seguridad en el desarrollo backend?",
      en: "What is your philosophy regarding backend security?",
    },
    answer: {
      es: "Seguridad por diseño (Security by Design) y principio de menor privilegio. Implemento autenticación stateless con JWT, cifrado criptográfico robusto (BCrypt o Scrypt), validación de propiedad de recursos (Resource Ownership) para que ningún usuario altere datos ajenos, sanitización en capas con Jakarta Bean Validation, rate limiting para mitigar ataques de fuerza bruta y cabeceras estrictas (HSTS, CSP, Anti-Clickjacking).",
      en: "Security by Design and least-privilege principles. I implement stateless JWT authentication, high-grade cryptographic hashing (BCrypt or Scrypt), strict Resource Ownership checks preventing cross-user data tampering, multi-tier sanitization via Jakarta Bean Validation, brute-force rate limiters, and strict HTTP headers (HSTS, CSP, Anti-Clickjacking).",
    },
  },
  {
    category: "Testing",
    question: {
      es: "¿Qué estrategia de pruebas y calidad de código utilizás?",
      en: "What is your testing and code quality strategy?",
    },
    answer: {
      es: "Sigo la pirámide de testing: una base amplia de tests unitarios rápidos y deterministas con JUnit 5 y Mockito para la lógica de negocio pura, complementada con tests de integración focalizados con @SpringBootTest / Testcontainers para verificar consultas complejas y filtros de seguridad. Apunto a un estándar >80-85% en las capas críticas del servicio.",
      en: "I follow the testing pyramid: a broad base of fast, deterministic unit tests using JUnit 5 and Mockito covering core business logic, accompanied by focused integration tests with @SpringBootTest to validate database queries and security filters. I target >80-85% coverage on mission-critical service layers.",
    },
  },
  {
    category: "Production",
    question: {
      es: "¿Tenés experiencia con sistemas en producción real con usuarios activos?",
      en: "Do you have experience with real production systems and active users?",
    },
    answer: {
      es: "Sí. Desarrollé y mantengo Becerro Servicios (becerroservicios.com), una plataforma ERP y PWA utilizada diariamente por operarios y administradores en Rojas, Buenos Aires. El sistema gestiona clientes, repuestos pesados, cotizaciones bimonetarias (ARS/USD), facturación y partes de trabajo oficiales con firma digital estampada en comprobantes PDF.",
      en: "Yes. I designed, shipped, and actively maintain Becerro Servicios (becerroservicios.com), a production ERP and PWA used daily by technicians and administrative staff in Buenos Aires. It oversees client accounts, critical heavy machinery inventory, bi-currency billing, and signed PDF work order receipts.",
    },
  },
  {
    category: "Scalability",
    question: {
      es: "¿Cómo garantizás el rendimiento y escalabilidad de las APIs?",
      en: "How do you ensure API performance and scalability?",
    },
    answer: {
      es: "Diseño APIs stateless que permiten escalado horizontal sin sesiones en memoria del servidor. Optimizo la capa de persistencia mediante índices en claves foráneas y campos de búsqueda frecuente, paginación obligatoria en colecciones para evitar lecturas masivas de memoria, proyecciones JPA cuando solo se requieren campos específicos, y pool de conexiones HikariCP afinado.",
      en: "I build stateless APIs ready for horizontal scaling without server-bound session state. I optimize database persistence through strategic indexing on foreign keys and search columns, mandatory collection pagination preventing memory exhaustion, JPA projections for lean queries, and finely tuned HikariCP connection pools.",
    },
  },
  {
    category: "Availability",
    question: {
      es: "¿Cuál es tu disponibilidad y modalidad de trabajo preferida?",
      en: "What is your availability and preferred work model?",
    },
    answer: {
      es: "Estoy radicado en Buenos Aires, Argentina (zona horaria UTC-3) y disponible para roles remotos o híbridos en empresas nacionales e internacionales. Me entusiasma integrarme a equipos de ingeniería donde se valore el código limpio, la seguridad, la mejora continua y el desarrollo orientado a producción.",
      en: "I am based in Buenos Aires, Argentina (UTC-3 timezone) and available for remote or hybrid opportunities worldwide. I am eager to join engineering teams prioritizing clean code, proactive security, high technical rigor, and production excellence.",
    },
  },
];

export const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    "nav.about": "Sobre Mí",
    "nav.metrics": "Métricas",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.principles": "Estándares",
    "nav.timeline": "Trayectoria",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.downloadCV": "Descargar CV",
    "nav.viewProjects": "Ver Proyectos",

    // Hero
    "hero.badge": "Disponible para Nuevas Oportunidades • Backend Developer",
    "hero.greeting": "Hola, soy",
    "hero.name": "Leonardo Holmer",
    "hero.title": "Construyendo APIs de Alta Concurrencia y",
    "hero.titleHighlight": "Sistemas Escalables",
    "hero.description":
      "Estudiante de Ingeniería en Informática y Analista en Sistemas (UNNOBA). Especializado en arquitectura backend limpia con Java, Spring Boot, PostgreSQL, Docker y sistemas en producción real con TypeScript.",
    "hero.cta.projects": "Explorar Proyectos",
    "hero.cta.cv": "Descargar CV (PDF)",
    "hero.cta.linkedin": "LinkedIn",
    "hero.cta.github": "GitHub",
    "hero.cta.copyEmail": "Copiar Correo",
    "hero.copied": "¡Correo copiado al portapapeles!",
    "hero.chip.clean": "Clean Architecture",
    "hero.chip.security": "Zero-Trust & RBAC",
    "hero.chip.production": "Sistemas en Producción",
    "hero.chip.tests": ">85% Cobertura de Tests",

    // About
    "about.tag": "PERFIL PROFESIONAL",
    "about.title": "Ingeniería de Software Orientada a Producción",
    "about.p1":
      "Soy un desarrollador backend apasionado por la construcción de APIs robustas, seguras y altamente escalables. Mi enfoque combina una rigurosa formación académica en Ingeniería en Informática (UNNOBA) con la experiencia práctica de diseñar y desplegar sistemas reales utilizados en entornos comerciales exigentes.",
    "about.p2":
      "Priorizo el modelado claro del dominio, la separación de responsabilidades en capas (Clean Architecture), la seguridad defensiva por diseño y las pruebas automatizadas para garantizar código mantenible a largo plazo.",
    "about.locationTitle": "Ubicación",
    "about.locationValue": "Buenos Aires, Argentina (UTC-3)",
    "about.educationTitle": "Formación Académica",
    "about.degree1": "Ingeniería en Informática",
    "about.degree1Sub": "UNNOBA · En curso avanzado",
    "about.degree2": "Analista en Sistemas",
    "about.degree2Sub": "UNNOBA · En curso avanzado",
    "about.languagesTitle": "Idiomas",
    "about.lang1": "Español (Nativo)",
    "about.lang2": "Inglés (Intermedio · Lectura técnica y documentación fluida)",
    "about.lang3": "Portugués (Básico)",

    // Metrics
    "metrics.projectsCount": "4",
    "metrics.projectsLabel": "Proyectos Clave",
    "metrics.projectsDesc": "Producción & Universitarios",
    "metrics.experienceCount": "4+",
    "metrics.experienceLabel": "Años de Formación",
    "metrics.experienceDesc": "Ingeniería en UNNOBA",
    "metrics.testingCount": ">85%",
    "metrics.testingLabel": "Cobertura en Lógica Crítica",
    "metrics.testingDesc": "Tests con JUnit 5 & Mockito",
    "metrics.securityCount": "100%",
    "metrics.securityLabel": "Seguridad Defensiva",
    "metrics.securityDesc": "RBAC, Scrypt, BCrypt, HMAC",

    // Principles
    "principles.tag": "FILOSOFÍA TÉCNICA",
    "principles.title": "Cómo Construyo Software",
    "principles.subtitle":
      "Estándares de ingeniería aplicados metódicamente en cada arquitectura y línea de código.",
    "principles.1.title": "Arquitectura Limpia & SOLID",
    "principles.1.desc":
      "Capas desacopladas (Controller → Service → Repository). DTOs independientes que protegen los modelos internos y reglas de negocio puras.",
    "principles.2.title": "Seguridad por Diseño (Zero-Trust)",
    "principles.2.desc":
      "Autenticación stateless JWT, RBAC granular, validación de autoría de recursos, hashing criptográfico de última generación y protección OWASP.",
    "principles.3.title": "Pruebas Automatizadas",
    "principles.3.desc":
      "Pirámide de testing rigurosa: pruebas unitarias con mocks para servicios y pruebas de integración para endpoints y persistencia.",
    "principles.4.title": "Observabilidad & OpenAPI 3",
    "principles.4.desc":
      "Documentación viva con Swagger UI, métricas de rendimiento y logging estructurado para diagnósticos precisos.",

    // Projects
    "projects.tag": "PORTAFOLIO DE PROYECTOS",
    "projects.title": "Proyectos Destacados",
    "projects.subtitle":
      "Soluciones reales que demuestran dominio en arquitectura backend, seguridad y fullstack.",
    "projects.filter.all": "Todos",
    "projects.filter.production": "En Producción",
    "projects.filter.backend": "Java / Spring Boot",
    "projects.filter.academic": "Académicos UNNOBA",
    "projects.btn.viewDetails": "Ver Arquitectura & Detalles",
    "projects.btn.liveDemo": "Web en Producción",
    "projects.btn.github": "Ver Repositorio",
    "projects.modal.architecture": "Arquitectura & Capas",
    "projects.modal.security": "Medidas de Seguridad Aplicadas",
    "projects.modal.challenges": "Desafíos Técnicos",
    "projects.modal.solutions": "Soluciones de Ingeniería",
    "projects.modal.endpoints": "Endpoints Principales",
    "projects.modal.back": "Volver a Proyectos",

    // Skills
    "skills.tag": "COMPETENCIAS TÉCNICAS",
    "skills.title": "Stack Tecnológico",
    "skills.subtitle":
      "Tecnologías dominadas a través de proyectos de producción y formación universitaria.",

    // Timeline
    "timeline.tag": "CARRERA & EVOLUCIÓN",
    "timeline.title": "Trayectoria Técnica",
    "timeline.subtitle": "El camino desde las bases de bajo nivel hasta la ingeniería backend moderna.",

    // FAQ
    "faq.tag": "PREGUNTAS FRECUENTES",
    "faq.title": "Respuestas para Reclutadores & Tech Leads",
    "faq.subtitle": "Detalles sobre mi enfoque de ingeniería, metodologías y disponibilidad.",

    // Contact
    "contact.tag": "CANALES DIRECTOS",
    "contact.title": "¿Hablamos de tu Próximo Desafío?",
    "contact.subtitle":
      "Disponible para posiciones de Backend Developer, full-time o proyectos innovadores.",
    "contact.emailCard": "Correo Electrónico",
    "contact.linkedinCard": "Perfil de LinkedIn",
    "contact.githubCard": "Código en GitHub",
    "contact.cvCard": "Currículum Vitae",
    "contact.btn.email": "Copiar Email",
    "contact.btn.linkedin": "Conectar en LinkedIn",
    "contact.btn.github": "Explorar GitHub",
    "contact.btn.cv": "Descargar CV en PDF",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.builtWith": "Desarrollado con React 19, TypeScript, Tailwind CSS & Vite.",
  },
  en: {
    // Navigation
    "nav.about": "About Me",
    "nav.metrics": "Metrics",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.principles": "Standards",
    "nav.timeline": "Timeline",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.downloadCV": "Download CV",
    "nav.viewProjects": "View Projects",

    // Hero
    "hero.badge": "Available for Opportunities • Backend Developer",
    "hero.greeting": "Hello, I am",
    "hero.name": "Leonardo Holmer",
    "hero.title": "Architecting Scalable, Concurrent &",
    "hero.titleHighlight": "High-Performance Systems",
    "hero.description":
      "Computer Engineering & Systems Analyst student at UNNOBA. Specialized in Clean Backend Architecture with Java, Spring Boot, PostgreSQL, Docker, and real-world production systems with TypeScript.",
    "hero.cta.projects": "Explore Projects",
    "hero.cta.cv": "Download CV (PDF)",
    "hero.cta.linkedin": "LinkedIn",
    "hero.cta.github": "GitHub",
    "hero.cta.copyEmail": "Copy Email",
    "hero.copied": "Email copied to clipboard!",
    "hero.chip.clean": "Clean Architecture",
    "hero.chip.security": "Zero-Trust & RBAC",
    "hero.chip.production": "Production Systems",
    "hero.chip.tests": ">85% Test Coverage",

    // About
    "about.tag": "PROFESSIONAL PROFILE",
    "about.title": "Production-Oriented Software Engineering",
    "about.p1":
      "I am a backend developer passionate about building resilient, secure, and highly scalable APIs. My approach unites rigorous university education in Computer Engineering at UNNOBA with hands-on experience designing and operating real-world commercial platforms.",
    "about.p2":
      "I prioritize clear domain modeling, strict layered separation of concerns (Clean Architecture), defensive security by design, and automated testing to guarantee long-term maintainability.",
    "about.locationTitle": "Location",
    "about.locationValue": "Buenos Aires, Argentina (UTC-3)",
    "about.educationTitle": "Academic Background",
    "about.degree1": "Computer Science Engineering",
    "about.degree1Sub": "UNNOBA · Advanced degree in progress",
    "about.degree2": "Systems Analyst",
    "about.degree2Sub": "UNNOBA · Advanced degree in progress",
    "about.languagesTitle": "Languages",
    "about.lang1": "Spanish (Native)",
    "about.lang2": "English (Intermediate · Fluent technical documentation & reading)",
    "about.lang3": "Portuguese (Basic)",

    // Metrics
    "metrics.projectsCount": "4",
    "metrics.projectsLabel": "Key Projects",
    "metrics.projectsDesc": "Production & Academic",
    "metrics.experienceCount": "4+",
    "metrics.experienceLabel": "Years of Training",
    "metrics.experienceDesc": "UNNOBA Engineering",
    "metrics.testingCount": ">85%",
    "metrics.testingLabel": "Critical Logic Coverage",
    "metrics.testingDesc": "Tested with JUnit 5 & Mockito",
    "metrics.securityCount": "100%",
    "metrics.securityLabel": "Defensive Security",
    "metrics.securityDesc": "RBAC, Scrypt, BCrypt, HMAC",

    // Principles
    "principles.tag": "TECHNICAL PHILOSOPHY",
    "principles.title": "How I Build Software",
    "principles.subtitle":
      "Engineering principles methodically applied across every architecture and line of code.",
    "principles.1.title": "Clean Architecture & SOLID",
    "principles.1.desc":
      "Decoupled layers (Controller → Service → Repository). Independent DTOs shielding internal schemas and pure domain business rules.",
    "principles.2.title": "Security by Design (Zero-Trust)",
    "principles.2.desc":
      "Stateless JWT auth, granular RBAC, resource ownership validation, modern cryptographic hashing, and proactive OWASP mitigation.",
    "principles.3.title": "Automated Testing",
    "principles.3.desc":
      "Rigorous testing pyramid: deterministic unit tests with mocks for service logic, paired with focused integration tests for endpoints.",
    "principles.4.title": "Observability & OpenAPI 3",
    "principles.4.desc":
      "Living documentation via Swagger UI, performance tracking, and structured logging for precise system observability.",

    // Projects
    "projects.tag": "PROJECT PORTFOLIO",
    "projects.title": "Featured Projects",
    "projects.subtitle":
      "Real-world systems showcasing expertise in backend engineering, security, and fullstack delivery.",
    "projects.filter.all": "All",
    "projects.filter.production": "In Production",
    "projects.filter.backend": "Java / Spring Boot",
    "projects.filter.academic": "UNNOBA Academic",
    "projects.btn.viewDetails": "View Architecture & Details",
    "projects.btn.liveDemo": "Live Production Site",
    "projects.btn.github": "View Repository",
    "projects.modal.architecture": "Architecture & Layers",
    "projects.modal.security": "Applied Security Measures",
    "projects.modal.challenges": "Technical Challenges",
    "projects.modal.solutions": "Engineering Solutions",
    "projects.modal.endpoints": "Primary Endpoints",
    "projects.modal.back": "Back to Projects",

    // Skills
    "skills.tag": "TECHNICAL SKILLS",
    "skills.title": "Technology Stack",
    "skills.subtitle":
      "Technologies mastered through production deployments and computer science engineering coursework.",

    // Timeline
    "timeline.tag": "CAREER & PROGRESSION",
    "timeline.title": "Technical Journey",
    "timeline.subtitle": "From low-level systems fundamentals to modern backend engineering.",

    // FAQ
    "faq.tag": "FREQUENTLY ASKED QUESTIONS",
    "faq.title": "Answers for Recruiters & Tech Leads",
    "faq.subtitle": "Detailed insights into my engineering practices, tooling, and availability.",

    // Contact
    "contact.tag": "DIRECT CHANNELS",
    "contact.title": "Let's Discuss Your Next Challenge",
    "contact.subtitle":
      "Available for Backend Developer positions, full-time contracts, or innovative engineering projects.",
    "contact.emailCard": "Email Address",
    "contact.linkedinCard": "LinkedIn Profile",
    "contact.githubCard": "GitHub Repository",
    "contact.cvCard": "Curriculum Vitae",
    "contact.btn.email": "Copy Email",
    "contact.btn.linkedin": "Connect on LinkedIn",
    "contact.btn.github": "Explore GitHub",
    "contact.btn.cv": "Download CV (PDF)",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with React 19, TypeScript, Tailwind CSS & Vite.",
  },
};

export function t(language: Language, key: string): string {
  return UI_TRANSLATIONS[language]?.[key] || UI_TRANSLATIONS["es"]?.[key] || key;
}

export interface CodeSnippet {
  id: string;
  filename: string;
  language: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  code: string;
}

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: "taskflow-controller",
    filename: "TaskController.java",
    language: "java",
    title: {
      es: "Clean Architecture REST Controller (Spring Boot)",
      en: "Clean Architecture REST Controller (Spring Boot)",
    },
    description: {
      es: "Controlador desacoplado con DTOs tipados, @PreAuthorize RBAC y paginación dinámica",
      en: "Decoupled controller with typed DTOs, @PreAuthorize RBAC and dynamic pagination",
    },
    code: `@RestController
@RequestMapping("/api/v1/tasks")
@RequiredArgsConstructor
@Tag(name = "Tasks", description = "Task & workflow management API")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<TaskResponseDto> createTask(
        @Valid @RequestBody CreateTaskRequestDto request,
        @AuthenticationPrincipal UserPrincipal currentUser
    ) {
        TaskResponseDto created = taskService.createTask(request, currentUser.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping
    public ResponseEntity<Page<TaskResponseDto>> getTasks(
        @ParameterObject @PageableDefault(size = 20, sort = "createdAt", direction = Sort.Direction.DESC) 
        Pageable pageable
    ) {
        return ResponseEntity.ok(taskService.findAllActive(pageable));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or @taskSecurity.isOwner(#id, principal)")
    public ResponseEntity<Void> softDeleteTask(@PathVariable Long id) {
        taskService.softDeleteTask(id);
        return ResponseEntity.noContent().build();
    }
}`,
  },
  {
    id: "becerro-signature",
    filename: "WorkOrderDigitalSign.ts",
    language: "typescript",
    title: {
      es: "Firma Digital Criptográfica & PWA (Becerro Servicios)",
      en: "Cryptographic Digital Signature & PWA (Becerro Servicios)",
    },
    description: {
      es: "Estampa de firma HMAC-SHA256 y finalización de partes técnicos en campo",
      en: "HMAC-SHA256 signature stamping and field work-order completion",
    },
    code: `export async function finalizeTechnicalWorkOrder(
  orderId: string,
  technicianId: string,
  summary: WorkSummary
): Promise<WorkOrderReceipt> {
  const order = await db.workOrders.findOrThrow(orderId);
  const technician = await auth.verifyActiveTechnician(technicianId);

  // Estampa de firma digital criptográfica inviolable
  const signaturePayload = \`\${order.id}:\${technician.licenseId}:\${Date.now()}\`;
  const digitalSignature = crypto
    .createHmac('sha256', env.CRYPTO_SIGNATURE_KEY)
    .update(signaturePayload)
    .digest('hex');

  // Actualización atómica con comprobante PDF membretado
  return await db.workOrders.updateAtomic(orderId, {
    status: 'COMPLETED',
    technicianSignature: digitalSignature,
    completedAt: new Date().toISOString(),
    hoursLogged: summary.hours,
    sparePartsUsed: summary.parts,
  });
}`,
  },
  {
    id: "greatevents-events",
    filename: "EventLifecycleService.java",
    language: "java",
    title: {
      es: "Domain Events & State Machine (GreatEvents)",
      en: "Domain Events & State Machine (GreatEvents)",
    },
    description: {
      es: "Transición de estado con disparo desacoplado de eventos de dominio",
      en: "State transition with decoupled domain event dispatching",
    },
    code: `@Service
@RequiredArgsConstructor
public class EventLifecycleService {

    private final EventRepository eventRepository;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public EventResponseDto confirmEvent(Long eventId) {
        Event event = eventRepository.findById(eventId)
            .orElseThrow(() -> new ResourceNotFoundException("Evento no encontrado: " + eventId));

        // Máquina de estados: Solo TENTATIVE -> CONFIRMED
        event.transitionTo(EventState.CONFIRMED);
        Event saved = eventRepository.save(event);

        // Disparo de evento de dominio concurrente
        eventPublisher.publishEvent(new EventConfirmedDomainEvent(this, saved));

        return EventMapper.toDto(saved);
    }
}`,
  },
  {
    id: "allmusic-ownership",
    filename: "ResourceOwnershipValidator.java",
    language: "java",
    title: {
      es: "Resource Ownership Verification (AllMusic API)",
      en: "Resource Ownership Verification (AllMusic API)",
    },
    description: {
      es: "Garantiza que ningún usuario altere canciones o playlists ajenas",
      en: "Guarantees no user can mutate tracks or playlists owned by others",
    },
    code: `@Component("resourceSecurity")
@RequiredArgsConstructor
public class ResourceOwnershipValidator {

    private final SongRepository songRepository;

    public boolean isSongOwner(Long songId, UserPrincipal principal) {
        if (principal == null) return false;
        
        return songRepository.findById(songId)
            .map(song -> song.getArtist().getUserId().equals(principal.getId()))
            .orElse(false);
    }
}`,
  },
];
