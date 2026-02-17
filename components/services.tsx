import { BookOpen, Brain, Calculator, ChartLine, Lightbulb, PenTool } from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Matura Podstawowa",
    description:
      "Kompleksowe przygotowanie do matury podstawowej. Praca nad zadaniami zamkniętymi i otwartymi, omówienie pełnego zakresu materiału.",
    topics: ["Funkcje", "Równania i nierówności", "Geometria", "Statystyka", "Ciągi"],
  },
  {
    icon: Brain,
    title: "Matura Rozszerzona",
    description:
      "Zaawansowane przygotowanie do matury rozszerzonej. Dowody, zadania optymalizacyjne, rachunek różniczkowy.",
    topics: ["Rachunek rożniczkowy", "Kombinatoryka", "Dowody", "Optymalizacja", "Liczby zespolone"],
  },
  {
    icon: ChartLine,
    title: "Nadrabianie Zaległości",
    description:
      "Pomoc w nadrabianiu materiału z bieżącego roku szkolnego. Przygotowanie do sprawdzianów i kartkówek.",
    topics: ["Bieżący materiał", "Sprawdziany", "Kartkówki", "Poprawa ocen"],
  },
  {
    icon: Lightbulb,
    title: "Zadania Problemowe",
    description:
      "Trening z zadań problemowych i olimpijskich. Rozwój logicznego myślenia i kreatywnego podejścia.",
    topics: ["Zadania konkursowe", "Olimpiady", "Logika", "Dowodzenie twierdzeń"],
  },
  {
    icon: PenTool,
    title: "Arkusze Maturalne",
    description:
      "Rozwiązywanie arkuszy maturalnych z poprzednich lat. Nauka strategii pisania egzaminu pod presją czasu.",
    topics: ["Arkusze CKE", "Strategia egzaminacyjna", "Zarządzanie czasem"],
  },
  {
    icon: BookOpen,
    title: "Konsultacje Jednorazowe",
    description:
      "Potrzebujesz pomocy z konkretnym tematem? Jedna lekcja może wystarczyć, żeby rozwiązać Twój problem.",
    topics: ["Dowolny temat", "Szybka pomoc", "Bez zobowiązań"],
  },
]

export function Services() {
  return (
    <section id="oferta" className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Oferta
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Czego mogę Cie nauczyć?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Oferuję szeroki zakres wsparcia - od podstaw po zaawansowana
            matematykę. Wybierz to, czego potrzebujesz.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
