import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { LeafIcon } from '@/components/ui/Icons'

const REASONS = [
  {
    title: 'Carefully selected leaf',
    description: 'A CTC base chosen for body and colour, not just cost.',
  },
  {
    title: 'Real flavour, real ingredients',
    description: 'Ginger, cardamom, tulsi and the rest — blended in, not simulated.',
  },
  {
    title: 'Small-batch freshness',
    description: 'Blended and packed in batches sized to move quickly, not sit in storage.',
  },
  {
    title: 'Consistent, every pouch',
    description: 'The cup you liked last time is the cup you get this time.',
  },
]

export function WhyTeaBreak() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Tea Break"
          title="A tea brand that sweats the small pour."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 90}>
              <div className="flex flex-col items-start gap-4 border-t border-charcoal-900/15 pt-6">
                <LeafIcon className="h-6 w-6 text-tea-green" />
                <h3 className="font-display text-xl text-charcoal-900">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal-500">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-16 text-center text-xs uppercase tracking-widest text-charcoal-400">
            An ISO 22000:2005 certified company
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
