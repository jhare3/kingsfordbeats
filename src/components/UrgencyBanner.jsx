import { useState, useEffect } from 'react';

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); 

      const diff = midnight - now;

      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num) => String(num).padStart(2, '0');

  return (
    <div 
      className="relative w-full z-[1100]
                 bg-white/10 backdrop-blur-xl border-b border-white/20
                 py-4 px-4 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8
                 transition-all overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Background Liquid Shine */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-liquid-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Promotion Text */}
      <span className="relative z-10 text-white uppercase tracking-[0.2em] text-[13px] md:text-xs font-bold text-center">
        Beat Pack: <span className="text-[#d1704d]">20 Beats for $30</span> ends in
      </span>
      
      {/* Mobile-optimized Row */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* Countdown Timer */}
        <div className="relative z-10 font-mono text-lg md:text-xl text-white font-black flex gap-1">
          <span className="bg-black/30 px-1 rounded">{format(timeLeft.hours)}</span>:
          <span className="bg-black/30 px-1 rounded">{format(timeLeft.minutes)}</span>:
          <span className="bg-black/30 px-1 rounded text-[#d1704d]">{format(timeLeft.seconds)}</span>
        </div>

        {/* Animated Border Button Container */}
        <div className="relative group overflow-hidden rounded-full p-[1.5px] flex items-center justify-center">
          {/* The Orbiting Beam - requires 'animate-border-spin' in tailwind.config.js */}
          <div 
            className="absolute inset-[-1000%] animate-border-spin pointer-events-none"
            style={{
              background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 40%, #ffffff 50%, transparent 60%, transparent 100%)'
            }}
          ></div>
          
          {/* The Button Body */}
          <a 
            href="https://bsta.rs/oAP4x"
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 px-6 py-2 bg-[#d1704d] hover:bg-[#e2aa64] 
                       text-white text-[10px] md:text-xs font-bold uppercase tracking-widest 
                       rounded-full transition-all duration-300
                       hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;