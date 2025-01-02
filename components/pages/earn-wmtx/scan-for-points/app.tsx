import React from 'react';
import Image from 'next/image';

const HowToBeginScanning = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Column 1: Content */}
        <div className="space-y-4 text-gray-300">
          <h2 className="text-4xl font-extrabold text-white">
            How to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA]">
              Begin Scanning for Points
            </span>
          </h2>
          <p className="leading-relaxed">
            Start contributing to the World Mobile network and earn points effortlessly by scanning your surroundings. Follow these steps to get started:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold text-white">Step 1:</span> Download the World Mobile app from the Google Play Store.
            </li>
            <li>
              <span className="font-bold text-white">Step 2:</span> Open the app and start scanning to contribute valuable network data.
            </li>
            <li>
              <span className="font-bold text-white">Step 3:</span> Earn points redeemable for network benefits and services.
            </li>
          </ul>
          <a
            href="https://play.google.com/store/apps/details?id=io.worldmobile.app&amp;hl=en_US&amp;pli=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download the World Mobile app from Google Play"
            className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full mt-4"
          >
            Download on Google Play
          </a>
          <div className="mt-6">
            <Image
              src="/images/visual-identity_logos_880x572-1.width-1440.format-webp.webp"
              alt="Google Play Store Logo"
              width={240}
              height={140}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>

        {/* Column 2: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/world-mobile-app.png"
            alt="World Mobile App"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Ratings and Testimonials Section */}
      <div className="mt-12 text-center space-y-6">
        <h3 className="text-3xl font-extrabold text-white">
          Rated{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA]">
            4.9 Stars
          </span>{' '}
          on Google Play
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Testimonial 1 */}
          <div className="bg-[rgba(55,10,81,0.19)] p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 italic">
              &quot;Incredible and useful application.&quot;
            </p>
            <p className="mt-4 font-bold text-white">- Bulhara</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-[rgba(55,10,81,0.19)] p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 italic">
              &quot;A bridge to a connected world.&quot;
            </p>
            <p className="mt-4 font-bold text-white">- Ibrahim Murphy</p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-[rgba(55,10,81,0.19)] p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 italic">
              &quot;The app works great &amp; has many features that allow you to participate in this growing sharing economy.&quot;
            </p>
            <p className="mt-4 font-bold text-white">- Danny Cloud</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBeginScanning;
