import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl small:mt-20">
          I love working on challenging projects. I learned web development
          while I was at university.
          <br />
          Since then, I've been working to bring my web developments skills to
          the next level.
          <br />
          I've worked as a freelancer in the past designing NFT collections,
          ecommerce sites, a Netflix and Instagram clones and some landing
          pages.
        </p>

        <br />
        <p className="text-xl">
          Me and some friends started a company earlier this year. We tried to
          sell a blockchain API. Unfortunately, we didn't have enough traction.
          <br />
          <br />
          Now, I'm looking for my next challenge. I'm looking for a full-time
          front-end developer role or a full-stack developer role where I can
          keep developing and improving my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
