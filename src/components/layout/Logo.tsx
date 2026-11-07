import { Link } from 'react-router-dom'

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const color = tone === 'dark' ? 'text-charcoal-900' : 'text-cream-50'
  return (
    <Link to="/" className={`flex flex-col leading-none ${color}`} aria-label="Tea Break Chai — home">
      <span className="font-display text-[1.4rem] font-medium tracking-tight md:text-2xl">
        Tea Break
      </span>
      <span className="self-end font-display text-[0.7rem] italic tracking-[0.2em] text-brass-light md:text-xs">
        Chai
      </span>
    </Link>
  )
}
