'use strict';

exports.handler = async (event) => {

  const sgMail = require('@sendgrid/mail');
  await sgMail.setApiKey(process.env.SENDGRID_API);

  const emailList = []

  var mailRes = await Promise.all(
    emailList.map(async email => {
      const msg = {
          to: email,
          from: 'michaellhobart@gmail.com',
          subject: '< SUBJECT TEXT >',
          text: "< BODY TEXT >",
          html: "< HTML BODY TEXT >"
        };
      return sgMail.send(msg)
    })
  )
  const response = {
      statusCode: 200,
      body: mailRes,
  };
  return response;
};
