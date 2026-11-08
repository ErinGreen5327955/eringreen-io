
const points = [
    [35, 115],
    [85, 35],
    [240, 25],
    [305, 100],
    [245, 165],
    [90, 160],
    [140, 90],
    [190, 65],
    [220, 120],
    [115, 130],
    [165, 145],
    [265, 90],
    [185, 110],
];

const hullIndices = new Set([0, 1, 2, 3, 4, 5]);

export default function ConvexHullDiagram() {
    return (
        <figure className="overflow-hidden rounded-xl border border-seafoam/20 bg-forest-teal/30 p-5 sm:p-8">
            <svg
                viewBox="0 0 340 190"
                role="img"
                aria-label="Convex hull surrounding six outer points, with seven interior points"
                className="h-auto w-full"
            >
                <polygon
                    points="35,115 85,35 240,25 305,100 245,165 90,160"
                    fill="#005c6d"
                    fillOpacity="0.2"
                    stroke="#91d8dd"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                />

                {points.map(([x, y], index) => (
                    <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r="4.5"
                        fill={
                            hullIndices.has(index)
                                ? "#91d8dd"
                                : "#66949e"
                        }
                        stroke="#052b35"
                        strokeWidth="1"
                    />
                ))}
            </svg>

            <figcaption className="mt-5">
                <h3 className="font-semibold text-soft-mist">
                    Convex Hull — Illustrative Point Set
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted">
                    Both Jarvis March and Graham Scan identify the
                    outer boundary of this point set. The shaded
                    region represents the convex hull, while the
                    remaining points lie inside it.
                </p>

                <div className="mt-4 flex flex-wrap gap-5 text-xs text-muted">
                    <span>● Light aqua: hull vertices</span>
                    <span>● Muted teal: interior points</span>
                </div>
            </figcaption>
        </figure>
    );
}
