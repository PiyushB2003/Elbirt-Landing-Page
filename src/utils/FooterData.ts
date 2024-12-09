interface Footer {
    id: number;
    type: string;
    content: string;
    image: string;
}

export let FooterData: Footer[] = [
    {
        id: 1,
        type: "Phone Number",
        content: "+974 3118 1843",
        image: "/images/phone.png",
    },
    {
        id: 2,
        type: "Email Address",
        content: "Elbrithcqhr@gmail.com",
        image: "/images/mail.png",
    },
    {
        id: 3,
        type: "Office Location",
        content: "Ambassador Street, Zone 61,",
        image: "/images/location.png",
    },
];
