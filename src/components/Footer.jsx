function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="text-white font-semibold">Blackpool Electrician</h4>
            <p className="mt-2 text-slate-400">Reliable, certified electricians covering Blackpool and the Fylde Coast.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Services</h4>
            <ul className="mt-2 space-y-1 text-slate-400">
              <li>Rewires & Upgrades</li>
              <li>Consumer Units</li>
              <li>Lighting & Sockets</li>
              <li>EICR / Landlord Reports</li>
              <li>EV Chargers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Areas Covered</h4>
            <ul className="mt-2 space-y-1 text-slate-400">
              <li>Blackpool</li>
              <li>St Annes</li>
              <li>Lytham</li>
              <li>Poulton-le-Fylde</li>
              <li>Fleetwood</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <p className="mt-2 text-slate-400">Phone: +44 1253 123456</p>
            <p className="text-slate-400">Email: hello@example.com</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Blackpool Electrician. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
