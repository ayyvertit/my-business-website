import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Webhook test endpoint is working',
    timestamp: new Date().toISOString(),
    env: {
      hasResendKey: !!process.env.RESEND_API_KEY,
      hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
      hasWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET
    }
  })
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  return NextResponse.json({ 
    message: 'POST received',
    body: body.substring(0, 100) + '...',
    timestamp: new Date().toISOString()
  })
}
