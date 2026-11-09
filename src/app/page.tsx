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
                Computer Science graduate focused on full-stack software
                engineering, with a particular interest in Java, React and
                building reliable, user-focused applications. I enjoy
                understanding complex systems and turning challenging
                problems into practical software.
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
              <p className="text-sm uppercase tracking-widest text-seafoam">
                Beyond the Code
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                About Me
              </h2>

              <div className="mt-8 grid gap-10 lg:grid-cols-5">
                <div className="space-y-5 lg:col-span-3">
                  <p className="text-base leading-8 text-soft-mist">
                    I&apos;m a Computer Science student completing
                    my final industry project, with a focus on
                    full-stack software engineering and a
                    particular interest in Java and React.
                    I enjoy understanding how systems work,
                    solving complex problems and building
                    software that is both practical and
                    thoughtfully designed.
                  </p>

                  <p className="leading-8 text-muted">
                    Before moving into software engineering,
                    I spent 12 years with the NSW Police Force
                    in operational, intelligence and leadership
                    roles. That experience developed my ability
                    to analyse complex information, communicate
                    clearly, collaborate across disciplines
                    and make decisions with incomplete information.
                  </p>

                  <p className="leading-8 text-muted">
                    I&apos;m particularly interested in software
                    that makes complex information easier to
                    understand and use, from data-driven
                    interfaces to reliable backend systems.
                    I value clear thinking, maintainable code
                    and working with people who are curious
                    about how things can be improved.
                  </p>
                </div>

                <aside className="lg:col-span-2">
                  <div className="rounded-xl border border-seafoam/20 bg-forest p-6">
                    <h3 className="text-lg font-semibold text-seafoam">
                      What I Bring
                    </h3>

                    <ul className="mt-5 space-y-5">
                      {[
                        {
                          title: "Analytical Problem-Solving",
                          description:
                              "Breaking down complex information and identifying practical solutions.",
                        },
                        {
                          title: "Collaborative Leadership",
                          description:
                              "Experience coordinating teams, communicating priorities and supporting others.",
                        },
                        {
                          title: "Systems Thinking",
                          description:
                              "Understanding how individual components contribute to larger processes.",
                        },
                        {
                          title: "Continuous Learning",
                          description:
                              "Building new technical skills through hands-on projects and deliberate practice.",
                        },
                      ].map((strength) => (
                          <li key={strength.title}>
                            <h4 className="font-semibold text-soft-mist">
                              {strength.title}
                            </h4>
                            <p className="mt-1 text-sm leading-7 text-muted">
                              {strength.description}
                            </p>
                          </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </section>

        </main>

        <footer className="border-t border-white/10 px-6 py-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted">
              &copy; 2026 Erin Green
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
