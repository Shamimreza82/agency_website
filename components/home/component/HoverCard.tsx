// components/Card.tsx
import Image from "next/image";
import React from "react";

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
};
const HoverCard: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
                {/* <Image
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    width={600}
                    height={600}
                /> */}
            </div>
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            {link && (
                <div className="px-6 py-4">
                    <a
                        href={link}
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Learn More
                    </a>
                </div>
            )}
        </div>
    );
};

export default HoverCard;
