import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, project } = await req.json();

    if (!name || !email || !project) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PRIVATE_KEY, // stays safe on server
        template_params: {
          from_name: name,
          reply_to: email,
          message: project,
        },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json({ error: err }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully ✅" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
