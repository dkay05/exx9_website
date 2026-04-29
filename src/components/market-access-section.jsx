import { TrendingUp, Gem, BarChart3, Fuel, ArrowRight } from "lucide-react"

const markets = [
  {
    icon: TrendingUp,
    title: "Forex",
    description: "60+ pairs. Tightest spreads on EURUSD, GBPUSD, USDJPY. No widening at the open.",
    accent: "from-emerald-500 to-green-500",
    ticker: "EURUSD",
    price: "1.0834",
    change: "+0.34%",
    up: true,
  },
  {
    icon: Gem,
    title: "Metals",
    description: "Gold and silver in micro-lots. Same desk our institutional clients trade on.",
    accent: "from-amber-400 to-emerald-500",
    ticker: "XAUUSD",
    price: "2,031.22",
    change: "-0.12%",
    up: false,
  },
  {
    icon: BarChart3,
    title: "Indices",
    description: "US30, NAS100, DAX, FTSE — extended hours when CNN won't even pick up.",
    accent: "from-teal-500 to-emerald-500",
    ticker: "NAS100",
    price: "17,841",
    change: "+0.62%",
    up: true,
  },
  {
    icon: Fuel,
    title: "Commodities",
    description: "Crude, natural gas, soft commodities. Real contract sizes, not chopped-up CFDs.",
    accent: "from-lime-500 to-emerald-500",
    ticker: "USOIL",
    price: "78.42",
    change: "-0.84%",
    up: false,
  },
]

export function MarketAccessSection() {
  return (
    <section className="section-pad bg-background">
      <div className="section-container">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">What you can trade</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground mb-4 leading-tight">
            Five markets. One login. <br className="hidden sm:block" />
            <span className="brand-gradient-text">No re-quoting nonsense.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We list the pairs and contracts our own traders actually use day-to-day —
            then quote them at the same price the bank quotes us, plus a thin commission you can see on every fill.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((m, i) => (
            <div
              key={i}
              className="group relative feature-card hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${m.accent} flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform`}>
                  <m.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-semibold text-muted-foreground tracking-wider">{m.ticker}</div>
                  <div className="text-sm font-bold tabular-nums text-foreground">{m.price}</div>
                  <div className={`text-[11px] font-semibold tabular-nums ${m.up ? "text-emerald-600" : "text-rose-500"}`}>{m.change}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.description}</p>
              <div className="inline-flex items-center text-sm font-semibold text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                See spreads <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Trader voice strip */}
        <div className="mt-14 rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 text-white font-bold flex items-center justify-center shrink-0">
            DK
          </div>
          <div className="flex-1">
            <p className="text-foreground italic leading-relaxed">
              "I switched after a broker filled my GBPJPY 8 pips off quote during BoE. VXNESS hasn't done that to me once in 14 months. That's the whole pitch."
            </p>
            <div className="mt-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Daniel K.</span> — Swing trader, 7 years in markets
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
