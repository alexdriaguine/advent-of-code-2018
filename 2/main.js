const fs = require('fs')

const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')

// Part 1
let two = 0
let three = 0

input.forEach(id => {
  const counts = new Map()
  id.split('').forEach(l => {
    if (counts.has(l)) {
      counts.set(l, counts.get(l) + 1)
    } else {
      counts.set(l, 1)
    }
  })

  const uniqueCounts = new Set(counts.values())

  if (uniqueCounts.has(2)) {
    two += 1
  }

  if (uniqueCounts.has(3)) {
    three += 1
  }
})

console.log(two * three)

// Part 2
// Find the two strings that only diff by one character.
// Then, get the subs

const _input = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz']

const sorted = input.sort()

console.log(sorted)

// Brute force the sorted array
// For each string
//    For each rest string
//      Compare each character
//      When we have 2 misses, continue
//      If we are done, save the current outer and the current inner string

let boxId1
let boxId2

sorted.forEach(outer => {
  sorted.filter(inner => outer !== inner).forEach(inner => {
    let misses = 0
    for (let i = 0; i < inner.length; i++) {
      if (outer[i] !== inner[i]) {
        misses = misses + 1
      }
    }
    if (misses === 1) {
      console.log(outer, inner)
      boxId1 = inner
      boxId2 = outer
      
    }
  })
})
let str = ''
for (let i = 0; i < boxId1.length; i++) {
  if (boxId1[i] === boxId2[i]) {
    str += boxId1[i]
  }
}

console.log(str)

