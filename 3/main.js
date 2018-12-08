const fs = require('fs')

const testinput = `
#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2
`

const input = fs.readFileSync(__dirname + '/input.txt').toString()

const claimed = {}

for (const line of input.split(`\n`)) {
  const [id, _, inches, size] = line.split(' ')
  const [left, top] = inches
    .replace(':', '')
    .split(',')
    .map(Number)
  const [width, height] = size.split('x').map(Number)

  for (let x = left; x < left + width; x++) {
    for (let y = top; y < top + height; y++) {
      const coord = `${x}:${y}`
      claimed[coord] = (claimed[coord] || 0) + 1
    }
  }
}

const res = Object.values(claimed).filter(v => v > 1).length
console.log(res)
