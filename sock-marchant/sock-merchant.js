function main(input) {
  //grab input and turn all into an array of ints
  var socks = input[1].split(' ').map(Number);
  // Initialize required variables
  var i = 0
  var pairs = 0
  
  //loop through array
  for (i = 0; i < socks.length; i++) {
      // curren postition of sock
      var pairPosition = socks.indexOf(socks[i], i + 1);
      // if its in there
      if (pairPosition > -1) {
          //splice from array, both i and pairindex
          socks.splice(i, 1);
          socks.splice(pairPosition - 1, 1);
          //add to pairs, start loop over
          pairs++
          i = -1;
      }
  }
  
  // Output
  console.log(pairs);
}