
import Link from "next/link";
import type { Metadata } from "next";
import ConvexHullDiagram from "@/components/ConvexHullDiagram";
import SaxPipeline from "@/components/SaxPipeline";
import SaxWorkedExample from "@/components/SaxWorkedExample";

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


                <nav
                    aria-label="Case study sections"
                    className="mt-10 rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6"
                >
                    <h2 className="text-lg font-semibold text-soft-mist">
                        Explore This Case Study
                    </h2>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {[
                            { label: "Implementations", href: "#implementations" },
                            { label: "Complexity & Trade-offs", href: "#complexity" },
                            { label: "Convex Hull", href: "#convex-hull" },
                            { label: "SAX Pipeline", href: "#sax-pipeline" },
                            { label: "SAX Worked Example", href: "#sax-example" },
                            { label: "Testing & Verification", href: "#testing" },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex items-center justify-between rounded-lg border border-seafoam/15 bg-forest px-4 py-3 text-sm font-medium text-soft-mist transition-colors hover:border-seafoam/40 hover:text-seafoam"
                            >
                                <span>{item.label}</span>
                                <span aria-hidden="true" className="ml-3 text-seafoam">
          ↗
        </span>
                            </a>
                        ))}
                    </div>
                </nav>


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

                    <section id="implementations">
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


                    <section id="complexity">
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Algorithm Complexity & Trade-offs
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            Algorithm selection involves balancing performance,
                            implementation complexity and input characteristics.
                            These examples illustrate how different approaches
                            solve related problems with different trade-offs.
                        </p>

                        <div className="mt-8 overflow-x-auto rounded-xl border border-seafoam/20">
                            <table className="w-full min-w-[650px] text-left text-sm">
                                <thead className="bg-forest-teal text-seafoam">
                                <tr>
                                    <th className="p-4 font-semibold">Algorithm</th>
                                    <th className="p-4 font-semibold">Time Complexity</th>
                                    <th className="p-4 font-semibold">Key Trade-off</th>
                                </tr>
                                </thead>

                                <tbody className="divide-y divide-seafoam/15 text-muted">
                                <tr>
                                    <td className="p-4 font-medium text-soft-mist">
                                        Dijkstra + Fibonacci Heap
                                    </td>
                                    <td className="p-4 font-mono">
                                        O(E + V log V)
                                    </td>
                                    <td className="p-4">
                                        Strong amortised bounds, but a more
                                        complex priority queue implementation.
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-4 font-medium text-soft-mist">
                                        B-Tree Search
                                    </td>
                                    <td className="p-4 font-mono">
                                        O(log n) node visits
                                    </td>
                                    <td className="p-4">
                                        High branching factor reduces tree
                                        height; work within nodes also matters.
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-4 font-medium text-soft-mist">
                                        Jarvis March
                                    </td>
                                    <td className="p-4 font-mono">
                                        O(nh)
                                    </td>
                                    <td className="p-4">
                                        Output-sensitive performance, useful
                                        when the hull contains few points.
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-4 font-medium text-soft-mist">
                                        Graham Scan
                                    </td>
                                    <td className="p-4 font-mono">
                                        O(n log n)
                                    </td>
                                    <td className="p-4">
                                        Predictable asymptotic performance,
                                        with sorting as the dominant step.
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-4 text-xs leading-6 text-muted">
                            V = vertices, E = edges, n = input elements,
                            h = convex hull vertices. Complexity bounds
                            describe the algorithms rather than measured
                            execution times.
                        </p>
                    </section>


                    <section id="convex-hull">
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Visualising Computational Geometry
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            Jarvis March and Graham Scan solve the same
                            convex hull problem using different strategies.
                            Both identify the outermost vertices of a point
                            set, but differ in how they construct the boundary.
                        </p>

                        <div className="mt-8">
                            <ConvexHullDiagram />
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6">
                                <h3 className="font-semibold text-seafoam">
                                    Jarvis March
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-muted">
                                    Builds the hull one vertex at a time by
                                    selecting the next outermost point using
                                    orientation comparisons. Its running time
                                    depends on the number of hull vertices.
                                </p>
                            </div>

                            <div className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6">
                                <h3 className="font-semibold text-seafoam">
                                    Graham Scan
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-muted">
                                    Sorts points by polar angle, then processes
                                    them using a stack. Orientation tests remove
                                    points that would introduce an incorrect turn.
                                </p>
                            </div>
                        </div>
                    </section>


                    <section id="sax-pipeline">
                        <h2 className="text-2xl font-bold text-soft-mist">
                            From Voice Signals to Symbolic Sequences
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            The voice similarity implementation uses a
                            multi-stage processing pipeline to convert
                            numerical time-series data into symbolic
                            representations.
                        </p>

                        <p className="mt-4 leading-8 text-muted">
                            Each stage addresses a different challenge:
                            normalisation reduces differences in scale,
                            PAA compresses the data, SAX creates a symbolic
                            representation, and LCS compares the resulting
                            sequences.
                        </p>

                        <div className="mt-8">
                            <SaxPipeline />
                        </div>

                        <div className="mt-6 rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6">
                            <h3 className="font-semibold text-seafoam">
                                Engineering Insight
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-muted">
                                Rather than comparing every raw data point
                                directly, the pipeline reduces the signal
                                into a sequence of symbols. This separates
                                signal representation from similarity
                                calculation and makes each processing stage
                                easier to test independently.
                            </p>
                        </div>
                    </section>


                    <section id="sax-example">
                        <h2 className="text-2xl font-bold text-soft-mist">
                            SAX Transformation — Worked Example
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            This simplified example demonstrates how numerical
                            time-series values are transformed into a compact
                            symbolic representation.
                        </p>

                        <div className="mt-8">
                            <SaxWorkedExample />
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


                    <section id="testing">
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Testing & Verification
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            The project uses JUnit to verify algorithm correctness,
                            data structure invariants, boundary conditions and
                            invalid inputs. Six test classes contain 61 tests
                            across the five problem areas.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {[
                                { value: "61", label: "JUnit tests" },
                                { value: "6", label: "Test classes" },
                                { value: "5", label: "Problem areas" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6"
                                >
                                    <p className="text-4xl font-bold text-seafoam">
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-sm text-muted">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-3 text-sm text-muted">
                            All 61 tests passed in the recorded development
                            Maven test run.
                        </p>

                        <h3 className="mt-10 text-lg font-semibold text-soft-mist">
                            Key Testing Strategies
                        </h3>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    title: "Algorithm Agreement",
                                    description:
                                        "Compared Jarvis March and Graham Scan results, including hull perimeter. Also verified that dynamic and linear programming produced equivalent optimal solutions.",
                                },
                                {
                                    title: "Data Structure Invariants",
                                    description:
                                        "Tested B-tree insertion, deletion, sorted traversal and duplicate handling. Verified Fibonacci heap minimum extraction and decrease-key behaviour.",
                                },
                                {
                                    title: "Boundary Conditions",
                                    description:
                                        "Covered unreachable graph vertices, collinear points, insufficient input points, zero budgets and constant time-series data.",
                                },
                                {
                                    title: "Input Validation",
                                    description:
                                        "Verified rejection of negative edge weights, invalid B-tree degrees, invalid budget values and unsupported heap operations.",
                                },
                                {
                                    title: "Similarity Thresholds",
                                    description:
                                        "Tested identical and different symbolic sequences, including the exact 75% similarity boundary.",
                                },
                                {
                                    title: "Expected Results",
                                    description:
                                        "Checked shortest-path distances, LCS lengths, PAA averages, SAX breakpoints and known convex hull outputs.",
                                },
                            ].map((strategy) => (
                                <article
                                    key={strategy.title}
                                    className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6"
                                >
                                    <h4 className="font-semibold text-seafoam">
                                        {strategy.title}
                                    </h4>
                                    <p className="mt-3 text-sm leading-7 text-muted">
                                        {strategy.description}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 rounded-xl border border-seafoam/20 p-6">
                            <h3 className="font-semibold text-soft-mist">
                                Example: Differential Testing
                            </h3>

                            <p className="mt-3 leading-7 text-muted">
                                Two independently implemented convex hull
                                algorithms were tested against the same
                                input data. Their resulting hulls and
                                perimeters were compared for consistency.
                            </p>

                            <div className="mt-5 overflow-x-auto rounded-lg bg-forest p-5">
      <pre className="text-sm leading-7 text-seafoam">
        <code>{`algorithmsAgreeOnIrregularHull
algorithmsProduceSamePerimeter
algorithmsProduceEquivalentOptimum`}</code>
      </pre>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-muted">
                                These are actual JUnit test method names from
                                Problem5Test and Problem4Test. Comparing
                                independent implementations helps detect
                                discrepancies that may not be obvious from
                                testing either algorithm in isolation.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
