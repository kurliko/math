import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Pojedyncza lekcja",
    description: "Idealna na sprawdzenie, czy do siebie pasujemy.",
    price: "80",
    unit: "/ 60 min",
    highlight: false,
    features: [
      "60 minut zajęć indywidualnych",
      "Dowolny temat",
      "Materialy po zajeciach",
      "Online",
    ],
  },
  {
    name: "Pakiet 4 lekcji",
    description: "Najpopularniejszy wybor. Regularnosc to klucz.",
    price: "300",
    unit: "/ 4 x 60 min",
    highlight: true,
    badge: "Najpopularniejszy",
    features: [
      "4 lekcje po 60 minut",
      "75 zł za lekcje zamiast 80 zł",
      "Stały termin co tydzień",
      "Materialy i zadania domowe",
      "Kontakt miedzy zajęciami",
    ],
  },
  {
    name: "Pakiet 8 lekcji",
    description: "Intensywne przygotowanie przed matura.",
    price: "560",
    unit: "/ 8 x 60 min",
    highlight: false,
    features: [
      "8 lekcji po 60 minut",
      "70 zł za lekcje zamiast 80 zł",
      "Elastyczny grafik",
      "Materiały i zadania domowe",
      "Stały kontakt",
      "Próbna matura z omówieniem",
    ],
  },
]

const extras = [
  {
    name: "Matura Rozszerzona",
    note: "+20 zl do ceny lekcji",
  },
  {
    name: "Lekcja 90 min",
    note: "+50% ceny standardowej",
  },
  {
    name: "Zajecia w weekend",
    note: "Bez dodatkowych oplat",
  },
]

export function Pricing() {
  return (
    <section id="cennik" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Cennik
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Przejrzyste ceny, bez ukrytych kosztów
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Pierwsza lekcja zapoznawcza (30 min) jest całkowicie bezpłatna.
            Sprawdź, czy moje metody Ci odpowiadają.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-8 transition-shadow hover:shadow-lg ${
                plan.highlight
                  ? "border-primary bg-card shadow-md"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    <Sparkles className="h-3 w-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-lg text-muted-foreground">zl</span>
                <span className="ml-1 text-sm text-muted-foreground">{plan.unit}</span>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Wybierz pakiet
              </a>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="mt-12 rounded-xl border border-border bg-card p-8">
          <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
            Dodatkowe informacje
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {extras.map((extra) => (
              <div key={extra.name} className="flex items-center gap-3">
                <div className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">{extra.name}</p>
                  <p className="text-xs text-muted-foreground">{extra.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
