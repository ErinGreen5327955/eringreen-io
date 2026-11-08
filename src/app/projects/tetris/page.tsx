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
                            Technical Architecture
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            The application uses an object-oriented architecture that
                            separates game-state management, gameplay rules and
                            presentation. The Game class coordinates the active
                            tetromino, board state, scoring, row clearing and piece
                            generation through specialised components.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6">
                                <h3 className="font-semibold text-seafoam">
                                    Game State
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-muted">
                                    Game, Board and ActivePiece represent the current
                                    gameplay state, including occupied cells and
                                    the active tetromino.
                                </p>
                            </div>

                            <div className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6">
                                <h3 className="font-semibold text-seafoam">
                                    Movement & Collision
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-muted">
                                    MovementService and RotationService encapsulate
                                    piece behaviour. PieceCollisionChecker validates
                                    proposed positions against board boundaries
                                    and occupied cells.
                                </p>
                            </div>

                            <div className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6">
                                <h3 className="font-semibold text-seafoam">
                                    Gameplay Rules
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-muted">
                                    Dedicated services handle scoring, completed-row
                                    clearing and tetromino generation, keeping these
                                    responsibilities separate from the main game model.
                                </p>
                            </div>

                            <div className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6">
                                <h3 className="font-semibold text-seafoam">
                                    Testable Design
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-muted">
                                    Service interfaces and injectable dependencies
                                    allow gameplay behaviour to be tested with
                                    controlled implementations rather than relying
                                    on the graphical interface.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 rounded-xl border border-seafoam/20 p-6">
                            <h3 className="font-semibold text-soft-mist">
                                Example: Collision Validation
                            </h3>

                            <p className="mt-3 leading-7 text-muted">
                                PieceCollisionChecker.canOccupy() examines each
                                block position in a proposed tetromino placement.
                                It rejects positions outside the board or
                                overlapping an occupied cell.
                            </p>

                            <pre className="mt-5 overflow-x-auto rounded-lg bg-forest p-5 text-sm leading-7 text-seafoam">
      <code>{`for (Position position : activePiece.getBoardPositions()) {
    int column = position.getColumn();
    int row = position.getRow();

    if (!board.isInside(column, row)) {
        return false;
    }

    if (board.isOccupied(column, row)) {
        return false;
    }
}

return true;`}</code>
    </pre>

                            <p className="mt-4 text-sm leading-7 text-muted">
                                This centralises placement validation so that
                                movement and rotation can apply consistent
                                rules when checking proposed positions.
                            </p>
                        </div>
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
                            The game engine was verified using automated JUnit
                            tests covering gameplay state, movement, collision
                            detection, row clearing and edge cases. Tests were
                            designed to exercise gameplay rules independently
                            of the JavaFX interface.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {[
                                { count: "46", label: "Game tests" },
                                { count: "11", label: "Collision tests" },
                                { count: "7", label: "Movement tests" },
                            ].map((result) => (
                                <div
                                    key={result.label}
                                    className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6"
                                >
                                    <p className="text-4xl font-bold text-seafoam">
                                        {result.count}
                                    </p>
                                    <p className="mt-2 text-sm text-muted">
                                        {result.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-3 text-sm text-muted">
                            All 64 tests passed across these three suites in the
                            saved Maven test results.
                        </p>

                        <h3 className="mt-10 text-lg font-semibold text-soft-mist">
                            Key Testing Scenarios
                        </h3>

                        <div className="mt-5 space-y-4">
                            {[
                                {
                                    title: "Boundary and Collision Handling",
                                    description:
                                        "Verified that pieces cannot move beyond board boundaries or overlap occupied cells, while valid edge positions remain permitted.",
                                },
                                {
                                    title: "Piece Locking and Game State",
                                    description:
                                        "Tested piece locking, next-piece generation, automatic downward movement and game-over conditions.",
                                },
                                {
                                    title: "Row Clearing and Colour Preservation",
                                    description:
                                        "Verified single and multiple row clearing, correct shifting of remaining rows and preservation of block colours.",
                                },
                                {
                                    title: "Scoring and Level Progression",
                                    description:
                                        "Tested initial scores, cleared-line tracking, level progression and the maximum level constraint.",
                                },
                                {
                                    title: "Invalid Inputs and Edge Cases",
                                    description:
                                        "Tested null dependency rejection, invalid initial levels and blocked movement scenarios.",
                                },
                            ].map((scenario) => (
                                <div
                                    key={scenario.title}
                                    className="rounded-lg border border-seafoam/15 bg-forest-teal/30 p-5"
                                >
                                    <h4 className="font-semibold text-seafoam">
                                        {scenario.title}
                                    </h4>
                                    <p className="mt-2 text-sm leading-7 text-muted">
                                        {scenario.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-xl border border-seafoam/20 p-6">
                            <h3 className="font-semibold text-soft-mist">
                                Example: Collision Test Coverage
                            </h3>

                            <p className="mt-3 leading-7 text-muted">
                                The collision test suite checks both invalid
                                placements and valid boundary conditions.
                                For example, a tetromino touching the right
                                boundary is permitted, while a placement
                                extending beyond it is rejected.
                            </p>

                            <div className="mt-5 overflow-x-auto rounded-lg bg-forest p-5">
      <pre className="text-sm leading-7 text-seafoam">
        <code>{`canOccupyReturnsFalseWhenPieceIsOutsideRightBoundary
canOccupyReturnsTrueWhenPieceTouchesRightBoundary
canOccupyReturnsFalseWhenPieceOverlapsOccupiedCell
canOccupyChecksEveryBlockForOccupiedCellCollision`}</code>
      </pre>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-muted">
                                These are test method names from the project&apos;s
                                PieceCollisionCheckerTest class.
                            </p>
                        </div>
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
