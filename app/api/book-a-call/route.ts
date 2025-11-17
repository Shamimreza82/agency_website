import { sendEmail } from "@/utile/sendEmail";
import { NextRequest, NextResponse } from "next/server";

type BookingData = {
  name?: string;
  email: string;
  date: string;
  time: string;
};

export async function POST(req: NextRequest) {
  try {
    const data: BookingData = await req.json();

    // Basic validation
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
    }
    if (!data.date) {
      return NextResponse.json({ message: "Date is required" }, { status: 400 });
    }
    if (!data.time) {
      return NextResponse.json({ message: "Time is required" }, { status: 400 });
    }

    // TODO: Save booking to database or send email
    console.log("New booking received:", data);

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      padding: 30px;
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      color: #02FF95;
    }
    .content {
      padding: 20px 0;
      line-height: 1.6;
    }
    .content p {
      margin: 10px 0;
    }
    .booking-details {
      background-color: #f1f1f1;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
    }
    .booking-details h3 {
      margin-top: 0;
      color: #02FF95;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      font-size: 12px;
      color: #999;
    }
    .button {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 25px;
      background-color: #02FF95;
      color: #fff;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Sm Agency</h1>
    </div>
    <div class="content">
      <p>Hi <strong>${data.name || "Valued Customer"}</strong>,</p>
      <p>Thank you for booking with <strong>Sm Agency</strong>. Your appointment has been successfully scheduled!</p>
      
      <div class="booking-details">
        <h3>Booking Details:</h3>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Email:</strong> ${data.email}</p>
      </div>
      
      <p>We look forward to assisting you. If you need to make any changes, please contact us at <a href="mailto:almamuncool88@gmail.com">almamuncool88@gmail.com</a>.</p>
      <p>WhatsApp us: <a href="https://wa.me/+8801861478232">+8801861478232</a></p>
      
      <a href="https://smagency.com" class="button">Visit Our Website</a>
    </div>
    <div class="footer">
      &copy; 2025 Sm Agency. All rights reserved.
    </div>
  </div>
</body>
</html>
`

    await sendEmail(data.email, "Booking Confirmation - Sm Agency", html);

    return NextResponse.json({ message: "Booking successful" }, { status: 200 });
  } catch (error) {
    console.error("Error in /api/subscribe:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
