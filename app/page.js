'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTextVisible(true);
  }, []);

  return (
    <div>
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-cover bg-center relative">
        <Image
          src="/images/donna_portraits/lights_lookingup1.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 object-right"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div
            className={`transform transition-transform duration-[2000ms] ${
              textVisible ? '-translate-x-[50%]' : '-translate-x-[200%]'
            } p-4 md:p-8 rounded-lg flex flex-col items-center`}
            style={{ marginTop: '-10vh' }}
          >
            <h1 className="text-5xl md:text-[72px] font-bold text-center text-white px-4 md:px-16 pt-16 pb-4 md:leading-[72px] cursive-font">
              Donna Wolf
            </h1>
            <hr className="border-t-2 border-white w-3/4 my-4" />
            <p className="text-xl md:text-[32px] text-white cursive-font tracking-wider">
              Professional Violinist
            </p>
          </div>
        </div>

        <style jsx>{`
          .cursive-font {
            font-family: 'Dancing Script', cursive;
          }
        `}</style>
      </div>
      <div className="w-full p-4 md:p-8 text-center">
        <p className=" md:text-lg mt-6 px-4 md:px-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
          amet accumsan tortor. Curabitur non nulla sit amet nisl tempus
          convallis quis ac lectus. Cras ultricies ligula sed magna dictum
          porta. Praesent sapien massa, convallis a pellentesque nec, egestas
          non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
    </div>
  );
}
