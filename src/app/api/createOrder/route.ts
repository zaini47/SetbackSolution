import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string, // Use non-prefixed env variables
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    if (!amount) {
      return NextResponse.json(
        { error: "Amount is required" },
        { status: 400 }
      );
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount, // Amount in paise (₹1 = 100 paise)
      currency: "INR",
    });

    return NextResponse.json({ data: order });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create Razorpay order", details: (error as Error).message  },
      { status: 500 }
    );
  }
}
