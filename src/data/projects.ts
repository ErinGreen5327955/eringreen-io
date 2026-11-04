
export type Project = {
    id: string;
    title: string;
    summary: string;
    technologies: string[];
    highlights: string[];
    githubUrl?: string;
};

export const projects: Project[] = [
    {
        id: "tetris",
        title: "JavaFX Tetris",
        summary:
            "A desktop Tetris application developed collaboratively, featuring a custom Java game engine and graphical interface.",
        technologies: ["Java", "JavaFX", "Maven", "JUnit", "Git"],
        highlights: [
            "Implemented piece movement, rotation and collision detection",
            "Developed row-clearing, scoring-related game logic and game-over detection",
            "Collaborated using Git and automated tests",
        ],
        githubUrl:
            "https://github.com/ErinGreen5327955/2006ICT-PG9-Tetris-Project",
    },
    {
        id: "algorithms",
        title: "Algorithms & Optimisation",
        summary:
            "A collection of Java implementations exploring algorithmic problem-solving, similarity analysis and optimisation.",
        technologies: ["Java", "Maven", "JUnit", "ojAlgo"],
        highlights: [
            "Implemented SAX-based voice similarity analysis",
            "Developed Jarvis March and Graham Scan convex hull algorithms",
            "Modelled a constrained optimisation problem using ojAlgo",
        ],
    },
    {
        id: "fake-store",
        title: "React Native Fake Store",
        summary:
            "A mobile shopping application with product browsing, cart management and user authentication.",
        technologies: [
            "React Native",
            "JavaScript",
            "Redux",
            "Expo",
            "REST APIs",
        ],
        highlights: [
            "Built category and product browsing screens",
            "Implemented Redux-based shopping cart state",
            "Integrated authentication and user profile endpoints",
        ],
    },
];
