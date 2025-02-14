import React from 'react';
import { Heart, Share2, ExternalLink } from 'lucide-react';

interface NFTCardProps {
  image: string;
  name: string;
  price: string;
  creator: string;
}

export const NFTCard: React.FC<NFTCardProps> = ({ image, name, price, creator }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-purple-600/50 transition-colors">
            <Heart className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-purple-600/50 transition-colors">
            <Share2 className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-400 mb-3">by {creator}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">Current Price</p>
            <p className="text-lg font-bold text-purple-400">{price} ETH</p>
          </div>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center gap-2 transition-colors">
            <ExternalLink className="w-4 h-4" />
            View
          </button>
        </div>
      </div>
    </div>
  );
};