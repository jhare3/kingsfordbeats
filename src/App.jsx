// src/App.jsx
import Navbar from './components/Navbar'
import UrgencyBanner from './components/UrgencyBanner'
import Hero from './components/Hero'
import PromoBanner from './components/PromoBanner'
import BeatPlayer from './components/BeatPlayer'
import Licensing from './components/Licensing'
import About from './components/About' // 1. Add this import
import Contact from './components/Contact' 
import LeadPopup from './components/LeadPopup' 
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* 1. Global Navigation & Top Bar */}
      <Navbar />
      <UrgencyBanner />
      
      {/* 2. Above-the-fold Content */}
      <Hero />
      
      {/* 3. New Notification Banner (Deals & Search Tip) */}
      <PromoBanner />

      {/* 4. Main Beat Store Interface */}
      <main id="beat-store" className="main-content">
        <BeatPlayer />
      </main>
      
      {/* 5. Informational & Interaction Sections */}
      <Licensing />
      <About />
      <Contact /> 

      {/* 6. Footer */}
      <footer className="bg-white text-black py-8 border-t border-black/10 text-center">
        <p className="text-[10px] font-black tracking-widest uppercase opacity-40">
          &copy; {new Date().getFullYear()} KINGSFORDBEATS | All Rights Reserved
        </p>
      </footer>

      {/* 7. Logic Components (Fixed position, timed pop-up) */}
      <LeadPopup />
    </div>
  )
}

export default App