import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7,tokyo96,lostNfound,revmocha,tsOlive,yellowThunder,tsSB,thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, offwhite, lvaf1, Tiffany, tsfrag, pinegreen, chunky, lobster } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: offwhite,
        bigShoe: offwhite,
    },
    {
        thumbnail: lvaf1,
        bigShoe: lvaf1,
    },
    {
        thumbnail: Tiffany,
        bigShoe: Tiffany,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: lostNfound,
        name: "Jordan lost&found",
        price: "$450.20",
    },
    {
        imgURL: yellowThunder,
        name: "Jordan 4 YellowThunder",
        price: "$250.20",
    },
    {
        imgURL: tsOlive,
        name: "Travis Scott-Olives",
        price: "$1120.20",
    },
    {
        imgURL: tokyo96,
        name: "tokyo96",
        price: "$200.20",
    },
    {
        imgURL: tsfrag,
        name: "Travis Scott-fragments",
        price: "$1598.20",
    },
    {
        imgURL: pinegreen,
        name: "Jordan 4 Pinegreen",
        price: "$868.20",
    },
    {
        imgURL: chunky,
        name: "chunky dunks",
        price: "$2456.20",
    },
    {
        imgURL: lobster,
        name: "dunk-low orange lobster",
        price: "$1211.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Jordans", link: "/" },
            { name: "Nike Dunks", link: "/" },
            { name: "Air Force 1", link: "/" },
            { name: "Yeezy's", link: "/" },
            { name: "Offwhite", link: "/" },
            { name: "Louis Vuitton", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@getOG.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];