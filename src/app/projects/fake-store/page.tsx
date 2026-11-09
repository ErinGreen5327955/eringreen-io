
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


                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            State Management with Redux Toolkit
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            I used Redux Toolkit to manage application state
                            shared across screens. Separating authentication,
                            shopping cart and order data into feature-specific
                            slices kept state updates predictable and reduced
                            the need to pass data through multiple components.
                        </p>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {[
                                {
                                    title: "Authentication",
                                    file: "authSlice.js",
                                    state: "user · token",
                                    description:
                                        "Stores the signed-in user and authentication token. Supports sign-in, profile updates and sign-out.",
                                },
                                {
                                    title: "Shopping Cart",
                                    file: "cartSlice.js",
                                    state: "items",
                                    description:
                                        "Manages product quantities, removes items when quantities reach zero and supports replacing or clearing cart contents.",
                                },
                                {
                                    title: "Orders",
                                    file: "ordersSlice.js",
                                    state: "orders",
                                    description:
                                        "Stores the current user's orders and supports clearing order data when required.",
                                },
                            ].map((slice) => (
                                <article
                                    key={slice.title}
                                    className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6"
                                >
                                    <h3 className="font-semibold text-seafoam">
                                        {slice.title}
                                    </h3>

                                    <p className="mt-2 font-mono text-xs text-muted">
                                        {slice.file}
                                    </p>

                                    <p className="mt-4 text-sm font-medium text-soft-mist">
                                        State: {slice.state}
                                    </p>

                                    <p className="mt-3 text-sm leading-7 text-muted">
                                        {slice.description}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <h3 className="mt-12 text-lg font-semibold text-soft-mist">
                            Example: Cart Quantity Management
                        </h3>

                        <p className="mt-4 leading-8 text-muted">
                            The cart reducer checks whether a product already
                            exists before adding it. Existing products have
                            their quantity increased, while new products
                            are inserted with an initial quantity of one.
                        </p>

                        <div className="mt-6 overflow-x-auto rounded-xl border border-seafoam/20 bg-forest p-5">
    <pre className="text-sm leading-7 text-seafoam">
      <code>{`addToCart: (state, action) => {
  const product = action.payload;
  const existingItem = state.items.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({
      ...product,
      quantity: 1,
    });
  }
},`}</code>
    </pre>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-muted">
                            Excerpt from my cartSlice.js implementation.
                            Redux Toolkit uses Immer internally, allowing
                            reducers to express updates using mutable-looking
                            syntax while preserving immutable state updates.
                        </p>

                        <div className="mt-8 rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6">
                            <h3 className="font-semibold text-seafoam">
                                Engineering Consideration
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-muted">
                                Redux manages the application&apos;s in-memory state,
                                while the backend stores user-specific shopping
                                data. Keeping these representations consistent
                                requires coordinating API responses with Redux
                                updates, particularly when users sign in, sign
                                out or change cart quantities.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-soft-mist">
                            Authentication & API Integration
                        </h2>

                        <p className="mt-5 leading-8 text-muted">
                            I implemented sign-up, sign-in, profile updates
                            and sign-out using the course-provided REST API.
                            Authentication state is managed through Redux,
                            allowing the navigation structure to respond to
                            whether a user is signed in.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    title: "Authentication",
                                    endpoint: "POST /users/signin",
                                    description:
                                        "Submits credentials, receives user details and an authentication token, then updates Redux state.",
                                },
                                {
                                    title: "Cart Restoration",
                                    endpoint: "GET /cart",
                                    description:
                                        "Retrieves the signed-in user's saved cart and converts server item counts into client-side quantities.",
                                },
                                {
                                    title: "Profile Updates",
                                    endpoint: "POST /users/update",
                                    description:
                                        "Sends an authenticated request to update the user's name or password, then updates the displayed profile.",
                                },
                                {
                                    title: "Sign Out",
                                    endpoint: "Local state reset",
                                    description:
                                        "Clears authentication, cart and order state to prevent one user's data remaining visible after sign-out.",
                                },
                            ].map((feature) => (
                                <article
                                    key={feature.title}
                                    className="rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6"
                                >
                                    <h3 className="font-semibold text-seafoam">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 font-mono text-xs text-soft-mist">
                                        {feature.endpoint}
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-muted">
                                        {feature.description}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <h3 className="mt-12 text-lg font-semibold text-soft-mist">
                            Sign-In Workflow
                        </h3>

                        <p className="mt-4 leading-8 text-muted">
                            After a successful sign-in request, the application
                            stores the returned user and token in Redux. It then
                            retrieves the user&apos;s server-side cart and transforms
                            the response into the format expected by the mobile
                            application&apos;s cart slice.
                        </p>

                        <div className="mt-6 overflow-x-auto rounded-xl border border-seafoam/20 bg-forest p-5">
    <pre className="text-sm leading-7 text-seafoam">
      <code>{`const result = await signInUser(email, password);

dispatch(
  signInSuccess({
    user: {
      id: result.id,
      name: result.name,
      email: result.email,
    },
    token: result.token,
  }),
);

const cartResult = await getCart(result.token);

if (cartResult.items) {
  dispatch(
    setCartItems(fromServerCart(cartResult.items))
  );
}`}</code>
    </pre>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-muted">
                            Adapted excerpt from AuthScreen.js. The same
                            submission handler also supports registration,
                            with loading feedback and error alerts.
                        </p>

                        <h3 className="mt-12 text-lg font-semibold text-soft-mist">
                            Client–Server Data Transformation
                        </h3>

                        <p className="mt-4 leading-8 text-muted">
                            The backend represents cart quantities using
                            a count property, while the React Native
                            application uses quantity. I implemented
                            conversion functions to keep these representations
                            separate rather than coupling the Redux cart
                            directly to the server&apos;s data format.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-seafoam/20 bg-forest p-6">
                                <h4 className="font-semibold text-seafoam">
                                    Server Representation
                                </h4>
                                <pre className="mt-4 text-sm leading-7 text-soft-mist">
        <code>{`{
  id: 12,
  price: 29.99,
  count: 2
}`}</code>
      </pre>
                            </div>

                            <div className="rounded-xl border border-seafoam/20 bg-forest p-6">
                                <h4 className="font-semibold text-seafoam">
                                    Client Representation
                                </h4>
                                <pre className="mt-4 text-sm leading-7 text-soft-mist">
        <code>{`{
  id: 12,
  price: 29.99,
  quantity: 2
}`}</code>
      </pre>
                            </div>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-muted">
                            Illustrative values using the actual field
                            mappings from toServerCart() and fromServerCart()
                            in serverApi.js.
                        </p>

                        <div className="mt-8 rounded-xl border border-seafoam/20 bg-forest-teal/30 p-6">
                            <h3 className="font-semibold text-seafoam">
                                Engineering Reflection
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-muted">
                                The sign-in workflow currently updates Redux
                                authentication state before cart restoration
                                completes. A more resilient implementation
                                would handle cart-loading failures separately
                                from authentication failures, so users receive
                                accurate feedback and the application can
                                retry synchronisation without requiring
                                another sign-in.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
