import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { Product } from '@/types/product'
import { Badge } from '@/components/ui/Badge'
import { useCart } from '@/context/CartContext'

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem, openDrawer } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.sizes[0].value, 1)
    setJustAdded(true)
    openDrawer()
    window.setTimeout(() => setJustAdded(false), 1500)
  }

  return (
    <Link
      to={`/teas/${product.slug}`}
      className="group flex w-full shrink-0 snap-start flex-col"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal-100">
        <img
          src={product.image}
          alt={`${product.fullName} pouch, premium CTC tea`}
          loading="lazy"
          width={307}
          height={512}
          className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-4 top-4">
          <Badge tone="light">{product.category}</Badge>
        </div>
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-cream-50 px-4 py-2 text-xs font-medium uppercase tracking-wide text-charcoal-900 opacity-0 shadow-lg transition-all duration-300 ease-premium hover:bg-brass hover:text-cream-50 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
        >
          {justAdded ? 'Added ✓' : 'Quick add'}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 pt-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl text-charcoal-900">{product.name}</h3>
          <span className="text-xs uppercase tracking-wide text-charcoal-400">
            {product.sizes[0].label}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-charcoal-500">{product.shortDescription}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-charcoal-800">
          View tea
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  )
}
