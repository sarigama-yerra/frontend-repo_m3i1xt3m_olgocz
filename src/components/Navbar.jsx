import { Menu, PhoneCall } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 shadow-lg shadow-amber-500/20 ring-1 ring-white/10 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-900" fill="currentColor" aria-hidden>
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold tracking-tight leading-none">Voltix</p>
            <p className="text-xs text-slate-300/70 leading-none mt-1">Usługi Elektryczne</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#uslugi" className="text-slate-300 hover:text-white transition-colors">Usługi</a>
          <a href="#dlaczego-my" className="text-slate-300 hover:text-white transition-colors">Dlaczego my</a>
          <a href="#kontakt" className="text-slate-300 hover:text-white transition-colors">Kontakt</a>
        </div>

        <a href="#kontakt" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-amber-400 text-slate-900 px-4 py-2 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)] hover:shadow-[0_12px_36px_rgba(251,191,36,0.45)] transition-all">
          <PhoneCall className="h-4 w-4" /> Zadzwoń
        </a>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
