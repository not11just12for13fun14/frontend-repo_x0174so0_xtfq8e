import { ShieldCheck, ThumbsUp, Clock, Star } from "lucide-react"

function WhyChooseUs() {
  const items = [
    { icon: ShieldCheck, title: "Fully Qualified & Insured", desc: "NAPIT registered, Part P compliant and fully insured for your peace of mind." },
    { icon: Clock, title: "On Time, Every Time", desc: "We respect your time and keep you updated from booking to completion." },
    { icon: ThumbsUp, title: "Honest Pricing", desc: "Clear, upfront quotes with no surprises. We only recommend what you need." },
    { icon: Star, title: "5-Star Service", desc: "Local and trusted with excellent reviews across Blackpool and the Fylde." },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Choose Us</h2>
          <p className="mt-3 text-slate-600">We aim to be the most reliable electricians in Blackpool – responsive, tidy and professional.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <Icon className="text-emerald-500" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
