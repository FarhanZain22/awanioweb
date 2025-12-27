import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, company } = req.body;
      await resend.emails.send({
        from: "Awanio <onboarding@resend.dev>",
        to: "farhanzain969@gmail.com",
        subject: "Request Demo Baru",
        html: `<p>Nama: ${name}</p>`
      });
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ success: false });
    }
  }
}