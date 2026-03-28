import { ReactNode } from 'react'

interface CardGlassmorphicProps {
  children: ReactNode
  className?: string
  withBlueprint?: boolean
  withGhostBorder?: boolean
  withGoldAccent?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function CardGlassmorphic({
  children,
  className = '',
  withBlueprint = false,
  withGhostBorder = true,
  withGoldAccent = false,
  padding = 'md',
}: CardGlassmorphicProps) {
  const paddingStyles = {
    sm: 'p-5',
    md: 'p-9',
    lg: 'p-11',
  }

  const blueprintClass = withBlueprint ? 'blueprint-grid-dense' : ''
  const ghostBorderClass = withGhostBorder ? 'ghost-border' : ''
  const goldAccentClass = withGoldAccent ? 'border-t-2 border-t-primary' : ''

  return (
    <div
      className={`
        glass
        ${paddingStyles[padding]}
        ${blueprintClass}
        ${ghostBorderClass}
        ${goldAccentClass}
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_8px_35px_rgba(255,255,255,0.12)]
        relative overflow-hidden
        rounded-[7px]
        shadow-[0_4px_20px_rgba(255,255,255,0.06)]
        ${className}
      `.trim()}
    >
      {children}
    </div>
  )
}
