import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code,
  GitBranch,
  Zap,
  Layers,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface ProjectDetailData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  highlights: string[];
  icon: React.ReactNode;
  readme: string;
  features: string[];
  challenges: string[];
  solutions: string[];
}

const projectsData: Record<string, ProjectDetailData> = {
  taskflow: {
    id: "taskflow",
    title: "TaskFlow API",
    description: "REST API for task management with clean architecture and rigorous validations",
    longDescription:
      "TaskFlow is a complete REST API for task management built with Java and Spring Boot, implementing clean architecture, advanced design patterns, and production best practices.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "JUnit", "Maven"],
    github: "https://github.com/LeoHolmer/taskflow-api",
    highlights: [
      "Clean architecture with layer separation (Controller → Service → Repository)",
      "JWT authentication with role-based access control (RBAC)",
      "Soft delete, change auditing, and unit/integration tests >85%",
      "Dockerized application with docker-compose for multiple environments",
    ],
    icon: <GitBranch className="w-6 h-6" />,
    features: [
      "Complete CRUD for tasks with exhaustive validations",
      "User system with JWT authentication",
      "Granular roles and permissions (Admin, User, Guest)",
      "Change auditing with timestamps and responsible user",
      "Soft delete to preserve data integrity",
      "Advanced pagination and filtering",
      "Swagger/OpenAPI documentation",
    ],
    challenges: [
      "Implementing clean architecture without over-engineering",
      "Maintaining test coverage >85% without sacrificing development speed",
      "Handling concurrency in critical operations",
      "Ensuring security without compromising usability",
    ],
    solutions: [
      "Clear separation of concerns with DTOs and mappers",
      "Using JUnit 5 and Mockito for robust testing",
      "Implementing optimistic locking with versions",
      "Multi-layer validation (Bean Validation, business logic)",
    ],
    readme: `# TaskFlow API

## Description
TaskFlow is a robust REST API for task management, built with backend development best practices.

## Technical Stack
- **Backend**: Java 17+, Spring Boot 3.x
- **Database**: PostgreSQL
- **Testing**: JUnit 5, Mockito
- **Containerization**: Docker, Docker Compose
- **Documentation**: Swagger/OpenAPI

## Key Features

### 1. Clean Architecture
- Clear separation between layers (Controller, Service, Repository)
- DTOs for data transfer
- Mappers for entity to DTO conversion

### 2. Authentication and Authorization
- JWT (JSON Web Tokens) for stateless authentication
- RBAC (Role-Based Access Control)
- Resource ownership validation

### 3. Data Persistence
- JPA/Hibernate for ORM
- Migrations with Flyway
- Optimized indexes for frequent queries

### 4. Testing
- Unit tests for business logic
- Integration tests for APIs
- Coverage >85% on critical code

### 5. Security
- Input validation with Bean Validation
- HTTPS/TLS in production
- Principle of least privilege
- SQL injection protection

## Installation and Execution

\`\`\`bash
# Clone repository
git clone https://github.com/LeoHolmer/taskflow-api.git
cd taskflow-api

# Build with Maven
mvn clean package

# Run with Docker Compose
docker-compose up

# API will be available at http://localhost:8080
\`\`\`

## Main Endpoints

### Tasks
- \`GET /api/tasks\` - List tasks
- \`POST /api/tasks\` - Create task
- \`GET /api/tasks/{id}\` - Get task details
- \`PUT /api/tasks/{id}\` - Update task
- \`DELETE /api/tasks/{id}\` - Delete task

### Users
- \`POST /api/auth/register\` - Register user
- \`POST /api/auth/login\` - Login
- \`GET /api/users/me\` - Get profile

## Lessons Learned
- Importance of architecture from the start
- Exhaustive testing prevents production bugs
- Docker simplifies deployment and reproducibility
- Clear documentation is essential for APIs
`,
  },
  greatevents: {
    id: "greatevents",
    title: "GreatEvents API",
    description: "Event management platform with complete lifecycle and complex business rules",
    longDescription:
      "GreatEvents is a complete event management platform with state machines, Domain Events, granular access control, and complex business validations.",
    technologies: ["Java", "Spring Boot", "Spring Security", "JPA", "PostgreSQL", "RabbitMQ"],
    github: "https://github.com/LeoHolmer/greatevents",
    highlights: [
      "Domain models with state management and state machines",
      "Strict business rules with multi-layer validations",
      "Role-based access control with granular authorization",
      "Automatic notifications through Domain Events",
    ],
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Complete event lifecycle (Creation → Publishing → Closing)",
      "State machine for valid transitions",
      "Ticket/entry system with capacity control",
      "Real-time notifications with Domain Events",
      "Event reports and statistics",
      "Attendee management and confirmations",
      "Payment system integration",
    ],
    challenges: [
      "Modeling complex states without allowing invalid transitions",
      "Maintaining consistency in distributed events",
      "Handling asynchronous notifications reliably",
      "Validating complex business rules",
    ],
    solutions: [
      "State Pattern implementation with state machines",
      "Domain Events for communication between aggregates",
      "Event sourcing for auditing and reproducibility",
      "Multi-layer validations with specific exceptions",
    ],
    readme: `# GreatEvents API

## Description
GreatEvents is an enterprise event management platform with support for complex lifecycles.

## Key Features

### 1. State Machine
Events transition through well-defined states:
- DRAFT (Draft)
- PUBLISHED (Published)
- ONGOING (In Progress)
- CLOSED (Closed)
- CANCELLED (Cancelled)

### 2. Domain Events
Each important change generates a domain event:
- EventCreated
- EventPublished
- TicketPurchased
- EventClosed

### 3. Access Control
- Organizer: Full event control
- Attendee: Can purchase tickets and view details
- Admin: Global supervision

### 4. Business Validations
- Cannot sell more tickets than capacity
- Only published events can receive purchases
- Closed events cannot be modified

## Technical Stack
- Java 17+
- Spring Boot 3.x
- Spring Security
- JPA/Hibernate
- PostgreSQL
- RabbitMQ for asynchronous events

## Installation

\`\`\`bash
git clone https://github.com/LeoHolmer/greatevents.git
cd greatevents
mvn clean package
docker-compose up
\`\`\`

## Main Endpoints

### Events
- \`POST /api/events\` - Create event
- \`GET /api/events\` - List events
- \`GET /api/events/{id}\` - Get event details
- \`PUT /api/events/{id}\` - Update event
- \`POST /api/events/{id}/publish\` - Publish event

### Tickets
- \`POST /api/events/{id}/tickets\` - Purchase ticket
- \`GET /api/events/{id}/tickets\` - List tickets
- \`DELETE /api/tickets/{id}\` - Cancel ticket

## Patterns Used
- Domain-Driven Design (DDD)
- Event Sourcing
- CQRS (Command Query Responsibility Segregation)
- State Pattern
`,
  },
  allmusic: {
    id: "allmusic",
    title: "AllMusic API",
    description: "Music platform backend with user, song, and playlist management",
    longDescription:
      "AllMusic is a complete REST API for a music streaming platform, with user management, songs, playlists, and recommendations.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Swagger", "Maven"],
    github: "https://github.com/LeoHolmer/AllMusic",
    highlights: [
      "JWT authentication with resource ownership validation",
      "Song and playlist management with granular user permissions",
      "Exhaustive input validation and real-world consumption design",
      "Interactive documentation with Swagger/OpenAPI",
    ],
    icon: <Layers className="w-6 h-6" />,
    features: [
      "Authentication and authorization with JWT",
      "User CRUD with customized profiles",
      "Song management with metadata (artist, album, duration)",
      "Personal playlist creation and management",
      "Advanced song and playlist search",
      "Favorites system",
      "Taste-based recommendations",
      "Interactive Swagger documentation",
    ],
    challenges: [
      "Designing a flexible data model for music",
      "Managing access permissions for private playlists",
      "Optimizing searches on large data volumes",
      "Validating input data integrity",
    ],
    solutions: [
      "Database normalization with strategic indexes",
      "Multi-layer validation (API, Service, Database)",
      "Optimized queries with JPA Named Queries",
      "Clear documentation with Swagger",
    ],
    readme: `# AllMusic API

## Description
AllMusic is a REST API for a music streaming platform with complete user and content management.

## Features

### 1. User Management
- Registration and login
- Customized profiles
- Profile preferences

### 2. Music Catalog
- Artists and albums
- Genres and tags
- Song metadata (duration, release date)

### 3. Playlists
- Public and private playlists
- Playlist sharing
- Collaborative playlists

### 4. Search and Discovery
- Search by song, artist, album
- Genre filtering
- Advanced filters

## Technical Stack
- Java 17+
- Spring Boot 3.x
- PostgreSQL
- JWT for authentication
- Swagger/OpenAPI

## Installation

\`\`\`bash
git clone https://github.com/LeoHolmer/AllMusic.git
cd AllMusic
mvn clean package
docker-compose up
\`\`\`

## Authentication
- \`POST /api/auth/register\` - Register
- \`POST /api/auth/login\` - Login
- \`POST /api/auth/logout\` - Logout

### Songs
- \`GET /api/songs\` - List songs
- \`GET /api/songs/{id}\` - Song details
- \`POST /api/songs\` - Create song (admin only)

### Playlists
- \`POST /api/playlists\` - Create playlist
- \`GET /api/playlists\` - List playlists
- \`POST /api/playlists/{id}/songs\` - Add song

## Documentation
Interactive documentation is available at \`/swagger-ui.html\`
`,
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [, navigate] = useLocation();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const project = projectsData[id || ""];

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}>
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <Button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark"
        ? "bg-gray-900 text-white"
        : "bg-white text-gray-900"
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        theme === "dark"
          ? "border-gray-700/50 bg-gray-900/95 backdrop-blur-sm"
          : "border-gray-200/50 bg-white/95 backdrop-blur-sm"
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>

          <Button
            onClick={() => window.open(project.github, "_blank")}
            variant="outline"
            className="gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className={`p-4 rounded-lg ${
              theme === "dark"
                ? "bg-blue-600/20"
                : "bg-blue-50"
            }`}>
              {project.icon}
            </div>
            <div>
              <h1 className="text-5xl font-black mb-2">{project.title}</h1>
              <p className={`text-xl ${
                theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}>
                {project.longDescription}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Highlights */}
          <div className={`p-6 rounded-lg border ${
            theme === "dark"
              ? "border-gray-700/50 bg-gray-800/30"
              : "border-gray-200/50 bg-gray-50/30"
          }`}>
            <h2 className="text-2xl font-black mb-4">Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">★</span>
                  <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-black mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <Card
                key={idx}
                className={`p-4 transition-all duration-300 ${
                  theme === "dark"
                    ? "border border-gray-700/50 bg-gray-800/30 hover:bg-gray-800/50"
                    : "border border-gray-200/50 bg-gray-50/30 hover:bg-gray-100/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                    {feature}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-black mb-8">Challenges</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">⚠</span>
                  <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-black mb-8">Solutions</h2>
            <ul className="space-y-3">
              {project.solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* README */}
        <Card
          className={`p-8 transition-all duration-300 ${
            theme === "dark"
              ? "border border-gray-700/50 bg-gray-800/30"
              : "border border-gray-200/50 bg-gray-50/30"
          }`}
        >
          <h2 className="text-3xl font-black mb-8">README</h2>
          <div className={`prose prose-sm max-w-none ${
            theme === "dark"
              ? "prose-invert"
              : ""
          }`}>
            <pre className={`p-6 rounded-lg overflow-x-auto text-sm font-mono ${
              theme === "dark"
                ? "bg-gray-900 text-gray-300"
                : "bg-white text-gray-700"
            }`}>
              {project.readme}
            </pre>
          </div>
        </Card>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </main>
    </div>
  );
}
