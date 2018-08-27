function isPangram(string){
  let abc ="abcdefghijklmnopqrstuvwxyz".split('')
  let lc = string.toLowerCase()
  return abc.every(s=> lc.indexOf(s) !== -1)
}
