import React from 'react';

const TAGS = [
  ['#NFT', '#Crypto', '#Web3', '#Blockchain', '#Digital Art'],
  ['#Metaverse', '#DeFi', '#Ethereum', '#Bitcoin', '#Gaming'],
  ['#Collectibles', '#VirtualReality', '#TokenizedArt', '#CryptoArt', '#NFTCommunity'],
  ['#DigitalCollectibles', '#NFTMarketplace', '#CryptoCollectibles', '#NFTArt', '#BlockchainArt'],
];

export const InfiniteScroll: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden py-12">
      {TAGS.map((tagGroup, idx) => (
        <div
          key={idx}
          className="flex whitespace-nowrap"
          style={{
            animation: `scroll${idx % 2 === 0 ? 'Left' : 'Right'} ${15 + idx * 5}s linear infinite`,
          }}
        >
          {[...tagGroup, ...tagGroup].map((tag, tagIdx) => (
            <div
              key={`${tag}-${tagIdx}`}
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 mx-2 text-purple-200 hover:bg-purple-800/40 transition-colors cursor-pointer"
            >
              <span className="text-purple-400 mr-1">#</span>
              {tag.slice(1)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}