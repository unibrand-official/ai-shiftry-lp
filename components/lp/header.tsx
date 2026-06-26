import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#top" className="flex flex-col leading-none">
          <span className="font-heading text-lg font-black tracking-tight text-navy sm:text-xl">
            AI SHIFTRY
          </span>
          <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground">
            エーアイ・シフトリー
          </span>
        </Link>
        <Link
          href="#contact"
          className="bg-cta-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white shadow-soft transition-transform duration-200 hover:-translate-y-0.5 sm:px-5 sm:text-sm"
        >
          無料相談
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </header>
  )
}
