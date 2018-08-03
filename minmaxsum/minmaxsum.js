
// Given five positive integers, find the minimum 
// and maximum values that can be calculated by summing exactly
//  four of the five integers. Then print the respective minimum and 
//  maximum values as a single line of two space-separated long integers.

// For example, arr=[1,3,5,7,9] . Our minimum sum is  1+3+5+7=16
// and our maximum sum is 3+5+7+9=24. 
// We would print
// 16 24




function miniMaxSum(arr) {
        

    
  // console.log("this is arr", arr)

  let smallRemove = Math.min(...arr)
  // console.log("this is small", smallRemove)
  let bigRemove = Math.max(...arr)
  // console.log("this is big", bigRemove)
  let smallArr
  let bigArr
  // console.log("testing123", smallArr = arr.slice(arr.indexOf(smallRemove), 1))
  if(smallRemove === bigRemove){
      // console.log("index?", arr.indexOf(smallRemove))
      arr.splice(arr.indexOf(smallRemove), 1)
      smallArr = arr
      bigArr = arr
  } else if(smallRemove != bigRemove) {
  
  smallArr = arr.filter((notTheBig) => notTheBig != bigRemove )
  bigArr = arr.filter((notTheSmall) => notTheSmall != smallRemove )
  }
  
  // console.log(smallArr, "and ", bigArr)
  
  let smallest = smallArr.reduce((a,b) => a+b)
  let biggest = bigArr.reduce((a,b) => a+b)
  
  console.log(smallest, biggest)
  


}