// Given an array of integers, calculate the fractions of its elements
//  that are positive, negative, and are zeros.
//  Print the decimal value of each fraction on a new line.


function plusMinus(arr) {
    
  // console.log(arr)
  
  let neg = 0
  let pos = 0
  let zero = 0
  
  for(let i = 0; i < arr.length; i++){
      
      if(arr[i] < 0){
          neg += 1;
      } else if (arr[i] === 0) {
          zero += 1;
      } else if (arr[i] > 0) {
          pos += 1;
      }
      
      
  }
  
  neg = (neg/(arr.length)).toFixed(6)
  pos = (pos/(arr.length)).toFixed(6)
  zero = (zero/(arr.length)).toFixed(6)
  
  console.log(pos)
  console.log(neg)
  console.log(zero)
  
}

