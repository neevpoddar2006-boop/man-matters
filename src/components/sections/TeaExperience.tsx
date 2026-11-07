import cardamomImg from '@/assets/products/cardamom.webp'
import classicImg from '@/assets/products/classic.webp'
import masalaImg from '@/assets/products/masala.webp'
import mintImg from '@/assets/products/mint.webp'
import gingerImg from '@/assets/products/ginger.webp'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const EXPERIENCE = [
  {
    index: '01',
    label: 'Aroma',
    description: 'Whole cardamom and fresh spice, blended in — not just brewed for effect.',
    image: cardamomImg,
    position: '15% 78%',
  },
  {
    index: '02',
    label: 'Taste',
    description: 'A full-bodied CTC base with real depth, built to carry milk, sugar or neither.',
    image: classicImg,
    position: '20% 75%',
  },
  {
    index: '03',
    label: 'Strength',
    description: 'Bold enough for a proper masala chai, gentle enough for a quiet green tea.',
    image: masalaImg,
    position: '22% 72%',
  },
  {
    index: '04',
    label: 'Freshness',
    description: 'Small-batch blending keeps every pouch tasting like it was made recently — because it was.',
    image: mintImg,
    position: '18% 74%',
  },
  {
    index: '05',
    label: 'Everyday Ritual',
    description: 'The first cup, the afternoon one, the one after dinner — tea, made for all of them.',
    image: gingerImg,
    position: '15% 80%',
  },
]

export function TeaExperience() {
  return (
    <section className="bg-charcoal-950 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Tea Experience"
          title="Every cup, considered."
          description="Five things we pay attention to in every blend, long before it reaches the pouch."
          tone="light"
        />

        <div className="mt-16 flex flex-col divide-y divide-cream-50/10 border-t border-cream-50/10">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="group grid grid-cols-[auto_1fr] items-center gap-6 py-7 md:grid-cols-[4rem_10rem_1fr] md:gap-10">
                <span className="font-display text-2xl text-cream-500 md:text-3xl">
                  {item.index}
                </span>
                <div className="order-3 col-span-2 md:order-2 md:col-span-1">
                  <h3 className="font-display text-2xl text-cream-50 md:text-3xl">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-cream-300 md:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="order-2 row-span-1 h-20 w-16 shrink-0 overflow-hidden rounded-sm md:order-3 md:ml-auto md:h-24 md:w-20">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    style={{ objectPosition: item.position }}
                    className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
