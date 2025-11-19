import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient and glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_80%_-20%,rgba(251,191,36,.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_120%,rgba(56,189,248,.12),transparent)]" />

      {/* Spline 3D object */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Nowoczesne instalacje elektryczne dla Twojego domu i firmy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-slate-300 max-w-xl"
          >
            Projektujemy, montujemy i serwisujemy instalacje z dbałością o bezpieczeństwo, estetykę i oszczędność energii. Postaw na jakość i niezawodność.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl bg-amber-400 text-slate-900 px-6 py-3 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)] hover:shadow-[0_12px_36px_rgba(251,191,36,0.45)] transition-all">
              Bezpłatna wycena
            </a>
            <a href="#uslugi" className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
              Poznaj usługi
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 grid grid-cols-3 gap-6 text-center"
          >
            {[
              { label: 'Realizacji', value: '850+' },
              { label: 'Lat doświadczenia', value: '12' },
              { label: 'Czas reakcji', value: '<24h' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="text-xs text-slate-300/80">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-16 rounded-[2rem] bg-gradient-to-b from-amber-400/10 to-cyan-400/10 blur-3xl" />
          <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-sm">
            <div className="aspect-[4/3] w-full rounded-2xl bg-black/40 ring-1 ring-white/10 overflow-hidden">
              <img src="/electrician-hero.jpg" alt="Elektryk przy pracy" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-black/40 ring-1 ring-white/10 p-3">
                <p className="text-sm text-slate-200">Pomiary</p>
              </div>
              <div className="rounded-xl bg-black/40 ring-1 ring-white/10 p-3">
                <p className="text-sm text-slate-200">Smart Home</p>
              </div>
              <div className="rounded-xl bg-black/40 ring-1 ring-white/10 p-3">
                <p className="text-sm text-slate-200">Serwis 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
