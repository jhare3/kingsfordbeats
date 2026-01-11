// src/components/LoadingScreen.jsx
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[3000] flex flex-col items-center justify-center bg-gray-900/40 backdrop-blur-md">
      <div className="relative text-6xl">
        {/* Coffee Mug Emoji */}
        ☕
        {/* Animated Steam */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex space-x-1">
          <span className="animate-steam delay-75 w-1 h-4 bg-white/40 rounded-full blur-[1px]"></span>
          <span className="animate-steam delay-200 w-1 h-6 bg-white/40 rounded-full blur-[1px]"></span>
          <span className="animate-steam delay-500 w-1 h-4 bg-white/40 rounded-full blur-[1px]"></span>
        </div>
      </div>
      <p className="mt-4 font-black uppercase tracking-widest text-[10px] text-white/70">
        Brewing your beats...
      </p>
    </div>
  );
};

export default LoadingScreen;