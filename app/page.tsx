// app/page.tsx
'use client'

import dynamic from 'next/dynamic'
import { Hero } from '@/components/site/hero'

const Navbar = dynamic(
  () => import('@/components/site/navbar').then(mod => mod.Navbar),
  { 
    ssr: false,
    loading: () => <div className="h-16 animate-pulse bg-secondary/10" />
  }
)

const TrustedBy = dynamic(
  () => import('@/components/site/trusted-by').then(mod => mod.TrustedBy),
  { 
    ssr: false,
    loading: () => <div className="h-32 animate-pulse bg-secondary/10 rounded-2xl" />
  }
)

const Services = dynamic(
  () => import('@/components/site/services').then(mod => mod.Services),
  { 
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-secondary/10 rounded-2xl" />
  }
)

const CaseStudies = dynamic(
  () => import('@/components/site/case-studies').then(mod => mod.CaseStudies),
  { 
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-secondary/10 rounded-2xl" />
  }
)

const Process = dynamic(
  () => import('@/components/site/process').then(mod => mod.Process),
  { 
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-secondary/10 rounded-2xl" />
  }
)

const WhyUs = dynamic(
  () => import('@/components/site/why-us').then(mod => mod.WhyUs),
  { 
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-secondary/10 rounded-2xl" />
  }
)

const Testimonials = dynamic(
  () => import('@/components/site/testimonials').then(mod => mod.Testimonials),
  { 
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-secondary/10 rounded-2xl" />
  }
)

const FaQ = dynamic(
  () => import('@/components/site/faq').then(mod => mod.Faq),
  { 
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-secondary/10 rounded-2xl" />
  }
)

const Contact = dynamic(
  () => import('@/components/site/contact').then(mod => mod.Contact),
  { 
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-secondary/10 rounded-2xl" />
  }
)

const Footer = dynamic(
  () => import('@/components/site/footer').then(mod => mod.Footer),
  { 
    ssr: false,
    loading: () => <div className="h-32 animate-pulse bg-secondary/10" />
  }
)

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyUs />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FaQ />
      <Contact />
      <Footer />
    </main>
  )
}