import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GridAnimation } from './components/GridAnimation';
import { NFTCard } from './components/NFTCard';
import { InfiniteScroll } from './components/InfiniteScroll';
import { Rocket, Siren as Fire, Sparkles, TrendingUp, Zap, Crown, Diamond, Trophy, Users, BarChart3, Shield, Gem, Award, Target } from 'lucide-react';

const FEATURED_NFTS = [
  {
    image: 'https://images.unsplash.com/photo-1644699516726-795607bd098f',
    name: 'Cosmic Dreamer #31',
    price: '2.5',
    creator: 'CryptoArtist'
  },
  {
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698b98d',
    name: 'Digital Horizon #08',
    price: '1.8',
    creator: 'NFTCreator'
  },
  {
    image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf',
    name: 'Neon Genesis #12',
    price: '3.2',
    creator: 'DigitalWizard'
  },
  {
    image: 'https://images.unsplash.com/photo-1641391503184-a2131018701b',
    name: 'Future Past #45',
    price: '1.5',
    creator: 'CryptoVision'
  },
  {
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e',
    name: 'Ethereal Dreams #17',
    price: '4.2',
    creator: 'ArtisticSoul'
  },
  {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
    name: 'Quantum Leap #23',
    price: '2.8',
    creator: 'QuantumArtist'
  },
  {
    image: 'https://images.unsplash.com/photo-1633101585272-1ddb7613d2e8',
    name: 'Cyber Punk #56',
    price: '3.5',
    creator: 'CyberCreator'
  },
  {
    image: 'https://images.unsplash.com/photo-1614812513172-567d2fe96a75',
    name: 'Virtual Reality #89',
    price: '2.1',
    creator: 'VRMaster'
  }
];

const CATEGORIES = [
  { icon: Crown, name: 'Premium', count: '1.2K' },
  { icon: Diamond, name: 'Rare', count: '8.5K' },
  { icon: Trophy, name: 'Collectibles', count: '3.2K' },
  { icon: Zap, name: 'New', count: '892' },
];

const STATS = [
  { label: 'Total Volume', value: '$283M', icon: BarChart3 },
  { label: 'NFTs Created', value: '12.5K', icon: Gem },
  { label: 'Active Users', value: '35.7K', icon: Users },
  { label: 'Secured Assets', value: '$1.2B', icon: Shield },
];

function App() {
  const [selectedTab, setSelectedTab] = useState('trending');

  return (
    <div className="min-h-screen bg-black text-white">
      <GridAnimation />
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover, Collect, and Sell
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Extraordinary </span>
            NFTs
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Explore the best NFT marketplace with our beautiful collections of unique digital assets
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center gap-2 transition-colors">
              <Rocket className="w-5 h-5" />
              Explore Now
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2 transition-colors">
              <Sparkles className="w-5 h-5" />
              Create NFT
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map(({ label, value, icon: Icon }) => (
            <div key={label} className="p-6 bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-500/20">
              <Icon className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-2xl font-bold text-white mb-1">{value}</p>
              <p className="text-purple-300">{label}</p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {CATEGORIES.map(({ icon: Icon, name, count }) => (
            <div key={name} className="p-6 bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer group">
              <Icon className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{name}</h3>
              <p className="text-purple-300">{count} Items</p>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Tags */}
        <InfiniteScroll />

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <Fire className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Hot Drops</h3>
            <p className="text-gray-400">Discover the most sought-after NFTs in our curated collection</p>
          </div>
          <div className="p-6 bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Trending</h3>
            <p className="text-gray-400">Stay updated with the latest trends in the NFT world</p>
          </div>
          <div className="p-6 bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Live Auctions</h3>
            <p className="text-gray-400">Bid on exclusive NFTs in real-time auctions</p>
          </div>
          <div className="p-6 bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <Rocket className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Launch Creator</h3>
            <p className="text-gray-400">Start your journey as an NFT creator today</p>
          </div>
        </div>

        {/* Featured NFTs Tabs */}
        <div className="mb-8">
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {['trending', 'top', 'art', 'collectibles', 'photography'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-2 rounded-full capitalize whitespace-nowrap transition-colors ${
                  selectedTab === tab
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-900/20 text-purple-300 hover:bg-purple-800/40'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_NFTS.map((nft, index) => (
              <NFTCard key={index} {...nft} />
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="rounded-2xl bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 p-8 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Join Our NFT Community</h2>
            <p className="text-purple-300 mb-8">Connect with other creators and collectors. Share your work, get feedback, and stay updated with the latest trends.</p>
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg inline-flex items-center gap-2 transition-colors">
              <Users className="w-5 h-5" />
              Join Community
            </button>
          </div>
        </div>

        {/* Rewards Program */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/20">
            <Target className="w-12 h-12 text-purple-400 mb-4" />
            <h2 className="text-3xl font-bold mb-4">NFTVerse Rewards Program</h2>
            <p className="text-purple-300 mb-6">Earn points for every transaction, creation, and community contribution. Unlock exclusive benefits and special access to premium drops.</p>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg inline-flex items-center gap-2 transition-colors">
              Learn More
            </button>
          </div>
          <div className="p-8 rounded-2xl bg-purple-900/20 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4">Current Rewards</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <Crown className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold">Premium Access</p>
                  <p className="text-sm text-purple-300">500 Points</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <Diamond className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold">Exclusive Drops</p>
                  <p className="text-sm text-purple-300">1000 Points</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold">VIP Status</p>
                  <p className="text-sm text-purple-300">2500 Points</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;