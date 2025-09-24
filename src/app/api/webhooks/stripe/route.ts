import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!
const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    
    // Send booking notification email
    await sendBookingNotification(session)
  }

  return NextResponse.json({ received: true })
}

async function sendBookingNotification(session: Stripe.Checkout.Session) {
  const { customer_details, metadata, amount_total } = session
  
  const bookingDetails = {
    customerName: customer_details?.name || metadata?.customerName || 'N/A',
    customerEmail: customer_details?.email || metadata?.customerEmail || 'N/A',
    customerPhone: metadata?.customerPhone || 'N/A',
    massageType: metadata?.massageType || 'N/A',
    duration: metadata?.duration || 'N/A',
    preferredDate: metadata?.preferredDate || 'N/A',
    preferredTime: metadata?.preferredTime || 'N/A',
    additionalNotes: metadata?.additionalNotes || 'None',
    amount: (amount_total || 0) / 100
  }

  try {
    await resend.emails.send({
      from: 'Crystal Coast Concierge <bookings@crystalcoastmassage.com>',
      to: ['cameronaverittlmbt@crystalcoastmassage.com'],
      subject: `New Booking: ${bookingDetails.customerName}`,
      html: generateBookingEmailHTML(bookingDetails),
    })
    console.log('📧 Booking notification email sent successfully')
  } catch (error) {
    console.error('Failed to send booking notification:', error)
  }
}

function generateBookingEmailHTML(booking: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #2c5aa0; border-bottom: 2px solid #7FCAC5; padding-bottom: 10px;">New Massage Booking</h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2c5aa0; margin-top: 0;">Customer Information</h3>
        <p><strong>Name:</strong> ${booking.customerName}</p>
        <p><strong>Email:</strong> ${booking.customerEmail}</p>
        <p><strong>Phone:</strong> ${booking.customerPhone}</p>
      </div>
      
      <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2c5aa0; margin-top: 0;">Service Details</h3>
        <p><strong>Service:</strong> ${booking.massageType}</p>
        <p><strong>Duration:</strong> ${booking.duration} minutes</p>
        <p><strong>Date:</strong> ${booking.preferredDate}</p>
        <p><strong>Time:</strong> ${booking.preferredTime}</p>
        <p><strong>Amount Paid:</strong> $${booking.amount}</p>
      </div>
      
      ${booking.additionalNotes !== 'None' ? `
      <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2c5aa0; margin-top: 0;">Special Requests</h3>
        <p>${booking.additionalNotes}</p>
      </div>
      ` : ''}
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 14px;">Crystal Coast Concierge Massage</p>
        <p style="color: #666; font-size: 12px;">Cameron Averitt, LMBT | NC License #22913</p>
      </div>
    </div>
  `
}
