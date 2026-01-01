// src/App.jsx
import Navbar from './components/Navbar'
import UrgencyBanner from './components/UrgencyBanner' // New Import
import Hero from './components/Hero'
import BeatPlayer from './components/BeatPlayer'
import Licensing from './components/Licensing'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <UrgencyBanner /> {/* Placed below Nav */}
      <Hero />
      <main id="beat-store" className="main-content">
        <BeatPlayer />
      </main>
      <Licensing />
      <footer id="contact">
        <p>&copy; {new Date().getFullYear()} KINGSFORDBEATS</p>
      </footer>
    </div>
  )
}

export default App