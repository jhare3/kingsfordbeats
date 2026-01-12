import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initialize audio with crackle sound
    audioRef.current = new Audio('/vinyl-crackle.wav');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.7;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Centralized function to stop audio and reset state
  const stopAudio = () => {
    setIsHovered(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to start
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio blocked:", err));
    }
  };

  const handleMouseLeave = () => {
    stopAudio();
  };

  const scrollToPlayer = () => {
    // Force audio to stop on click to fix mobile "sticky" hover issues
    stopAudio();

    const player = document.getElementById('beats');
    if (player) {
      window.scrollTo({ top: player.offsetTop - 110, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="hero relative h-screen bg-zinc-900 overflow-hidden">
      {/* Background Layers */}
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
            initial={{ opacity: 0, y: 100, x: 100, rotate: 10 }}
            animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* MASK BUTTON CONTAINER */}
            <div className="relative w-[280px] h-[70px] mx-auto overflow-hidden border-2 border-[#e2aa64] rounded-full group">
              
              {/* Layer 1: The "Under" state */}
              <span className="absolute inset-0 flex items-center justify-center bg-white text-black font-bold uppercase tracking-[0.2em] text-sm pointer-events-none">
                Browse Beats
              </span>

              {/* Layer 2: The "Over" state */}
              <button 
                className="mask-hero absolute inset-0 w-[101%] h-full flex items-center justify-center bg-black text-white font-bold uppercase tracking-[0.2em] text-sm cursor-pointer z-10 border-none outline-none"
                onClick={scrollToPlayer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                // onTouchStart improves trigger response on mobile devices
                onTouchStart={handleMouseEnter}
              >
                Browse Beats
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .mask-hero {
          mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
          mask-size: 7100% 100%;
          -webkit-mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
          -webkit-mask-size: 7100% 100%;
          animation: maskOut 0.8s steps(70) forwards;
        }

        .mask-hero:hover {
          animation: maskIn 0.8s steps(70) forwards;
        }

        @keyframes maskIn {
          from { -webkit-mask-position: 0 0; mask-position: 0 0; }
          to { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
        }

        @keyframes maskOut {
          from { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
          to { -webkit-mask-position: 0 0; mask-position: 0 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;