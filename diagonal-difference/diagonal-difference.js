function diagonalDifference(arr) {

  console.log("this is the arr", arr)
  let primDiag = []
  let secDiag = []
  for (var i = 0; i < arr.length; i++){
      primDiag.push(arr[i][i])
      secDiag.push(arr[i][(arr.length - 1)-i])
  }
  
  let prim = primDiag.reduce((sum, cv) => sum+cv,0)
  let sec = secDiag.reduce((sum, cv) => sum+cv,0)
  
  console.log("this is primdiag", primDiag)
  console.log("this is secdiag", secDiag)
  
  let final = Math.abs(prim - sec)
  
  console.log("this is final", final)
  
  return final
  
}