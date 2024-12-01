#!/usr/bin/env node
import { Command } from 'commander';
import { help } from './module/help.js';
import { hosts } from './module/hosts.js';
const cmd = new Command();
cmd.useCmd = function (cmd) {
    cmd && cmd(this);
};
cmd.version('1.0.0');
/* 命令行模块 */
cmd.useCmd(help);
cmd.useCmd(hosts);
cmd.parse();
