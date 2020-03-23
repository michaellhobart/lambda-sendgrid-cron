'use strict';

exports.handler = async (event) => {
  const sgMail = require('@sendgrid/mail');
  await sgMail.setApiKey(process.env.SENDGRID_API);
  const msg = {
    to: '< recipient email >',
    from: '< respond to email >',
    subject: '< SUBJECT TEXT >',
    text: "< BODY TEXT >",
    html: "< HTML BODY TEXT >"
  };

  let mailRes = await sgMail.send(msg)
  const response = {
      statusCode: 200,
      body: mailRes,
  };
  return response;
};
