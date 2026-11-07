import classicImg from '@/assets/products/classic.webp'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ArrowRight } from '@/components/ui/Icons'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 pt-32 md:pt-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:22px_22px]" />
      </div>

      <Container className="relative grid grid-cols-1 items-center gap-14 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-0">
        <div className="flex flex-col items-start gap-8 animate-fadeUp">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-brass-light">
            Fresh &amp; Rich · Premium CTC Tea
          </span>
          <h1 className="max-w-xl font-display text-5xl leading-[1.05] text-cream-50 sm:text-6xl lg:text-[4.2rem]">
            A better cup starts with better tea.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-cream-300 md:text-lg">
            Tea Break Chai blends strong, aromatic CTC tea in small batches — classic and
            flavoured — for the pause you take between everything else.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/teas" size="lg">
              Shop Tea
            </Button>
            <Button href="/our-story" variant="ghost" size="lg">
              Explore Our Story
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <dl className="mt-6 grid grid-cols-3 gap-6 border-t border-cream-50/10 pt-6 sm:gap-10">
            <div>
              <dt className="text-xs uppercase tracking-widest text-cream-400">Blends</dt>
              <dd className="mt-1 font-display text-2xl text-cream-50">10</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-cream-400">Base</dt>
              <dd className="mt-1 font-display text-2xl text-cream-50">CTC</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-cream-400">Pack</dt>
              <dd className="mt-1 font-display text-2xl text-cream-50">100g</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xs animate-fadeIn lg:max-w-sm">
          <div
            className="absolute inset-0 -z-10 scale-110 rounded-full bg-[radial-gradient(circle,rgba(201,168,105,0.25)_0%,transparent_70%)] blur-2xl"
            aria-hidden="true"
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
            <img
              src={classicImg}
              alt="Tea Break Classic CTC tea pouch with loose tea leaves and a cup of brewed tea"
              className="h-full w-full object-cover"
              width={307}
              height={512}
              ref={(el) => el?.setAttribute('fetchpriority', 'high')}
            />
          </div>
          <div
            className="absolute -bottom-6 -left-6 hidden h-16 w-28 rounded-sm bg-cream-50/5 backdrop-blur-sm sm:block"
            aria-hidden="true"
          />
        </div>
      </Container>

      <div className="relative mt-16 h-16 w-full bg-gradient-to-b from-transparent to-cream-50 lg:h-24" />
    </section>
  )
}
