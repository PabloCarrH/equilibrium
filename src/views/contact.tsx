import React from "react";
import { Container } from "../components/container.tsx";
import { TbPhone, TbMail, TbBrandFacebook, TbBrandInstagram, TbBrandX } from "react-icons/tb";

type SocialMedia = {
    icon: React.ReactNode;
    name: string;
    link: string;
};

const socialMedia: SocialMedia[] = [
    { icon: <TbPhone className="text-3xl max-sm:text-2xl" />, name: "Llámanos: +57 321 123 1234", link: "tel:+123456789" },
    { icon: <TbMail className="text-3xl max-sm:text-2xl" />, name: "example@equilibrium.com", link: "mailto:exampleequilibrium.com" },
    { icon: <TbBrandFacebook className="text-3xl max-sm:text-2xl" />, name: "Visita nuestro Facebook", link: "https://www.facebook.com/equilibrium" },
    { icon: <TbBrandInstagram className="text-3xl max-sm:text-2xl" />, name: "Visita nuestro Instagram", link: "https://www.instagram.com/equilibrium" },
    { icon: <TbBrandX className="text-3xl max-sm:text-2xl" />, name: "Visita nuestro X", link: "https://www.equilibrium.com" },
];
const Contact: React.FC = () => {
    return (
        <Container className="flex-col items-center justify-center gap-y-6 text-brand-400">
            <h2 className="text-8xl max-sm:text-6xl max-md:text-7xl font-lobster mb-4">Contactanos</h2>
            <ul className="flex flex-col gap-y-2">
                {socialMedia.map((item, index) => (
                    <li key={index} className="flex items-center space-x-4 hover:underline">
                        {item.icon}
                        <a href={item.link} className="text-xl font-poppins font-semibold max-sm:text-base">{item.name}</a>
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default Contact