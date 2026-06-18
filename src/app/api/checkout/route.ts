import { NextRequest, NextResponse } from "next/server";
import { stripe, calculateShipping } from "@/lib/stripe";
import { siteConfig } from "@/config/site";

interface CheckoutItem {
  id: string;
  name: string;
  price: number; // USD
  quantity: number;
  image: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, currency = "USD" } = body as {
      items: CheckoutItem[];
      currency?: string;
    };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = calculateShipping(subtotal);

    // Determine Stripe-supported currency
    const stripeCurrency = currency.toLowerCase();
    const supportedCurrencies = [
      "usd", "eur", "gbp", "jpy", "aud", "cad",
    ];
    const finalCurrency = supportedCurrencies.includes(stripeCurrency)
      ? stripeCurrency
      : "usd";

    // Build line items
    const lineItems: Array<{
      price_data: {
        currency: string;
        unit_amount: number;
        product_data: { name: string; images?: string[]; metadata?: Record<string, string> };
      };
      quantity: number;
    }> = items.map((item) => ({
      price_data: {
        currency: finalCurrency,
        unit_amount: Math.round(item.price * 100), // cents
        product_data: {
          name: item.name,
          images: [item.image],
          metadata: {
            productId: item.id,
          },
        },
      },
      quantity: item.quantity,
    }));

    // Add shipping line item if applicable
    if (shipping > 0) {
      lineItems.push({
        price_data: {
          currency: finalCurrency,
          unit_amount: Math.round(shipping * 100),
          product_data: {
            name: "International Shipping",
          },
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      currency: finalCurrency,
      success_url: `${siteConfig.url}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteConfig.url}/cart`,
      shipping_address_collection: {
        allowed_countries: [
          "US", "CA", "GB", "DE", "FR", "IT", "ES", "NL", "BE",
          "AT", "CH", "SE", "NO", "DK", "FI", "IE", "PT", "AU",
          "NZ", "JP", "KR", "SG", "HK", "TW",
        ],
      },
      billing_address_collection: "required",
      metadata: {
        subtotal: subtotal.toString(),
        shipping: shipping.toString(),
        itemCount: items.reduce((s, i) => s + i.quantity, 0).toString(),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
