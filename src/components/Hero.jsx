import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80, // Slightly looser for a "heavy" vinyl feel
    damping: 30,
    restDelta: 0.001
  });

  // Expanded stack of 12 records with varied colors
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
    <section 
      ref={sectionRef} 
      className="relative bg-white overflow-hidden" 
      style={{ height: '100vh' }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Branding Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none text-center w-full">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mix-blend-difference text-white uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            Chill<span className="text-red-600">Beats</span>
          </h1>
          <button 
            className="mt-8 pointer-events-auto bg-white text-black py-4 px-10 font-extrabold uppercase tracking-widest hover:bg-[#92c957] hover:text-white transition-all duration-300 shadow-xl border-2 border-black"
            onClick={scrollToPlayer}
          >
            Browse Beats
        </button>
        </div>

        <div className="relative w-full h-full flex items-center">
          {records.map((record, index) => {
            // We increase the initial offset multiplier (index * 40) 
            // and the exit distance to ensure they all pass through
            const x = useTransform(
              smoothProgress, 
              [0, 1], 
              [`${120 + (index * 35)}%`, `-${250 + (index * 25)}%`]
            );

            // Staggered rotation for a more chaotic, organic feel
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