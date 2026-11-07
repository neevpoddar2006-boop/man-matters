import gingerImg from '@/assets/products/ginger.webp'
import mintImg from '@/assets/products/mint.webp'
import vanillaImg from '@/assets/products/vanilla.webp'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

const MOMENTS = [
  {
    time: 'Morning',
    title: 'Something to start the day',
    description: 'Classic, Ginger or Masala — strong, warming blends for the first cup.',
    image: gingerImg,
    position: '15% 80%',
  },
  {
    time: 'Afternoon',
    title: 'A lighter kind of pause',
    description: 'Green Tea, Lemongrass or Lemon — gentler blends for a quieter break.',
    image: mintImg,
    position: '18% 74%',
  },
  {
    time: 'Evening',
    title: 'Something to wind down with',
    description: 'Tulsi, Mint or Vanilla — calmer, more fragrant blends for later in the day.',
    image: vanillaImg,
    position: '20% 76%',
  },
]

const BREWING_NOTES = [
  { label: 'Water', detail: 'Fresh, filtered water makes a noticeable difference — always start there.' },
  { label: 'Temperature', detail: 'A full boil suits our CTC and spiced blends; green tea prefers water just off the boil.' },
  { label: 'Time', detail: 'Most blends open up in 3–4 minutes. Green tea is happiest steeped shorter.' },
  { label: 'Leaves', detail: 'One heaped teaspoon per cup is a reliable starting point — adjust to taste from there.' },
]

export default function Experience() {
  return (
    <div className="pb-24 pt-32 md:pt-36">
      <Seo
        title="The Tea Experience | Tea Break Chai"
        description="How we think about aroma, taste, strength and freshness — and which Tea Break Chai blend suits each part of your day."
      />
      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Experience' }]} />
        <div className="mt-6 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-tea-brown">
            The Tea Experience
          </span>
          <h1 className="mt-4 font-display text-5xl leading-tight text-charcoal-900 md:text-6xl">
            Tea, matched to the moment.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-500 md:text-lg">
            Not every part of the day calls for the same cup. Here&rsquo;s how we think about
            matching blend to moment — and how to brew each one properly.
          </p>
        </div>
      </Container>

      <div className="mt-16 flex flex-col gap-0">
        {MOMENTS.map((moment, i) => (
          <Reveal key={moment.time}>
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-auto">
                <img
                  src={moment.image}
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: moment.position }}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-3 bg-cream-100 px-6 py-14 md:px-10 lg:px-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-tea-brown">
                  {moment.time}
                </span>
                <h2 className="font-display text-3xl text-charcoal-900">{moment.title}</h2>
                <p className="max-w-sm text-base leading-relaxed text-charcoal-600">
                  {moment.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Container className="mt-24 md:mt-32">
        <Reveal>
          <h2 className="font-display text-3xl text-charcoal-900 md:text-4xl">
            Brewing, done properly
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {BREWING_NOTES.map((note, i) => (
            <Reveal key={note.label} delay={i * 80}>
              <div className="flex gap-4 border-t border-charcoal-900/15 pt-5">
                <span className="font-display text-2xl text-charcoal-300">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-medium text-charcoal-900">{note.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-500">{note.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-16 flex flex-col items-start gap-5 border-t border-charcoal-900/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-base text-charcoal-600">
              Every product page has brewing steps specific to that blend.
            </p>
            <Button href="/teas" variant="secondary">
              Browse all teas
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
