import { PRODUCTS } from '@/data/products'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/Button'

export function SignatureProducts() {
  const featured = PRODUCTS.filter((p) => p.featured)

  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Signature Blends"
            title="Our most-loved teas"
            description="Ten blends built from one CTC base — from the everyday classic to spiced, herbal and citrus infusions."
          />
          <div className="hidden shrink-0 md:block">
            <Button href="/teas" variant="secondary">
              View all teas
            </Button>
          </div>
        </div>

        <div className="mt-14 -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {featured.map((product, i) => (
            <div key={product.id} className="w-[70vw] shrink-0 snap-start sm:w-auto">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Button href="/teas" variant="secondary" className="w-full justify-center">
            View all teas
          </Button>
        </div>
      </Container>
    </section>
  )
}
