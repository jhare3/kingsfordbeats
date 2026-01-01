// src/App.jsx
import Navbar from './components/Navbar'
import UrgencyBanner from './components/UrgencyBanner'
import Hero from './components/Hero'
import BeatPlayer from './components/BeatPlayer'
import Licensing from './components/Licensing'
import Contact from './components/Contact' // New Import
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <UrgencyBanner />
      <Hero />
      <main id="beat-store" className="main-content">
        <BeatPlayer />
      </main>
      <Licensing />
      
      {/* Replaced old footer with the new Contact component */}
      <Contact /> 

      <footer className="bg-white text-black py-8 border-t border-black/10 text-center">
        <p className="text-[10px] font-black tracking-widest uppercase opacity-40">
          &copy; {new Date().getFullYear()} KINGSFORDBEATS | All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

export default App