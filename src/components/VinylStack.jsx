import React from 'react';
import { motion, useTransform } from 'framer-motion';

// 1. Create a separate component for a single record
const VinylRecord = ({ record, index, smoothProgress, backStyles }) => {
  const x = useTransform(
    smoothProgress, 
    [0, 1], 
    [`${120 + (index * 35)}%`, `-${250 + (index * 25)}%`]
  );
  const rotateY = useTransform(
    smoothProgress, 
    [0, 1], 
    [0, 720 + (index * 45)]
  );

  return (
    <motion.div
      style={{ x, rotateY, left: 0, position: 'absolute' }}
      className="w-64 h-64 md:w-80 md:h-80 preserve-3d will-change-transform"
    >
      {/* Front Face */}
      <div className="absolute inset-0 rounded-full bg-zinc-900 overflow-hidden backface-hidden border-[10px] border-black shadow-2xl">
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ background: 'repeating-radial-gradient(circle, #000, #000 2px, #111 4px, #000 5px)' }}
        ></div>
        <div className={`absolute inset-0 m-auto w-1/3 h-1/3 rounded-full ${record.front} flex items-center justify-center border-4 border-black/20 shadow-inner`}>
           <span className="text-[10px] font-black text-black/40 uppercase tracking-tighter">{record.label}</span>
        </div>
      </div>

      {/* Translucent Back Face */}
      <div 
        className="absolute inset-0 rounded-full overflow-hidden backface-hidden flex items-center justify-center shadow-2xl backdrop-blur-sm border-[10px] border-black/10"
        style={{ 
          transform: 'rotateY(180deg)',
          backgroundColor: backStyles[record.back] || backStyles.default
        }}
      >
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ background: 'repeating-radial-gradient(circle, #000, #000 2px, #111 4px, #000 5px)' }}
        ></div>
        <div className="absolute inset-0 m-auto w-1/3 h-1/3 rounded-full bg-white flex items-center justify-center border-4 border-black/10 shadow-inner">
          <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-[8px] font-black italic text-black">KB</div>
        </div>
      </div>
    </motion.div>
  );
};

const VinylStack = ({ smoothProgress }) => {
  const backStyles = {
    'psyched-gold':   '#e2aa6499', 
    'psyched-orange': '#d1704d99', 
    'psyched-purple': '#4230aa99', 
    'psyched-blue':   '#023bbb99', 
    'default':        '#18181b99'
  };

  const records = [
    { id: 1,  front: "bg-zinc-100", back: "psyched-gold",   label: "01" },
    // ... rest of your records array
  ];

  return (
    <div className="relative w-full h-full flex items-center">
      {records.map((record, index) => (
        <VinylRecord 
          key={record.id} 
          record={record} 
          index={index} 
          smoothProgress={smoothProgress} 
          backStyles={backStyles} 
        />
      ))}
    </div>
  );
};

export default VinylStack;