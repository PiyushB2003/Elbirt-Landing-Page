interface Hero {
    id: number;
    title: string;
    description: string;
    image: string;
}

export let HeroData: Hero[] = [
    {
        id: 1,
        title: "Vitamins",
        description: "minerals in your diet",
        image: "/images/hero-icon-1.png",
    },
    {
        id: 2,
        title: "Weight Loss",
        description: "Find scientifically proven solutions",
        image: "/images/hero-icon-2.png",
    },
    {
        id: 3,
        title: "Funtional Foods",
        description: "From protein powers to baby formula",
        image: "/images/hero-icon-3.png",
    },
];
