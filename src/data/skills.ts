
export type SkillCategory = {
    category: string;
    primary: string[];
    proficient: string[];
    familiar: string[];
};

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        primary: ["JavaScript"],
        proficient: ["React", "React Native"],
        familiar: ["TypeScript", "HTML", "CSS"],
    },
    {
        category: "Backend",
        primary: ["Java"],
        proficient: ["Python"],
        familiar: ["C", "C++", "Node.js"],
    },
    {
        category: "Frameworks",
        primary: ["React"],
        proficient: ["Expo"],
        familiar: ["Next.js"],
    },
    {
        category: "Databases",
        primary: ["SQL"],
        proficient: [],
        familiar: [],
    },
    {
        category: "Cloud",
        primary: [],
        proficient: ["AWS"],
        familiar: ["Azure"],
    },
    {
        category: "DevOps & Tools",
        primary: ["Git", "GitHub"],
        proficient: ["Docker"],
        familiar: ["Kubernetes", "GitHub Actions"],
    },
    {
        category: "Operating Systems",
        primary: ["Windows"],
        proficient: ["Linux"],
        familiar: [],
    },
];
