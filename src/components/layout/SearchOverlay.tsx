import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '@/data/products'
import { CloseIcon } from '@/components/ui/Icons'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useLockBodyScroll(true)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.flavourProfile.some((f) => f.toLowerCase().includes(q)),
    )
  }, [query])

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-[rgba(15,12,10,0.97)] backdrop-blur-sm animate-fadeIn">
      <div className="mx-auto flex w-full max-w-content flex-1 flex-col px-6 py-8 md:px-10 md:py-16">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-brass-light">
            Search our teas
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="rounded-full p-2 text-cream-100 transition-colors hover:bg-cream-50/10"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="Ginger, cardamom, mint…"
          className="mt-8 w-full border-b border-cream-50/25 bg-transparent pb-4 font-display text-3xl text-cream-50 placeholder:text-[rgba(253,251,248,0.3)] focus:outline-none md:text-5xl"
        />

        <div className="mt-10 flex-1 overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <p className="text-cream-200">No teas matched “{query}”. Try ginger, mint or masala.</p>
          )}
          <ul className="flex flex-col divide-y divide-cream-50/10">
            {results.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/teas/${product.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={product.image}
                      alt=""
                      className="h-16 w-12 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-display text-xl text-cream-50">{product.fullName}</p>
                      <p className="text-sm text-cream-300">{product.category}</p>
                    </div>
                  </div>
                  <span className="text-cream-100 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
