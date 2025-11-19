export const emailVarificationTemplate = (link: string) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Email Verification</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f6fb;
      font-family: 'Poppins', Arial, sans-serif;
    }
    .container {
      max-width: 500px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 25px rgba(0,0,0,0.08);
    }
    .header {
      background: #4f46e5; /* Modern Indigo Color */
      padding: 25px;
      text-align: center;
      color: #ffffff;
    }
    .header h1 {
      margin: 0;
      font-size: 26px;
      font-weight: 700;
    }
    .content {
      padding: 30px;
      color: #333;
      line-height: 1.6;
    }
    .content h2 {
      margin-bottom: 10px;
      font-size: 22px;
      font-weight: 600;
      color: #111;
    }
    .btn {
      display: inline-block;
      margin-top: 25px;
      padding: 14px 25px;
      background: #4f46e5;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
    }
    .footer {
      text-align: center;
      padding: 15px;
      font-size: 12px;
      color: #666;
      background: #f4f6fb;
    }
  </style>
</head>
<body>

  <div class="container">
    
    <!-- Header -->
    <div class="header">
      <h1>YourAgency</h1>
    </div>

    <!-- Main Content -->
    <div class="content">
      <h2>Email Verification Required</h2>

      <p>Hello,</p>

      <p>
        Thank you for registering with <strong>SM Sgency</strong>.  
        To complete your account setup, please verify your email by clicking the button below.
      </p>

      <center>
        <a href="${link}" class="btn">Verify Email</a>
      </center>

      <p>If the button does not work, copy and paste the following link into your browser:</p>

      <p style="word-break: break-all; font-size: 14px; color: #555;">
       ${link}
      </p>

      <p>This verification link will expire in <strong>30 minutes</strong>.</p>

      <p>Best regards,<br>SM Sgency Team</p>
    </div>

    <!-- Footer -->
    <div class="footer">
      © 2025 SM Sgency — All Rights Reserved.
    </div>

  </div>

</body>
</html>

    `
}