import { useCart } from '@/context/CartContext'
import { CloseIcon } from '@/components/ui/Icons'
import { Button } from '@/components/ui/Button'
import { QuantitySelector } from '@/components/product/QuantitySelector'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQty, totalQty } = useCart()

  useLockBodyScroll(isDrawerOpen)

  if (!isDrawerOpen) return null

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeDrawer}
        className="absolute inset-0 bg-charcoal-950/50 backdrop-blur-[2px] animate-fadeIn"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream-50 shadow-2xl animate-fadeIn">
        <div className="flex items-center justify-between border-b border-charcoal-900/10 px-6 py-6">
          <h2 className="font-display text-2xl text-charcoal-900">
            Your selection {totalQty > 0 && `(${totalQty})`}
          </h2>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close cart"
            className="rounded-full p-2 text-charcoal-700 transition-colors hover:bg-charcoal-900/5"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <p className="text-charcoal-500">Your tea selection is empty.</p>
              <Button href="/teas" variant="secondary" onClick={closeDrawer}>
                Browse our teas
              </Button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-charcoal-900/10">
              {items.map((item) => (
                <li key={`${item.slug}-${item.size}`} className="flex gap-4 py-5">
                  <img
                    src={item.image}
                    alt=""
                    className="h-24 w-[4.5rem] shrink-0 object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-display text-lg leading-tight text-charcoal-900">
                          {item.name}
                        </p>
                        <p className="text-xs uppercase tracking-wide text-charcoal-400">
                          {item.size}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug, item.size)}
                        className="text-xs uppercase tracking-wide text-charcoal-400 underline-offset-2 hover:text-charcoal-800 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                    <QuantitySelector
                      value={item.qty}
                      onChange={(q) => updateQty(item.slug, item.size, q)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-charcoal-900/10 px-6 py-6">
            <p className="mb-4 text-sm text-charcoal-500">
              We&rsquo;ll confirm availability and pricing with you directly — this list carries
              over to a ready-made enquiry.
            </p>
            <Button href="/cart" onClick={closeDrawer} className="w-full justify-center">
              Review &amp; send enquiry
            </Button>
          </div>
        )}
      </aside>
    </div>
  )
}
