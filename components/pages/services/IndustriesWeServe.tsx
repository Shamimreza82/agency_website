/* eslint-disable @next/next/no-img-element */
// components/IndustriesWeServe.tsx
"use client";

import { industries } from "@/lib/data/industries";







export default function IndustriesWeServe() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Industries We Serve
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          We provide AI-powered, Next.js websites and apps for a wide range of industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition-shadow"
            >
              <img
                src={industry.icon}
                alt={industry.name}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
