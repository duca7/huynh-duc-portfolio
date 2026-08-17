import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // TODO: wire up an email provider (Resend, Nodemailer, etc.) here.
  console.log('New contact form submission:', parsed.data);

  return NextResponse.json({ success: true });
}
