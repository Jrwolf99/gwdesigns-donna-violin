import Image from 'next/image';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="px-6 md:px-10 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-8">
              Contact Information
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li className="text-lg">Phone: (901) 596-6169</li>
              <li className="text-lg">Email: contact@donnawolfviolin.com</li>
            </ul>

            <p className="text-md text-gray-700 leading-relaxed mt-4">
              If you need more details on availability or rates, feel free to
              reach out. Looking forward to hearing from you!
            </p>
          </div>
          <Image
            src="/images/donna_portraits/red_11.jpeg"
            alt="Donna Wolf"
            className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm md:w-1/2"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
