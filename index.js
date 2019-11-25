'use strict';

exports.handler = async (event) => {
  const sgMail = require('@sendgrid/mail');
  await sgMail.setApiKey(process.env.SENDGRID_API);
  const msg = {
    to: 'peter.kourafalos@danahall.org',
    from: 'michael.hobart@danahall.org',
    subject: 'Weekly Menu Email ( automated )',
    text: "Hey Peter,\n\nJust your weekly reminder to send over the menu. I will be here until 3.\n\nThanks!\n\n-\nMichael Hobart\nWeb Content Coordinator - Dana Hall School",
    html: "Hey Peter,<br><br>Just your weekly reminder to send over the menu. I will be here until 3.<br><br>Thanks!<br><br>-<br>Michael Hobart<br>Web Content Coordinator - Dana Hall School"
  };

  let mailRes = await sgMail.send(msg)
  const response = {
      statusCode: 200,
      body: mailRes,
  };
  return response;
};
