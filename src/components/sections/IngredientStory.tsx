import { getProductBySlug } from '@/data/products'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IngredientCard } from '@/components/product/IngredientCard'
import { Reveal } from '@/components/ui/Reveal'

const INGREDIENT_NOTES: { slug: string; note: string }[] = [
  { slug: 'ginger', note: 'Fresh ginger, blended for warmth and bite.' },
  { slug: 'cardamom', note: 'Whole green cardamom, for natural fragrance.' },
  { slug: 'lemongrass', note: 'Citrus-herbal lemongrass, for a lighter cup.' },
  { slug: 'tulsi', note: 'Holy basil leaves, for a calmer brew.' },
  { slug: 'mint', note: 'Cooling mint, for an invigorating lift.' },
  { slug: 'lemon', note: 'Natural lemon, for a bright, citrus finish.' },
]

export function IngredientStory() {
  const cards = INGREDIENT_NOTES.map(({ slug, note }) => ({
    product: getProductBySlug(slug)!,
    note,
  })).filter((c) => c.product)

  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Flavour, Naturally"
          title="Built from real ingredients"
          description="Each flavoured blend starts with our CTC base and one clear ingredient — nothing hiding behind it."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {cards.map(({ product, note }, i) => (
            <Reveal key={product.id} delay={i * 60}>
              <IngredientCard product={product} note={note} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
