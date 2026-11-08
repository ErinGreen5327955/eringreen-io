
const stages = [
    {
        number: "01",
        title: "Z-normalisation",
        detail: "Standardise the time series",
        description:
            "Subtract the mean and divide by the standard deviation to reduce differences in offset and scale.",
    },
    {
        number: "02",
        title: "Piecewise Aggregate Approximation",
        detail: "Reduce dimensionality",
        description:
            "Divide the normalised signal into segments and calculate an average for each segment.",
    },
    {
        number: "03",
        title: "Symbolic Aggregate approXimation",
        detail: "Encode the signal",
        description:
            "Map segment averages to discrete symbols using predefined breakpoints.",
    },
    {
        number: "04",
        title: "Longest Common Subsequence",
        detail: "Compare sequences",
        description:
            "Use dynamic programming to find the longest subsequence shared by two symbolic representations.",
    },
];

export default function SaxPipeline() {
    return (
        <figure className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-5 sm:p-8">
            <div className="grid gap-3">
                {stages.map((stage, index) => (
                    <div key={stage.number}>
                        <div className="rounded-lg border border-seafoam/20 bg-forest p-5">
                            <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-seafoam">
                  {stage.number}
                </span>

                                <div>
                                    <h3 className="font-semibold text-soft-mist">
                                        {stage.title}
                                    </h3>

                                    <p className="mt-1 text-sm font-medium text-seafoam">
                                        {stage.detail}
                                    </p>

                                    <p className="mt-3 text-sm leading-7 text-muted">
                                        {stage.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {index < stages.length - 1 && (
                            <div
                                aria-hidden="true"
                                className="flex h-8 items-center justify-center text-xl text-seafoam"
                            >
                                ↓
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <figcaption className="mt-6 border-t border-seafoam/20 pt-5 text-sm leading-7 text-muted">
                Conceptual processing pipeline. Numerical time-series
                data is transformed into symbolic sequences, allowing
                similarity to be evaluated using LCS.
            </figcaption>
        </figure>
    );
}
