import classicImg from '@/assets/products/classic.webp'
import cardamomImg from '@/assets/products/cardamom.webp'
import lemongrassImg from '@/assets/products/lemongrass.webp'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

const VALUES = [
  {
    title: 'Authenticity',
    description: 'A CTC base that tastes like tea, blended the way it has always been made.',
  },
  {
    title: 'Quality',
    description: 'Leaf and ingredients chosen first — everything else is built around them.',
  },
  {
    title: 'Warmth',
    description: 'Tea, at its best, is shared. We design every blend with that in mind.',
  },
  {
    title: 'Modernity',
    description: 'Traditional flavours, presented without the clutter.',
  },
]

export default function OurStory() {
  return (
    <div className="pb-24 pt-32 md:pt-36">
      <Seo
        title="Our Story | Tea Break Chai"
        description="Why Tea Break Chai exists, what we believe about tea, and how we build every blend."
      />
      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Our Story' }]} />

        <div className="mt-6 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-tea-brown">
            Our Story
          </span>
          <h1 className="mt-4 font-display text-5xl leading-tight text-charcoal-900 md:text-6xl">
            A tea brand built around the break, not just the beverage.
          </h1>
        </div>
      </Container>

      <div className="mt-16 grid grid-cols-1 gap-0 lg:grid-cols-2">
        <Reveal className="order-2 flex items-center bg-cream-100 px-6 py-16 md:px-10 lg:order-1 lg:px-16">
          <div className="max-w-md">
            <h2 className="font-display text-3xl text-charcoal-900">
              It starts with a simple belief.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-600">
              Everyone takes a tea break. Before a meeting, between chores, at the end of a long
              day — it&rsquo;s one of the few pauses built into daily life. We wanted a tea that
              was worth that pause: strong where it should be strong, gentle where it should be
              gentle, and consistent enough that you never have to think twice before making it.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100} className="order-1 aspect-[4/3] w-full overflow-hidden lg:order-2 lg:aspect-auto">
          <img
            src={classicImg}
            alt="Tea Break Classic tea pouch with brewed tea and loose leaves"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
        <Reveal className="aspect-[4/3] w-full overflow-hidden lg:aspect-auto">
          <img
            src={cardamomImg}
            alt="Tea Break Cardamom pouch styled with whole green cardamom"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={100} className="flex items-center bg-charcoal-950 px-6 py-16 text-cream-50 md:px-10 lg:px-16">
          <div className="max-w-md">
            <h2 className="font-display text-3xl text-cream-50">
              Then it became a range.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-300">
              The same CTC base runs through everything we make — it&rsquo;s just blended
              differently depending on the moment. Ginger and masala for mornings that need a
              push. Cardamom and vanilla for slower afternoons. Tulsi, mint and lemongrass for
              when a lighter cup makes more sense. Ten blends, one idea.
            </p>
          </div>
        </Reveal>
      </div>

      <Container className="mt-24 md:mt-32">
        <Reveal>
          <h2 className="max-w-lg font-display text-3xl text-charcoal-900 md:text-4xl">
            What we hold onto, blend after blend.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="border-t border-charcoal-900/15 pt-5">
                <h3 className="font-display text-xl text-charcoal-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2">
        <Reveal className="aspect-[4/3] w-full overflow-hidden lg:aspect-auto">
          <img
            src={lemongrassImg}
            alt="Tea Break Lemongrass pouch styled with fresh lemongrass"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={100} className="flex flex-col items-start justify-center gap-6 bg-cream-100 px-6 py-16 md:px-10 lg:px-16">
          <h2 className="font-display text-3xl text-charcoal-900 md:text-4xl">
            Ready for your next break?
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-charcoal-600">
            Explore the full range, or get in touch if you&rsquo;re looking to stock Tea Break
            Chai.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/teas">Shop Tea</Button>
            <Button href="/wholesale" variant="secondary">
              Wholesale enquiries
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
