import { argv, stdin, stdout, stderr, exit } from 'node:process';
import { spawn } from 'node:child_process';

const proc = spawn('C:\\Windows\\System32\\notepad.exe', []);

// const proc = spawn('user/bin/gebit', ['/tmp/text4.txt']);

proc.stdout.on('data', (data) => {
    console.log('proc stdout:', data.toString());
});

proc.sterr.on('data', (data) => {
    console.log('proc stderr:', err.toString());
});

proc.on('close', (code) => {
    console.log('proc exit code:', code);
});