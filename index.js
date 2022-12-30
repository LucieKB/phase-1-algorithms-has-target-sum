/* there is an array of integers, and a target integer. Both of them are argument to my fuction hasTargetSum.
If any 2 numbers contained in the array add up to the target, the function should return true
*/


function hasTargetSum(array, target) {
  
   for (let i=0; i<array.length; i++){
    let num1 = array[i]
    const complement = target-num1 
    console.log(complement)
      
    for (let j=i+1; j<array.length; j++){
      let num2 = array [j]
      if (num2 === complement){
        return true
      }
    }
  }
    return false
   
  }
      
  





/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here:
  take one number of the array and add it with an other number of the array.
  If the sum of both those numbers === the target, then return true.
  Keep iterating until it returns true, 
  else return false.
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true")
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
