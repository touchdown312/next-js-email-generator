const nodemailer = require('nodemailer');
const mandrillTransport = require('nodemailer-mandrill-transport');

/*
 * Configuring mandrill transport.
 * Copy your API key here.
 */

const sender = nodemailer.createTransport(
  mandrillTransport({
    auth: {
      apiKey: '<%API_KEY%>',
    },
  })
);

module.exports = sender;
