var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import clipboard from 'clipboardy';
import { mReadFile } from '../utils/fsSys.js';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const hosts = (cmd) => {
    cmd
        .command('hosts')
        .description('hosts文件配置')
        .action(() => __awaiter(void 0, void 0, void 0, function* () {
        const hostsData = yield mReadFile(path.join(__dirname, '../../assets/hosts'));
        console.log('hostsData', hostsData);
        clipboard.write(hostsData);
    }));
};
export { hosts };
