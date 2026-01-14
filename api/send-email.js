import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, job, phone, city } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'Awanio <onboarding@resend.dev>',
      to: ['farhanzain969@gmail.com'],
      subject: `New Demo Request from ${name}`,
      html: `
        <h3>Form Request Demo Baru</h3>
        <p><b>Nama:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Perusahaan:</b> ${company}</p>
        <p><b>No. HP:</b> ${phone}</p>
        <p><b>Kota:</b> ${city}</p>
      `,
    });

    if (error) return res.status(400).json({ success: false, error });
    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}