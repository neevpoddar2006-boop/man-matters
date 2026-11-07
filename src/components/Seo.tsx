import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
  jsonLd?: Record<string, unknown>
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const JSON_LD_ID = 'route-structured-data'

/** Updates the document title, meta description and structured data per route (no SSR in this app). */
export function Seo({ title, description, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    const existing = document.getElementById(JSON_LD_ID)
    if (existing) existing.remove()

    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = JSON_LD_ID
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [title, description, jsonLd])

  return null
}
