// src/components/LeadPopup.jsx
import React, { useState, useEffect } from 'react';

const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrebyaly", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setTimeout(() => setIsVisible(false), 3000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* SHADOW ADDED BELOW:
          shadow-[0_0_50px_-12px_rgba(226,170,102,0.6)] 
          This creates a large, soft glow using your hex color.
      */}
      <div className="bg-white text-black max-w-md w-full p-8 rounded-none relative shadow-[0_0_60px_-15px_#e2aa64]">
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-4 text-2xl font-bold hover:text-[#d1704d] transition-colors"
        >
          &times;
        </button>

        <div className="text-center">
          {status === "SUCCESS" ? (
            <div className="py-8">
              <h2 className="text-2xl font-black uppercase mb-2">Beats will be in your inbox asap!</h2>
              <p className="font-bold text-[#d1704d]">Your free beats are on the way.</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">
                Hol' Up!
              </h2>
              <p className="text-lg font-bold mb-6 italic">
                Can I send you <span className="text-[#d1704d]">free beats</span> sometime??
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="ENTER YOUR EMAIL" 
                  className="w-full p-3 border-2 border-black font-bold uppercase text-sm focus:outline-none focus:border-[#d1704d]"
                  required
                />
                
                <input 
                  type="text" 
                  name="beatStyle" 
                  placeholder="WHAT'S YOUR FAVORITE TYPE OF BEAT?" 
                  className="w-full p-3 border-2 border-black font-bold uppercase text-sm focus:outline-none focus:border-[#d1704d]"
                  required
                />

                <button 
                  type="submit"
                  className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-[#d1704d] transition-colors"
                >
                  Send The Beats bro!
                </button>
                {status === "ERROR" && (
                  <p className="text-[#d1704d] text-xs font-bold mt-2">Oops! Something went wrong. Try again.</p>
                )}
              </form>
            </>
          )}
          
          <p className="text-[10px] mt-4 opacity-50 uppercase font-bold">
            No spam. Just heat. Unsubscribe anytime. <br></br>All I do is send beats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;