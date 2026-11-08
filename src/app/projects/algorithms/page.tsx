
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Algorithms, Data Structures & Optimisation | Erin Green",
    description:
        "Five Java implementations covering graph algorithms, B-trees, time-series similarity, optimisation and computational geometry.",
};

const implementations = [
    {
        number: "01",
        title: "Dijkstra's Algorithm & Fibonacci Heap",
        category: "Graph Algorithms",
        description:
            "Implemented shortest-path computation using Dijkstra's algorithm with a custom Fibonacci heap priority queue.",
        technologies: ["Java", "Graphs", "Priority Queues"],
    },
    {
        number: "02",
        title: "B-Tree",
        category: "Data Structures",
        description:
            "Implemented a B-tree supporting search, insertion, deletion and traversal, including structural changes needed to maintain tree invariants.",
        technologies: ["Java", "Balanced Trees", "Data Structures"],
    },
    {
        number: "03",
        title: "SAX Voice Similarity",
        category: "Time-Series Analysis",
        description:
            "Developed a similarity-matching pipeline using z-normalisation, Piecewise Aggregate Approximation, SAX encoding and Longest Common Subsequence.",
        technologies: ["Java", "SAX", "LCS", "Dynamic Programming"],
    },
    {
        number: "04",
        title: "Constrained Optimisation",
        category: "Optimisation",
        description:
            "Modelled resource-allocation problems using dynamic programming and linear programming, with ojAlgo for mathematical optimisation.",
        technologies: ["Java", "Dynamic Programming", "ojAlgo"],
    },
    {
        number: "05",
        title: "Convex Hull Algorithms",
        category: "Computational Geometry",
        description:
            "Implemented Jarvis March and Graham Scan to calculate convex hulls, exploring geometric orientation tests and algorithmic trade-offs.",
        technologies: ["Java", "Jarvis March", "Graham Scan"],
    },
];

export default function AlgorithmsProjectPage() {
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
                        Engineering Case Study
                    </p>

                    <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                        Algorithms, Data Structures & Optimisation
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                        Five Java implementations exploring algorithmic
                        efficiency, data structure design, mathematical
                        modelling and correctness through automated testing.
                    </p>

                    <p className="mt-4 max-w-3xl leading-8 text-soft-mist">
            <span className="font-semibold text-seafoam">
              My role:
            </span>{" "}
                        Individual developer — responsible for implementing,
                        testing and documenting all five problems.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {["Java", "Maven", "JUnit", "ojAlgo", "Git"].map(
                            (technology) => (
                                <span
                                    key={technology}
                                    className="rounded-md border border-seafoam/20 bg-forest-teal/40 px-3 py-1.5 text-sm text-seafoam"
                                >
                  {technology}
                </span>
                            ),
                        )}
                    </div>
                </header>

                <div className="space-y-16 py-16">
                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Project Overview
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            This individual Java project explores five
                            problems spanning graph algorithms, balanced
                            search trees, time-series similarity,
                            constrained optimisation and computational
                            geometry.
                        </p>

                        <p className="mt-4 leading-8 text-muted">
                            Each problem was implemented as a separate
                            package within a Maven project, with
                            dedicated entry points and JUnit tests.
                            The emphasis was on algorithm correctness,
                            edge-case handling and understanding the
                            trade-offs between different approaches.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Implementations
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            The five implementations cover distinct
                            areas of computer science, from low-level
                            data structures to mathematical optimisation.
                        </p>

                        <div className="mt-8 space-y-5">
                            {implementations.map((item) => (
                                <article
                                    key={item.number}
                                    className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6 sm:p-8"
                                >
                                    <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-seafoam">
                      {item.number}
                    </span>

                                        <span className="text-xs uppercase tracking-widest text-muted">
                      {item.category}
                    </span>
                                    </div>

                                    <h3 className="mt-4 text-xl font-bold text-soft-mist">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-muted">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {item.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-md border border-seafoam/15 px-3 py-1 text-xs text-seafoam"
                                            >
                        {technology}
                      </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Engineering Approach
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            The implementations were organised into
                            separate Java packages to isolate each
                            problem. Dedicated classes represent
                            supporting data structures, algorithms
                            and result types.
                        </p>

                        <p className="mt-4 leading-8 text-muted">
                            This structure makes individual algorithms
                            easier to reason about and test without
                            coupling unrelated problems together.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Testing & Verification
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            The project includes six JUnit test classes
                            covering the five problem areas. Tests
                            exercise expected behaviour and selected
                            edge cases, including operations on
                            custom data structures.
                        </p>

                        <p className="mt-4 leading-8 text-muted">
                            A successful development run reported
                            61 tests passing. Subsequent sections
                            will examine specific test scenarios
                            and implementation decisions.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
