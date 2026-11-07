import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { NAV_LINKS, SITE } from '@/data/site'
import { CloseIcon, SearchIcon, InstagramIcon, FacebookIcon, LinkedinIcon } from '@/components/ui/Icons'
import { Button } from '@/components/ui/Button'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

export function MobileMenu({
  onClose,
  onSearch,
}: {
  onClose: () => void
  onSearch: () => void
}) {
  useLockBodyScroll(true)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[75] flex flex-col bg-charcoal-950 animate-fadeIn lg:hidden">
      <div className="flex items-center justify-between px-6 py-5">
        <Logo tone="light" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-full p-2.5 text-cream-50 hover:bg-cream-50/10"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
        {NAV_LINKS.map((link, i) => (
          <NavLink
            key={link.href}
            to={link.href}
            end={link.href === '/'}
            onClick={onClose}
            style={{ animationDelay: `${i * 70}ms` }}
            className={({ isActive }) =>
              `animate-fadeUp border-b border-cream-50/10 py-4 font-display text-4xl ${
                isActive ? 'text-brass-light' : 'text-cream-50'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-col gap-6 px-6 pb-10">
        <button
          type="button"
          onClick={onSearch}
          className="flex items-center gap-3 text-cream-100"
        >
          <SearchIcon className="h-5 w-5" />
          <span className="text-sm uppercase tracking-widest">Search our teas</span>
        </button>
        <Button href="/teas" variant="light" onClick={onClose} className="w-full justify-center">
          Shop Now
        </Button>
        <div className="flex items-center justify-between border-t border-cream-50/10 pt-6">
          <span className="text-xs uppercase tracking-widest text-cream-300">Follow along</span>
          <div className="flex items-center gap-4 text-cream-100">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
