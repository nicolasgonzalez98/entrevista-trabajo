function FindNeedle (haystack, needle) {
  // Your code here:
  let indice;
  let largo;
  for(let i = 0; i < haystack.length; i++){
    if((haystack[i] === needle[0]) && (haystack.slice(i,i + needle.length) === needle)){
      return i
    }
  }
  return -1

}

console.log(FindNeedle('rereredux','reredux'))
//console.log('react-redux'.slice(6,11))
module.exports = FindNeedle
