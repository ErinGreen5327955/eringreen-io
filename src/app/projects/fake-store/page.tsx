
import Link from "next/link";
import type { Metadata } from "next";
import FakeStoreArchitecture from "@/components/FakeStoreArchitecture";

export const metadata: Metadata = {
    title: "React Native Fake Store | Erin Green",
    description:
        "A React Native mobile commerce application built from scratch using Expo, Redux Toolkit and REST API integration.",
};

export default function FakeStoreProjectPage() {
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
                        React Native Fake Store
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                        A mobile commerce application developed from scratch
                        using React Native and Expo, integrating product
                        browsing, user authentication, shopping cart
                        management and order processing.
                    </p>

                    <p className="mt-4 max-w-3xl leading-8 text-soft-mist">
            <span className="font-semibold text-seafoam">
              My role:
            </span>{" "}
                        Individual developer — responsible for implementing
                        the React Native application, state management,
                        navigation and integration with a course-provided
                        REST API server.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {[
                            "React Native",
                            "Expo",
                            "JavaScript",
                            "Redux Toolkit",
                            "REST APIs",
                            "React Navigation",
                        ].map((technology) => (
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
                            Fake Store was developed as an individual
                            university software development project across
                            three milestones. Starting from an initial Expo
                            application, I progressively implemented product
                            browsing, Redux-based cart management and
                            authenticated shopping workflows.
                        </p>

                        <p className="mt-4 leading-8 text-muted">
                            The mobile frontend communicates with a
                            course-provided Node.js and Express backend
                            responsible for user accounts, persistent
                            shopping carts and order processing.
                            My development work focused on the client
                            application and its integration with these
                            backend services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Development Milestones
                        </h2>

                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {[
                                {
                                    phase: "01",
                                    title: "Product Browsing",
                                    description:
                                        "Implemented category browsing, product listings, product details and asynchronous API requests.",
                                },
                                {
                                    phase: "02",
                                    title: "Shopping Cart",
                                    description:
                                        "Introduced Redux Toolkit for cart state, quantity controls, totals and navigation badges.",
                                },
                                {
                                    phase: "03",
                                    title: "Authenticated Commerce",
                                    description:
                                        "Integrated registration, sign-in, profile updates, server-side cart synchronisation and order workflows.",
                                },
                            ].map((milestone) => (
                                <article
                                    key={milestone.phase}
                                    className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6"
                                >
                                    <p className="font-mono text-sm font-bold text-seafoam">
                                        Milestone {milestone.phase}
                                    </p>

                                    <h3 className="mt-3 text-lg font-semibold text-soft-mist">
                                        {milestone.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-muted">
                                        {milestone.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Application Architecture
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            I organised the application into separate screens,
                            navigation, Redux state management and API services.
                            This structure separates interface responsibilities
                            from shared application state and communication
                            with external systems.
                        </p>

                        <p className="mt-4 leading-8 text-muted">
                            Product information is retrieved from the public
                            Fake Store API, while authentication, shopping carts
                            and orders use the course-provided backend.
                            Dedicated service modules centralise the requests
                            and response handling for each API.
                        </p>

                        <div className="mt-8">
                            <FakeStoreArchitecture />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
