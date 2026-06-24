'use client'

import Image from 'next/image'
import { Globe, AtSign, MessageCircle, Send } from 'lucide-react'

const columns = [
  {
    title: 'USŁUGI',
    links: ['Performance Marketing', 'SEO', 'Website Design', 'Branding', 'AI Automation'],
  },
  {
    title: 'FIRMA',
    links: ['O nas', 'Realizacje', 'Proces', 'Cennik', 'Kontakt'],
  },
  {
    title: 'KONTAKT',
    links: ['mktlab.biuro@gmail.com', 'Tel. +48 883 758 310', 'Gdańsk, Polska'],
  },
]

const socials = [Globe, AtSign, MessageCircle, Send]

export function Footer() {
  return (
    <footer id="about" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-3">
            <a href="#" className="flex items-center gap-3">
              {/* Logo z obrazkiem */}
              <Image
                src="/logo.png" // Ścieżka do Twojego logo
                alt="MKT Lab - Logo"
                width={32}
                height={32}
                className="size-8 object-contain"
              />
              <span className="text-lg font-semibold tracking-tight">
                MKT Lab
              </span>
            </a>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              NIP: 9571203913
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MKT Lab. Wszystkie prawa zastrzeżone.
          </p>

          <div className="text-sm text-muted-foreground">
            mktlab.biuro@gmail.com
          </div>
        </div>
      </div>
    </footer>
  )
}