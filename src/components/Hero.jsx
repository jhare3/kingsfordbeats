const Hero = () => {
  const scrollToPlayer = () => {
    const player = document.getElementById('beat-store');
    if (player) {
      // Calculate position accounting for the fixed header height (110px)
      const offset = 110; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = player.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero flex flex-col items-center justify-center text-center px-5 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000000_100%)]">
      <div className="hero-content">
        <h1 className="hero-title text-white font-black tracking-tighter leading-none mb-4">
          KINGSFORD<span className="text-red-600 uppercase">BEATS</span>
        </h1>
        <p className="hero-subtitle text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 tracking-wide">
          Not your average YouTube Instrumentals. <br /> 
          High-Quality Beats Engineered for Serious Artists. <br />
          Never Perfect, Always Art.
        </p>
        <button 
          className="cta-button bg-white text-black py-4 px-10 font-extrabold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-xl"
          onClick={scrollToPlayer}
        >
          Browse Beats
        </button>
      </div>
    </section>
  );
};

export default Hero;