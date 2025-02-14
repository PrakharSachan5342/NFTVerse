import React from 'react';

export const GridAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full blur-[100px] opacity-30"
              style={{
                background: `radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(147,51,234,0.2) 70%)`,
                width: `${400 + i * 100}px`,
                height: `${400 + i * 100}px`,
                left: `${10 + i * 20}%`,
                top: `${10 + i * 15}%`,
                animation: `float ${10 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0">
          {/* Vertical Lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-[1px] bg-white/[0.07]"
                style={{
                  left: `${(i + 1) * (100 / 20)}%`,
                  transform: `translateZ(${Math.sin(i * 0.5) * 20}px)`,
                }}
              />
            ))}
          </div>

          {/* Horizontal Lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-[1px] bg-white/[0.07]"
                style={{
                  top: `${(i + 1) * (100 / 20)}%`,
                  transform: `translateZ(${Math.cos(i * 0.5) * 20}px)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Interactive Grid Cells */}
        <div className="absolute inset-0 grid grid-cols-12 gap-px opacity-20">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-purple-500/10 backdrop-blur-sm animate-pulse"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
    </div>
  );
};