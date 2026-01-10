import { useState, useEffect } from 'react';

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); 

      const diff = midnight - now;

      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num) => String(num).padStart(2, '0');

  const scrollToDeals = () => {
    document.getElementById('beat-store')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /* Liquid Glass Effect: uses backdrop-blur, semi-transparent bg, and a custom shine animation */
    <div 
      onClick={scrollToDeals}
      className="fixed top-0 left-0 w-full z-[1100] cursor-pointer
                 bg-white/10 backdrop-blur-xl border-b border-white/20
                 py-2 px-4 flex justify-center items-center gap-4
                 transition-all hover:bg-white/20"
      style={{
        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Moving "Liquid" Shine Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-liquid-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"></div>
      </div>

      <span className="relative z-10 text-white uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold hover:text-red-600">
        Limited Time Bulk Deal: <span className="text-red-500">Buy 2 Get 10 Free</span> ends in
      </span>
      
      <div className="relative z-10 font-mono text-lg md:text-xl text-white font-black flex gap-1">
        <span className="bg-black/30 px-1 rounded">{format(timeLeft.hours)}</span>:
        <span className="bg-black/30 px-1 rounded">{format(timeLeft.minutes)}</span>:
        <span className="bg-black/30 px-1 rounded text-red-500">{format(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default UrgencyBanner;