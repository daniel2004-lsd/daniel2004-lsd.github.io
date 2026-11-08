
import { useState, type CSSProperties } from "react";

const accentColors = {
  turquoise: "#40D6C3",
  blue: "#8298FF",
  orange: "#F5A64A",
};

const skills = [
  {
    category: "Backend",
    items: ["C#", ".NET", "Java", "Spring Boot", "PHP", "Laravel"],
  },
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "HTML", "CSS"],
  },
  {
    category: "Bases de datos",
    items: ["PostgreSQL", "MariaDB", "SQL", "PostGIS"],
  },
  {
    category: "Arquitectura de software",
    items: [
      "DDD",
      "Clean Architecture",
      "Arquitectura Hexagonal",
      "MVC",
      "CQRS",
      "SOLID",
    ],
  },
  {
    category: "Herramientas y DevOps",
    items: ["Docker", "Git", "Linux", "CI/CD", "Entity Framework Core"],
  },
];

const projects = [
  {
    name: "Sistema de Gestión de Horarios",
    type: "Macroproyecto SENA · Ingeniería de software · Desarrollo colaborativo",
    description:
      "Macroproyecto institucional desarrollado como parte de la formación en Análisis y Desarrollo de Software del SENA, en colaboración con compañeros de formación y bajo el acompañamiento del instructor Ariel. La solución aborda la gestión y organización de horarios académicos mediante una arquitectura de microservicios, buscando separar las responsabilidades funcionales y favorecer la independencia, mantenibilidad y evolución de sus componentes.\n\nEl proyecto contempla un enfoque de diseño basado en Domain-Driven Design (DDD) y arquitectura hexagonal, con servicios organizados por contextos y persistencia independiente (Database per Service). También considera la comunicación e integración entre servicios mediante APIs, la definición de contratos, la gestión de acceso basada en permisos y la separación entre backend y frontend.\n\nEl trabajo se desarrolló de manera colaborativa, abordando aspectos de análisis, diseño arquitectónico, documentación técnica, integración y validación de funcionalidades. Representa una experiencia formativa en el diseño y construcción de soluciones distribuidas y en la aplicación de prácticas de ingeniería de software en un proyecto de equipo.",
    technologies: [
      "Microservicios",
      "DDD",
      "Arquitectura Hexagonal",
      "Database per Service",
      "APIs REST",
      "Docker",
      "Git",
      "CI/CD",
    ],
    url: "https://github.com/code-sena/design-software-docs",
    linkLabel: "Ver documentación técnica ↗",
  },
  {
    name: "EcoRuteando",
    type: "Plataforma web y móvil · Proyecto SENA",
    description:
      "Plataforma tecnológica orientada a promover la movilidad sostenible en Neiva. Integra funcionalidades para la planificación de rutas, consulta de puntos de interés y gestión de información geográfica.\n\nEl proyecto contempla el desarrollo de servicios backend, interfaces web y móviles, persistencia de información espacial e integración entre componentes. Su arquitectura aplica principios de Domain-Driven Design, Clean Architecture y separación de responsabilidades.",
    technologies: [
      ".NET",
      "React",
      "React Native",
      "PostgreSQL",
      "PostGIS",
      "Docker",
    ],
    url: "https://github.com/daniel2004-lsd/EcoRuteando",
    linkLabel: "Ver repositorio ↗",
  },
];

function SectionTitle({
  children,
  accent,
}: {
  children: string;
  accent: string;
}) {
  return (
    <div className="mb-4 border-b border-[#293432] pb-2">
      <h2
        className="text-xs font-bold uppercase tracking-[0.15em]"
        style={{ color: accent }}
      >
        {children}
      </h2>
    </div>
  );
}

function App() {
  const [accent, setAccent] = useState<string>(
    accentColors.turquoise
  );

  return (
    <main
      style={{ "--accent": accent } as CSSProperties}
      className="min-h-screen bg-[#121817] px-5 py-12 text-slate-100 sm:py-16"
    >
      <div className="mx-auto max-w-[675px]">

        {/* ENCABEZADO */}
        <header className="mb-11">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-[28px]">
                Daniel Salazar Vargas
              </h1>

              <p
                className="mt-2 text-sm font-medium sm:text-base"
                style={{ color: accent }}
              >
                Desarrollador de Software · Backend & Full Stack
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Neiva, Colombia · Análisis y Desarrollo de Software
              </p>
            </div>

            {/* CAMBIAR COLOR */}
            <div className="flex shrink-0 gap-3 pt-1">
              {Object.values(accentColors).map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setAccent(color)}
                  aria-label="Cambiar color del portafolio"
                  aria-pressed={accent === color}
                  className="h-4 w-4 rounded-full transition-transform hover:scale-125"
                  style={{
                    backgroundColor: color,
                    outline:
                      accent === color
                        ? `2px solid ${color}`
                        : "none",
                    outlineOffset: "4px",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
            <a
              href="mailto:danielsalazarvargas953@gmail.com"
              className="rounded-md px-3 py-2 font-medium text-[#10201D] transition-opacity hover:opacity-80"
              style={{ backgroundColor: accent }}
            >
              Contactar por correo
            </a>

            <a
              href="https://github.com/daniel2004-lsd"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              style={{ color: accent }}
            >
              GitHub ↗
            </a>
          </div>
        </header>

        {/* PERFIL */}
        <section className="mb-10">
          <SectionTitle accent={accent}>Perfil</SectionTitle>

          <p className="text-sm leading-[1.7rem] text-slate-300">
            Aprendiz de Análisis y Desarrollo de Software con
            conocimientos en desarrollo backend y frontend,
            construcción de APIs REST y gestión de bases de datos.
            He participado en proyectos colaborativos donde he
            trabajado con tecnologías como C#, .NET, Java,
            JavaScript y React, aplicando principios de diseño
            y arquitectura de software.
            <br /><br />
            Tengo interés en el desarrollo de soluciones
            mantenibles y escalables, la arquitectura de
            aplicaciones, los patrones de diseño y las buenas
            prácticas de ingeniería de software. Busco continuar
            fortaleciendo mis habilidades técnicas y adquirir
            experiencia en equipos de desarrollo.
          </p>
        </section>

        {/* TECNOLOGÍAS */}
        <section className="mb-10">
          <SectionTitle accent={accent}>Stack principal</SectionTitle>

          <div className="space-y-2.5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="grid grid-cols-1 gap-2 sm:grid-cols-[190px_1fr]"
              >
                <h3 className="text-sm font-semibold text-slate-100">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-[#202B29] px-2 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="mb-10">
          <SectionTitle accent={accent}>
            Proyectos y experiencia formativa
          </SectionTitle>

          <div className="space-y-8">
            {projects.map((project) => (
              <article
                key={project.name}
                className="border-l-2 pl-4"
                style={{ borderColor: accent }}
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {project.name}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {project.type}
                </p>

                <p className="mt-3 whitespace-pre-line text-sm leading-[1.65rem] text-slate-300">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded bg-[#202B29] px-2 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-medium hover:underline"
                  style={{ color: accent }}
                >
                  {project.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* FORMACIÓN */}
        <section className="mb-10">
          <SectionTitle accent={accent}>
            Formación académica
          </SectionTitle>

          <div className="border-l-2 pl-4" style={{ borderColor: accent }}>
            <h3 className="text-sm font-semibold">
              Tecnólogo en Análisis y Desarrollo de Software
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Servicio Nacional de Aprendizaje — SENA
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Formación orientada al análisis de requerimientos,
              diseño y desarrollo de software, programación,
              bases de datos, arquitectura de aplicaciones,
              pruebas y construcción de soluciones tecnológicas.
            </p>
          </div>
        </section>

        {/* INTERESES */}
        <section className="mb-10">
          <SectionTitle accent={accent}>
            Intereses técnicos
          </SectionTitle>

          <p className="text-sm leading-7 text-slate-300">
            Arquitectura de software, desarrollo backend,
            microservicios, diseño de APIs REST, Domain-Driven
            Design, Clean Architecture, patrones de diseño,
            automatización, integración continua y buenas
            prácticas de programación.
          </p>
        </section>

        {/* CONTACTO */}
        <section className="mb-10">
          <SectionTitle accent={accent}>Contacto</SectionTitle>

          <p className="text-sm leading-6 text-slate-300">
            Estoy interesado en oportunidades profesionales,
            nuevos desafíos y proyectos de desarrollo de software
            donde pueda aportar mis conocimientos y continuar
            creciendo como desarrollador.
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:danielsalazarvargas953@gmail.com"
              className="hover:underline"
              style={{ color: accent }}
            >
              Correo electrónico ↗
            </a>

            <a
              href="https://github.com/daniel2004-lsd"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              style={{ color: accent }}
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#293432] pt-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Daniel Salazar Vargas.
          <br />
          Desarrollado con React, TypeScript y Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}

export default App;
