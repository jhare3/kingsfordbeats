import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row pointer-events-none">
        <div 
          className="w-full h-1/2 md:w-1/2 md:h-full bg-cover bg-center opacity-30" 
          style={{ 
            backgroundImage: "url('/kingsfordbeats_LOGO.png')",
          }}
        />
        <div 
          className="w-full h-1/2 md:w-1/2 md:h-full bg-cover bg-center opacity-0.5" 
          style={{ 
            backgroundImage: "url('/kingsfordbeats_LOGO.png')",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Side: Visual/Text */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 border-l-4 border-white/20 pl-8">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase leading-none mb-6 tracking-tighter">
                Never Perfect <br /><span className="text-[#d1704d]">Always Art</span>
              </h2>
              <div className="text-gray-400 text-lg leading-relaxed max-w-md italic">
                <p>Don't worry about Perfection,</p>
                <p>Make art to feed the soul.</p>
                <br />
                <p>Every note is a story,</p>
                <p>Every sample a memory.</p>
                <p>Every lyric is a heartbeat,</p>
                <p>Every song a journey.</p>
                <br />
                <p>Don't worry about Perception,</p>
                <p>Make art to feed the soul.</p>
              </div>
            </div>
            {/* Aesthetic Background Element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#d1704d]/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Side: Narrative */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#d1704d]"></div>
                <span className="text-[#d1704d] font-bold uppercase tracking-[0.3em] text-sm">Why Kingsford?</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white uppercase tracking-tight">
                Authenticity Over Algorithms
              </h3>
              
              <div className="space-y-4 text-gray-300 font-light leading-relaxed">
                <p>
                  I believe the best music lives in the imperfections. 
                  In a world of AI and clinical, programmed loops, I chase the authentically human frequencies that make a listener feel something real.
                  Listeners' and artists' expectations are evolving, but they will always crave beats that breathe life, soul, and raw emotion.
                </p>
                <p>
                  Every production is an original exploration of grit, warmth, and texture. 
                  We don't manufacture products; we create unique sonic signatures that 
                  prioritize the artist's heartbeat over industry trends.
                </p>
              </div>

              {/* Stats/Quick Info */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div className="group cursor-default">
                  <div className="text-4xl font-black text-white uppercase group-hover:text-[#e2aa64] transition-colors">100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 group-hover:text-[#d1704d] transition-colors">Human Made</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-4xl font-black text-white uppercase group-hover:text-[#e2aa64] transition-colors">Unique</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 group-hover:text-[#d1704d] transition-colors">Sonic DNA</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;