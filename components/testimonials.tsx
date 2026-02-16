import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Kasia M.",
    role: "Matura rozszerzona 2025",
    rating: 5,
    text: "Dzieki korepetycjom zdalam mature rozszerzona na 86%! Przed zajeciami matematyka byla moim najslabszym przedmiotem. Polecam kazdemu!",
    result: "86%",
  },
  {
    name: "Tomek W.",
    role: "Matura podstawowa 2025",
    rating: 5,
    text: "Super podejscie do ucznia. Tlumaczy cierpliwie i na rozne sposoby, az sie zrozumie. Atmosfera na zajeciach jest bardzo luźna i przyjazna.",
    result: "92%",
  },
  {
    name: "Anna K.",
    role: "Mama uczennicy",
    rating: 5,
    text: "Corka zaczela rozumiec matematyke i nawet ja polubila. Oceny w szkole poszly w gore z 2 na 4. Bardzo polecam jako rodzic!",
    result: "+2 oceny",
  },
  {
    name: "Piotr D.",
    role: "Matura rozszerzona 2024",
    rating: 5,
    text: "Najlepsze korepetycje jakie mialem. Materialy po zajeciach mega pomagaly w powtorkach. Dostalem sie na wymarzone studia!",
    result: "78%",
  },
]

export function Testimonials() {
  return (
    <section id="opinie" className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Opinie
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Co mowia moi uczniowie?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Wyniki moich uczniow mowia same za siebie. Oto kilka opinii
            od osob, z ktorymi mialem przyjemnosc pracowac.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
              {/* Stars */}
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground">
                {`"${t.text}"`}
              </p>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="rounded-md bg-primary/10 px-3 py-1">
                  <span className="font-display text-sm font-bold text-primary">
                    {t.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
