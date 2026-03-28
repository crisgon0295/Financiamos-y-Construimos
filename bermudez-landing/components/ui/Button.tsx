import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  href?: string
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  href,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-display text-sm uppercase tracking-wider
    px-9 py-4
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    rounded-[7px]
    shadow-[0_4px_20px_rgba(255,255,255,0.08)]
    ${fullWidth ? 'w-full' : ''}
  `

  const variantStyles = {
    primary: `
      gradient-gold inner-glow-gold
      text-on-primary font-semibold
      hover:scale-[1.02] hover:shadow-[0_6px_30px_rgba(233,193,118,0.25)]
      hover:-translate-y-0.5
    `,
    secondary: `
      ghost-border bg-transparent
      text-secondary font-medium
      hover:bg-surface-container-highest
      hover:shadow-[0_6px_25px_rgba(191,199,215,0.15)]
      hover:-translate-y-0.5
    `,
    ghost: `
      border border-on-surface/30
      text-on-surface font-medium
      hover:border-primary hover:text-primary
      hover:shadow-[0_6px_25px_rgba(233,193,118,0.2)]
      hover:-translate-y-0.5
    `,
    danger: `
      bg-[#D94F3D]
      text-white font-semibold
      hover:bg-[#c23d2d] hover:scale-[1.02]
      hover:shadow-[0_6px_30px_rgba(217,79,61,0.3)]
      hover:-translate-y-0.5
    `,
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children} →
      </a>
    )
  }

  return (
    <button className={combinedClassName} {...props}>
      {children} →
    </button>
  )
}
