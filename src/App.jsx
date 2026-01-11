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
import LeadPopup from './components/LeadPopup' 
import LoadingScreen from './components/LoadingScreen' // New component
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This simulates the loading period (2.5 seconds)
    // You can adjust this to match your assets' loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container relative overflow-x-clip">
      {/* Loading Overlay */}
      {isLoading && <LoadingScreen />}

      {/* Header section with stacked banners */}
      <header className="sticky top-0 z-[2000] w-full flex flex-col">
        <UrgencyBanner />
        <section>
          <Navbar />
        </section>
      </header>
      
      <main className="relative">
        <Hero />
        <PromoBanner />

        <section id="beat-store" className="main-content">
          <BeatPlayer />
        </section>
        
        <Licensing />
        <About />
        <Contact /> 
      </main>

      <footer className="bg-white text-black py-8 border-t border-black/10 text-center">
        <p className="text-[10px] font-black tracking-widest uppercase opacity-40">
          &copy; {new Date().getFullYear()} KINGSFORDBEATS | All Rights Reserved
        </p>
      </footer>

      <LeadPopup />
    </div>
  )
}

export default App