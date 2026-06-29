import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn(
          'font-display text-xs font-semibold uppercase tracking-[0.25em]',
          light ? 'text-gold-light' : 'text-gold',
        )}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={cn(
        'text-balance font-heading text-2xl font-bold leading-tight sm:text-3xl md:text-4xl',
        light ? 'text-white' : 'text-navy',
      )}>
        {title}
      </h2>
      <span className={cn('gold-line', align === 'left' && 'gold-line-left')} aria-hidden="true" />
      {description ? (
        <p
          className={cn(
            'mt-1 max-w-2xl text-pretty text-sm leading-relaxed sm:text-base',
            light ? 'text-ink-foreground/80' : 'text-muted-foreground',
            align === 'center' ? 'mx-auto' : '',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
