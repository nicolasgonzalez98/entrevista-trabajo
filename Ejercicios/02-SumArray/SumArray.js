function SumArray (arr, n) {
  // Your code here:
  arr = arr.sort(function(a, b) {return a - b})
  let i = 0
  let final = arr.length - 1
  
  let suma
  while (i < final){
    suma = arr[i] + arr[final]
    if((suma) === n)return true
    else if(suma > n)final -= 1
    else if(suma < n)i+=1

  }
  return false
}

SumArray([5, 2, 9, 4], 12)

module.exports = SumArray
