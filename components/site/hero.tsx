'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp, Users, Star } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const trust = [
  { value: '109+', label: 'Klientów', target: 109, suffix: '+' },
  { value: '1M+', label: 'Dochodu klientów', target: 1000000, suffix: 'M+' },
  { value: '95%', label: 'Retencji klientów', target: 95, suffix: '%' },
  { value: '5+', label: 'Krajów', target: 5, suffix: '+' },
]

function AnimatedCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 1500, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOut * target)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, target])

  const formatValue = (value: number) => {
    if (target >= 1000000) {
      return (value / 1000000).toFixed(1)
    }
    return value.toString()
  }

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-2xl font-semibold text-foreground tabular-nums">
        {isVisible ? formatValue(count) : '0'}{suffix}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

export function Hero() {
  return (
    <section 
      className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
      aria-labelledby="hero-title"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 size-[420px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">


          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            Marketing, który <br className="hidden sm:block" />
            generuje <span className="text-primary">realny wzrost.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Pomagamy ambitnym markom zwiększać sprzedaż dzięki strategii, kreacji i skutecznym kampaniom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_32px_-4px_rgba(16,185,129,0.6)]"
              aria-label="Umów bezpłatną rozmowę z naszym ekspertem"
            >
              Umów rozmowę
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
              aria-label="Zobacz nasze realizacje i case studies"
            >
              Zobacz realizacje
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
            aria-label="Statystyki firmy"
          >
            {trust.map((t) => (
              <AnimatedCounter
                key={t.label}
                target={t.target}
                suffix={t.suffix}
                label={t.label}
              />
            ))}
          </motion.div>
        </div>

        {/* dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[2.5rem] bg-primary/15 blur-[120px]" />
          <div className="overflow-hidden rounded-2xl border border-border bg-card glow-emerald">
            <div className="flex items-center gap-1.5 border-b border-border bg-popover px-4 py-3">
              <span className="size-3 rounded-full bg-muted-foreground/30" />
              <span className="size-3 rounded-full bg-muted-foreground/30" />
              <span className="size-3 rounded-full bg-muted-foreground/30" />
            </div>
            <Image
              src="/dashboard-mockup.webp"
              alt="Dashboard MKT Lab - przykładowy panel analityczny z wykresami wzrostu przychodów i ROAS"
              width={1200}
              height={750}
              priority
              className="h-auto w-full"
              title="Panel analityczny MKT Lab"
            />
          </div>

          {/* floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -left-4 top-1/4 hidden items-center gap-3 rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur-xl md:flex"
            aria-label="Średni wzrost przychodów klientów"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <TrendingUp className="size-5" aria-hidden="true" />
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold">+312%</p>
              <p className="text-xs text-muted-foreground">Średni wzrost przychodów</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="absolute -right-4 top-1/2 hidden items-center gap-3 rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur-xl md:flex"
            aria-label="Średni ROAS dla klientów"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Users className="size-5" aria-hidden="true" />
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold">8.4x ROAS</p>
              <p className="text-xs text-muted-foreground">Średni ROAS klientów</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur-xl"
          >
            <div className="flex" aria-label="Ocena 5.0 na podstawie 100+ opinii">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              Ocena 5.0 przez 100+ klientów
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}