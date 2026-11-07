interface QuantitySelectorProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function QuantitySelector({ value, onChange, min = 1, max = 20 }: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center border border-charcoal-900/20">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="flex h-11 w-11 items-center justify-center text-lg text-charcoal-700 transition-colors hover:bg-charcoal-900/5 disabled:opacity-30"
      >
        −
      </button>
      <span
        className="flex h-11 w-11 items-center justify-center text-sm font-medium text-charcoal-900"
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase quantity"
        className="flex h-11 w-11 items-center justify-center text-lg text-charcoal-700 transition-colors hover:bg-charcoal-900/5 disabled:opacity-30"
      >
        +
      </button>
    </div>
  )
}
