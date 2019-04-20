const crypto = require('crypto')
const seed = '735a1cc13008f0cdf933e3c8a08cf6e7d6b7e411'
const target = '2155fa62a83d489f14b09e7c1f198787f623db8a'
const fs = require('fs')
const chain = fs.readFileSync('./chain.chronological.txt').toString()

const salt = process.argv[2] || false // e.g. 134dV6U7gQ6wCFbfHUz2CMh6Dth72oGpgH

let value = seed

for(let i=0; i<256; i++){
    let shasum = salt ? crypto.createHmac('sha1', salt) : crypto.createHash('sha1')
    shasum.update(value)
    value = shasum.digest('hex')
    console.log(value)
    if(chain.includes(value) && value===target){
        console.log('FOUND IT: ', i)
    }
}