import { ReactNode } from 'react'

interface GoldGradientProps {
  children: ReactNode
  className?: string
  asText?: boolean
}

export default function GoldGradient({ children, className = '', asText = false }: GoldGradientProps) {
  if (asText) {
    return (
      <span className={`gradient-gold-text ${className}`.trim()}>
        {children}
      </span>
    )
  }

  return (
    <div className={`gradient-gold ${className}`.trim()}>
      {children}
    </div>
  )
}
