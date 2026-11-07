import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:26px_26px]" />
      </div>
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.1] text-cream-50 sm:text-5xl md:text-6xl">
            Make time for tea.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-md text-base leading-relaxed text-cream-300 md:text-lg">
            Ten blends, one CTC base, no reason to wait for a special occasion.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/teas" variant="light" size="lg">
              Explore Our Teas
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
