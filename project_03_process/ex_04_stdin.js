import { argv, stdout, stderr, exit } from 'node:process';


let data = '';
stdin.on(`readoble`, () => {
   const chunk = stdin.read();
    if(chunk !== null) {
       data += chunk;
   }
 });

stdin.on('end', () => {
  console.log('Data', data);
   exit(0);
 });