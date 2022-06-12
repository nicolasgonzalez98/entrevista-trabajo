function MaxValue (shares) {
  // Your code here:
  let ganancias = 0;
  let total = 0
  for(let i = 0; i < shares.length - 1; i++){
    for(let j = i+1; j < shares.length; j++){
      total = shares[j] - shares[i]
      if(total > ganancias){
        ganancias = total
      }
    }
  }

  return ganancias
}



module.exports = MaxValue
