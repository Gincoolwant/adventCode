const fs = require('fs')
const readline = require('readline')
let total = 0

const readStream = fs.createReadStream('./trebuchet.txt', 'utf8')

const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity, // 識別所有換行符號
});

rl.on('line', (line) => {
  const regx = /\d/g
  const num = line.match(regx)
  if (num.length === 1) {
    total += Number(num + num)
  } else {
    total += Number(num[0] + num[num.length - 1])
  }
})

rl.on('close', () => {
  console.log(total);
});