import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || "whsec_placeholder"
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutComplete(session);
        break;
      }

      case "payment_intent.payment_failed": {
        const intent = event.data.object as Stripe.PaymentIntent;
        console.error("Payment failed:", intent.id, intent.last_payment_error?.message);
        break;
      }

      default:
        // Unhandled event type
        console.log(`Unhandled event: ${event.type}`);
    }
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

/**
 * Handle successful checkout completion
 * Creates order in database and triggers confirmation email
 */
async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const {
    id: sessionId,
    customer_details,
    amount_total,
    currency,
    metadata,
    payment_intent,
  } = session;

  console.log("Processing completed checkout:", sessionId);

  // Retrieve shipping address from customer_details or session
  const shippingAddress = customer_details?.address
    ? {
        line1: customer_details.address.line1,
        line2: customer_details.address.line2,
        city: customer_details.address.city,
        state: customer_details.address.state,
        postalCode: customer_details.address.postal_code,
        country: customer_details.address.country,
      }
    : null;

  // TODO: Save order to database via Drizzle
  // For now, log the order details
  const orderData = {
    stripeSessionId: sessionId,
    stripePaymentIntent: payment_intent as string,
    customerEmail: customer_details?.email,
    customerName: customer_details?.name,
    shippingAddress,
    amountTotal: (amount_total || 0) / 100,
    currency,
    subtotal: parseFloat(metadata?.subtotal || "0"),
    shipping: parseFloat(metadata?.shipping || "0"),
    itemCount: parseInt(metadata?.itemCount || "0"),
    status: "paid" as const,
  };

  console.log("Order created:", JSON.stringify(orderData, null, 2));

  // TODO: Send confirmation email via Resend
  // await sendOrderConfirmation(orderData);
}
