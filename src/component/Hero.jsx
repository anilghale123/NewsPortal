import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <img src="/images/hero4.jpeg" alt="bannerImage" className="w-full h-30 max-w-full" />
      <h1 className="md:text-3xl sm:text-lg absolute text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold">
        "The truth, no matter how bad, is better than uncertainty." - Unknown
      </h1>
    </div>
  );
};

export default Hero;
