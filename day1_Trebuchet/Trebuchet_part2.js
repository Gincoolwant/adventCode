const fs = require('fs')
const readline = require('readline')

let total = 0
const numsMap = {
  "one": "1e",
  "two": "2o",
  "three": "3e",
  "four": "4r",
  "five": "5e",
  "six": "6x",
  "seven": "7n",
  "eight": "8t",
  "nine": "9e",
}

const readStream = fs.createReadStream('./trebuchet.txt', 'utf8')

const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity, // 識別所有換行符號
});

rl.on('line', (line) => {
  const pattern = new RegExp(Object.keys(numsMap).join('|'), 'gi')
  const newLine = line.replace(pattern, (num) => {
    return numsMap[num]
  })
  const newLine2 = newLine.replace(pattern, (num) => {
    return numsMap[num]
  })
  const regx = /\d/g
  const num = newLine2.match(regx)
  if (num.length === 1) {
    total += Number(num + num)
  } else {
    total += Number(num[0] + num[num.length - 1])
  }
})

rl.on('close', () => {
  console.log(total);
});