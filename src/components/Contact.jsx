import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(251,191,36,.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skontaktuj się z nami</h2>
          <p className="mt-3 text-slate-300">Zadzwoń lub napisz – odpowiemy jeszcze dziś.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-slate-900">
              <Phone className="h-5 w-5" />
            </div>
            <p className="mt-4 text-white font-semibold">Telefon</p>
            <a href="tel:+48123456789" className="text-slate-300 hover:text-white transition-colors">+48 123 456 789</a>
          </div>

          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-slate-900">
              <Mail className="h-5 w-5" />
            </div>
            <p className="mt-4 text-white font-semibold">E-mail</p>
            <a href="mailto:kontakt@voltix.pl" className="text-slate-300 hover:text-white transition-colors">kontakt@voltix.pl</a>
          </div>

          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-slate-900">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="mt-4 text-white font-semibold">Adres</p>
            <p className="text-slate-300">ul. Energetyczna 10, 00-000 Warszawa</p>
          </div>
        </div>

        <div className="mt-10">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 grid md:grid-cols-2 gap-4">
            <input className="rounded-xl bg-black/30 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-amber-400/40" placeholder="Imię i nazwisko" />
            <input className="rounded-xl bg-black/30 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-amber-400/40" placeholder="E-mail" />
            <input className="md:col-span-2 rounded-xl bg-black/30 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-amber-400/40" placeholder="Temat" />
            <textarea rows="4" className="md:col-span-2 rounded-xl bg-black/30 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-amber-400/40" placeholder="Wiadomość" />
            <div className="md:col-span-2 flex justify-end">
              <button className="inline-flex items-center justify-center rounded-xl bg-amber-400 text-slate-900 px-6 py-3 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)] hover:shadow-[0_12px_36px_rgba(251,191,36,0.45)] transition-all">
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
