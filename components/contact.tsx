"use client"

import { useState, type FormEvent } from "react"
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 XXX XXX XXX",
    href: "tel:+48XXXXXXXXX",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "twoj@email.pl",
    href: "mailto:twoj@email.pl",
  },
  {
    icon: MapPin,
    label: "Lokalizacja",
    value: "Warszawa / Online",
    href: null,
  },
  {
    icon: Clock,
    label: "Dostepnosc",
    value: "Pon-Sob, 10:00-20:00",
    href: null,
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // For now, just show success state.
    // When you add PHP backend, change the form action to your PHP endpoint.
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Kontakt
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Umow sie na darmowa lekcje
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Pierwsza lekcja zapoznawcza (30 min) jest za darmo.
            Wypelnij formularz lub napisz do mnie bezposrednio.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links placeholder */}
            <div className="mt-4 rounded-xl border border-border bg-card p-6">
              <p className="mb-3 text-sm font-semibold text-foreground">
                Znajdziesz mnie rowniez na:
              </p>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "TikTok"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-lg bg-muted px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-border bg-card p-8 lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Wiadomosc wyslana!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Odpowiem najszybciej jak to mozliwe, zwykle w ciagu kilku godzin.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm font-medium text-primary hover:underline"
                >
                  Wyslij kolejna wiadomosc
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                // When ready for PHP, add: action="contact.php" method="POST"
                className="flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Imie i nazwisko
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jan Kowalski"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jan@email.pl"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Telefon (opcjonalnie)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+48 123 456 789"
                    className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="level" className="text-sm font-medium text-foreground">
                    Poziom
                  </label>
                  <select
                    id="level"
                    name="level"
                    required
                    className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Wybierz poziom...</option>
                    <option value="podstawowa">Matura podstawowa</option>
                    <option value="rozszerzona">Matura rozszerzona</option>
                    <option value="klasa-1-2">Klasa 1-2 LO</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Wiadomosc
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Opisz z czym potrzebujesz pomocy..."
                    className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  Wyslij wiadomosc
                </button>

                <p className="text-xs text-muted-foreground">
                  Odpowiadam zwykle w ciagu kilku godzin. Twoje dane sa bezpieczne
                  i nie beda udostepniane osobom trzecim.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
