function mdArraySum (arr) {
  // Your code here:
  let suma = 0

  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      suma += mdArraySum(arr[i])
    }else{
      suma += arr[i]
    }
  }

  return suma
}

module.exports = mdArraySum
