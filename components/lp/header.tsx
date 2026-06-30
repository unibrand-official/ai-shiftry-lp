import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E2DDD6] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#top" className="flex flex-col leading-none">
          <span className="font-heading text-lg font-bold tracking-tight text-navy sm:text-xl">
            AI SHIFTRY
          </span>
          <span className="font-display text-[10px] tracking-[0.25em] text-gold">
            エーアイ・シフトリー
          </span>
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSd6acXFEEhPETbuBP7BP9cjNSWMMg-tMRUqDuEKXMVGQ80xlA/viewform" target="_blank" rel="noopener noreferrer"
          className="bg-cta-gradient header-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:text-base"
        >
          無料相談
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          20%       { transform: rotate(-2deg); }
          40%       { transform: rotate(2deg); }
          60%       { transform: rotate(-1.5deg); }
          80%       { transform: rotate(1.5deg); }
        }
        .header-cta {
          animation: wiggle 0.5s ease-in-out 1s 1;
          transform-origin: center;
        }
        .header-cta:hover {
          animation: none;
        }
      `}</style>
    </header>
  )
}
