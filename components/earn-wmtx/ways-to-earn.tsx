import React from 'react';
import Image from 'next/image';

// Import images
import earthNodeImg from '../../assets/earn-wmtx/earthnode.png';
import airNodeOperatorImg from '../../assets/earn-wmtx/airnode_operator.png';
import airNodeHostImg from '../../assets/earn-wmtx/airnode_host.png';
import hexGuardianImg from '../../assets/earn-wmtx/hex_guardian.png';
import promoterImg from '../../assets/earn-wmtx/promoter.png';
import scanPointsImg from '../../assets/earn-wmtx/scan_for_points.png';
import stakeToENImg from '../../assets/earn-wmtx/Stake_to_EN.png';
import stakeToAirNodeImg from '../../assets/earn-wmtx/stake_to_airnode.png';
import esimStakingImg from '../../assets/earn-wmtx/Esim_staking.png';
import hostoperatorairnode from '../../assets/earn-wmtx/host-operator-airnode.png';

const waysToEarnData = [
  {
    title: "1 - EarthNode Operation",
    description:
      "Power the World Mobile Chain by operating an EarthNode, earning rewards while processing network transactions and securing the ecosystem.",
    image: earthNodeImg,
    link: "https://www.jpg.store/collection/earthnode?tab=activity",
    cta: "Operate an EarthNode",
  },
  {
    title: "2 - AirNode Operation",
    description:
      "By purchasing and managing AirNodes, you'll help bring affordable WiFi and cellular connectivity to underserved communities worldwide while earning rewards for strengthening the network's infrastructure.",
    image: airNodeOperatorImg,
    link: "https://wmtx.worldmobile.club/operate-airnode",
    cta: "Operate an AirNode",
  },
  {
    title: "3 - AirNode Hosting",
    description:
      "Transform your property into a community connectivity hub by hosting an AirNode, bringing internet access to your neighbors while earning passive rewards.",
    image: airNodeHostImg,
    link: "https://wmtx.worldmobile.club/host-airnode",
    cta: "Host an AirNode",
  },
  {
    title: "4 - AirNode Host & Operate",
    description:
      "Operate and host an AirNode from your own property and start earning while connecting your local community.",
    image: hostoperatorairnode,
    link: "https://wmtx.worldmobile.club/host-operate",
    cta: "Host & Operate an AirNode",
  },
  {
    title: "5 - HEX Guardian",
    description:
      "Own and manage a World Mobile HEX, helping promote World Mobile & optimize coverage while earning rewards for successful network growth.",
    image: hexGuardianImg,
    link: "https://worldmobile.club/c/hex-guardians/8",
    cta: "Buy a World Mobile HEX",
  },
  {
    title: "6 - World Mobile Affiliate",
    description:
      "Grow the World Mobile ecosystem by connecting with potential operators, hosts, and subscribers. Earn rewards for each successful referral you bring to the network.",
    image: promoterImg,
    link: "https://worldmobile.club/c/world-mobile-club/23",
    cta: "Promote World Mobile",
  },
  {
    title: "7 - Scan for Points",
    description:
      "Contribute to network improvement by scanning local connectivity quality. Earn loyalty points redeemable for network services and exclusive benefits.",
    image: scanPointsImg,
    link: "https://worldmobile.club/c/scan-for-points/53",
    cta: "Scan Connectivity",
  },
  {
    title: "8 - EarthNode Staking",
    description:
      "Stake your $WMTx tokens to an EarthNode to support network security and earn regular staking rewards.",
    image: stakeToENImg,
    link: "https://coffee.worldmobile.club/",
    cta: "Stake to an EarthNode",
  },
  {
    title: "9 - AirNode Staking",
    description:
      "Support local connectivity by staking your $WMTx tokens to an AirNode, earning rewards while helping expand network coverage.",
    image: stakeToAirNodeImg,
    link: "https://worldmobile.club/c/airnode/6",
    cta: "Stake to an AirNode",
  },
  {
    title: "10 - SIM Card Staking",
    description:
      "Enhance your World Mobile experience by staking $WMTx tokens to your SIM card, unlocking premium benefits and network privileges.",
    image: esimStakingImg,
    link: "https://worldmobile.club/c/broadban-sim-customers/7",
    cta: "Stake to Your SIM Card",
  },
];

export default function WaysToEarn() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 place-items-center">
      {waysToEarnData.map((block, index) => (
        <div
          key={index}
          className="card card-compact w-96 min-h-[350px] shadow-xl backdrop-blur-md bg-[hsl(277.79deg_78.75%_17.79%_/_19%)] hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden text-center border border-[rgba(255,255,255,0.1)]"
        >
          <figure className="pt-6">
            <Image
              src={block.image}
              alt={block.title}
              width={100}
              height={100}
              className="mx-auto rounded-md"
            />
          </figure>
          <div className="card-body flex flex-col items-center px-6 md:px-8 py-4 md:py-6">
            <h2 className="card-title font-extrabold text-white text-lg mb-3">
              {block.title}
            </h2>
            <p className="text-white/80 text-sm mb-4 text-center">
              {block.description}
            </p>
            <a href={block.link} className="btn mt-auto bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-12 py-3 rounded-full">
              {block.cta}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
