import { ArrowDown, BookOpen, GraduationCap, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/10" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-20">
        {/* Text content */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary w-fit">
            <GraduationCap className="h-4 w-4" />
            <span>Matura 2025/2026</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Matematyka na <span className="text-primary">wyciągnięcie ręki</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Profesjonalne korepetycje z matematyki na poziomie matury podstawowej
            i rozszerzonej. Indywidualne podejście, sprawdzone metody
            i gwarantowane rezultaty.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <BookOpen className="h-4 w-4" />
              Umów darmową lekcję
            </a>
            <a
              href="#cennik"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Zobacz cennik
            </a>
          </div>

          {/* Stats */}
          <div className="mt-4 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-foreground">400+</span>
              <span className="text-sm text-muted-foreground">Lekcji</span>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-foreground">95%</span>
              <span className="text-sm text-muted-foreground">Zdawalność</span>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-display text-2xl font-bold text-foreground">5.0</span>
                <Star className="h-4 w-4 fill-accent text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Ocena</span>
            </div>
          </div>
        </div>

        {/* Profile photo placeholder */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl bg-muted shadow-lg lg:h-96 lg:w-96">
              {/* PLACEHOLDER: Replace with your profile photo */}
              <img 
                src="/prof.jpeg" 
                alt="Zdjęcie profilowe - korepetytor matematyki" 
                className="h-full w-full object-cover" 
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg border border-border">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                  <BookOpen className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">3+ lat</p>
                  <p className="text-xs text-muted-foreground">doświadczenia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#o-mnie"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground"
        aria-label="Przewin nizej"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
