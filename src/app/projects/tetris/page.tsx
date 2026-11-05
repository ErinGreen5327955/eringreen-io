import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "JavaFX Tetris | Erin Green",
    description:
        "A JavaFX Tetris project featuring a custom game engine, collision detection, rotation, row clearing and automated testing.",
};

const screenshots = [
    {
        src: "/images/projects/tetris/gameplay.png",
        title: "Single-Player Gameplay",
        description: "Game board, scoring, levels and game-over handling.",
    },
    {
        src: "/images/projects/tetris/multiplayer-ai.png",
        title: "Human vs AI",
        description: "Separate game states for human and AI players.",
    },
    {
        src: "/images/projects/tetris/configuration.png",
        title: "Game Configuration",
        description: "Adjustable board dimensions, difficulty and player settings.",
    },
    {
        src: "/images/projects/tetris/multiplayer-external.png",
        title: "External Player Mode",
        description: "Multiplayer interface showing a disconnected external server.",
    },
    {
        src: "/images/projects/tetris/high-scores.png",
        title: "High Scores",
        description: "Leaderboard displaying saved scores and starting levels.",
    },
];


const contributions = [
    "Designed and implemented the Java game engine",
    "Developed tetromino movement, rotation and collision detection",
    "Implemented piece locking and completed-row detection",
    "Developed row-clearing and game-over logic",
    "Integrated timed piece movement and pause/resume behaviour",
    "Contributed to integration testing and collaborative development",
];

const technologies = [
    "Java",
    "JavaFX",
    "Maven",
    "JUnit",
    "Git",
    "GitHub",
];

export default function TetrisProjectPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <Link
                    href="/#projects"
                    className="text-sm font-medium text-seafoam hover:underline"
                >
                    ← Back to projects
                </Link>

                <header className="mt-16 border-b border-seafoam/20 pb-12">
                    <p className="text-sm font-semibold uppercase tracking-widest text-seafoam">
                        Software Engineering Case Study
                    </p>

                    <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                        JavaFX Tetris
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                        A desktop Tetris application developed collaboratively,
                        combining a custom Java game engine with a JavaFX
                        graphical interface.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-md border border-seafoam/20 bg-forest-teal/40 px-3 py-1.5 text-sm text-seafoam"
                            >
                {technology}
              </span>
                        ))}
                    </div>
                </header>

                <div className="space-y-16 py-16">
                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Project Overview
                        </h2>
                        <p className="mt-5 leading-8 text-muted">
                            This project involved developing a playable Tetris
                            application using Java and JavaFX. The application
                            combines object-oriented game logic with a graphical
                            interface, keyboard controls and configurable gameplay.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            My Contribution
                        </h2>
                        <p className="mt-5 leading-8 text-muted">
                            Working as part of a two-person development team,
                            I was primarily responsible for implementing the
                            underlying game engine and its behaviour.
                        </p>

                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                            {contributions.map((contribution) => (
                                <li
                                    key={contribution}
                                    className="rounded-lg border border-seafoam/15 bg-forest-teal/30 p-4 text-sm leading-6 text-soft-mist"
                                >
                                    <span className="mr-2 text-seafoam">✓</span>
                                    {contribution}
                                </li>
                            ))}
                        </ul>
                    </section>


                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Application Gallery
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            Screenshots from the completed application, showing
                            gameplay, multiplayer modes, configuration and scoring.
                            The interface was developed collaboratively, with my
                            primary responsibility focused on the gameplay engine.
                        </p>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            {screenshots.map((screenshot, index) => (
                                <figure
                                    key={screenshot.src}
                                    className={`overflow-hidden rounded-xl border border-seafoam/20 bg-forest-teal/30 ${
                                        index === 0 ? "sm:col-span-2" : ""
                                    }`}
                                >
                                    <div className="relative h-72 bg-forest sm:h-80">
                                        <Image
                                            src={screenshot.src}
                                            alt={screenshot.title}
                                            fill
                                            sizes={
                                                index === 0
                                                    ? "(max-width: 640px) 100vw, 900px"
                                                    : "(max-width: 640px) 100vw, 450px"
                                            }
                                            className="object-contain"
                                        />
                                    </div>

                                    <figcaption className="border-t border-seafoam/15 p-5">
                                        <h3 className="font-semibold text-soft-mist">
                                            {screenshot.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-muted">
                                            {screenshot.description}
                                        </p>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>


                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Technical Implementation
                        </h2>
                        <p className="mt-5 leading-8 text-muted">
                            The engine manages the game board, tetromino
                            positioning, movement validation, collision detection
                            and piece locking. It also detects completed rows
                            and determines when gameplay should end.
                        </p>
                        <p className="mt-4 leading-8 text-muted">
                            The JavaFX interface presents the game state and
                            handles user interaction. Separating gameplay logic
                            from presentation helped support testing and
                            integration between team members.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Engineering Challenges
                        </h2>
                        <p className="mt-5 leading-8 text-muted">
                            A central challenge was ensuring that movement and
                            rotation respected board boundaries and occupied
                            cells. Collision checks needed to prevent invalid
                            moves while allowing pieces to lock correctly when
                            downward movement was no longer possible.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Testing & Verification
                        </h2>
                        <p className="mt-5 leading-8 text-muted">
                            Development included automated tests and integration
                            checks covering gameplay behaviour. The next
                            iteration of this case study will link to specific
                            test cases and implementation evidence.
                        </p>
                    </section>

                    <section className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-8">
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Explore the Source Code
                        </h2>
                        <p className="mt-4 leading-7 text-muted">
                            View the project repository, implementation and
                            development history on GitHub.
                        </p>

                        <a
                            href="https://github.com/ErinGreen5327955/2006ICT-PG9-Tetris-Project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex rounded-lg bg-seafoam px-5 py-3 font-semibold text-forest transition-colors hover:bg-soft-mist"
                        >
                            View GitHub Repository ↗
                        </a>
                    </section>
                </div>
            </div>
        </main>
    );
}
