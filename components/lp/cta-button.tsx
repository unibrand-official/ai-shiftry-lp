import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CtaButtonProps {
  href?: string
  className?: string
  label?: string
  sub?: string
  variant?: 'bordeaux' | 'gold'
}

export function CtaButton({
  href = 'https://docs.google.com/forms/d/e/1FAIpQLSd6acXFEEhPETbuBP7BP9cjNSWMMg-tMRUqDuEKXMVGQ80xlA/viewform',
  className,
  label = 'まずは無料で「AI業務改善事例10選」を受け取る',
  sub = '御社の課題に合わせた研修プラン＆"40万→実質9万"の使い方をその場でご提案／ご相談だけでもOK',
  variant = 'gold',
}: CtaButtonProps) {
  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <Link
        href={href}
        className={cn(
          'group inline-flex w-full max-w-xl items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-bold shadow-soft-lg transition-all duration-200 hover:-translate-y-0.5 sm:text-lg',
          variant === 'gold'
            ? 'bg-gold-gradient text-navy'
            : 'bg-cta-gradient text-white',
        )}
      >
        <span className="text-balance text-center">{label}</span>
        <ArrowRight className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
      {sub ? (
        <p className="max-w-xl text-pretty text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {sub}
        </p>
      ) : null}
    </div>
  )
}
