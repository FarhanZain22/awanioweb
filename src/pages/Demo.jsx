import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { transporter } from "./config/mailer.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/request-demo", async (req, res) => {
  try {
    const { name, email, company, job, phone, city } = req.body;

    const mailOptions = {
      from: `"Awanio Demo Request" <${process.env.EMAIL_USER}>`,
      to: "farhanzain969@gmail.com",
      subject: "New Demo Request Submission",
      html: `
        <h2>New Request Demo</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${job}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <br/>
        <p>Please follow up this request.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Demo request sent successfully" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
