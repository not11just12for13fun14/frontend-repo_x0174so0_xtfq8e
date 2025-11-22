import { Phone, Zap, ShieldCheck } from "lucide-react"

function Hero() {
  const phone = "+44 1253 123456" // placeholder number; user can change
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(900px_500px_at_10%_10%,#60a5fa,transparent),radial-gradient(700px_400px_at_90%_20%,#34d399,transparent)]" />

      {/* Top bar */}
      <div className="border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-sm text-white/90">
          <p className="hidden sm:block">Local, qualified and reliable electricians in Blackpool</p>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 font-medium text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-md transition-colors">
            <Phone size={16} /> Call {phone}
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-3 py-1 rounded-full mb-4">
              <ShieldCheck size={14} /> NAPIT Registered • Part P Compliant
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Trusted Electrician in Blackpool
            </h1>
            <p className="mt-5 text-lg text-slate-200 leading-relaxed">
              Fast, friendly and fully insured electricians covering Blackpool and the Fylde Coast. From emergency call-outs to full rewires, we handle domestic and commercial work with care and precision.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 transition">
                <Phone /> Call Now
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold ring-1 ring-white/20 transition">
                Get a Free Quote
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 text-slate-200">
              <div className="flex items-center gap-3">
                <Zap className="text-emerald-400" />
                <span>Emergency call-outs</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-emerald-400" />
                <span>Domestic & commercial</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-emerald-400" />
                <span>EV chargers & rewires</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-emerald-400" />
                <span>Testing & inspections</span>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 to-emerald-400/30 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center">
                  <div className="text-center p-6">
                    <Zap size={48} className="mx-auto text-emerald-400" />
                    <p className="mt-3 text-slate-200 font-medium">Quality workmanship • Honest pricing • On-time arrival</p>
                    <p className="mt-1 text-slate-400 text-sm">Photos of recent installations can be added here</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                  <div className="rounded-lg bg-white/5 p-3">EICR Reports</div>
                  <div className="rounded-lg bg-white/5 p-3">Consumer Units</div>
                  <div className="rounded-lg bg-white/5 p-3">Garden Lighting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
