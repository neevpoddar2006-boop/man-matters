import type { Product } from '@/types/product'
import { ProductGrid } from './ProductGrid'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null

  return (
    <div className="flex flex-col gap-10">
      <SectionHeading eyebrow="Keep exploring" title="You might also like" />
      <ProductGrid products={products} />
    </div>
  )
}
