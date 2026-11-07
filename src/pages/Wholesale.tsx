import masalaImg from '@/assets/products/masala.webp'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

const POINTS = [
  {
    title: 'A focused range',
    description: 'Ten blends built from one CTC base — easy to stock, easy to explain to customers.',
  },
  {
    title: 'Consistent packaging',
    description: '100g retail pouches, clearly labelled and shelf-ready.',
  },
  {
    title: 'Direct communication',
    description: 'You deal directly with Tea Break Chai — no layers in between.',
  },
]

export default function Wholesale() {
  return (
    <div className="pb-24 pt-32 md:pt-36">
      <Seo
        title="Wholesale & Distribution | Tea Break Chai"
        description="Partner with Tea Break Chai to stock our CTC tea range at your café, store or hotel."
      />
      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Wholesale' }]} />

        <div className="mt-6 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest2 text-tea-brown">
              Wholesale &amp; Distribution
            </span>
            <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal-900 md:text-5xl">
              Bring Tea Break Chai to your counter.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal-500 md:text-lg">
              We work with cafés, hotels, offices and retail stores looking to serve or sell a
              premium, consistent cup of tea. Get in touch and we&rsquo;ll talk through what
              makes sense for your business.
            </p>
            <div className="mt-8">
              <Button href="/contact?subject=Wholesale%20%2F%20Distributor" size="lg">
                Start a wholesale enquiry
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={masalaImg}
                alt="Tea Break Masala pouch styled for wholesale presentation"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-10 border-t border-charcoal-900/10 pt-14 sm:grid-cols-3">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 100}>
              <h3 className="font-display text-xl text-charcoal-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-20 flex flex-col items-start gap-4 bg-charcoal-950 p-8 text-cream-50 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">
                Ready to stock Tea Break Chai?
              </h2>
              <p className="mt-2 max-w-md text-cream-300">
                Tell us a little about your business and we&rsquo;ll take it from there.
              </p>
            </div>
            <Button href="/contact?subject=Wholesale%20%2F%20Distributor" variant="light" size="lg">
              Get in touch
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
