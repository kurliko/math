"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Jak wyglada pierwsza lekcja zapoznawcza?",
    answer:
      "Pierwsza lekcja trwa 30 minut i jest calkowicie bezplatna. Podczas niej poznajemy sie, omawiam Twoj aktualny poziom i cele, a nastepnie proponuje plan nauki dopasowany do Twoich potrzeb.",
  },
  {
    question: "Czy zajecia odbywaja sie online czy stacjonarnie?",
    answer:
      "Oferuje oba formaty! Zajecia online odbywaja sie przez Zoom lub Google Meet z wykorzystaniem tablicy interaktywnej. Zajecia stacjonarne prowadze na terenie Warszawy.",
  },
  {
    question: "Jak czesto powinny odbywac sie zajecia?",
    answer:
      "Dla najlepszych efektow rekomenduje minimum 1 lekcje tygodniowo. Przed matura warto zwiekszyc czestotliwosc do 2-3 razy w tygodniu. Wszystko zalezy od Twojego poziomu i celow.",
  },
  {
    question: "Co jesli musz odwolac lekcje?",
    answer:
      "Lekcje mozna odwolac bezplatnie z minimum 24-godzinnym wyprzedzeniem. W przypadku pozniejszego odwolania lekcja jest rozliczana normalnie, chyba ze wypadek losowy.",
  },
  {
    question: "Czy pomagasz rowniez z biezacym materialem szkolnym?",
    answer:
      "Oczywiscie! Pomagam zarowno w przygotowaniu do matury, jak i z biezacymi tematami szkolnymi, sprawdzianami, kartkowkami i zadaniami domowymi.",
  },
  {
    question: "Jak moge zaplacic za zajecia?",
    answer:
      "Akceptuje przelew bankowy, BLIK oraz gotowke (przy zajeciach stacjonarnych). Platnosc za pakiet odbywa sie z gory, za pojedyncze lekcje - po zajeciach.",
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
