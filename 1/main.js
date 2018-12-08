const fs = require('fs')


const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n').map(Number)

// Part 1, final frequency at the end of the list

const part1Answer = input.reduce((total, current) => total + current, 0)

// Part 2, first frequency to be found twice
const part2Answer = findDouble(input)


function findDouble(arr, frequency = 0, seen = []) {
  let current = frequency
  for (let i = 0; i < arr.length; i++) {
    current += arr[i]
    if (seen.includes(current)) {
      return current
    }
    seen.push(current)
  }
  return findDouble(arr, current, seen)
}

