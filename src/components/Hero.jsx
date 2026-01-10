import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio('/vinyl-crackle.wav');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.7;
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio blocked:", err));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    }
  };

  const scrollToPlayer = () => {
    const player = document.getElementById('beat-store');
    if (player) {
      window.scrollTo({ top: player.offsetTop - 110, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="hero relative h-screen bg-zinc-900">
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: `url('/vinyl-static.png')`, backgroundColor: '#18181b' }}
        />
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('/vinyl.gif')` }} 
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative h-full w-full flex items-center justify-center z-10">
        <div className="text-center w-full px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.button 
              className="pointer-events-auto bg-white text-black py-4 px-10 font-extrabold uppercase tracking-widest shadow-xl rounded-full relative overflow-hidden group" 
              onClick={scrollToPlayer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05, backgroundColor: "#e2aa64", color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer for default state (Darker) */}
              <span className="absolute inset-0 -translate-x-full group-hover:hidden animate-shimmer bg-gradient-to-r from-transparent via-gray-900/50 to-transparent z-0" />
              
              {/* Shimmer for hover state (Whiter/Brighter) */}
              <span className="absolute inset-0 -translate-x-full hidden group-hover:block group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
              
              <span className="relative z-10">Browse Beats</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;