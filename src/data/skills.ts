
export type SkillCategory = {
    category: string;
    primary: string[];
    proficient: string[];
    familiar: string[];
};

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        primary: ["TypeScript"],
        proficient: ["JavaScript", "HTML", "CSS"],
        familiar: [],
    },
    {
        category: "Backend",
        primary: ["Java"],
        proficient: ["Python", "Node.js"],
        familiar: ["C", "C++"],
    },
    {
        category: "Frameworks",
        primary: ["React", "Spring Boot"],
        proficient: ["React Native", "Next.js"],
        familiar: ["Spring Cloud"],
    },
    {
        category: "Databases",
        primary: ["MySQL"],
        proficient: ["PostgreSQL"],
        familiar: ["MongoDB"],
    },
    {
        category: "Cloud",
        primary: ["AWS"],
        proficient: ["Azure"],
        familiar: ["GCP"],
    },
    {
        category: "DevOps & Tools",
        primary: ["Git", "GitHub"],
        proficient: ["Docker", "GitHub Actions"],
        familiar: ["Kubernetes"],
    },
    {
        category: "Operating Systems",
        primary: [ "Ubuntu Linux", "Windows"],
        proficient: ["Kali Linux"],
        familiar: ["Mac"],
    },
];
