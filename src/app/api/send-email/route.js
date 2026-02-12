import { NextResponse } from 'next/server';
const { MailtrapClient } = require("mailtrap");
const { emailTemplateBuilder } = require('./emailTemplate')

const TOKEN = process.env.MAILTRAP_KEY;

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "webmaster@cannon.skule.ca",
  name: "Cannon Webmaster",
};

const recipients = [
  {
    email: "webmaster@cannon.skule.ca",
  }
];

const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(req) {
  try {
    let { name, email, message } = await req.json();
    name = escapeHtml(name);
    email = escapeHtml(email);
    message = escapeHtml(message);

    const template = emailTemplateBuilder(
      name,
      email,
      message
    );

    client
    .send({
      from: sender,
      to: recipients,
      subject: `New message from ${name}`,
      category: "Contact Form",
      html: template,
    })
    .then(console.log, console.error);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
