import CryptoJS from "crypto-js";
import { NextRequest, NextResponse } from "next/server";

// Named export for the POST method
export async function POST(req: NextRequest) {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      await req.json();
    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment data" },
        { status: 400 }
      );
    }

    const secret = process.env.RAZORPAY_KEY_SECRET as string;

    // Generate the signature using Razorpay order ID and payment ID
    const generatedSignature = CryptoJS.HmacSHA256(
      `${razorpay_order_id}|${razorpay_payment_id}`,
      secret
    ).toString(CryptoJS.enc.Hex);


    // Compare the signatures
    if (generatedSignature === razorpay_signature) {
      return NextResponse.json(
        { message: "Payment verified successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", data: error as Error },
      { status: 500 }
    );
  }
}
