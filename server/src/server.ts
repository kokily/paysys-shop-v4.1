import 'dotenv/config';
import https from 'https';
import http from 'http';
import fs from 'fs';
import { createConnection } from 'typeorm';
import ConnectionOptions from './libs/ormConfig';
import app from './app';

const _bootstrap = async () => {
  const configurations = {
    production: { ssl: true, port: 443, hostname: 'paysys.shop' },
    development: { ssl: false, port: 4000, hostname: 'localhost' },
  };
  const environment = process.env.NODE_ENV || 'production';
  const config = configurations[environment];

  let httpServer;
  let httpsServer;

  if (config.ssl) {
    httpServer = http.createServer(app.callback());
    httpsServer = https.createServer(
      {
        key: fs.readFileSync(`${process.env.SSL_KEY}`),
        cert: fs.readFileSync(`${process.env.SSL_CERT}`),
      },
      app.callback()
    );

    createConnection(ConnectionOptions)
      .then(() => {
        httpServer.listen(80);
        httpsServer.listen(config.port, () => {
          console.log(
            `> Paysys Server on https://${config.hostname}:${config.port}`
          );
        });
      })
      .catch((err) => console.error(err));
  } else {
    httpServer = http.createServer(app.callback());

    createConnection(ConnectionOptions)
      .then(() => {
        httpServer.listen(config.port, () => {
          console.log(
            `> Paysys Local Server on http://${config.hostname}:${config.port}`
          );
        });
      })
      .catch((err) => console.error(err));
  }
};

_bootstrap();
