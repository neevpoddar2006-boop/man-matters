import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ProductGrid } from '@/components/product/ProductGrid'

export default function Teas() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category')

  const filtered = useMemo(() => {
    if (!activeCategory) return PRODUCTS
    return PRODUCTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const setCategory = (category: string | null) => {
    if (!category) {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  return (
    <div className="pb-24 pt-32 md:pt-36">
      <Seo
        title="Our Teas | Tea Break Chai"
        description="Browse the full Tea Break Chai range — Classic CTC, spiced chai, herbal botanicals and citrus, light blends."
      />
      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Our Teas' }]} />

        <div className="mt-6 max-w-2xl">
          <h1 className="font-display text-5xl leading-tight text-charcoal-900 md:text-6xl">
            Our Teas
          </h1>
          <p className="mt-5 text-base leading-relaxed text-charcoal-500 md:text-lg">
            Ten blends built from one premium CTC base — classic, spiced, herbal and citrus.
            Every pouch is 100g, made for a proper pot or a single quiet cup.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-charcoal-900/10 pb-8">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !activeCategory
                ? 'bg-charcoal-900 text-cream-50'
                : 'bg-charcoal-900/5 text-charcoal-600 hover:bg-charcoal-900/10'
            }`}
          >
            All Teas
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-charcoal-900 text-cream-50'
                  : 'bg-charcoal-900/5 text-charcoal-600 hover:bg-charcoal-900/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <ProductGrid products={filtered} />
        </div>
      </Container>
    </div>
  )
}
