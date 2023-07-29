const forgetPasswordTemplete = (otp) => {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reset Password OTP</title>
            <style>
                /* Global styles */
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    color: #333;
                    background-color: #f2f2f2;
                }
                table {
                    border-collapse: collapse;
                    width: 100%;
                }
                td {
                    padding: 10px;
                }
                /* Header styles */
                .header {
                    background-color: #6C63FF;
                    padding: 20px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0;
                    font-size: 28px;
                    color: #fff;
                }
                /* Content styles */
                .content {
                    padding: 30px;
                    background-color: #fff;
                }
                .content p {
                    margin: 0;
                    line-height: 1.5;
                    margin-bottom: 20px;
                }
                .content h2 {
                    margin: 0;
                    font-size: 20px;
                    margin-bottom: 20px;
                    color: #6C63FF;
                }
                .content button {
                    background-color: #6C63FF;
                    border: none;
                    color: #fff;
                    padding: 12px 20px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin-top: 20px;
                    cursor: pointer;
                    border-radius: 4px;
                }
            </style>
        </head>
        <body>
            <table>
                <tr>
                    <td class="header">
                        <h1>Reset Password OTP</h1>
                    </td>
                </tr>
                <tr>
                    <td class="content">
                        <p>Dear User,</p>
                        <p>We have received a request to reset the password for your account on Menuwala. To proceed with the password reset, please use the following OTP within the next 10 minutes:</p>
                        <h2>OTP: ${otp}</h2>
                        <p>Please note that this OTP is valid only for 10 minutes from the time of this email. If you do not reset your password within this time, you will need to request a new OTP.</p>
                        <p>If you did not initiate this password reset request, please ignore this email and take necessary action to secure your account.</p>
                        <p>Thank you for choosing Menuwala for your food ordering needs.</p>
                        <p>Best regards,</p>
                        <p>The Menuwala Team</p>
                    </td>
                </tr>
            </table>
        </body>
        </html> 
    `;
};

export default forgetPasswordTemplete;
