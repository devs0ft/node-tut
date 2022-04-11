const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8');
const second =readFileSync('./content/second.txt','utf-8')
console.log(first, second);

writeFileSync('./content/results.txt',`here is my results ${first},${second}`,{flag:'a'})