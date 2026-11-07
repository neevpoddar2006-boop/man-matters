import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '@/types/product'

export interface CartItem {
  slug: string
  name: string
  image: string
  size: string
  qty: number
}

interface CartContextValue {
  items: CartItem[]
  addItem: (product: Product, size: string, qty?: number) => void
  removeItem: (slug: string, size: string) => void
  updateQty: (slug: string, size: string, qty: number) => void
  clear: () => void
  totalQty: number
  isDrawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

const STORAGE_KEY = 'teabreak-cart'

function readStoredCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => readStoredCart())
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // storage unavailable — cart still works for this session
    }
  }, [items])

  const addItem = useCallback((product: Product, size: string, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === product.slug && i.size === size)
      if (existing) {
        return prev.map((i) =>
          i.slug === product.slug && i.size === size ? { ...i, qty: i.qty + qty } : i,
        )
      }
      return [
        ...prev,
        { slug: product.slug, name: product.fullName, image: product.image, size, qty },
      ]
    })
  }, [])

  const removeItem = useCallback((slug: string, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size)))
  }, [])

  const updateQty = useCallback((slug: string, size: string, qty: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.slug === slug && i.size === size ? { ...i, qty: Math.max(1, qty) } : i,
      ),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const totalQty = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQty,
    clear,
    totalQty,
    isDrawerOpen,
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
