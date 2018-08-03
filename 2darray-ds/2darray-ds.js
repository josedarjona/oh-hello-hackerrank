// Function Description

// Complete the function hourglassSum in the editor below. 
// It should return an integer, the maximum hourglass sum in the array.

// hourglassSum has the following parameter(s):

// arr: an array of integers


function hourglassSum(arr) {
    
  console.log(arr);
  let testArr = [];
  let oneNum;
  let bigNum;
  // console.log(testArr.push(arr[0][0], arr[0][1], arr[0][2], 
  // arr[1][1], arr[2][0], arr[2][1], arr[2][2]))
  for (let i = 0; i < 4; i++){

      for(let j = 0; j < 4; j++){
          
      testArr.push(arr[i][j], arr[i][j+1], arr[i][j+2], arr[i+1][j+1], 
        arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2])
      oneNum = testArr.reduce((a,b)=> a+b)
      testArr = []
      // console.log(oneNum)
      if(typeof oneNum === "undefined" || typeof bigNum === "undefined"  
      || oneNum > bigNum){
          console.log("this is", oneNum, bigNum);
          bigNum = oneNum;
          oneNum;
      }
      
          
      }
  };
  
  console.log(bigNum)
 return bigNum
}