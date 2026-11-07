import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'dark' | 'light' | 'outline'
  className?: string
}

const tones: Record<NonNullable<BadgeProps['tone']>, string> = {
  dark: 'bg-charcoal-900 text-cream-50',
  light: 'bg-cream-100 text-charcoal-800',
  outline: 'border border-charcoal-900/30 text-charcoal-700',
}

export function Badge({ children, tone = 'light', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-widest ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
