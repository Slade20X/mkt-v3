'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Strona główna', href: '#' },
  { label: 'Usługi', href: '#services' },
  { label: 'Realizacje', href: '#case-studies' },
  { label: 'Cennik', href: '#pricing' },
  { label: 'O nas', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition-all duration-300 md:px-6',
          scrolled &&
            'border-border bg-background/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]',
        )}
      >
        {/* Logo - po lewej */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="size-8 object-contain"
          />
          <span className="text-lg font-semibold tracking-tight">MKT Lab</span>
        </a>

        {/* Linki nawigacyjne - wyśrodkowane */}
        <div className="hidden items-center gap-1 lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Przyciski - po prawej */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#contact"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_24px_-4px_rgba(16,185,129,0.6)]"
          >
            Umów rozmowę
          </a>
        </div>

        {/* Przycisk menu mobilnego */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Menu mobilne */}
      {open && (
        <div className="absolute inset-x-4 top-20 rounded-2xl border border-border bg-popover/95 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Umów rozmowę
            </a>
          </div>
        </div>
      )}
    </header>
  )
}