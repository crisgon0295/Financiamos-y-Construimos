import { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'danger'
  className?: string
}

export default function Tag({ children, variant = 'default', className = '' }: TagProps) {
  const baseStyles = `
    inline-block
    label-md
    px-3.5 py-1
    mb-5
    rounded-[7px]
    shadow-[0_2px_15px_rgba(233,193,118,0.2)]
  `

  const variantStyles = {
    default: 'gradient-gold text-on-primary',
    accent: 'bg-surface-container-high text-primary ghost-border',
    danger: 'bg-[#D94F3D] text-white',
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`.trim()}>
      {children}
    </div>
  )
}
