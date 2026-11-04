
import { skills } from "@/data/skills";

function SkillTags({ items }: { items: string[] }) {
    if (items.length === 0) {
        return <span className="text-muted/50">—</span>;
    }

    return (
        <div className="flex flex-wrap gap-2">
            {items.map((item) => (
                <span
                    key={item}
                    className="rounded-md border border-seafoam/20 bg-seafoam/10 px-2.5 py-1 text-xs font-medium text-soft-mist"
                >
          {item}
        </span>
            ))}
        </div>
    );
}

export default function SkillsMatrix() {
    return (
        <div className="mt-10 overflow-x-auto rounded-xl border border-seafoam/20 bg-forest/40">
            <table className="w-full min-w-[650px] border-collapse text-left">
                <thead className="bg-forest-teal">
                <tr className="border-b border-seafoam/20">
                    {["Area", "Primary", "Proficient", "Familiar"].map(
                        (heading) => (
                            <th
                                key={heading}
                                scope="col"
                                className="px-5 py-4 text-sm font-semibold text-seafoam"
                            >
                                {heading}
                            </th>
                        ),
                    )}
                </tr>
                </thead>

                <tbody>
                {skills.map((skill) => (
                    <tr
                        key={skill.category}
                        className="border-b border-seafoam/10 last:border-b-0"
                    >
                        <th
                            scope="row"
                            className="px-5 py-5 align-top text-sm font-semibold text-seafoam"
                        >
                            {skill.category}
                        </th>

                        <td className="px-5 py-5 align-top">
                            <SkillTags items={skill.primary} />
                        </td>

                        <td className="px-5 py-5 align-top">
                            <SkillTags items={skill.proficient} />
                        </td>

                        <td className="px-5 py-5 align-top">
                            <SkillTags items={skill.familiar} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
