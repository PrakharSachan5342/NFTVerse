import React from 'react';
import { Search, Wallet, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-white">NFT<span className="text-purple-500">Verse</span></h1>
            <div className="hidden md:block">
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Explore</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Collections</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Artists</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search NFTs..."
                  className="w-64 px-4 py-2 bg-gray-900/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center gap-2 transition-colors">
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </button>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};