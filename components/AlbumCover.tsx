import React from 'react';

const AlbumCover: React.FC = () => {
  return (
    <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] mx-auto aspect-square">
      <div 
        className="absolute -inset-2 bg-pink-500 rounded-xl blur-2xl opacity-20 group-hover:opacity-25 transition-opacity duration-700 animate-pulse"
        style={{ animationDuration: '6s' }}
      ></div>
      <img
        src="/image.png"
        alt="Night Vision Album Cover"
        className="relative w-full h-full object-cover rounded-xl shadow-2xl shadow-black/60 
                   transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export default AlbumCover;
