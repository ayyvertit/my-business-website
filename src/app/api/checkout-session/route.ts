import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    })
  : null

export async function GET(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 })
    }
    const sessionId = request.nextUrl.searchParams.get('session_id')
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })
    }
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return NextResponse.json({
      id: session.id,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_details: session.customer_details,
      metadata: session.metadata,
      payment_status: session.payment_status
    })
  } catch (error) {
    return NextResponse.json({ error: 'Error retrieving checkout session' }, { status: 500 })
  }
}

