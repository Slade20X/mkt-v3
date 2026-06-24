'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Ile kosztują usługi MKT Lab?',
    a: 'Nasze pakiety zaczynają się od 3 900 zł/mies. (START), 7 900 zł/mies. (GROWTH) i 14 900 zł/mies. (PRO). Dla większych firm przygotowujemy indywidualną wycenę w pakiecie ENTERPRISE. Każdy pakiet można modyfikować pod potrzeby klienta. Zapraszamy na bezpłatną konsultację!',
  },
  {
    q: 'Jakie usługi oferuje MKT Lab?',
    a: 'Oferujemy kompleksowe usługi marketingowe: Performance Marketing (kampanie Google Ads, Facebook Ads), SEO (pozycjonowanie stron), Social Media (Facebook, Instagram, LinkedIn, TikTok) oraz Branding (strategia marki, identyfikacja wizualna). Działamy w Gdańsku i zdalnie w całej Polsce.',
  },
  {
    q: 'Jak długo trwa wdrożenie kampanii?',
    a: 'Pierwsze efekty są widoczne już po 2-4 tygodniach od rozpoczęcia kampanii. Pełna optymalizacja i wdrożenie strategii trwa około 3 miesięcy. Każdy projekt jest inny - dostosowujemy tempo do Twoich potrzeb i budżetu.',
  },
  {
    q: 'Czy oferujecie bezpłatną konsultację?',
    a: 'Tak! Oferujemy bezpłatną konsultację, podczas której poznamy Twoją firmę, przeanalizujemy obecną sytuację marketingową i zaproponujemy pierwsze kroki. To doskonała okazja, aby sprawdzić, czy możemy Ci pomóc.',
  },
  {
    q: 'Jakie wyniki mogę oczekiwać?',
    a: 'Nasi klienci osiągają średnio +420% ROAS w kampaniach performance, +450% wzrost ruchu organicznego dzięki SEO, 89% wzrost rozpoznawalności marki oraz 96% retencji klientów. Wyniki zależą od branży i zaangażowania, ale zawsze dążymy do maksymalizacji ROI.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="FAQ"
          title="Pytania, Odpowiedzi"
          description="Najczęsciej zadawane pytania."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium">{faq.q}</span>
                    <Plus
                      className={cn(
                        'size-5 shrink-0 text-primary transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-5 leading-relaxed text-muted-foreground">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
