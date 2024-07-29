'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Italiana } from 'next/font/google';

const italiana = Italiana({ subsets: ['latin'] });

export default function Home() {
  const [textVisible, setTextVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTextVisible(true);
    setTimeout(() => setContentVisible(true), 1000); // Adjust delay as needed
  }, []);

  return (
    <div className="bg-black">
      <div className="min-h-[100vh] flex flex-col items-center justify-center bg-cover bg-center relative max-w-[1500px] mx-auto">
        <Image
          src="/images/donna_portraits/lights_lookingup.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 object-center md:object-right"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div
            className={`transform transition-transform duration-[2000ms] ${
              textVisible ? 'translate-x-0 ' : '-translate-x-[200%]'
            } p-4 md:p-8 rounded-lg flex flex-col items-center ${
              italiana.className
            }`}
            style={{
              marginTop: '-10vh',
            }}
          >
            <h1 className="text-5xl md:text-[72px] font-bold text-center text-white px-4 md:px-16 pt-16 pb-4 md:leading-[72px] cursive-font">
              Donna Wolf
            </h1>
            <hr className="border-t-2 border-white w-3/4 my-4" />
            <p className="text-xl md:text-[32px] text-white cursive-font tracking-wider">
              Professional Violinist
            </p>
          </div>
          <p
            className={`max-w-[800px] text-lg md:text-xl text-white text-center mt-8 p-5 bg-black bg-opacity-20 rounded-lg shadow-lg transition-opacity duration-1000 ${
              contentVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Donna Wolf, a skilled violinist from Memphis, TN, offers a diverse
            range of musical styles for your event, including Celtic, Bluegrass,
            Folk, Rock, Christian, and Classical. Her performances add a special
            touch to any occasion.
          </p>
          <div
            className={`flex flex-row items-center justify-center mt-8 space-x-4 transition-opacity duration-1000 ${
              contentVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link
              href="/contact"
              className="px-6 py-2 bg-purple-600 text-white text-lg
              font-semibold rounded-lg shadow-md hover:bg-purple-500
              transition-colors duration-300"
            >
              {' '}
              Book Now
            </Link>
            <Link
              href="/about"
              className="px-6 py-2 bg-opacity-70 bg-gray-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
