import React from 'react';
import Image from 'next/image';

const Vault = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="space-y-8 bg-[rgba(255,255,255,0.05)] p-8 rounded-lg">
          <h2 className="text-4xl font-extrabold text-white">
            The{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              Vault
            </span>
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Securely manage your nodes, track rewards, and stake WMTx in your non-custodial vault.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-200">
            <li>Own and control everything from your Vault.</li>
            <li>Manage your rewards in one place.</li>
            <li>Store and encrypt your information on your chosen device.</li>
          </ul>
          <div className="p-4 bg-red-600/20 text-red-400 border border-red-400 rounded-lg">
            <h3 className="text-lg font-bold">Maintenance Notice</h3>
            <p>
              The Vault is currently under maintenance due to the WMTx Migration. Vault creation is suspended, but existing Vault owners will retain access.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/images/the-vault-min.jpg"
              alt="Vault Management"
              className="rounded-lg shadow-lg"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vault;
