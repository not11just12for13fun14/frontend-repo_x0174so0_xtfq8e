import { Wrench, PlugZap, ShieldCheck, Lightbulb, Car, Home } from "lucide-react"

const services = [
  { icon: PlugZap, title: "Emergency Call-Outs", desc: "Rapid response for power cuts, tripping electrics and faults." },
  { icon: Wrench, title: "Rewires & Upgrades", desc: "Partial and full rewires, consumer unit upgrades and safety improvements." },
  { icon: Lightbulb, title: "Lighting & Sockets", desc: "New installations, extra sockets, LED upgrades and smart lighting." },
  { icon: Car, title: "EV Charger Installation", desc: "Domestic and workplace EV charge points supplied and fitted." },
  { icon: ShieldCheck, title: "Testing & Inspection (EICR)", desc: "Landlord certificates, homebuyer reports and safety testing." },
  { icon: Home, title: "Landlord & Commercial", desc: "Shops, offices, HMOs and rental properties maintained and certified." },
]

function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Electrical Services in Blackpool</h2>
          <p className="mt-3 text-slate-600">Professional, friendly and fully insured. Competitive quotes with no hidden fees.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition bg-white">
              <div className="inline-flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 p-3">
                <Icon />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
