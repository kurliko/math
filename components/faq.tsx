"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Jak wygłąda pierwsza lekcja zapoznawcza?",
    answer:
      "Pierwsza lekcja trwa 30 minut i jest całkowicie bezpłatna. Podczas niej poznajemy sie, omawiam Twoj aktualny poziom i cele, a nastepnie proponuje plan nauki dopasowany do Twoich potrzeb.",
  },
  {
    question: "Czy zajecia odbywaja sie online czy stacjonarnie?",
    answer:
      "Zajecia odbywają się online przez Discord, Google Meet lub Zoom, z wykorzystaniem tablicy interaktywnej Miro.",
  },
  {
    question: "Jak czesto powinny odbywać się zajęcia?",
    answer:
      "Dla najlepszych efektów rekomenduję minimum 1 lekcje tygodniowo. Przed matura warto zwiekszyć częstotliwość do 2-3 razy w tygodniu. Wszystko zależy od Twojego poziomu i celów.",
  },
  {
    question: "Co jeśli muszę odwołać lekcję?",
    answer:
      "Lekcje można odwołać bezpłatnie z minimum 24-godzinnym wyprzedzeniem. W przypadku późniejszego odwołania lekcja jest rozliczana normalnie, chyba że to wypadek losowy.",
  },
  {
    question: "Czy pomagasz również z bieżącym materiałem szkolnym?",
    answer:
      "Oczywiście! Pomagam zarówno w przygotowaniu do matury, jak i z bieżącymi tematami szkolnymi, sprawdzianami, kartkówkami i zadaniami domowymi.",
  },
  {
    question: "Jak mogę zapłacic za zajęcia?",
    answer:
      "Akceptuję przelew bankowy oraz BLIK. Platność za pakiet odbywa sie z góry, za pojedyncze lekcję - przed zajęciami.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Czesto zadawane pytania
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
