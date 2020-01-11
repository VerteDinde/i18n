#!/usr/bin/env ts-node
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const fs = require('fs')
const path = require('path')
const lodash_1 = require('lodash')
const walk = require('walk-sync')
const matchWords = require('match-words')
console.log(`# Word Count`)
analyze(path.join(__dirname, '../content/en-US'), 'English')
analyze(path.join(__dirname, '../content'), 'All Languages')
function analyze(dir, title) {
  const files = walk(dir, { directories: false }).map(f => path.join(dir, f))
  const words = lodash_1
    .chain(files)
    .map(file => matchWords(fs.readFileSync(file, 'utf8')))
    .flatten()
    .value()
  const counts = files.map(
    f => (matchWords(fs.readFileSync(f, 'utf8')) || []).length
  )
  const { average, sum } = require('simple-statistics')
  const results = {
    'total files': files.length,
    'total words': sum(counts),
    'unique words': lodash_1
      .chain(words)
      .flatten()
      .uniq()
      .value().length,
    'average words per file': Math.floor(average(counts)),
  }
  console.log(`\n## ${title}\n`)
  console.log('Stat | Value')
  console.log('---- | -----')
  Object.keys(results).forEach(stat => {
    console.log([stat, results[stat]].join(' | '))
  })
}
