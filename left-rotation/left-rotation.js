
function rotLeft(a, d) {

    
  let fillArr = a
  let i = 0
  while(i < d){
      
      // fillArr = a.slice(1)
      // fillArr.push(a[0])
      let first = fillArr.shift();
      fillArr.push(first);
      
      
      // a = fillArr
      // fillArr = []
      
      i++
      
  }

  return fillArr

}


// Output Format

// Print a single line of n space-separated integers 
// denoting the final state of the array after performing d left rotations.

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4



//use this with another solution you find - try to use a different method


// function rotLeft(a, d) {

    
//   let fillArr = a
//   let i = 0
//   while(i < d){
      
//       // fillArr = a.slice(1)
//       // fillArr.push(a[0])
//       let first = fillArr.shift();
//       fillArr.push(first);
      
      
//       // a = fillArr
//       // fillArr = []
      
//       i++
      
//   }

//   return fillArr

// }


