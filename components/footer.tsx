export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold text-primary">
            O-Korki
          </span>
          <span className="text-sm text-muted-foreground">
            &copy; {year}. Wszelkie prawa zastrzezone.
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <a
            href="#o-mnie"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            O mnie
          </a>
          <a
            href="#cennik"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Cennik
          </a>
          <a
            href="#kontakt"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </footer>
  )
}
