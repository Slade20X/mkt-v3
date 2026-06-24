'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, TrendingUp, DollarSign, Users, BarChart3, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"
import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

const caseStudies = [
  {
    id: 1,
    company: "Lumen Retail",
    industry: "E-commerce",
    summary: "Przebudowaliśmy sklep internetowy i skalowaliśmy płatną akwizycję na Google i Meta.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    metrics: [
      { value: "+182%", label: "Wzrost przychodu", icon: DollarSign },
      { value: "3.4x", label: "ROAS", icon: TrendingUp },
      { value: "+156%", label: "Konwersje", icon: BarChart3 },
    ],
    tags: ["Meta Ads", "Google Ads", "E-commerce"],
    result: "Zwiększyliśmy przychód o 182%",
  },
  {
    id: 2,
    company: "Harbor Financial",
    industry: "B2B Services",
    summary: "Program SEO i content marketingu, który uczynił organiczny wyszukiwarkę głównym kanałem leadów.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    metrics: [
      { value: "+260%", label: "Leadów organicznych", icon: Users },
      { value: "#1", label: "Pozycje w Google", icon: BarChart3 },
      { value: "4.2x", label: "ROI", icon: TrendingUp },
    ],
    tags: ["SEO", "Content Marketing", "B2B"],
    result: "260% wzrost leadów z wyszukiwarki",
  },
  {
    id: 3,
    company: "Vela Health",
    industry: "Healthcare",
    summary: "Nowa marka i zoptymalizowana pod konwersje strona, która zwiększyła zapytania kwalifikowane.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    metrics: [
      { value: "+94%", label: "Wsp. konwersji", icon: TrendingUp },
      { value: "$2.1M", label: "Pipeline", icon: DollarSign },
      { value: "+120%", label: "Ruch na stronie", icon: Users },
    ],
    tags: ["Branding", "Web Design", "Healthcare"],
    result: "94% wzrost konwersji na stronie",
  },
  {
    id: 4,
    company: "Nexus Tech",
    industry: "SaaS / Software",
    summary: "Kompleksowa strategia growth marketingowa, która przyspieszyła pozyskiwanie klientów B2B.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    metrics: [
      { value: "+312%", label: "Nowi klienci", icon: Users },
      { value: "5.1x", label: "ROAS", icon: TrendingUp },
      { value: "-42%", label: "CAC", icon: DollarSign },
    ],
    tags: ["SaaS", "B2B", "Growth Marketing"],
    result: "312% wzrost liczby nowych klientów",
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 md:py-32 overflow-hidden">
      {/* Tło */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
        <div className="absolute -top-40 -right-40 size-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Realizacje"
          title="Prawdziwe rezultaty dla prawdziwych firm"
          description="Mierzymy nasz sukces przez pryzmat przychodów i leadów, które generujemy dla naszych klientów."
        />

        {/* 4 równe karty */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((cs, index) => (
            <Reveal key={cs.id} delay={index * 0.1}>
              <Link
                href={`/case-studies/${cs.id}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full"
              >
                {/* Zdjęcie */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={`${cs.company} - case study`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badge na zdjęciu */}
                  <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-medium text-white">
                    {cs.industry}
                  </div>
                  
                  {/* Nazwa firmy na zdjęciu */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-1.5">
                      {cs.company}
                      <ArrowUpRight className="size-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                  </div>
                </div>

                {/* Treść pod zdjęciem */}
                <div className="p-5">
                  {/* Opis */}
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {cs.summary}
                  </p>

                  {/* Rezultat */}
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600">
                    <TrendingUp className="size-3" />
                    {cs.result}
                  </div>

                  {/* Tagi */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cs.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metryki */}
                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
                    {cs.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <metric.icon className="mx-auto size-3.5 text-primary/60" />
                        <div className="mt-0.5 text-sm font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-[9px] font-medium text-muted-foreground leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}