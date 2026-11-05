
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
        proficient: ["TypeScript", "HTML", "CSS"],
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
        proficient: ["Expo", "React Native", "Next.js"],
        familiar: ["Quarkus", "Spring Cloud"],
    },
    {
        category: "Databases",
        primary: ["PostgresSQL"],
        proficient: ["MongoDB", "MySQL"],
        familiar: [],
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
        familiar: ["Kubernetes", "Terraform"],
    },
    {
        category: "Operating Systems",
        primary: [ "Ubuntu Linux", "Windows"],
        proficient: ["Alpine Linux", "Kali Linux"],
        familiar: ["Mac"],
    },
];
