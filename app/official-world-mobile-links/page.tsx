import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faDiscord,
  faTelegram,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MetaFields from '../../components/pages/official-world-mobile-links/metafields';

type Link = {
  name: string;
  description: string;
  url: string;
  icon?: IconDefinition;
};

type LinkCategory = {
  category: string;
  links: Link[];
  emails?: { email: string; description: string }[];
};

const linksData: LinkCategory[] = [
  {
    category: 'Official Links',
    links: [
      { name: 'World Mobile eSIM', description: 'Roam freely, stay connected with the World Mobile eSIM.', url: 'http://esim.worldmobile.io/?utm_source=linktr.ee&utm_medium=referral&utm_campaign=linktree' },
      { name: 'World Mobile App', description: 'Download from the Google Play Store.', url: 'https://play.google.com/store/apps/details?id=io.worldmobile.app' },
      { name: 'WorldMobile.io', description: 'The first global web3 wireless network.', url: 'https://worldmobile.io/?utm_source=linktr.ee&utm_medium=referral&utm_campaign=linktree' },
      { name: 'AirNode Portal', description: 'Manage AirNodes and grow the decentralized network.', url: 'https://airnode.worldmobile.net/' },
      { name: 'World Mobile Token', description: 'Discover the token powering the World Mobile ecosystem.', url: 'https://worldmobiletoken.com/' },
      { name: 'Blog', description: 'Brush up on your knowledge.', url: 'https://worldmobile.io/blog/?utm_source=linktr.ee&utm_medium=referral&utm_campaign=linktree' },
      { name: 'Press', description: 'See what people are saying about World Mobile.', url: 'https://worldmobile.io/blog/press/?utm_source=linktr.ee&utm_medium=referral&utm_campaign=linktree' },
    ],
    emails: [
      { email: 'support@worldmobiletoken.com', description: 'World Mobile Support' },
      { email: 'airnode@worldmobile.net', description: 'AirNode Support' },
      { email: 'esim@worldmobile.io', description: 'eSIM Support' },
    ],
  },
  {
    category: 'Social Links',
    links: [
      { name: 'Twitter', description: 'Stay up to date.', url: 'https://twitter.com/WorldMobileTeam', icon: faTwitter },
      { name: 'YouTube', description: 'Like and subscribe.', url: 'https://www.youtube.com/channel/UCw8cjqZEfYIs1I-bMocfXAg?sub_confirmation=1', icon: faYoutube },
      { name: 'Discord', description: 'Join the conversation.', url: 'http://discord.gg/worldmobile', icon: faDiscord },
      { name: 'Telegram', description: 'Join the conversation.', url: 'https://bit.ly/wmjoinus', icon: faTelegram },
    ],
  },
  {
    category: 'Unofficial Links',
    links: [
      { name: 'The Club - Community Powered Forum', description: 'Connect with a community-driven forum for discussions on all things World Mobile.', url: '#' },
      { name: 'Earth Node Alliance', description: 'Support for EarthNode Operators.', url: 'https://www.earthnodealliance.io' },
      { name: 'EarthNode Marketplace on JPG.store', description: 'Buy & sell EarthNode NFTs.', url: 'https://www.jpg.store/collection/earthnode?tab=activity' },
      { name: 'World Mobile Token on CoinGecko', description: 'Track WMTx prices and stats.', url: 'https://www.coingecko.com/en/coins/world-mobile-token' },
    ],
  },
];

const OfficialLinksPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#0e0525]">
      <MetaFields />
      <Header />
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">
          {/* Page Header */}
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4">
              Official{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                World Mobile
              </span>{' '}
              Links
            </h1>
            <p className="text-lg text-gray-300">
              Explore resources and community links to stay connected and engaged with World Mobile.
            </p>
          </header>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {linksData.map((category, index) => (
              <div
                key={index}
                className="card p-6 rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)]"
                style={{ backgroundColor: 'rgba(55,10,81,0.19)' }}
              >
                <h2 className="text-2xl font-extrabold mb-4">{category.category}</h2>
                <ul className="space-y-4">
                  {category.links.map((link, idx) => (
                    <li key={idx} className="flex flex-col">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-aeonik-bold text-[#F6642D] hover:text-[#D42E58] transition flex items-center gap-2"
                      >
                        {link.icon && <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />}
                        {link.name}
                      </a>
                      <p className="text-gray-300 text-sm">{link.description}</p>
                    </li>
                  ))}
                </ul>
                {category.emails && (
                  <div className="mt-6">
                    <h3 className="text-xl font-extrabold mb-2">Support Emails</h3>
                    <ul className="space-y-4">
                      {category.emails.map((email, idx) => (
                        <li key={idx} className="flex flex-col">
                          <a
                            href={`mailto:${email.email}`}
                            className="text-lg text-[#F6642D] hover:text-[#D42E58] transition"
                          >
                            {email.email}
                          </a>
                          <p className="text-gray-300 text-sm">{email.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficialLinksPage;
