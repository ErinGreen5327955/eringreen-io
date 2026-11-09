
const frontend = [
    {
        title: "Screens",
        detail: "Products, Cart, Orders, Profile",
    },
    {
        title: "React Navigation",
        detail: "Screen transitions and tab access",
    },
    {
        title: "Redux Toolkit",
        detail: "Auth, Cart and Orders slices",
    },
];

const services = [
    {
        title: "Product API",
        detail: "Categories, listings and product details",
        note: "Third-party REST API",
    },
    {
        title: "Course-provided API",
        detail: "Authentication, carts and orders",
        note: "Node.js / Express backend",
    },
];

export default function FakeStoreArchitecture() {
    return (
        <figure className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-5 sm:p-8">
            <div className="rounded-xl border border-seafoam/30 bg-forest p-5 sm:p-6">
                <p className="text-center text-xs font-semibold uppercase tracking-widest text-seafoam">
                    React Native Application — My Implementation
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {frontend.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-lg border border-seafoam/20 bg-forest-teal/50 p-4 text-center"
                        >
                            <h3 className="font-semibold text-soft-mist">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-xs leading-5 text-muted">
                                {item.detail}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    aria-hidden="true"
                    className="py-4 text-center text-2xl text-seafoam"
                >
                    ↕
                </div>

                <div className="rounded-lg border border-seafoam/30 bg-forest-teal/50 p-5 text-center">
                    <h3 className="font-semibold text-soft-mist">
                        API Service Layer
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                        HTTP requests, JSON responses, error handling
                        and data transformation
                    </p>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="py-5 text-center text-2xl text-seafoam"
            >
                ↕
            </div>

            <div className="rounded-xl border border-seafoam/20 bg-forest p-5 sm:p-6">
                <p className="text-center text-xs font-semibold uppercase tracking-widest text-seafoam">
                    External Services
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="rounded-lg border border-seafoam/20 bg-forest-teal/50 p-5 text-center"
                        >
                            <h3 className="font-semibold text-soft-mist">
                                {service.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-muted">
                                {service.detail}
                            </p>

                            <p className="mt-3 text-xs font-medium text-seafoam">
                                {service.note}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <figcaption className="mt-6 text-sm leading-7 text-muted">
                Simplified application architecture. The mobile
                frontend, Redux state management and API integration
                were implemented independently. Backend services
                were supplied for the university assignment.
            </figcaption>
        </figure>
    );
}
