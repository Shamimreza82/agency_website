import React from "react";
import Image from "next/image";
import Mamun from "../../assests/Mamun2.png";
import Reza from "../../assests/Reza.png";

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Reza Shamim",
      role: "Full Stack Web Developer",
      image: Reza,
      description:
        "Full Stack Web Developer specializing in building robust and scalable web applications.",
    },
    {
      name: "Al Mamun",
      role: "UI/UX Designer & Frontend Developer",
      image: Mamun,
      description:
        "UI/UX Designer and Front-End Web Developer creating engaging and user-friendly digital experiences.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-30">
        <p className="text-lg text-gray-400 uppercase mb-2">About Us</p>
        <h1 className="text-4xl text-primary font-semibold mb-2">
          Meet the Dream Team.
        </h1>
        <p className="text-lg text-accent lg:w-6/12 mx-auto">
          We craft beautiful designs and build powerful websites that grow businesses online.
        </p>
      </div>

      {/* Team Members */}
      <div className="flex flex-col md:flex-row gap-30 lg:gap-15 justify-center">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="card bg-gradient-to-b to-[#0B1926] from-transparent pointer-events-none shadow-sm relative overflow-visible w-96 mx-auto lg:mx-0"
          >
            {/* Image */}
            <div className="relative -mt-20">
              <Image
                src={member.image}
                alt={member.name}
              />
            </div>

            <div>
              <h2 className="w-full text-lg font-semibold text-secondary bg-primary inline-block px-4 py-1">{member.name}</h2>
              <p className="text-accent text-2xl px-4 py-4">{member.role}</p>
              <p className="text-sm text-gray-400 px-4 mb-4">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
