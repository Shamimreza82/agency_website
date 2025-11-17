// import WhatsAppButton from "./WhatsAppButton";


// const Hero = () => {
//   return (
//     <section className="hero min-h-screen">
//       <div className="hero-content flex-col lg:flex-row w-11/12 mx-auto">
//         <div className="text-center">
//           <h1 className="text-6xl font-bold">
//             Designing experiences.
//             <br />
//             <span className="text-primary">Developing</span> results.
//           </h1>
//           <p className="text-lg py-6 lg:w-8/12 mx-auto text-accent">
//             Get top-quality design and development services from our skilled
//             professionals worldwide—delivered at a fair and competitive price.
//           </p>
//           <div className="lg:w-6/12 grid grid-cols-1 items-center mx-auto lg:flex gap-4">
//           </div>
//           <figure className="grid grid-cols-1 lg:flex items-center gap-2 mt-5 w-11/12 mx-auto justify-center">
//             <figcaption className="text-center text-accent">
//               <span className="font-bold">4.6/5</span> based on 1500+ reviews
//             </figcaption>
//             <div className="rating rating-sm rating-half mx-auto lg:mx-0">
//               <input type="radio" name="rating-11" className="rating-hidden" />
//               <input
//                 type="radio"
//                 name="rating-11"
//                 className="mask mask-star-2 mask-half-1 bg-[#FDB022]"
//                 aria-label="0.5 star"
//               />
//               <input
//                 type="radio"
//                 name="rating-11"
//                 className="mask mask-star-2 mask-half-2 bg-[#FDB022]"
//                 aria-label="1 star"
//               />
//               <input
//                 type="radio"
//                 name="rating-11"
//                 className="mask mask-star-2 mask-half-1 bg-[#FDB022]"
//                 aria-label="1.5 star"
//               />
//               <input
//                 type="radio"
//                 name="rating-11"
//                 className="mask mask-star-2 mask-half-2 bg-[#FDB022]"
//                 aria-label="2 star"
//               />
//               <input
//                 type="radio"
//                 name="rating-11"
//                 className="mask mask-star-2 mask-half-1 bg-[#FDB022]"
//                 aria-label="2.5 star"
//               />
//               <input
//                 type="radio"
//                 name="rating-11"
//                 className="mask mask-star-2 mask-half-2 bg-[#FDB022]"
//                 aria-label="3 star"
//               />
//               <input
//                 type="radio"
//                 name="rating-11"
//                 className="mask mask-star-2 mask-half-1 bg-[#FDB022]"
//                 aria-label="3.5 star"
//               />
//               <input
//                 type="radio"
//                 name="rating-11"
//                 className="mask mask-star-2 mask-half-2 bg-[#FDB022]"
//                 aria-label="4 star"
//               />
//               <input
//                 type="radio"
//                 name="rating-11"
//                 className="mask mask-star-2 mask-half-1 bg-[#FDB022]"
//                 aria-label="4.5 star"
//                 defaultChecked
//               />
//               <input
//                 type="radio"
//                 name="rating-11"
//                 className="mask mask-star-2 mask-half-2 bg-[#FDB022]"
//                 aria-label="5 star"
//               />
//             </div>
//             <p className="text-center font-bold">35+ Business, 1500+ Happy Clients</p>
//           </figure>
//         </div>
//       </div>
//        <WhatsAppButton />
//     </section>
//   );
// };

// export default Hero;



"use client"

import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { motion } from "framer-motion"; // optional for smooth animations

const Hero = () => {

  const rating = <div className="rating rating-sm rating-half">
    {Array.from({ length: 10 }).map((_, i) => (
      <input
        key={i}
        type="radio"
        name="rating-11"
        className={`mask mask-star-2 mask-half-${i % 2 === 0 ? "1" : "2"} bg-[#FDB022]`}
        aria-label={`${(i + 1) * 0.5} star`}
        defaultChecked={i === 8}
      />
    ))}
  </div>
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
            src="/hero-image.png"
            alt="Design & Development"
            className="w-3/4 h-3/4 object-contain"
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
          <p className="text-lg py-6 lg:w-10/12 mx-auto lg:mx-0 text-accent">
            Get top-quality design and development services from skilled
            professionals worldwide—delivered at a fair and competitive price.
          </p>

          <div>
            <WhatsAppButton />
            <button className="btn btn-primary btn-lg text-secondary rounded-full px-6">
              Explore Services
            </button>
          </div>

          <figure className="mt-10 items-center gap-4 justify-center lg:justify-start space-y-3">
            <figcaption className="text-accent text-center sm:text-left font-semibold items-center">

              <span className="font-bold text-xl">4.6/5 </span>{rating}
            </figcaption>

            <p className="font-bold text-accent text-center sm:text-left">
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

