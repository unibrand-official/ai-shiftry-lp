'use client'

import { useState } from 'react'
import { Header } from '@/components/lp/header'
import { Footer } from '@/components/lp/footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    setStatus(res.ok ? 'done' : 'error')
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-20 px-4">
        <div className="mx-auto max-w-xl">
          <h1 className="font-heading text-2xl font-black text-navy sm:text-3xl mb-2">
            無料相談・お問い合わせ
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            お気軽にご相談ください。1営業日以内にご返信いたします。
          </p>

          {status === 'done' ? (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <p className="text-lg font-bold text-navy mb-2">送信が完了しました！</p>
              <p className="text-sm text-muted-foreground">
                1営業日以内にご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-navy">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric"
                  placeholder="山田 太郎"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-navy">会社名</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric"
                  placeholder="株式会社〇〇"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-navy">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric"
                  placeholder="example@company.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-navy">お問い合わせ内容</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-electric resize-none"
                  placeholder="ご相談内容をお書きください"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500">送信に失敗しました。時間をおいて再度お試しください。</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-full bg-electric py-4 text-sm font-bold text-white shadow-lg transition hover:opacity-90 disabled:opacity-50"
              >
                {status === 'sending' ? '送信中...' : '無料相談を申し込む'}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
