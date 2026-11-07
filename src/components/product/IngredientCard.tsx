import { Link } from 'react-router-dom'
import type { Product } from '@/types/product'

export function IngredientCard({ product, note }: { product: Product; note: string }) {
  return (
    <Link
      to={`/teas/${product.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-charcoal-800"
    >
      <img
        src={product.image}
        alt=""
        loading="lazy"
        style={{ objectPosition: product.ingredientFocus }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/10 to-transparent" />
      <div className="relative flex flex-col gap-1 p-5">
        <h3 className="font-display text-xl text-cream-50">{product.name}</h3>
        <p className="text-xs leading-relaxed text-cream-300">{note}</p>
      </div>
    </Link>
  )
}
