import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import VinylStack from './VinylStack'; 

const Contact = () => {
  const formAction = "https://formspree.io/f/xkogoaya";
  const sectionRef = useRef(null);
  const [isInstaHovered, setIsInstaHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="relative overflow-hidden py-24 px-6 bg-white"
    >
      {/* --- BACKGROUND LAYERS (Unchanged) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-psyched-pan opacity-30"
          style={{ backgroundImage: `url('https://coolbackgrounds.imgix.net/5GbV8Si50TKkaulnxGwBa/f52a3d7e4d095c0ced0679c79f7d12f6/white-trianglify.jpg?w=3840&q=60&auto=format,compress')` }}
        />
        <div className="absolute inset-0 opacity-10 blur-[1px]">
            <VinylStack smoothProgress={smoothProgress} />
        </div>
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10 text-black">
        
        {/* Left Side: Form (Unchanged) */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-widest mb-4">
              All <span className="text-[#d1704d]">Inquiries</span>
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest opacity-60">Direct all questions below.</p>
          </div>
          <form action={formAction} method="POST" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" type="text" required placeholder="Name" className="w-full p-4 border-2 border-black font-bold uppercase text-xs tracking-widest focus:bg-black focus:text-white transition-all outline-none bg-white/50 backdrop-blur-sm" />
              <input name="email" type="email" required placeholder="Email Address" className="w-full p-4 border-2 border-black font-bold uppercase text-xs tracking-widest focus:bg-black focus:text-white transition-all outline-none bg-white/50 backdrop-blur-sm" />
            </div>
            <textarea name="message" rows="5" required placeholder="How can I help?" className="w-full p-4 border-2 border-black font-bold uppercase text-xs tracking-widest focus:bg-black focus:text-white transition-all outline-none resize-none bg-white/50 backdrop-blur-sm"></textarea>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-black text-white py-5 font-black uppercase tracking-[0.3em] text-sm hover:bg-red-600 transition-colors">
              Send Inquiry
            </motion.button>
          </form>
        </div>

        {/* Right Side: Social Media Link */}
        <div className="flex flex-col justify-center h-full space-y-12 md:pl-12 border-t-4 border-black md:border-t-0 md:border-l-4 pt-12 md:pt-0">
          <div>
            <h3 className="text-xl font-black uppercase tracking-widest mb-2">Connect</h3>
            <p className="text-sm leading-relaxed font-medium max-w-sm">I'm most active on IG.</p>
          </div>

          <a 
            href="https://instagram.com/kingsford.music" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block"
            onMouseEnter={() => setIsInstaHovered(true)}
            onMouseLeave={() => setIsInstaHovered(false)}
          >
            <div className="flex items-center space-x-6 group cursor-pointer">
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* 1. The Black Base */}
                <div className="absolute inset-0 bg-black rounded-2xl z-0" />
                
                {/* 2. The Gooey Masked Gradient */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 pointer-events-none">
                  {/* This container applies the Gooey filter */}
                  <div className="gooey-container h-full w-full relative">
                    {/* The actual Gradient layer that will be masked */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-opacity duration-300 ${isInstaHovered ? 'opacity-100' : 'opacity-0'}`} 
                      style={{ mixBlendMode: 'normal', maskImage: "url(#goo-mask)", WebkitMaskImage: "url(#goo-mask)" }}
                    />

                    {/* These blobs act as the "Liquid" logic */}
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-0 w-full h-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-transform duration-[600ms] ease-in-out"
                        style={{
                          left: `${(i - 1.5) * 35}%`,
                          borderRadius: '100%',
                          transitionDelay: `${i * 0.06}s`,
                          transform: isInstaHovered 
                            ? 'translateY(0) scale(1.8)' 
                            : 'translateY(160%) scale(1.2)'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* 3. The Instagram Icon */}
                <svg className="w-10 h-10 relative z-20 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>

              <div>
                <span className="block text-xs font-black uppercase tracking-tighter opacity-50">Direct Message</span>
                <span className={`text-2xl font-black uppercase tracking-tighter transition-colors duration-300 ${isInstaHovered ? 'text-[#ee2a7b]' : 'text-black'}`}>
                  @kingsford.music
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* HIDDEN SVG FILTER */}
      <svg className="hidden">
        <defs>
          <filter id="insta-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <style jsx>{`
        .gooey-container {
          filter: url('#insta-goo');
        }
      `}</style>
    </section>
  );
};

export default Contact;