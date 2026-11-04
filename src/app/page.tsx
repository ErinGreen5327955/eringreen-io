import SkillsMatrix from "@/components/SkillsMatrix";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "mailto:hello@eringreen.io" },
];

export default function Home() {
  return (
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-white/10">
          <nav
              aria-label="Main navigation"
              className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
          >
            <a
                href="#home"
                className="text-xl font-bold tracking-tight text-seafoam"
            >
              EG.
            </a>

            <div className="flex items-center gap-5 sm:gap-8">
              {navigation.map((item) => (
                  <a
                      key={item.label}
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-seafoam"
                  >
                    {item.label}
                  </a>
              ))}
            </div>
          </nav>
        </header>

        <main id="home">
          <section className="relative mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-24">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-16 -z-0 h-80 w-80 rounded-full bg-botanical-teal/20 blur-3xl"
            />

            <div className="relative z-10 max-w-3xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-seafoam">
                Software Engineering Portfolio
              </p>

              <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
                Erin Green<span className="text-seafoam">.</span>
              </h1>

              <h2 className="mt-8 max-w-2xl text-2xl font-medium leading-snug text-seafoam sm:text-3xl">
                Building thoughtful software for complex problems.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                Computer Science graduate building practical, secure and
                user-focused applications. Interested in full-stack engineering,
                data-driven interfaces and solving meaningful problems.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                    href="#projects"
                    className="rounded-lg bg-seafoam px-6 py-3 font-semibold text-forest transition-colors hover:bg-soft-mist"
                >
                  Explore My Work
                </a>

                <a
                    href="https://github.com/ErinGreen5327955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-seafoam/40 px-6 py-3 font-semibold text-seafoam transition-colors hover:bg-seafoam/10"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </section>

          <section
              id="skills"
              className="border-t border-white/10 bg-forest-teal/30 px-6 py-20"
          >
            <div className="mx-auto max-w-6xl">
              <p className="text-sm uppercase tracking-widest text-seafoam">
                Technical Expertise
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Technical Competencies
              </h2>
              <p className="mt-4 max-w-2xl text-muted">
                Technologies I&apos;ve worked with across academic and
                independent software engineering projects.
              </p>

              <SkillsMatrix />
            </div>
          </section>

          <section id="projects" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm uppercase tracking-widest text-seafoam">
                Selected Work
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Featured Engineering Projects
              </h2>
              <p className="mt-4 max-w-2xl text-muted">
                Selected projects demonstrating application development,
                algorithm design and collaborative engineering.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>

          <section
              id="about"
              className="border-t border-white/10 bg-forest-teal/30 px-6 py-20"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="mt-4 max-w-2xl text-muted">
                My background combines software engineering study with
                experience in analytical problem-solving, leadership and
                complex operational environments.
              </p>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 px-6 py-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted">
              © 2026 Erin Green
            </p>
            <a
                href="https://github.com/ErinGreen5327955"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-seafoam hover:underline"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
  );
}
