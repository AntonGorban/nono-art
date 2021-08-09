const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE,
  auth: {
    user: process.env.SMTP_LOGIN,
    pass: process.env.SMTP_PASS,
  },
});

const sendSharedLevelMail = async ({ ip, date, level }) =>
  await transporter
    .sendMail({
      from: `"nono-art-server" <${process.env.SMTP_LOGIN}>`,
      to: ["antogor.work@gmail.com", "0669600185d@gmail.com"],
      subject: `Новый уровень для nonArt от ${ip}`,
      html: `
<h1>Новый уровень для nonoArt</h1>
<p>пользователь \`${ip}\` прислал новый уровень</p>

<hr/>
<pre>
${JSON.stringify(level, undefined, 4)}
</pre>
<hr/>

<em>${date}<em/>
`,
    })
    .then((r) => console.log(r));

module.exports = {
  sendSharedLevelMail,
};
