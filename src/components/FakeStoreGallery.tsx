
import Image from "next/image";

const screenshots = [
    {
        file: "ProductCategories.webp",
        title: "Product Categories",
        description: "Browse product categories.",
    },
    {
        file: "CategoryDetail.webp",
        title: "Category Products",
        description: "View products loaded from the API.",
    },
    {
        file: "ProductDetailAddtoCart.webp",
        title: "Product Details",
        description: "Inspect a product and add it to the cart.",
    },
    {
        file: "EditCart.webp",
        title: "Shopping Cart",
        description: "Adjust quantities and review the cart.",
    },
    {
        file: "SignInPage.webp",
        title: "Authentication",
        description: "Sign in to access account features.",
    },
    {
        file: "SelectedOrderScreen.webp",
        title: "New Order",
        description: "Review an order awaiting payment.",
    },
    {
        file: "PaidOrderScreen.webp",
        title: "Paid Order",
        description: "View an order awaiting delivery.",
    },
    {
        file: "DeliveredOrderScreen.webp",
        title: "Delivered Order",
        description: "View the completed order state.",
    },
];

export default function FakeStoreGallery() {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((screenshot) => (
                <figure
                    key={screenshot.file}
                    className="overflow-hidden rounded-xl border border-seafoam/20 bg-forest-teal/30"
                >
                    <div className="flex h-[360px] items-center justify-center bg-forest p-3">
                        <Image
                            src={`/images/projects/fake-store/${screenshot.file}`}
                            alt={screenshot.title}
                            width={400}
                            height={900}
                            className="h-full w-auto max-w-full object-contain"
                        />
                    </div>

                    <figcaption className="p-4">
                        <h3 className="font-semibold text-soft-mist">
                            {screenshot.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted">
                            {screenshot.description}
                        </p>
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}
