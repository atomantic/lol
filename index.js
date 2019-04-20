const bigInt = require('big-integer')
const fs = require('fs')

const chain = fs.readFileSync('./chain.txt').toString().split('\n')
const decimal = chain.map(h=>bigInt(h, 16).toString())
fs.writeFileSync('./decimal.txt', decimal.join('\n'))