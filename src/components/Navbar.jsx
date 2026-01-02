import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic to trigger the background change
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''} 
      flex items-center w-full transition-all duration-500 ease-in-out z-[1000]`}
    >
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center px-8">
        <div className="text-3xl tracking-normal">
          KINGSFORD<span className="text-red-600 uppercase">BEATS</span>
        </div>
        
        <ul className="hidden md:flex list-none gap-10">
          <li>
            <a href="#" className="text-white no-underline text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#beat-store" className="text-white no-underline text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">
              Beats
            </a>
          </li> 
          <li>
            <a href="#licensing" className="text-white no-underline text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">
              Licensing
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white no-underline text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-cta">
          <button 
              className="bg-transparent text-white border-2 border-white py-2 px-6 text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-all hover:bg-white hover:text-black rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
              onClick={() => document.getElementById('licensing').scrollIntoView({behavior: 'smooth'})}
            >
              Price List
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;