import { ShieldCheck, CheckCircle2, Award, Clock } from "lucide-react";

const bullets = [
  { icon: ShieldCheck, title: "Bezpieczeństwo przede wszystkim", desc: "Pracujemy zgodnie z normami i stosujemy certyfikowane podzespoły." },
  { icon: Award, title: "Gwarancja jakości", desc: "Na wykonane prace udzielamy pisemnej gwarancji." },
  { icon: Clock, title: "Szybkie terminy", desc: "Dopasowujemy się do Twojego harmonogramu, działamy sprawnie." },
  { icon: CheckCircle2, title: "Tysiące zadowolonych klientów", desc: "Realizacje w całym regionie i doskonałe opinie." },
];

export default function WhyUs() {
  return (
    <section id="dlaczego-my" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Dlaczego warto wybrać Voltix?</h2>
          <p className="mt-3 text-slate-300 max-w-xl">Łączymy doświadczenie z nowoczesnymi technologiami. Pracujemy czysto, terminowo i transparentnie.</p>

          <div className="mt-8 grid gap-4">
            {bullets.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-amber-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white font-semibold">{title}</p>
                  <p className="text-slate-300/90 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-14 bg-gradient-to-br from-amber-400/10 to-cyan-400/10 blur-3xl rounded-[2rem]" />
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10">
              <img src="/electric-panel.jpg" alt="Rozdzielnia elektryczna" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
