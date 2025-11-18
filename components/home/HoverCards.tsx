
import React from "react";
import HoverCard from "./component/HoverCard";


const cards = [
  {
    title: "Businesses",
    description:
      "Grow your brand with conversion-focused websites, fast performance, and scalable digital solutions tailored to your business goals.",
    img: "/images/about-1.jpg",
  },
  {
    title: "Startups",
    description:
      "Launch quickly with modern branding, landing pages, and MVP websites built to validate and scale your startup idea.",
    img: "/images/about-1.jpg",
  },
  {
    title: "E-commerce Brands",
    description:
      "Boost sales with optimized online stores, seamless checkout flows, and high-performing product pages.",
    img: "/images/about-1.jpg",
  },
  {
    title: "Agencies & Creators",
    description:
      "Save time and elevate your online presence with ready-made design systems, custom websites, and automation.",
    img: "/images/about-1.jpg",
  },
];


const HoverCards = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-white">
        Boost your professional workflow and productivity
      </h2>
      <div className="flex gap-4 overflow-hidden">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative flex-1 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-xl overflow-hidden transition-all duration-500 hover:flex-[3] cursor-pointer"
          >

            <div>
                <HoverCard
                  title={card.title}
                  description={card.description}
                  imageUrl={card.img}
                 />
              
            </div>
            
            <div className="absolute inset-0 bg-amber-400 opacity-0 hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end" 
            style={{backgroundImage:  `url(${card.img})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)'}}>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="mb-4">{card.description}</p>
              <button className="bg-white text-black px-4 py-2 rounded-full w-max">
                View more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverCards;
