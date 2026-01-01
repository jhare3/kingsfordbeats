import React, { useState } from 'react';

const Licensing = () => {
  const [selectedLicense, setSelectedLicense] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const licenses = [
    {
      title: "MP3 Lease (tagged)",
      price: "$30.00",
      description: "High-Quality tagged MP3 file ",
      deals: "BUY 2 TRACKS, GET 10 FREE!",
      popular: false,
      contractDetails: {
        delivery: "High-quality Tagged MP3 ",
        rights: "Non-exclusive, non-transferable license ",
        usage: "Unlimited terrestrial/satellite radio and sync for video up to 5 mins ",
        ownership: "Producer remains sole owner of the Beat ",
        publishing: "50% Licensor / 50% Licensee split "
      }
    },
    {
      title: "WAV Lease (untagged)",
      price: "$60.00",
      description: "High-Quality tagged MP3 + High-Quality untagged WAV ",
      deals: "BUY 2 TRACKS, GET 10 FREE!",
      popular: true,
      contractDetails: {
        delivery: "High-quality WAV and MP3 ",
        rights: "Non-exclusive, non-transferable license ",
        usage: "Unlimited monetized audio/video streams ",
        ownership: "Producer remains sole owner ",
        publishing: "50% Licensor / 50% Licensee split "
      }
    },
    {
      title: "Stems Lease",
      price: "$150.00",
      description: "High-Quality WAV, MP3, and Track Stems ",
      deals: "BUY 2 TRACKS, GET 10 FREE!",
      popular: false,
      contractDetails: {
        delivery: "High-quality WAV, MP3, and Track Stems ",
        rights: "Non-exclusive license; Includes Spotify promo and consultation ",
        usage: "Unlimited for-profit and non-profit live performances ",
        ownership: "Master recording is a 'work made for hire' for Artist ",
        publishing: "50% Licensor / 50% Licensee split "
      }
    },
    {
      title: "Exclusive License",
      price: "$500.00",
      description: "Complete ownership of the instrumental ",
      deals: "BUY 1 TRACK, GET 1 FREE!",
      popular: false,
      contractDetails: {
        delivery: "Master recording of 'Preview Track Only' ",
        term: "Perpetuity (Forever) throughout the Universe ",
        rights: "Sole and exclusive right to manufacture and sell the Master ",
        usage: "Public performance and inclusion in any audio-visual production ",
        ownership: "Master is a 'work made for hire' for the Artist ",
        publishing: "50% Licensor / 50% Licensee split "
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
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="licensing" className="bg-black py-24 px-6 text-center">
      <h2 className="text-4xl font-black uppercase tracking-widest text-white mb-16">
        Licensing <span className="text-red-600">Options</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {licenses.map((license, index) => (
          <div 
            key={index} 
            className={`flex flex-col p-10 relative border-t-4 transition-all duration-300 hover:-translate-y-2 
            ${license.popular ? 'bg-black text-white border-red-600 scale-105 z-10 shadow-2xl' : 'bg-white text-black border-transparent'}`}
          >
            {license.popular && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-widest uppercase bg-red-600 px-2 py-1">
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
        ))}
      </div>

      {isModalOpen && selectedLicense && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content text-left" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2 className="modal-title">{selectedLicense.title} Details</h2>
            <div className="grid gap-6">
              {Object.entries(selectedLicense.contractDetails).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-red-600 text-[10px] font-black uppercase tracking-widest mb-1">{key}</label>
                  <p className="text-sm text-zinc-300 leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-[10px] text-zinc-600 italic uppercase">
              * This is a legal summary. Full terms apply upon checkout.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Licensing;