//Padding with zeros
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function incrementString (strng) {
  //Aux value used to slice the string starting from the end.
  let indexSlice = 0
  //looping through the string
  //to check if value in index is a number
  //if it is indexSlice++
  for (let i = 1; i <= strng.length; i++) {
    let aux = strng[strng.length - i]
    if(aux >= '0' && aux <= '9'){
      indexSlice = indexSlice + 1
    } else break
  }
  if (indexSlice != 0){
    //Slicing the string, padding with zeros and returning
    let auxStr = strng.slice(-indexSlice)
    let sum = (+auxStr + 1).pad(indexSlice)
    let finalStr = strng.slice(0,-indexSlice) + sum
    return finalStr
  } else return strng + 1
}
