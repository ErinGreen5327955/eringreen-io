
import type { Project } from "@/data/projects";
import Link from "next/link";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({
                                        project,
                                    }: ProjectCardProps) {
    return (
        <article className="flex h-full flex-col rounded-xl border border-seafoam/20 bg-forest-teal/40 p-6 transition-colors hover:border-seafoam/50">
            <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-seafoam">
          Engineering Project
        </span>
                <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-seafoam"
                />
            </div>

            <h3 className="text-2xl font-bold text-soft-mist">
                {project.title}
            </h3>

            <p className="mt-4 leading-7 text-muted">
                {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-md border border-seafoam/20 bg-forest/50 px-2.5 py-1 text-xs text-seafoam"
                    >
            {technology}
          </span>
                ))}
            </div>

            <ul className="mt-7 space-y-3 text-sm leading-6 text-muted">
                {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
            <span aria-hidden="true" className="text-seafoam">
              ✓
            </span>
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-8">

                <div className="mt-auto flex flex-wrap gap-5 pt-8">
                    {(project.id === "tetris" ||
                        project.id === "algorithms" ||
                        project.id === "fake-store") && (
                        <Link
                            href={`/projects/${project.id}`}
                            className="font-semibold text-seafoam hover:underline"
                        >
                            Read Case Study →
                        </Link>
                    )}


                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-seafoam hover:underline"
                        >
                            View Source Code ↗
                        </a>
                    )}


                    {!project.githubUrl &&
                        project.id !== "tetris" &&
                        project.id !== "algorithms" && (
                            <span className="text-sm text-muted">
      Project case study coming soon
    </span>
                        )}

                </div>

            </div>
        </article>
    );
}
