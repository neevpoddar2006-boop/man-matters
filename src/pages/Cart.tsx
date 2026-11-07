import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { QuantitySelector } from '@/components/product/QuantitySelector'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { items, removeItem, updateQty, clear, totalQty } = useCart()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const summary = items
      .map((i) => `- ${i.name} (${i.size}) × ${i.qty}`)
      .join('\n')
    const message = `Hi Tea Break Chai, I'd like to enquire about:\n${summary}\n\nName: ${name}\nEmail: ${email}`
    navigate(`/contact?subject=${encodeURIComponent('General enquiry')}&message=${encodeURIComponent(message)}`)
  }

  return (
    <div className="pb-24 pt-32 md:pt-36">
      <Seo
        title="Your Selection | Tea Break Chai"
        description="Review the teas you're interested in and send Tea Break Chai an enquiry."
      />
      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Your Selection' }]} />
        <h1 className="mt-6 font-display text-4xl text-charcoal-900 md:text-5xl">
          Your selection
        </h1>

        {items.length === 0 ? (
          <div className="mt-16 flex flex-col items-start gap-5">
            <p className="text-charcoal-500">You haven&rsquo;t added any teas yet.</p>
            <Button href="/teas">Browse our teas</Button>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <ul className="flex flex-col divide-y divide-charcoal-900/10 border-y border-charcoal-900/10">
              {items.map((item) => (
                <li key={`${item.slug}-${item.size}`} className="flex gap-5 py-6">
                  <img
                    src={item.image}
                    alt=""
                    className="h-28 w-20 shrink-0 object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-xl text-charcoal-900">{item.name}</p>
                      <p className="text-xs uppercase tracking-wide text-charcoal-400">
                        {item.size}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug, item.size)}
                        className="mt-2 text-xs uppercase tracking-wide text-charcoal-400 underline-offset-2 hover:text-charcoal-800 hover:underline"
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

            <div className="flex flex-col gap-6 bg-cream-100 p-6 md:p-8">
              <div>
                <h2 className="font-display text-2xl text-charcoal-900">
                  Send as an enquiry
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  {totalQty} {totalQty === 1 ? 'item' : 'items'} selected. We&rsquo;ll confirm
                  pricing and availability with you directly.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cart-name" className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
                    Name
                  </label>
                  <input
                    id="cart-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-charcoal-900/20 bg-cream-50 px-4 py-3 text-sm focus:border-charcoal-900 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cart-email" className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
                    Email
                  </label>
                  <input
                    id="cart-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-charcoal-900/20 bg-cream-50 px-4 py-3 text-sm focus:border-charcoal-900 focus:outline-none"
                  />
                </div>
                <Button type="submit" size="lg" className="justify-center">
                  Continue to enquiry
                </Button>
                <button
                  type="button"
                  onClick={clear}
                  className="text-xs uppercase tracking-widest text-charcoal-400 hover:text-charcoal-700"
                >
                  Clear selection
                </button>
              </form>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
