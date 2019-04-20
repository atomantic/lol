const bigInt = require('big-integer')
const fs = require('fs')

const base = Number(process.argv[2]||10)
const chain = fs.readFileSync('./chain.chronological.txt').toString().split('\n')
const converted = chain.map(h=>bigInt(h, 16).toString(base))
fs.writeFileSync(`./base.${base}.txt`, converted.join('\n'))