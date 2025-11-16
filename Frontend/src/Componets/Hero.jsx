import React from "react";

const Hero = () => {
  return (
    <div className="flex w-full items-center mt-12 mb-4 h-[90vh]">
      
      <div className="w-full lg:w-1/2 p-4 space-y-6">
        
        <p className="text-xl text-accent font-body">
          Hi, I'm Bishal Gaihre 🌿
        </p>

        <h1 className="font-heading text-6xl lg:text-7xl tracking-tight leading-[1.1]">
          UI/UX Designer & <br />
          <span className="font-semibold text-accent">
            Full-Stack <br /> Developer
          </span>
        </h1>

        <p className="italic text-lg text-textC">
          “I build experiences rooted in clarity and purpose.”
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-2">
          <button className="bg-transparent border-2 px-8 py-3 rounded-xl text-accent font-medium shadow hover:bg-accent hover:text-white transition-colors">
            View My Work
          </button>

          <button className="bg-accent  px-8 py-3 rounded-xl text-white font-medium hover:shadow-2xl">
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex w-1/2 justify-center">
        <img
          className="h-70 w-70 rounded-full object-cover border-3"
          src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=1740&auto=format&fit=crop"
          alt=""
        />
      </div>

    </div>
  );
};

export default Hero;
