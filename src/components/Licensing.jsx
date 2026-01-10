// src/components/Licensing.jsx
import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ContractModal from './ContractModal';
import VinylStack from './VinylStack';

// Animation variants for the grid container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animation variants for individual cards
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

const Licensing = () => {
  const [selectedLicense, setSelectedLicense] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Ref for tracking the scroll position of this specific section
  const sectionRef = useRef(null);

  // Setup scroll tracking for the background VinylStack
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  const licenses = [
    {
      title: "MP3 Lease (tagged)",
      price: "$30.00",
      description: "High-Quality tagged MP3 file",
      deals: "BUY 2 TRACKS, GET 10 FREE!",
      popular: false,
      contractDetails: {
        delivery: "High-quality Tagged MP3",
        rights: "Non-exclusive, non-transferable license",
        usage: "Unlimited monetized audio/video streams, and live performances",
        ownership: "Producer remains sole owner of the Beat",
        publishing: "50% Licensor / 50% Licensee split"
      }
    },
    {
      title: "WAV Lease (untagged)",
      price: "$60.00",
      description: "High-Quality tagged MP3 + High-Quality untagged WAV",
      deals: "BUY 2 TRACKS, GET 10 FREE!",
      popular: true,
      contractDetails: {
        delivery: "High-quality WAV and MP3",
        rights: "Non-exclusive, non-transferable license",
        usage: "Unlimited monetized audio/video streams, and live performances",
        ownership: "Producer remains sole owner of the Beat",
        publishing: "50% Licensor / 50% Licensee split"
      }
    },
    {
      title: "Stems Lease",
      price: "$150.00",
      description: "High-Quality WAV, MP3, and Track Stems",
      deals: "BUY 2 TRACKS, GET 10 FREE!",
      popular: false,
      contractDetails: {
        delivery: "High-quality WAV, MP3, and Track Stems",
        rights: "Non-exclusive, non-transferable license",
        usage: "Unlimited monetized audio/video streams, and live performances",
        ownership: "Producer remains sole owner of the Beat",
        publishing: "50% Licensor / 50% Licensee split"
      }
    },
    {
      title: "Exclusive License",
      price: "$500.00",
      description: "High-Quality WAV, MP3, and Track Stems",
      deals: "BUY 1 TRACK, GET 1 FREE!",
      popular: false,
      contractDetails: {
        delivery: "High-quality WAV, MP3, and Track Stems",
        term: "Perpetuity (Forever) throughout the Universe",
        rights: "Sole and exclusive right to manufacture and sell the Master",
        usage: "Unlimited public performance and inclusion in any audio-visual production",
        ownership: "Master is a 'work made for hire' for the Artist",
        publishing: "50% Licensor / 50% Licensee split"
      }
    }
  ];

  const openModal = (license) => {
    setSelectedLicense(license);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLicense(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section 
      id="licensing" 
      ref={sectionRef} 
      className="relative overflow-hidden py-24 px-6 text-center bg-white"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated Background Pattern */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 opacity-30 animate-psyched-pan"
          style={{ 
            backgroundImage: `url('https://coolbackgrounds.imgix.net/5GbV8Si50TKkaulnxGwBa/f52a3d7e4d095c0ced0679c79f7d12f6/white-trianglify.jpg?w=3840&q=60&auto=format,compress')`,
          }}
        />
        
        {/* Reusable VinylStack as a subtle background element */}
        <div className="absolute inset-0 opacity-10 blur-[1px]">
            <VinylStack smoothProgress={smoothProgress} />
        </div>

        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black uppercase tracking-widest text-black mb-16"
        >
          Licensing <span className="text-red-600">Options</span>
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {licenses.map((license, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <div 
                className={`flex flex-col p-10 h-full relative border-t-4 transition-all duration-300 hover:-translate-y-2 shadow-2xl rounded-2xl overflow-hidden
                ${license.popular ? 'bg-black text-white border-red-600 scale-105 z-10' : 'bg-white/90 backdrop-blur-sm text-black border-black'}`}
              >
                {license.popular && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-widest uppercase bg-red-600 px-2 py-1 text-white">
                    ★ Popular
                  </div>
                )}
                <h3 className="text-xl font-extrabold mb-4">{license.title}</h3>
                <div className="text-5xl font-black mb-6">{license.price}</div>
                <p className="text-sm font-semibold mb-10 min-h-[40px] leading-snug">{license.description}</p>
                
                <button 
                  className={`mt-auto py-4 font-black uppercase tracking-widest text-xs transition-all border-2 
                  ${license.popular ? 'bg-white text-black border-white hover:bg-transparent hover:text-white' : 'bg-black text-white border-black hover:bg-red-600 hover:border-red-600'}`}
                  onClick={() => openModal(license)}
                >
                  Read License
                </button>

                <div className="mt-8 border-t border-current pt-4 opacity-80 uppercase">
                  <small className="text-[9px] font-bold">Bulk deals:</small>
                  <p className="text-[11px] font-black mt-1">{license.deals}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ContractModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        license={selectedLicense} 
      />
    </section>
  );
};

export default Licensing;