import type { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'span'
}

export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const Tag = as

  return (
    <Tag
      ref={ref as never}
      className={`${isVisible ? 'animate-fadeUp' : 'opacity-0'} ${className}`}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
