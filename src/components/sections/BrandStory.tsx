import masalaImg from '@/assets/products/masala.webp'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export function BrandStory() {
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-widest2 text-tea-brown">
              Our Story
            </span>
            <h2 className="mt-6 font-display text-3xl leading-[1.15] text-charcoal-900 sm:text-4xl">
              From the first pour to the last sip, Tea Break Chai is made for everyday moments.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal-500">
              We started with one question: what makes a cup of tea worth pausing for? The
              answer turned into a small range of CTC blends — plain and flavoured — built for
              the breaks that punctuate an ordinary day.
            </p>
            <div className="mt-8">
              <Button href="/our-story" variant="secondary">
                Read our story
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150} className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden">
              <img
                src={masalaImg}
                alt="Tea Break Masala pouch styled with whole spices"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
