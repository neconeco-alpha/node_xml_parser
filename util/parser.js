let parser = {}
module.exports = parser
parser.getKeyArray = getKeyArray

function getKeyArray(obj, key) {
  let ret =  {}
  Object.entries(obj).forEach(item => {
    let [k,v] = item
    if(k.indexOf(key) === 0) {
      let tmp = k.replace(key, '')
      let hit = tmp.match(/^\d/)
      let objKey = tmp.replace(`${hit}.`, '')
      ret[hit[0]] = {
        [objKey]: v
      }
    }
  })
  return ret
}
