import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  const records = [
    { id: 1, front: "bg-zinc-100", back: "psyched-pink", label: "01" },
    { id: 2, front: "bg-zinc-200", back: "psyched-acid", label: "02" },
    { id: 3, front: "bg-zinc-300", back: "psyched-blue", label: "03" },
    { id: 4, front: "bg-zinc-200", back: "psyched-orange", label: "04" },
    { id: 5, front: "bg-zinc-100", back: "psyched-purple", label: "05" },
    { id: 6, front: "bg-zinc-50",  back: "psyched-cyan", label: "06" },
    { id: 7, front: "bg-zinc-100", back: "psyched-pink", label: "07" },
    { id: 8, front: "bg-zinc-200", back: "psyched-acid", label: "08" },
    { id: 9, front: "bg-zinc-300", back: "psyched-blue", label: "09" },
    { id: 10, front: "bg-zinc-200", back: "psyched-orange", label: "10" },
    { id: 11, front: "bg-zinc-100", back: "psyched-purple", label: "11" },
    { id: 12, front: "bg-zinc-50",  back: "psyched-cyan", label: "12" },
  ];

  const scrollToPlayer = () => {
    const player = document.getElementById('beat-store');
    if (player) {
      const offset = 110; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = player.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="hero">
      
      {/* --- PSYCHEDELIC IMAGE BACKGROUND LAYER --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-psyched-pan"
          style={{ 
            backgroundImage: `url('https://media.newyorker.com/photos/59095ec3c14b3c606c1058af/master/w_2240,c_limit/Brody-Coltrane-Free-Jazz.jpg')`,
          }}
        />
        {/* Dark tint overlay for readability & depth */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10">
        
       {/* Branding Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none text-center w-full px-4">
          <div className="flex flex-col items-center justify-center space-y-2">
   {/*         
            <span className="text-white font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none">
              Unique Beats
            </span>

            <div className="bg-red-600 px-4 py-1 transform -rotate-1 shadow-xl">
              <span className="text-white font-bold text-lg md:text-xl uppercase tracking-widest italic">
                Never Perfect, Always Art
              </span>
            </div>

          
            <span className="text-white/90 font-light text-xl md:text-2xl uppercase tracking-[0.3em] mt-2">
              Don't blend in, <span className="font-black text-white">Standout</span>
            </span>
*/} 
            <div className="flex flex-col items-center justify-center space-y-2">
  
  {/* Wrap the button in the shimmer container */}
  <div className="border-shimmer-wrapper group">
    <div className="flex flex-col items-center justify-center space-y-2">
  
  {/* The motion wrapper controls the entry animation for the entire button unit */}
  <motion.div 
    className="border-shimmer-wrapper group"
    initial={{ opacity: 0, y: 150 }} // Starts 150px lower for a more dramatic rise
    animate={{ opacity: 1, y: 0 }}   // Rises to its CSS-defined center position
    transition={{ 
      duration: 1.8,                // Increased duration for a "slow" rise
      delay: 0.2,                   // Slight delay so the background loads first
      ease: [0.22, 1, 0.36, 1]      // "Quintic" ease-out: smooth deceleration at the top
    }}
  >
    <motion.button 
      className="pointer-events-auto bg-white text-black py-4 px-10 font-extrabold 
                 uppercase tracking-widest shadow-xl 
                 rounded-full relative overflow-hidden border-none" 
      onClick={scrollToPlayer}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#92c957",
        color: "#ffffff",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Default Gray Shimmer (Inside) */}
      <span className="absolute inset-0 -translate-x-full group-hover:hidden animate-shimmer 
                       bg-gradient-to-r from-transparent via-gray-900/30 to-transparent z-0" 
      />

      {/* White Shimmer (Inside - Visible only on Hover) */}
      <span className="absolute inset-0 -translate-x-full hidden group-hover:block group-hover:animate-shimmer 
                       bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" 
      />
      
      <span className="relative z-10">Browse Beats</span>
    </motion.button>
  </motion.div>
</div>
  </div>
</div>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center">
          {records.map((record, index) => {
            const x = useTransform(smoothProgress, [0, 1], [`${120 + (index * 35)}%`, `-${250 + (index * 25)}%`]);
            const rotateY = useTransform(smoothProgress, [0, 1], [0, 720 + (index * 45)]);

            return (
              <motion.div
                key={record.id}
                style={{ x, rotateY, left: 0, position: 'absolute' }}
                className="w-64 h-64 md:w-80 md:h-80 preserve-3d will-change-transform"
              >
                {/* Vinyl Front Face */}
                <div className="absolute inset-0 rounded-full bg-zinc-900 overflow-hidden backface-hidden border-[10px] border-black shadow-2xl">
                  <div className="absolute inset-0 opacity-30" style={{ background: 'repeating-radial-gradient(circle, #000, #000 2px, #111 4px, #000 5px)' }}></div>
                  <div className={`absolute inset-0 m-auto w-1/3 h-1/3 rounded-full ${record.front} flex items-center justify-center border-4 border-black/20 shadow-inner`}>
                     <span className="text-[10px] font-black text-black/40 uppercase tracking-tighter">{record.label}</span>
                  </div>
                  <div className="vinyl-shine"></div>
                </div>

                {/* Vinyl Back Face */}
                <div 
                  className="absolute inset-0 rounded-full overflow-hidden backface-hidden flex items-center justify-center shadow-2xl"
                  style={{ 
                    transform: 'rotateY(180deg)',
                    backgroundColor: record.back === 'psyched-pink' ? '#f472b6' : 
                                   record.back === 'psyched-acid' ? '#fbbf24' : 
                                   record.back === 'psyched-blue' ? '#3b82f6' : 
                                   record.back === 'psyched-orange' ? '#fb923c' : 
                                   record.back === 'psyched-purple' ? '#a855f7' : 
                                   record.back === 'psyched-cyan' ? '#06b6d4' : '#18181b'
                  }}
                >
                  <div className="absolute inset-0 opacity-20" style={{ background: 'repeating-radial-gradient(circle, #000, #000 1px, #222 3px)' }}></div>
                  <div className="absolute inset-0 m-auto w-1/3 h-1/3 rounded-full bg-white flex items-center justify-center border-4 border-black/10">
                    <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-[8px] font-black italic text-black">KB</div>
                  </div>
                  <div className="vinyl-shine"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;