import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20',
})

export async function POST(request: NextRequest) {
    try {
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
        console.error('Error creating checkout session:', error)
        return NextResponse.json(
            { error: 'Error creating checkout session' },
            { status: 500 }
        )
    }
} 