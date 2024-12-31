import React from 'react';
import Image from 'next/image';
import earthNodeIcon from '/public/images/earthnode_icon.png';

const PurchaseEarthNodeNFT = () => {
  return (
    <section className="py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Column 1: Image */}
        <div className="flex justify-center">
          <Image
            src={earthNodeIcon}
            alt="Earth Node Icon"
            width={350}
            height={350}
            className="rounded-md shadow-lg"
          />
        </div>

        {/* Column 2: Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold">
            Purchase an <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">EarthNode NFT</span>
          </h2>
          <p className="text-m text-gray-300 leading-relaxed">
            EarthNode NFTs are your gateway to participating in the World Mobile network. Purchase one on JPG.store or connect with buyers and sellers in The Club Marketplace to start your journey toward decentralized connectivity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.jpg.store/collection/earthnode?tab=items"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-[#F6642D] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
            >
              Buy on JPG.store
            </a>
            <a
              href="https://worldmobile.club/c/earthnodes/buy-or-sell-an-earthnode/12"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
            >
              Visit The Club Marketplace
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseEarthNodeNFT;
