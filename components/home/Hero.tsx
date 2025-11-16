import React from "react";

const Hero = () => {


  
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-11/12 mx-auto">
        <div>
          <h1 className="text-5xl font-bold text-center">
            Designing experiences.
            <br />
            <span className="text-primary">Developing</span> results.
          </h1>
          <p className="py-6 text-center w-lg mx-auto text-accent">
            Get your desired design services from our talented designers and
            developers around the word at a respectable price.
          </p>
          <div className="flex gap-4">
            <input
              className="bg-white border text-gray-900 text-sm rounded-full focus:border-[#02FF95] block w-full px-5"
              type="email"
              name="email"
              id="email"
              placeholder="Your work email"
            />
            <button className="btn btn-primary text-secondary rounded-full">
              Book a call
            </button>
          </div>
          <p className="text-center text-accent mt-5">4.6/5 on 15+ Business, 45+ Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
