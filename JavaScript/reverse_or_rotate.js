function revrot(str, sz) {
  if(sz <= 0 || str.length === 0 || sz > str.length) return ""
  let strToArray = str.split('')
  let auxArr = []
  for(let i =0; i<str.length/sz; i++){
    if(sz>strToArray.length) break
    let chunk = strToArray.splice(0,sz)
    if(chunk.reduce((sum,n)=> sum+(n*n*n),0)%2 === 0){
      auxArr.push(chunk.reverse())
    }else {
      chunk.push(chunk.shift())
      auxArr.push(chunk)
    }
  }
  let mergedAuxArr = [].concat.apply([], auxArr);
  return  mergedAuxArr.join('')
}