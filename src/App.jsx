// src/App.jsx
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import UrgencyBanner from './components/UrgencyBanner'
import Hero from './components/Hero'
import PromoBanner from './components/PromoBanner'
import BeatPlayer from './components/BeatPlayer'
import Licensing from './components/Licensing'
import About from './components/About'
import Contact from './components/Contact' 
import SubscriptionPopup from './components/SubscriptionPopup' // <-- Imported here
import LoadingScreen from './components/LoadingScreen' 
import './App.css'

// src/App.jsx
// ... keep your imports exactly the same ...

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container relative overflow-x-clip">
      {/* Loading Overlay */}
      {isLoading && <LoadingScreen />}

      <header className="sticky top-0 z-[2000] w-full">
        <div className="flex flex-col">
          <div><Navbar /></div> 
        </div>
      </header>
      
      <main className="relative">
        <Hero />
        <PromoBanner />

        <section id="beats" className="main-content">
          <BeatPlayer />
        </section>
        
        <Licensing />
        <About />
        <Contact /> 
        
        {/* MOVED HERE: Mounts safely inside the relative main container */}
        <SubscriptionPopup />
      </main>

      <footer className="bg-white text-black py-8 border-t border-black/10 text-center">
        <p className="text-[10px] font-black tracking-widest uppercase opacity-40">
          &copy; {new Date().getFullYear()} KINGSFORDBEATS | All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

export default App;