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
            backgroundImage: `url('https://coolbackgrounds.imgix.net/5GbV8Si50TKkaulnxGwBa/f52a3d7e4d095c0ced0679c79f7d12f6/white-trianglify.jpg?w=3840&q=60&auto=format,compress')`,
          }}
        />
        {/* Dark tint overlay for readability & depth */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
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
            {/* The Button (kept your existing logic) */}
            <button 
              className="mt-10 pointer-events-auto bg-white text-black py-4 px-10 font-extrabold uppercase tracking-widest transition-all duration-300 shadow-xl border-2 border-black rounded-full hover:bg-green-500 hover:border-white hover:text-white transform hover:scale-105"
              onClick={scrollToPlayer}
            >
              Browse Beats
            </button>
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