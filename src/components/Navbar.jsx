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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button 
              className="bg-transparent text-white border-2 border-[#e2aa64] py-2 px-6 text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-all hover:bg-white hover:text-black rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
              onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}
            >
              Why Kingsford?
          </button>
        </div>

        {/* Hamburger Button */}
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
          <ul className="flex flex-col items-start px-8 py-10 gap-6">
            <li className="w-full border-b border-white/5 pb-4">
              <a href="#" onClick={closeMenu} className="text-white text-xl font-bold uppercase tracking-widest block w-full hover:text-red-600">Home</a>
            </li>
            <li className="w-full border-b border-white/5 pb-4">
              <a href="#beat-store" onClick={closeMenu} className="text-white text-xl font-bold uppercase tracking-widest block w-full hover:text-red-600">Beats</a>
            </li>
            <li className="w-full border-b border-white/5 pb-4">
              <a href="#licensing" onClick={closeMenu} className="text-white text-xl font-bold uppercase tracking-widest block w-full hover:text-red-600">Licensing</a>
            </li>
            <li className="w-full border-b border-white/5 pb-4">
              <a href="#contact" onClick={closeMenu} className="text-white text-xl font-bold uppercase tracking-widest block w-full hover:text-red-600">Contact</a>
            </li>
            <li className="w-full pt-4">
              <button 
                className="w-full bg-red-600 text-white py-4 text-xs font-bold uppercase tracking-widest"
                onClick={() => { closeMenu(); document.getElementById('about').scrollIntoView({behavior: 'smooth'}) }}
              >
                Why Kingsford?
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;