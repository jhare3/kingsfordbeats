// src/components/SubscriptionPopup.jsx
import React, { useState, useEffect } from 'react';

const SubscriptionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // 10-second delay before showing the pop-up
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Google-style entry: slight micro-delay for fluid presentation layout stability
      const animationFrame = requestAnimationFrame(() => {
        setIsAnimated(true);
      });
      return () => cancelAnimationFrame(animationFrame);
    } else {
      setIsAnimated(false);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimated(false);
    // Smooth material morph retraction time
    setTimeout(() => {
      setIsVisible(false);
    }, 350); 
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        isAnimated ? 'bg-black/75 opacity-100' : 'bg-black/0 opacity-0 pointer-events-none'
      }`}
    >
      {/* Outer Border Wrapper: Calculates the circling shimmer gradient */}
      <div 
        style={{
          background: 'conic-gradient(from var(--glass-angle), transparent 40%, #e2aa64 70%, #d1704d 85%, transparent 100%)'
        }}
        className={`max-w-sm w-full p-[2px] rounded-2xl relative shadow-[0_0_50px_-10px_rgba(226,170,102,0.3)] animate-glass-rotate transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isAnimated ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'
        }`}
      >
        
        {/* Inner Card: Liquid Frosted Glass Core */}
        <div className="bg-white/90 dark:bg-black/85 backdrop-blur-xl text-black dark:text-white w-full p-8 rounded-[14px] relative">
          
          {/* Close Button with fluid rotation */}
          <button 
            onClick={handleClose}
            className="absolute top-3 right-4 text-2xl font-light hover:text-[#d1704d] transition-transform duration-300 hover:rotate-90 cursor-pointer text-black/60 dark:text-white/60"
            aria-label="Close popup"
          >
            &times;
          </button>

          <div className="text-center">
            {/* Logo Integration */}
            <img 
              src="/kingsfordbeats_LOGO.png" 
              alt="Kingsford Beats Logo" 
              className="h-12 mx-auto mb-4 object-contain invert dark:invert-0"
            />

            {/* Narrative / Story Body */}
            <div className="space-y-3 font-bold text-xs uppercase tracking-wide leading-relaxed text-left border-t border-black/10 dark:border-white/10 pt-4">
              <p className="text-[#d1704d] text-sm font-black italic text-center opacity-95">
                "I do things a bit different than most producers."
              </p>
              
              <p className="opacity-90">
                Most guys charge $30 to $100 <strong>every single time</strong> you want a beat license. If you're dropping projects constantly, that model is broken.
              </p>
              
              <p className="opacity-90">
                I don't believe in forcing artists to ration their creativity based on a budget. So I changed the rules.
              </p>

              {/* UPDATED: Translucent, Clickable Price Box with Fluid Material Hover */}
              <a 
                href="https://kingsfordmusic.beatstars.com/memberships"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/15 backdrop-blur-md text-black dark:text-white p-3.5 text-center font-black text-sm tracking-tight my-4 transform transition-all duration-300 hover:bg-[#d1704d]/10 hover:border-[#d1704d]/40 dark:hover:bg-[#e2aa64]/10 dark:hover:border-[#e2aa64]/40 hover:scale-[1.02] active:scale-[0.99] rounded-lg shadow-sm cursor-pointer"
              >
                $48 / YEAR = ACCESS TO MY ENTIRE CATALOG.
              </a>

              <p className="text-center text-[10px] opacity-75 tracking-wider">
                Tagged MP3s • High-Quality WAVs • Full Stems • Commercial Rights
              </p>
            </div>

            {/* Call to Action Button with smooth Google-style scaling feedback */}
            <div className="mt-6">
              <a 
                href="https://kingsfordmusic.beatstars.com/memberships" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#d1704d] text-white py-3.5 font-black uppercase tracking-widest text-center hover:bg-black dark:hover:bg-white dark:hover:text-black hover:scale-[1.02] active:scale-[0.99] transform transition-all duration-300 text-xs rounded-lg shadow-md"
              >
                CLAIM YOUR ALL ACCESS PASS NOW
              </a>
              
              <p className="text-[9px] opacity-50 uppercase font-bold tracking-tight mt-2.5">
                Billed via BeatStars. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPopup;