/**
 * Space complexity:
 * we analyze the runtime of an algorithms as the size of the input increases (time complexity
 * but we analyze the how much additional memory do we need to allocate in order to run the code in our algorithm( space complexity))
 *  
 * When we talk about space complexity we are talking about auxiliary space complexity or the space that is required by the
 * algorithm, not including space taken up by the inputs
 * 
 * 
 * 
 *                              Rules of Thumb
 * 
 * 1- most primitives (boolean, undefined etc) are const space
 * 2- String requires (O(n) space where n is the String length (if string = 50 character is going to take 5 * times 1 character String)
 * 3- reference types are generally O(n) where n is the length (for arrays ) or the number of keys (for objects)
 */

 // example of space complexity
 /**
  * things that take space?
  * 
  * The size of the array does not have impact on the space that is taken up because only have 2 variables in this case
  * that means we have const space
  */
 function sum(arr) {
     let total  = 0; // one number 
     for ( let i = 0; i < arr.length; i ++) { // let i = 0 is another number
         total += arr[i];
     }
     return total
 }

 