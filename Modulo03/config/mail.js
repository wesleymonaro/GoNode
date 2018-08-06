const path = require('path');

module.exports = {

  // AUTH

  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,

  // TEMPLATES PATH
  templatesPath: path.resolve('./resources/mail'),
};
