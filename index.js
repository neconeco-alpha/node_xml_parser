const fs = require('fs')
const xml2js = require('xml2js')
const flatten = require('./util/flatten')
const parser = require('./util/parser')
const xmlData = fs.readFileSync( "./input/test.xml","utf-8" );

let ret = {}
xml2js.parseString(xmlData, (e,v) => ret = v)
let flat = flatten.flatten(ret)
let ans = parser.getKeyArray(flat, 'content.book.')

console.log(ans)
