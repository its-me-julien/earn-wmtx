import React from 'react';
import Image from 'next/image';

const waysToEarnData = [
  {
    title: "1 - EarthNode Operation",
    description:
      "Power the World Mobile Chain by operating an EarthNode, earning rewards while validating network transactions and offering data services.",
    image: "/images/earn-wmtx/EarthNode.png",
    link: "https://wmtx.worldmobile.club/earthnode-operator",
    cta: "Operate an EarthNode",
  },
  {
    title: "2 - AirNode Operation",
    description:
      "By managing AirNodes, you'll help bring WiFi and cellular connectivity to communities worldwide while earning rewards for growing the network.",
    image: "/images/earn-wmtx/airnode_operator.png",
    link: "https://wmtx.worldmobile.club/airnode-operator",
    cta: "Operate an AirNode",
  },
  {
    title: "3 - AirNode Hosting",
    description:
      "Transform your property into a community connectivity hub by hosting an AirNode, bringing internet access to your neighbors while earning passive rewards.",
    image: "/images/earn-wmtx/airnode_host.png",
    link: "https://wmtx.worldmobile.club/airnode-host",
    cta: "Host an AirNode",
  },
  {
    title: "4 - AirNode Host & Operate",
    description:
      "Operate and host an AirNode from your own property and start earning while connecting your local community.",
    image: "/images/earn-wmtx/host-operator-airnode.png",
    link: "https://wmtx.worldmobile.club/airnode-host-operator",
    cta: "Host & Operate an AirNode",
  },
  {
    title: "5 - Run a Unity Node",
    description: "Generate crypto using your unused telephone minutes.",
    image: "/images/earn-wmtx/unity-node.png",
    link: "https://wmtx.worldmobile.club/unity-node",
    cta: "Run a Unity Node",
  },
  {
    title: "6 - HEX Guardian",
    description:
      "Own and manage a World Mobile HEX, helping promote World Mobile & optimize coverage while earning rewards for successful network growth.",
    image: "/images/earn-wmtx/hex_guardian.png",
    link: "https://wmtx.worldmobile.club/hex-guardian/",
    cta: "Manage a World Mobile HEX",
  },
  {
    title: "7 - Scan for Points",
    description:
      "Contribute to network improvement by scanning local connectivity quality. Earn loyalty points redeemable for network services and exclusive benefits.",
    image: "/images/earn-wmtx/scan_for_points.png",
    link: "https://wmtx.worldmobile.club/scan-for-points/",
    cta: "Scan Connectivity",
  },
  {
    title: "8 - EarthNode Staking",
    description:
      "Stake your $WMTx tokens to an EarthNode to support the network and earn regular staking rewards.",
    image: "/images/earn-wmtx/Stake_to_EN.png",
    link: "https://wmtx.worldmobile.club/stake-with-earthnode",
    cta: "Stake to an EarthNode",
  },
  {
    title: "9 - AirNode Staking",
    description:
      "Support local connectivity by staking your $WMTx tokens to an AirNode, earning rewards while helping expand network coverage.",
    image: "/images/earn-wmtx/stake_to_airnode.png",
    link: "https://wmtx.worldmobile.club/stake-with-airnode",
    cta: "Stake to an AirNode",
  },
  {
    title: "10 - SIM Card Staking",
    description:
      "Enhance your World Mobile experience by staking $WMTx tokens to your SIM card, unlocking premium benefits and network privileges.",
    image: "/images/earn-wmtx/Esim_staking.png",
    link: "https://wmtx.worldmobile.club/stake-with-sim",
    cta: "Stake to Your SIM Card",
  },
  {
    title: "11 - World Mobile Affiliate",
    description:
      "Grow the World Mobile ecosystem by connecting with potential operators, hosts, and subscribers. Earn rewards for each successful referral you bring to the network.",
    image: "/images/earn-wmtx/promoter.png",
    link: "https://worldmobile.club/c/world-mobile-club/23",
    cta: "Promote World Mobile",
  },
];

export default function WaysToEarn() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 place-items-center">
      {waysToEarnData.map((block, index) => (
        <div
          key={index}
          className="card card-compact w-96 min-h-[400px] shadow-xl bg-[hsl(277.79deg_78.75%_17.79%_/_19%)] hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden text-center border border-[rgba(255,255,255,0.1)]"
        >
          <figure className="pt-6">
            <Image
              src={block.image}
              alt={block.title}
              layout="intrinsic"
              width={120}
              height={120}
              className="mx-auto rounded-md"
              loading="lazy"
            />
          </figure>
          <div className="card-body flex flex-col items-center px-6 md:px-8 py-4 md:py-6">
            <h2 className="card-title font-extrabold text-white text-lg mb-3">
              {block.title}
            </h2>
            <p className="text-white/80 text-base leading-loose mb-6 text-center">
              {block.description}
            </p>
            <a
              href={block.link}
              className="btn mt-auto bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:scale-105 hover:brightness-125 transition-transform border-none px-10 py-2 rounded-full"
            >
              {block.cta}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
