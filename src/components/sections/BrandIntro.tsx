import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function BrandIntro() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest2 text-tea-brown">
              Tea Break Chai
            </span>
            <p className="mt-6 font-display text-3xl leading-[1.2] text-charcoal-900 sm:text-4xl">
              Tea is more than a beverage.
              <br />
              It&rsquo;s a pause. A conversation.
              <br />
              A ritual.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-end gap-6">
              <p className="max-w-lg text-base leading-relaxed text-charcoal-500 md:text-lg">
                Tea Break Chai was built around that idea — a cup strong enough to matter, and
                simple enough for every day. Our CTC leaves are blended in small batches, plain
                and flavoured, so the everyday tea break can be an unhurried one.
              </p>
              <p className="max-w-lg text-base leading-relaxed text-charcoal-500 md:text-lg">
                No shortcuts on the leaf, no noise around it — just a fresh, rich cup, whenever
                you need one.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
