import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import path from "path";
import { fileURLToPath } from "url";

// Konfigurasi agar server bisa membaca file .env di folder utama (root)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Inisialisasi Resend dengan API Key dari .env
const resend = new Resend(process.env.RESEND_API_KEY);

// Route untuk handle Request Demo
app.post("/api/request-demo", async (req, res) => {
  try {
    const { name, email, company, job, phone, city } = req.body;

    // Log data yang masuk (opsional, untuk debug)
    console.log("Data masuk:", req.body);

    const data = await resend.emails.send({
      from: "Awanio <onboarding@resend.dev>", // Gunakan onboarding@resend.dev jika domain belum verifikasi
      to: "farhanzain969@gmail.com", // Email tujuan (penerima notif)
      subject: `New Demo Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #00539B;">Form Request Demo Baru</h2>
          <hr />
          <p><b>Nama:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Perusahaan:</b> ${company}</p>
          <p><b>Jabatan:</b> ${job}</p>
          <p><b>No. HP:</b> ${phone}</p>
          <p><b>Kota:</b> ${city}</p>
          <hr />
          <p style="font-size: 12px; color: #777;">Email ini dikirim otomatis melalui sistem Awanio.</p>
        </div>
      `,
    });

    res.status(200).json({ 
      success: true, 
      message: "Email sent successfully",
      data 
    });

  } catch (error) {
    console.error("RESEND ERROR:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message || "Internal Server Error" 
    });
  }
});

// Jalankan Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`);
});