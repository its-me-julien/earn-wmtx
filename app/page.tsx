import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-aeonik-regular">
      {/* Header with Menu */}
      <header className="navbar bg-black text-white shadow-lg sticky top-0 z-50 h-16">
        <div className="flex-1">
          <img
            src="https://worldmobile.club/uploads/default/original/1X/0908f4797ca8a0032af8935c2b1cdb6fa9d26c74.png"
            alt="World Mobile Logo"
            className="h-12 mr-4"
          />
          <span className="text-2xl font-extrabold tracking-wide hidden md:inline">The Club: WMTx Token</span>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li><a href="https://worldmobile.club" className="hover:text-[#F6642D] transition-colors">Community</a></li>
            <li><a href="https://coffee.worldmobile.club" className="hover:text-[#F6642D] transition-colors">EarthNode Staking</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full py-10 px-4 bg-gradient-to-b from-black to-[#2B1E4D]">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
          {/* Column 1 */}
          <div>
            <h1 className="text-3xl font-aeonik-bold mb-4 text-white text-center md:text-left px-4 md:px-6">Earn more World Mobile token <span className='bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent'>WMTx</span></h1>
            <p className="mb-4 leading-relaxed text-lg text-white text-center md:text-left px-4 md:px-6 mt-2">
              World Mobile brings connectivity to communities worldwide through revolutionary decentralized infrastructure.  Here is how you can earn more WMTx tokens:
            </p>
          </div>
        </div>

        {/* Additional Styled Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 place-items-center">
          <div className="card card-compact w-96 min-h-[300px] shadow-xl backdrop-blur-md bg-white/5 hover:shadow-2xl transition-shadow duration-300 border border-white/10">
            <figure className='pt-4'>
              <Image src="/scan for points.png" alt="6. Scan for Points" width={80} height={80} className='mx-auto' />
            </figure>
            <div className="card-body px-6 md:px-8 py-4 md:py-6">
              <h2 className="card-title font-bold text-white text-lg md:text-xl">6. Scan for Points</h2>
              <p className="text-white/80 text-sm md:text-md">
                Contribute to network improvement by scanning local connectivity quality. Earn loyalty points redeemable for network services and exclusive benefits.
              </p>
              <button className='btn mt-auto bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-110 border-none px-10 py-2'>Learn More</button>
            </div>
          </div>

          <div className="card card-compact w-96 min-h-[300px] shadow-xl backdrop-blur-md bg-white/5 hover:shadow-2xl transition-shadow duration-300 border border-white/10">
            <figure className='pt-4'>
              <Image src="/Stake to EN.png" alt="7. Stake to an EarthNode" width={80} height={80} className='mx-auto' />
            </figure>
            <div className="card-body px-6 md:px-8 py-4 md:py-6">
              <h2 className="card-title font-bold text-white text-lg md:text-xl">7. Stake to an EarthNode</h2>
              <p className="text-white/80 text-sm md:text-md">
                Stake your $WMTx tokens to an EarthNode to support network security and earn regular staking rewards.
              </p>
              <button className='btn mt-auto bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-110 border-none px-10 py-2'>Learn More</button>
            </div>
          </div>

          <div className="card card-compact w-96 min-h-[300px] shadow-xl backdrop-blur-md bg-white/5 hover:shadow-2xl transition-shadow duration-300 border border-white/10">
            <figure className='pt-4'>
              <Image src="/stake to airnode.png" alt="8. Stake to an AirNode" width={80} height={80} className='mx-auto' />
            </figure>
            <div className="card-body px-6 md:px-8 py-4 md:py-6">
              <h2 className="card-title font-bold text-white text-lg md:text-xl">8. Stake to an AirNode</h2>
              <p className="text-white/80 text-sm md:text-md">
                Support local connectivity by staking your $WMTx tokens to an AirNode, earning rewards while helping expand network coverage.
              </p>
              <button className='btn mt-auto bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-110 border-none px-10 py-2'>Learn More</button>
            </div>
          </div>

          <div className="card card-compact w-96 min-h-[300px] shadow-xl backdrop-blur-md bg-white/5 hover:shadow-2xl transition-shadow duration-300 border border-white/10">
            <figure className='pt-4'>
              <Image src="/Esim staking.png" alt="9. Stake to your SIM Card" width={80} height={80} className='mx-auto' />
            </figure>
            <div className="card-body px-6 md:px-8 py-4 md:py-6">
              <h2 className="card-title font-bold text-white text-lg md:text-xl">9. Stake to your SIM Card</h2>
              <p className="text-white/80 text-sm md:text-md">
                Enhance your World Mobile experience by staking $WMTx tokens to your SIM card, unlocking premium benefits and network privileges.
              </p>
              <button className='btn mt-auto bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-110 border-none px-10 py-2'>Learn More</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer p-10 bg-black text-white">
        <div className="container mx-auto text-center">
          <p>© 2024 World Mobile Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
