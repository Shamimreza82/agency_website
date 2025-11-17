import WhatsAppButton from "./WhatsAppButton";


const Hero = () => {
  return (
    <section className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-11/12 mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            Designing experiences.
            <br />
            <span className="text-primary">Developing</span> results.
          </h1>
          <p className="text-lg py-6 lg:w-8/12 mx-auto text-accent">
            Get top-quality design and development services from our skilled
            professionals worldwide—delivered at a fair and competitive price.
          </p>
          <div className="lg:w-6/12 grid grid-cols-1 items-center mx-auto lg:flex gap-4">
          </div>
          <figure className="grid grid-cols-1 lg:flex items-center gap-2 mt-5 w-11/12 mx-auto justify-center">
            <figcaption className="text-center text-accent">
              <span className="font-bold">4.6/5</span> based on 1500+ reviews
            </figcaption>
            <div className="rating rating-sm rating-half mx-auto lg:mx-0">
              <input type="radio" name="rating-11" className="rating-hidden" />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-[#FDB022]"
                aria-label="0.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-[#FDB022]"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-[#FDB022]"
                aria-label="1.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-[#FDB022]"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-[#FDB022]"
                aria-label="2.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-[#FDB022]"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-[#FDB022]"
                aria-label="3.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-[#FDB022]"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-[#FDB022]"
                aria-label="4.5 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-[#FDB022]"
                aria-label="5 star"
              />
            </div>
            <p className="text-center font-bold">35+ Business, 1500+ Happy Clients</p>
          </figure>
        </div>
      </div>
       <WhatsAppButton />
    </section>
  );
};

export default Hero;
