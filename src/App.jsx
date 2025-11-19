import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* subtle pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Voltix – Usługi Elektryczne. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-300 hover:text-white">Polityka prywatności</a>
            <a href="#kontakt" className="text-slate-300 hover:text-white">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
