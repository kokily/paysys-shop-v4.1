import { Context, Next } from 'koa';
import Router from 'koa-router';
import aws from 'aws-sdk';
import fs from 'fs';
import moment from 'moment';

const image = new Router();

aws.config.update({
  region: 'ap-northeast-2',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const s3 = new aws.S3({
  apiVersion: '2006-03-01',
});

const Bucket = 'image.paysys.shop';

image.post('/', async (ctx: Context, next: Next) => {
  if (ctx.request.files) {
    const file = ctx.request.files.file;

    // @ts-ignore
    const { key, url } = await uploadImage(file);

    ctx.body = { key, url };
  } else {
    await next();
  }
});

interface fileType {
  name: string;
  path: string;
  type: string;
}

const uploadImage = async (file: fileType) => {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(file.path);
    const saveTime = `${moment().format('YYMMDD_HHmmss')}`;
    const newFilename = `${saveTime}_${file.name.trim()}`;

    stream.on('error', function (err) {
      reject(err);
    });

    s3.upload(
      {
        Bucket,
        Body: stream,
        Key: newFilename,
        ContentType: file.type,
      },
      function (err, data) {
        if (err) {
          reject(err);
        } else if (data) {
          resolve({
            key: data.Key,
            url: data.Location,
          });
        }
      }
    );
  });
};

export default image;
