import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe only if API key is available
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-07-30.basil',
    })
  : null

export async function POST(request: NextRequest) {
    try {
        // Check if Stripe is configured
        if (!stripe) {
            return NextResponse.json(
                { error: 'Stripe is not configured' },
                { status: 500 }
            )
        }

        const body = await request.json()
        const {
            name,
            email,
            phone,
            massageType,
            duration,
            preferredDate,
            preferredTime,
            additionalNotes,
            amount,
            serviceName
        } = body

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: serviceName,
                            description: `Mobile massage service on ${preferredDate} at ${preferredTime}`,
                        },
                        unit_amount: amount * 100, // Convert to cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${request.nextUrl.origin}/booking/confirmation?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${request.nextUrl.origin}/booking`,
            metadata: {
                customerName: name,
                customerEmail: email,
                customerPhone: phone,
                massageType,
                duration,
                preferredDate,
                preferredTime,
                additionalNotes,
            },
        })

        return NextResponse.json({ sessionId: session.id })
    } catch (error) {
        // Error creating checkout session
        return NextResponse.json(
            { error: 'Error creating checkout session' },
            { status: 500 }
        )
    }
} 