import React from 'react';
import portfolio from '../assets/portfolio/portfolio.png';
import pathfinder from '../assets/portfolio/pathfinder.png';
import reduxecommerce from '../assets/portfolio/reduxecommerce.png';
import softwaregram from '../assets/portfolio/softwaregram.png';
import ecommerce from '../assets/portfolio/ecommerce.png';
import squidgame from '../assets/portfolio/squidgame.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
      code: 'https://github.com/casancam/portfolio-react',
      demo: 'https://portfolio-react-casancam.vercel.app/',
    },
    {
      id: 2,
      src: reduxecommerce,
      code: 'https://github.com/casancam/Redux-Toolkit-Ecommerce-Site',
      demo: 'https://redux-toolkit-ecommerce-site.vercel.app/',
    },
    {
      id: 3,
      src: softwaregram,
      code: 'https://github.com/casancam/Instagram-clone',
      demo: 'https://softwaregram.vercel.app/',
    },
    {
      id: 4,
      src: pathfinder,
      code: 'https://github.com/casancam/Dijkstra-s-Pathfinding-Algorithm',
      demo: 'https://dijkstra-s-pathfinding-algorithm.vercel.app/',
    },
    {
      id: 5,
      src: squidgame,
      code: 'https://github.com/casancam/Squid-game-browser-game',
      demo: 'https://squid-game-browser-game.vercel.app/',
    },
    {
      id: 6,
      src: ecommerce,
      code: 'https://github.com/casancam/Ecommerce-Shopping-Cart-Tsx',
      demo: 'https://ecommerce-shopping-cart-tsx.vercel.app/',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              ></img>
              <div className="flex items-center justify-center">
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
