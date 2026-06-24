'use client'

import { LineChart, BadgeCheck, Zap, MessageSquare, TrendingUp, Shield, Users, Rocket, CheckCircle2 } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const reasons = [
  {
    icon: LineChart,
    title: 'Strategia oparta na danych',
    description: 'Każda decyzja jest poparta analityką, testami i rzeczywistymi danymi — nigdy zgadywaniem.',
    features: ['Analiza danych w czasie rzeczywistym', 'Testy A/B', 'Dashboardy KPI'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-500',
  },
  {
    icon: BadgeCheck,
    title: 'Gwarantowany ROI',
    description: 'Koncentrujemy się na wskaźnikach, które mają znaczenie: przychodzie i zwrocie z każdej wydanej złotówki.',
    features: ['Średni ROI 4.2x', 'Optymalizacja budżetu', 'Przejrzyste raporty'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Zap,
    title: 'Błyskawiczna realizacja',
    description: 'Niewielkie, doświadczone zespoły, które wdrażają kampanie w kilka dni, nie miesięcy.',
    features: ['Start w 72h', 'Agile development', 'Szybkie iteracje'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-500',
  },
  {
    icon: MessageSquare,
    title: 'Transparentna komunikacja',
    description: 'Jasne raporty i bezpośredni kontakt ze strategami — bez tajemnic agencji.',
    features: ['Dedykowany strateg', 'Raporty tygodniowe', '24/7 wsparcie'],
    gradient: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-500',
  },
]

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Tło */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Dlaczego my"
          title="Partner wzrostu, nie dostawca"
          description="Integrujemy się z Twoim zespołem i traktujemy Twoje cele jak własne."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i}>
              <div
                className={cn(
                  'group relative h-full rounded-2xl border border-border bg-card/50 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm',
                  `hover:bg-gradient-to-br ${reason.gradient}`
                )}
              >
                <div className="flex items-start gap-4">
                  {/* Ikona */}
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-border bg-background/50 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40">
                    <reason.icon className={cn('size-7 transition-colors duration-300', reason.iconColor)} />
                  </div>

                  {/* Treść */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>

                    {/* Lista cech */}
                    <div className="mt-4 space-y-1.5">
                      {reason.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="size-3.5 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}