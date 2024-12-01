import fs from 'fs';

const mReadFile = (path: string): Promise<string> =>
  new Promise((res, rej) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) return rej(err);
      res(data);
    });
  });

export { mReadFile };
