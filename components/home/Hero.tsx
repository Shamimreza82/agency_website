"use client"

import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { motion } from "framer-motion"; // optional for smooth animations
import Button from "../sheared/Button";



const Hero = () => {

  const rating = (
  <div className="rating rating-sm rating-half">
    {Array.from({ length: 5 }).map((_, i) => (
      <input
        key={i}
        type="radio"
        name="rating-11"
        className={`mask mask-star-2 mask-half-${i % 2 === 0 ? "1" : "2"} bg-[#FDB022]`}
        aria-label={`${(i + 1) * 1} star`}
        defaultChecked={i === 5} // 4.5 stars default
      />
    ))}
  </div>
);
  return (
    <section className="hero min-h-screen bg-gray-900 flex items-center">
      <div className="hero-content flex-col lg:flex-row-reverse w-11/12 mx-auto gap-10 lg:gap-16">
        {/* Hero Image / Placeholder */}
        <motion.div
          className="w-full lg:w-1/2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl h-80 lg:h-[32rem] flex items-center justify-center shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* You can replace this with your hero image */}
          <Image
            src="/images/hero.jpg"
            alt="Design & Development"
            className=" object-contain drop-shadow-[0_0_5px_#02FF95] rounded-4xl"
            width={600}
            height={600}
            priority
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Designing experiences.
            <br />
           
            <span className="text-primary">Developing</span> results.
          </h1>
          <p className="text-lg py-6 lg:w-10/12 mx-auto lg:mx-0 text-muted-foreground ">
            Get top-quality design and development services from skilled
            professionals worldwide—delivered at a fair and competitive price.
          </p>

          <div>
            <WhatsAppButton />
            <Button maintext="Explore Our Services" hovertext="Explore Our Services"/>
          </div>

          <figure className="mt-10 items-center gap-4 justify-center lg:justify-start space-y-3">
            <figcaption className=" text-center sm:text-left font-semibold items-center">

              <span className="font-bold text-xl text-muted-foreground">4.6/5 </span>{rating}
            </figcaption>

            <p className="font-bold text-muted-foreground  text-center sm:text-left">
              Based on 1500+ reviews
              <br />
              35+ Businesses, 1500+ Happy Clients
            </p>
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

