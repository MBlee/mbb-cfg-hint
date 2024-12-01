import { Command } from 'commander';
import chalk from 'chalk';
import clipboard from 'clipboardy';
import { mReadFile } from '../utils/fsSys.js';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const hosts = (cmd: Command) => {
  cmd
    .command('hosts')
    .description('hosts文件配置')
    .action(async () => {
      const hostsData = await mReadFile(path.join(__dirname, '../../assets/hosts'));
      console.log('hostsData', hostsData);
      clipboard.write(hostsData);
    });
};

export { hosts };
