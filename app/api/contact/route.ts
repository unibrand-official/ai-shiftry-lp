import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, company, email, message } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: '名前とメールアドレスは必須です' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'AI SHIFTRY お問い合わせ <onboarding@resend.dev>',
      to: ['thanks@unibrand.jp', 'sakuka@unibrand.co.jp'],
      replyTo: email,
      subject: `【AI SHIFTRY】お問い合わせ：${name}様`,
      text: `
お名前：${name}
会社名：${company || '未入力'}
メールアドレス：${email}
お問い合わせ内容：
${message || '未入力'}
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: '送信に失敗しました' }, { status: 500 })
  }
}
