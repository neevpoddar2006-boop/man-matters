import type { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 ease-premium disabled:opacity-50 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass'

const variants: Record<Variant, string> = {
  primary: 'bg-charcoal-900 text-cream-50 hover:bg-charcoal-800 border border-charcoal-900',
  secondary:
    'bg-transparent text-charcoal-900 border border-charcoal-900/70 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50',
  light: 'bg-cream-50 text-charcoal-900 hover:bg-cream-100 border border-cream-50',
  ghost:
    'bg-transparent text-cream-50 border border-cream-50/50 hover:border-cream-50 hover:bg-cream-50/10',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm md:text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
  onClick?: MouseEventHandler
}

interface ButtonAsButton extends CommonProps {
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

interface ButtonAsLink extends CommonProps {
  href: string
  external?: boolean
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', size = 'md', className = '', children, onClick } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          onClick={onClick}
          className={classes}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      )
    }
    return (
      <Link to={props.href} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button
      type={buttonProps.type ?? 'button'}
      onClick={onClick}
      disabled={buttonProps.disabled}
      aria-label={buttonProps['aria-label']}
      className={classes}
    >
      {children}
    </button>
  )
}
