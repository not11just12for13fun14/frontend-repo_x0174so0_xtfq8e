import { Phone, MessageSquare } from "lucide-react"

function CTA() {
  const phone = "+44 1253 123456"
  return (
    <section id="contact" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Need an Electrician in Blackpool?</h2>
          <p className="mt-3 text-slate-200">Get in touch for a fast quote or to book a visit. We’re here to help.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 transition">
              <Phone /> Call {phone}
            </a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold ring-1 ring-white/20 transition">
              <MessageSquare /> Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
