'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function SampleButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const fullPath = usePathname();

  const hideComponent = fullPath.includes('music') && fullPath !== '/music';

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [isPlaying]);

  if (hideComponent) {
    return null;
  }

  return (
    <div
      className="fixed bottom-5 w-full flex flex-row flex-wrap gap-2 justify-center md:justify-between items-end md:px-4"
      style={{ zIndex: 100 }}
    >
      {!isSmallScreen ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/southernfiddler"
          className="bg-blue-500 text-white p-2 rounded-full text-sm shadow-sm border border-blue-700 hover:bg-blue-600"
        >
          <Image
            height={32}
            width={32}
            src="icons/facebook.svg"
            alt="Facebook Icon"
            className="h-8 w-8 invert"
          />
        </a>
      ) : (
        <a
          href="https://www.facebook.com/songwritingwolf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500/40 text-white text-[12px] p-2 rounded-full  shadow-sm border border-blue-700 hover:bg-blue-600/80 font-bold"
        >
          Like on Facebook
        </a>
      )}
      <button
        type="button"
        onClick={() => setIsPlaying(!isPlaying)}
        className="hidden group w-full items-end justify-center md:justify-end rounded md:max-w-[460px] "
      >
        {' '}
      </button>
      {/* Enjoy our music? Like our page on facebook */}
    </div>
  );
}
