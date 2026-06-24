'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

const logos = [
  { name: 'Northwind', src: '/logos/meta.png' },
  { name: 'Lumen', src: '/logos/google.png' },
  { name: 'Apex', src: '/logos/google2.png' },
  { name: 'Quanta', src: '/logos/linked.png' },
  { name: 'Vertex', src: '/logos/allegro.png' },
  { name: 'Halcyon', src: '/logos/tiktok.png' },
]

export function TrustedBy() {
  return (
    <section className="relative border-y border-border py-12">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Współpracujemy z najlepszymi narzędziami reklamowymi na świecie
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 gap-y-8 sm:grid-cols-6">
          {logos.map((logo, index) => (
            <Reveal key={logo.name} delay={index * 0.1}>
              <div className="flex items-center justify-center transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="h-16 w-auto max-w-[160px] object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}