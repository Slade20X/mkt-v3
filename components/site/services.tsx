'use client'

import {
  BarChart3,
  Search,
  LayoutTemplate,
  Palette,
  Bot,
  PenLine,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    description: 'Skuteczne kampanie w Meta Ads, Google Ads i innych kanałach płatnych.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: Search,
    title: 'SEO & Content',
    description: 'Zwiększ widoczność w wyszukiwarkach i przyciągnij organiczny ruch.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: LayoutTemplate,
    title: 'Web Design',
    description: 'Nowoczesne, wysokokonwertujące strony i landing page.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Zbuduj silną markę, która wyróżni Cię na tle konkurencji.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Zautomatyzuj powtarzalne zadania i usprawnij procesy.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: PenLine,
    title: 'Content Creation',
    description: 'Twórz treści, które przyciągają uwagę i generują leady.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Nasze usługi"
          title="Wszystko, czego potrzebujesz do wzrostu"
          description="Kompleksowy zespół growthowy pod jednym dachem."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i}>
              <div
                className={cn(
                  'group relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl',
                  `hover:bg-gradient-to-br ${service.gradient}`
                )}
              >
                {/* Ikona */}
                <div className="relative mb-5 flex size-14 items-center justify-center rounded-xl border border-border bg-background/50 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/5">
                  <service.icon className="size-7 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                </div>

                {/* Treść */}
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Link */}
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-2">
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}