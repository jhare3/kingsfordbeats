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

  // iOS Safari specific scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const maskBtnContainer = "relative w-[150px] h-[48px] overflow-hidden border-2 border-[#e2aa64] transition-all duration-500 rounded-lg group";
  const maskBtnUnderText = "absolute inset-0 flex items-center justify-center text-black bg-white text-[10px] font-bold uppercase tracking-widest";
  const maskBtnActual = "mask-btn absolute inset-0 w-[101%] h-full flex items-center justify-center bg-black text-white text-[10px] font-bold uppercase tracking-widest cursor-pointer z-10 border-none outline-none";

  return (
    <>
      <nav 
        className={`relative w-full transition-all duration-500 ease-in-out z-[1001] 
        ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-md py-3 shadow-xl' : 'bg-[#050505] py-5'}`}
      >
        <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center px-6 md:px-8">
          
          <div className="text-xl md:text-3xl font-black tracking-tighter text-white z-[1100]">
            KINGSFORD<span className="text-[#e2aa64] uppercase">BEATS</span>
          </div>
          
          <ul className="hidden md:flex list-none gap-8">
            {['Home', 'Beats', 'Licensing', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-white no-underline text-xs font-bold uppercase tracking-widest hover:text-[#e2aa64] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

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

          <button 
            className="md:hidden flex flex-col justify-center items-center z-[3100] w-10 h-10 space-y-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Break-out Mobile Menu */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-[#050505] transition-all duration-500 ease-in-out md:hidden flex items-center justify-center z-[9999] ${
          isOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
        }`}
      >
        <button 
          className="absolute top-10 right-8 text-white text-xs font-bold uppercase tracking-widest z-[10000]"
          onClick={closeMenu}
        >
          Close ✕
        </button>

        <ul className="flex flex-col items-center gap-10">
          {['Home', 'Beats', 'Licensing', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-white text-4xl font-black uppercase tracking-tighter hover:text-[#e2aa64] transition-all"
                onClick={closeMenu}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="mt-6">
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

      <style jsx>{`
        .mask-btn {
          mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
          mask-size: 7100% 100%;
          -webkit-mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
          -webkit-mask-size: 7100% 100%;
          animation: maskOut 0.7s steps(70) forwards;
        }
        .mask-btn:hover { animation: maskIn 0.7s steps(70) forwards; }
        @keyframes maskIn {
          from { -webkit-mask-position: 0 0; mask-position: 0 0; }
          to { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
        }
        @keyframes maskOut {
          from { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
          to { -webkit-mask-position: 0 0; mask-position: 0 0; }
        }
      `}</style>
    </>
  );
};

export default Navbar;