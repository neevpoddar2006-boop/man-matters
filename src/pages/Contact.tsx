import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { SITE, CONTACT_SUBJECTS } from '@/data/site'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: searchParams.get('subject') ?? CONTACT_SUBJECTS[0],
    message: searchParams.get('message') ?? '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Wire this up to a real endpoint (email service, CRM, etc.) when one is available.
    window.setTimeout(() => setStatus('success'), 600)
  }

  const update =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <div className="pb-24 pt-32 md:pt-36">
      <Seo
        title="Contact | Tea Break Chai"
        description="Get in touch with Tea Break Chai for general enquiries, wholesale and distribution, or support."
      />
      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

        <div className="mt-6 grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest2 text-tea-brown">
              Contact
            </span>
            <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal-900 md:text-5xl">
              Let&rsquo;s talk tea.
            </h1>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-charcoal-500">
              Questions about a blend, an order, or stocking Tea Break Chai at your store or
              café — reach out and we&rsquo;ll get back to you.
            </p>

            <dl className="mt-10 flex flex-col gap-6 border-t border-charcoal-900/10 pt-8 text-sm">
              <div>
                <dt className="font-semibold uppercase tracking-widest text-charcoal-400">
                  Email
                </dt>
                <dd className="mt-1">
                  <a href={`mailto:${SITE.email}`} className="text-charcoal-800 hover:underline">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-widest text-charcoal-400">
                  Wholesale
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${SITE.wholesaleEmail}`}
                    className="text-charcoal-800 hover:underline"
                  >
                    {SITE.wholesaleEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-widest text-charcoal-400">
                  Phone
                </dt>
                <dd className="mt-1 text-charcoal-800">{SITE.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-widest text-charcoal-400">
                  Address
                </dt>
                <dd className="mt-1 text-charcoal-800">
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-cream-100 p-6 md:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-start gap-3 py-10">
                <h2 className="font-display text-2xl text-charcoal-900">Message received.</h2>
                <p className="max-w-sm text-charcoal-600">
                  Thank you for reaching out — we&rsquo;ll be in touch shortly.
                </p>
                <Button
                  variant="secondary"
                  onClick={() =>
                    setForm({ name: '', email: '', phone: '', subject: CONTACT_SUBJECTS[0], message: '' })
                  }
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={update('name')}
                      className="border border-charcoal-900/20 bg-cream-50 px-4 py-3 text-sm focus:border-charcoal-900 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      className="border border-charcoal-900/20 bg-cream-50 px-4 py-3 text-sm focus:border-charcoal-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
                      Phone <span className="normal-case text-charcoal-400">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={update('phone')}
                      className="border border-charcoal-900/20 bg-cream-50 px-4 py-3 text-sm focus:border-charcoal-900 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={update('subject')}
                      className="border border-charcoal-900/20 bg-cream-50 px-4 py-3 text-sm focus:border-charcoal-900 focus:outline-none"
                    >
                      {CONTACT_SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    className="border border-charcoal-900/20 bg-cream-50 px-4 py-3 text-sm focus:border-charcoal-900 focus:outline-none"
                  />
                </div>

                <Button type="submit" size="lg" disabled={status === 'submitting'} className="mt-2 justify-center">
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
