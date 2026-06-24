import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { TrustedBy } from '@/components/site/trusted-by'
import { Services } from '@/components/site/services'
import { WhyUs } from '@/components/site/why-us'
import { CaseStudies } from '@/components/site/case-studies'
import { Process } from '@/components/site/process'
import { Testimonials } from '@/components/site/testimonials'
import { Faq } from '@/components/site/faq'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'

export default function Page() {
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
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
