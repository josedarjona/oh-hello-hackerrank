// Consider a staircase of size n:4

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and 
// the image is drawn using # symbols and spaces.
//  The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .



function staircase(n) {
    
  let hash = "#"
  let space = " "
  let final = ""
  
  for(let i = 0; i < n; i++){
      
      final += hash.repeat(i+1)
      final += space.repeat((n-1)-i)
      console.log(final.split("").reverse().join(""))
      final = ""
      
  }

  
  

}