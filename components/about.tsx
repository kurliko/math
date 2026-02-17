import { Award, Clock, Target, Users } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "Wykształcenie",
    description: "Jestem studentem 3 roku informatyki stosowanej na AGH. Uzyskałem wynik 100% na maturze rozszerzonej z matematyki.",
  },
  {
    icon: Users,
    title: "Indywidualne podejście",
    description: "Każdy uczeń jest inny - dostosowuję tempo i metody nauczania do Twoich potrzeb.",
  },
  {
    icon: Target,
    title: "Nastawienie na wynik",
    description: "Moim celem jest Twój sukces na maturze. Pracujemy razem nad konkretnymi wynikami.",
  },
  {
    icon: Clock,
    title: "Elastyczne terminy",
    description: "Zajecia online dają możliwośc ustalenia niezwykle elastycznego grafiku. Dostepność w szerokim przedziale godzin.",
  },
]

export function About() {
  return (
    <section id="o-mnie" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            O mnie
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Cześć, jestem Filip
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Od ponad 4 lat pomagam uczniom szkół średnich w przygotowaniu do
            matury z matematyki. Wierzę, że matematyka może być zrozumiała
            i nawet przyjemna - wystarczy odpowiednie podejście i dobry
            nauczyciel. Moi uczniowie regularnie osiagaja wyniki ponad swoje
            oczekiwania.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
