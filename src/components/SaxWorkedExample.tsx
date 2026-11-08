
const rawValues = [1, 1, 3, 3, 5, 5, 3, 3];

const segments = [
    { average: -1.41, symbol: "a" },
    { average: 0, symbol: "b" },
    { average: 1.41, symbol: "c" },
    { average: 0, symbol: "b" },
];

export default function SaxWorkedExample() {
    return (
        <figure className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-5 sm:p-8">
            <h3 className="text-lg font-semibold text-soft-mist">
                Worked Example: From Values to Symbols
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted">
                This illustrative time series contains eight values.
                We normalise the values, compress them into four
                segments and assign SAX symbols.
            </p>

            <div className="mt-8 space-y-8">
                <div>
                    <h4 className="font-semibold text-seafoam">
                        1. Original time series
                    </h4>

                    <div className="mt-4 grid grid-cols-8 gap-1 sm:gap-2">
                        {rawValues.map((value, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="flex h-24 w-full items-end rounded bg-forest p-1">
                                    <div
                                        className="w-full rounded-t bg-seafoam"
                                        style={{ height: `${value * 18}%` }}
                                    />
                                </div>
                                <span className="font-mono text-xs text-muted">
                  {value}
                </span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-3 text-xs text-muted">
                        Raw values: [1, 1, 3, 3, 5, 5, 3, 3]
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-seafoam">
                        2. Normalisation and PAA
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-muted">
                        The original series has a mean of 3 and a
                        population standard deviation of approximately
                        1.41. After z-normalisation, each pair of
                        values is averaged to produce four PAA segments.
                    </p>

                    <div className="mt-4 grid grid-cols-4 gap-2">
                        {segments.map((segment, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-seafoam/20 bg-forest p-3 text-center"
                            >
                                <p className="text-xs text-muted">
                                    Segment {index + 1}
                                </p>
                                <p className="mt-2 font-mono text-lg font-semibold text-seafoam">
                                    {segment.average.toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-seafoam">
                        3. SAX encoding
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-muted">
                        Using a three-symbol alphabet and standard
                        Gaussian breakpoints near -0.43 and +0.43,
                        the four PAA averages become:
                    </p>

                    <div className="mt-4 grid grid-cols-4 gap-2">
                        {segments.map((segment, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-seafoam/30 bg-forest p-4 text-center"
                            >
                <span className="font-mono text-3xl font-bold text-seafoam">
                  {segment.symbol}
                </span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 font-mono text-sm text-soft-mist">
                        SAX sequence: abcb
                    </p>
                </div>
            </div>

            <figcaption className="mt-8 border-t border-seafoam/20 pt-5 text-sm leading-7 text-muted">
                Illustrative example, not measured voice data or
                captured output from the Java application. The
                resulting symbolic sequence can be compared with
                another sequence using Longest Common Subsequence.
            </figcaption>
        </figure>
    );
}
