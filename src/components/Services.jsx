import { Wrench, Zap, Lightbulb, Shield, Gauge, Home } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Instalacje elektryczne",
    desc: "Kompletne instalacje w domach i firmach – od projektu po odbiór.",
  },
  {
    icon: Lightbulb,
    title: "Oświetlenie i LED",
    desc: "Projekt i montaż nowoczesnego oświetlenia, systemy LED i sterowanie.",
  },
  {
    icon: Shield,
    title: "Pomiary i przeglądy",
    desc: "Profesjonalne pomiary, protokoły i okresowe przeglądy instalacji.",
  },
  { icon: Wrench, title: "Serwis 24/7", desc: "Szybkie naprawy awarii oraz wsparcie techniczne." },
  { icon: Gauge, title: "Optymalizacja energii", desc: "Doradztwo i wdrożenia zwiększające efektywność energetyczną." },
  { icon: Home, title: "Smart Home", desc: "Automatyka domowa, inteligentne gniazdka i sterowanie głosem." },
];

export default function Services() {
  return (
    <section id="uslugi" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(251,191,36,.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_80%,rgba(56,189,248,.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Nasze usługi</h2>
          <p className="mt-3 text-slate-300">Kompleksowa obsługa – od projektu, przez montaż, po serwis.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/[.07] transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400/80 to-cyan-400/80 text-slate-900 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
