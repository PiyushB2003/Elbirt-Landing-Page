interface Feature {
    id: number;
    title: string;
    description: string;
    image: string;
}

export const FeatureData: Feature[] = [
    {
        id: 1,
        title: "Clinically Studied",
        description: "All products that we offer have undergone lab and safety tests",
        image: "/images/feature-1.png",
    },
    {
        id: 2,
        title: "Vegetarian Friendly",
        description: "We have a wide selection of vegetarian products to meet your needs",
        image: "/images/feature-2.png",
    },
    {
        id: 3,
        title: "Made in India",
        description: "Shop local and explore health products made right here in India",
        image: "/images/feature-3.png",
    },
    {
        id: 4,
        title: "Free shipping",
        description: "We deliver to your door with no shipping costs on your orders",
        image: "/images/feature-4.png",
    },
    {
        id: 5,
        title: "No Risk",
        description: "We ensure that all products are safe and within their use-by date",
        image: "/images/feature-5.png",
    },
    {
        id: 6,
        title: "GMO free",
        description: "Natural, no modified products and derivatives for those who need it",
        image: "/images/feature-6.png",
    },
];
