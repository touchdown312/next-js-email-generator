const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const fs = require('fs');

const isDev = process.env.NODE_ENV !== 'production';
const nextJsApp = next({ isDev });
const requestHandler = nextJsApp.getRequestHandler();

const server = express();
server.use(bodyParser.json());

const emailSender = require('./util/sender');

const templates = fs
  .readdirSync('./pages')
  .filter((page) => !page.startsWith('_'))
  .map((page) => page.slice(0, page.length - 3));

nextJsApp
  .prepare()
  .then(() => {
    server.post('/emails/:template/:lang/:send?', async (req, res, next) => {
      try {
        const { template, lang, send } = req.params;
        const { from, to, subject } = req.body;

        if (!templates.includes(template)) {
          throw new Error(`${template} template doesn't exist`);
        }

        const html = await nextJsApp.renderToHTML(req, res, template, {});

        const mailOptions = {
          from,
          to,
          subject,
          html,
        };

        // Sending email.
        emailSender.sendMail(mailOptions, (error, response) => {
          if (error) {
            next(error);
          } else {
            res.status(200).json({ response });
          }
        });
      } catch (error) {
        next(error);
      }
    });

    server.use((error, req, res, next) => {
      res.status(500).json(error);
    });

    server.listen(3000, (error) => {
      if (error) {
        throw error;
      }
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
