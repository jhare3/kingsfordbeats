import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Calculate progress based on the section's position relative to the viewport
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewHeight = window.innerHeight;

      // Progress is 0 when the top of the hero is at the top of the screen,
      // and 1 when the bottom of the hero has scrolled past the top.
      const progress = Math.min(Math.max(-rect.top / sectionHeight, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const records = [
    { id: 1, front: "bg-zinc-100", back: "bg-red-600", label: "01" },
    { id: 2, front: "bg-zinc-200", back: "bg-zinc-900", label: "02" },
    { id: 3, front: "bg-zinc-300", back: "bg-zinc-800", label: "03" },
    { id: 4, front: "bg-zinc-200", back: "bg-zinc-900", label: "04" },
    { id: 5, front: "bg-zinc-100", back: "bg-red-600", label: "05" },
    { id: 6, front: "bg-zinc-50", back: "bg-zinc-800", label: "06" },
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
    /* We reduce the height from 300vh to a more standard hero size so the page scrolls immediately */
    <section ref={sectionRef} className="relative bg-white overflow-hidden" style={{ height: '120vh' }}>
      <div className="h-full w-full flex items-center justify-center relative">
        
        {/* Branding Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none text-center">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mix-blend-difference text-white uppercase">
            Kingsford<span className="text-red-600">Beats</span>
          </h1>
          <button 
            className="mt-8 pointer-events-auto bg-white text-black py-4 px-10 font-extrabold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 shadow-xl border-2 border-black"
            onClick={scrollToPlayer}
          >
            Browse Beats
          </button>
        </div>

        {/* Record Container */}
        <div className="relative w-full h-[60vh] flex items-center">
          {records.map((record, index) => {
            // Horizontal Scroll Logic:
            const initialOffset = index * 120; 
            const movement = scrollProgress * -1800; // Increased speed of movement
            
            return (
              <div
                key={record.id}
                className="absolute w-64 h-64 md:w-80 md:h-80 transition-transform duration-150 ease-out preserve-3d"
                style={{ 
                  left: `calc(100% + ${initialOffset}px)`,
                  transform: `translateX(${movement}px) rotateY(${scrollProgress * 720}deg)` // Double flip for more energy
                }}
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
                    backgroundColor: record.back === 'bg-red-600' ? '#dc2626' : '#18181b' 
                  }}
                >
                  <div className="absolute inset-0 opacity-20" style={{ background: 'repeating-radial-gradient(circle, #000, #000 1px, #222 3px)' }}></div>
                  <div className="absolute inset-0 m-auto w-1/3 h-1/3 rounded-full bg-white flex items-center justify-center border-4 border-black/10">
                    <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-[8px] font-black italic text-black">KB</div>
                  </div>
                  <div className="vinyl-shine"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;