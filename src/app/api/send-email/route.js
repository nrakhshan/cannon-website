import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      { name, email, message },
      { publicKey: process.env.PUBLIC_KEY }
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}