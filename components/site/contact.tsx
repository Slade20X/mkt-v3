'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/reveal'
import { FacebookIcon } from '@/components/site/brand-icons'

const fields = [
  { id: 'name', label: 'Imię', type: 'text', placeholder: 'Jan Kowalski', required: true, full: false },
  { id: 'email', label: 'E-mail', type: 'email', placeholder: 'jan@firma.pl', required: true, full: false },
  { id: 'phone', label: 'Telefon', type: 'tel', placeholder: '+48 123 456 789', required: false, full: false },
  { id: 'company', label: 'Firma', type: 'text', placeholder: 'Nazwa firmy', required: false, full: false },
]

const contactInfo = [
  { icon: Mail, label: 'E-mail', value: 'mktlab.biuro@gmail.com', href: 'mailto:mktlab.biuro@gmail.com' },
  { icon: Phone, label: 'Telefon', value: '+48 883 758 310', href: 'tel:+48883758310' },
  { icon: MapPin, label: 'Biuro', value: 'Gdańsk', href: null },
  { icon: Clock, label: 'Godziny', value: 'Pon–Pt, 7:00–17:00', href: null },
]

const socials = [
  { 
    icon: FacebookIcon, 
    label: 'Facebook', 
    href: 'https://www.facebook.com/profile.php?id=61590845034777&locale=pl_PL' 
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      company: formData.get('company') || '',
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Wystąpił błąd podczas wysyłania')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas wysyłania')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(50% 60% at 100% 0%, oklch(0.87 0.19 135 / 0.12), transparent 70%)',
            }}
          />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: info */}
            <div className="flex flex-col">
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Kontakt
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Porozmawiajmy o wzroście Twojej marki
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  Wypełnij formularz, a w ciągu 24 godzin nasz zespół się z tobą skontaktuje z bezpłatną analizą Twoich możliwości.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <ul className="mt-10 flex flex-col gap-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon
                    const content = (
                      <span className="flex items-center gap-4">
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-muted text-primary">
                          <Icon className="size-5" />
                        </span>
                        <span>
                          <span className="block text-xs text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="block font-medium text-foreground">
                            {item.value}
                          </span>
                        </span>
                      </span>
                    )
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="inline-block transition-opacity hover:opacity-80"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    )
                  })}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex items-center gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Odwiedź nasz profil na ${social.label}`}
                        className="grid size-11 place-items-center rounded-xl border border-border bg-muted text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/15 hover:text-primary"
                      >
                        <Icon className="size-5" />
                      </a>
                    )
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                {submitted ? (
                  <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                    <span className="grid size-14 place-items-center rounded-full bg-primary/15 text-primary">
                      <CheckCircle2 className="size-7" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">
                      Dziękujemy za wiadomość!
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                      Odezwiemy się w ciągu 24 godzin z bezpłatną analizą.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      {fields.map((field) => (
                        <div key={field.id} className="flex flex-col gap-2">
                          <label
                            htmlFor={field.id}
                            className="text-sm font-medium"
                          >
                            {field.label}
                            {field.required && (
                              <span className="text-primary"> *</span>
                            )}
                          </label>
                          <input
                            id={field.id}
                            name={field.id}
                            type={field.type}
                            required={field.required}
                            placeholder={field.placeholder}
                            className="h-11 rounded-lg border border-input bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                            disabled={loading}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Wiadomość<span className="text-primary"> *</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Opowiedz nam krótko o swoim biznesie i celach…"
                        className="resize-none rounded-lg border border-input bg-card px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                        disabled={loading}
                      />
                    </div>

                    {error && (
                      <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="mt-1 h-12 w-full text-sm font-semibold"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 size-4 animate-spin" />
                          Wysyłanie...
                        </>
                      ) : (
                        <>
                          Wyślij wiadomość
                          <ArrowRight className="size-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Wysyłając formularz akceptujesz politykę prywatności.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}