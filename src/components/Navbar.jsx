import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Common button classes to keep code clean
  const maskBtnContainer = "relative w-[140px] h-[45px] overflow-hidden border-2 border-[#e2aa64] transition-all duration-500 rounded-lg group";
  const maskBtnUnderText = "absolute inset-0 flex items-center justify-center text-black bg-white text-[10px] font-bold uppercase tracking-widest";
  const maskBtnActual = "mask-btn absolute inset-0 w-[101%] h-full flex items-center justify-center bg-black text-white text-[10px] font-bold uppercase tracking-widest cursor-pointer z-10 border-none outline-none";

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'bg-[#050505]' : ''} 
      flex items-center w-full transition-all duration-500 ease-in-out z-[1000]`}
    >
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center px-8 relative">
        
        {/* Logo */}
        <div className="text-2xl md:text-3xl tracking-normal z-[1100] text-white">
          KINGSFORD<span className="text-[#e2aa64] uppercase">BEATS</span>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex list-none gap-10">
          <li><a href="#" className="text-white no-underline text-xs font-bold uppercase tracking-widest hover:text-[#d1704d] transition-colors">Home</a></li>
          <li><a href="#beat-store" className="text-white no-underline text-xs font-bold uppercase tracking-widest hover:text-[#d1704d] transition-colors">Beats</a></li> 
          <li><a href="#licensing" className="text-white no-underline text-xs font-bold uppercase tracking-widest hover:text-[#d1704d] transition-colors">Licensing</a></li>
          <li><a href="#contact" className="text-white no-underline text-xs font-bold uppercase tracking-widest hover:text-[#d1704d] transition-colors">Contact</a></li>
        </ul>

        {/* Desktop CTA with Mask Effect */}
        <div className="hidden md:block">
          <div className={maskBtnContainer}>
            <span className={maskBtnUnderText}>Why Kingsford?</span>
            <button 
              className={maskBtnActual}
              onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}
            >
              Why Kingsford?
            </button>
          </div>
        </div>

        {/* Hamburger Button (Unchanged) */}
        <button 
          className="md:hidden flex flex-col justify-center items-center z-[1100] w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`absolute top-[80px] left-0 w-full bg-[#050505] border-b border-white/10 transition-all duration-500 ease-in-out md:hidden overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center px-8 py-10 gap-6">
            {/* ... other mobile links ... */}
            <li className="w-full flex justify-center pt-4">
               <div className={maskBtnContainer}>
                <span className={maskBtnUnderText}>Why Kingsford?</span>
                <button 
                  className={maskBtnActual}
                  onClick={() => { closeMenu(); document.getElementById('about').scrollIntoView({behavior: 'smooth'}) }}
                >
                  Why Kingsford?
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .mask-btn {
          mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
          mask-size: 7100% 100%;
          -webkit-mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
          -webkit-mask-size: 7100% 100%;
          animation: maskOut 0.7s steps(70) forwards;
        }

        .mask-btn:hover {
          animation: maskIn 0.7s steps(70) forwards;
        }

        @keyframes maskIn {
          from { -webkit-mask-position: 0 0; mask-position: 0 0; }
          to { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
        }

        @keyframes maskOut {
          from { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
          to { -webkit-mask-position: 0 0; mask-position: 0 0; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;