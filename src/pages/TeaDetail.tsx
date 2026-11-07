import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { QuantitySelector } from '@/components/product/QuantitySelector'
import { RelatedProducts } from '@/components/product/RelatedProducts'
import { Reveal } from '@/components/ui/Reveal'
import { useCart } from '@/context/CartContext'

export default function TeaDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  const { addItem, openDrawer } = useCart()
  const [size, setSize] = useState(product?.sizes[0]?.value ?? '')
  const [qty, setQty] = useState(1)
  const [justAdded, setJustAdded] = useState(false)

  if (!product) {
    return <Navigate to="/teas" replace />
  }

  const related = getRelatedProducts(product)

  const handleAddToCart = () => {
    addItem(product, size || product.sizes[0].value, qty)
    setJustAdded(true)
    openDrawer()
    window.setTimeout(() => setJustAdded(false), 1500)
  }

  const enquiryMessage = `Hi Tea Break Chai, I'd like to know more about ${product.fullName} (${size || product.sizes[0].label}).`

  return (
    <div className="pb-24 pt-32 md:pt-36">
      <Seo
        title={`${product.fullName} | Tea Break Chai`}
        description={product.shortDescription}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.fullName,
          description: product.description,
          category: product.category,
          brand: { '@type': 'Brand', name: 'Tea Break Chai' },
          image: `https://www.teabreakchai.com${product.image}`,
        }}
      />
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Our Teas', href: '/teas' },
            { label: product.name },
          ]}
        />

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="mx-auto aspect-[3/4] w-full max-w-md overflow-hidden bg-charcoal-100 lg:max-w-none">
              <img
                src={product.image}
                alt={`${product.fullName} pouch, premium CTC tea, 100g`}
                className="h-full w-full object-cover"
                width={307}
                height={512}
                ref={(el) => el?.setAttribute('fetchpriority', 'high')}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <Badge tone="light">{product.category}</Badge>
              <h1 className="mt-4 font-display text-4xl text-charcoal-900 md:text-5xl">
                {product.fullName}
              </h1>
              <p className="mt-2 text-sm uppercase tracking-widest text-tea-brown">
                {product.tagline}
              </p>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-charcoal-600 md:text-lg">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {product.flavourProfile.map((f) => (
                <Badge key={f} tone="outline">
                  {f}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col gap-5 border-y border-charcoal-900/10 py-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-charcoal-400">
                  Size
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setSize(s.value)}
                      className={`border px-4 py-2 text-sm transition-colors ${
                        (size || product.sizes[0].value) === s.value
                          ? 'border-charcoal-900 bg-charcoal-900 text-cream-50'
                          : 'border-charcoal-900/20 text-charcoal-700 hover:border-charcoal-900'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-charcoal-400">
                  Quantity
                </span>
                <div className="mt-2">
                  <QuantitySelector value={qty} onChange={setQty} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={handleAddToCart} size="lg" className="flex-1 justify-center">
                {justAdded ? 'Added to selection ✓' : 'Add to Cart'}
              </Button>
              <Button
                href={`/contact?subject=${encodeURIComponent('General enquiry')}&message=${encodeURIComponent(enquiryMessage)}`}
                variant="secondary"
                size="lg"
                className="flex-1 justify-center"
              >
                Enquire
              </Button>
            </div>
            <p className="text-xs text-charcoal-400">
              Pricing and availability confirmed at enquiry — Tea Break Chai currently fulfils
              retail and wholesale orders directly.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl text-charcoal-900">About this tea</h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-500 md:text-base">
                {product.description}
              </p>
              <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-charcoal-400">
                Ingredients
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-charcoal-600">
                {product.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-tea-green" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h2 className="font-display text-2xl text-charcoal-900">How to brew</h2>
              <ol className="mt-4 flex flex-col gap-5">
                {product.brewing.map((step, i) => (
                  <li key={step.label} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal-900/20 font-display text-sm text-charcoal-700">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-charcoal-900">{step.label}</p>
                      <p className="text-sm leading-relaxed text-charcoal-500">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <RelatedProducts products={related} />
        </div>
      </Container>
    </div>
  )
}
