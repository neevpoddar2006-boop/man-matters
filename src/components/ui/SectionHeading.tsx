import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const titleColor = tone === 'dark' ? 'text-charcoal-900' : 'text-cream-50'
  const eyebrowColor = tone === 'dark' ? 'text-tea-brown' : 'text-brass-light'
  const descColor = tone === 'dark' ? 'text-charcoal-500' : 'text-cream-200'

  return (
    <Reveal>
      <div className={`flex flex-col gap-4 ${alignClasses} ${className}`}>
        {eyebrow && (
          <span className={`text-xs font-semibold uppercase tracking-widest2 ${eyebrowColor}`}>
            {eyebrow}
          </span>
        )}
        <h2 className={`font-display text-4xl leading-[1.08] md:text-5xl ${titleColor}`}>
          {title}
        </h2>
        {description && (
          <p className={`max-w-xl text-balance font-sans text-base leading-relaxed md:text-lg ${descColor}`}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}
