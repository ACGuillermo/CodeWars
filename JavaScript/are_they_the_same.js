function comp(array1, array2){
  let cond = true
  if(!array1 || !array2) return false
  if(array1.length !== array2.length) return false
  let array1Square = array1.map(n=> n*n).sort((a,b)=>a-b)
  array2.sort((a,b) => a-b)
  array2.forEach((n,i)=>{
    if(array1Square[i] !== array2[i]){
      cond = false;
    }
  })
  return cond
}