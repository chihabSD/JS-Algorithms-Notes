/**
 * Rules of Thumb
 * 
 * 1- constant don't matter for example:
 * 
 * O(2n) will become => O(N)
 * O(500) => O(1)
 * O(13n2) => O(N2)
 * 
 * 2- Smaller terms don't matter
 * O(n + 10) => O(n), get rid of 10
 * O(100 + 50) => O(N
 * O(N2 + 5N + 8) ON2
 * 
 * 3- Arithmetic operation are constant (adding or substracting does not change)
 * 4- Var assignment is constant  (computer takes the same time when assigning any variable)
 * 5- accessing element in an array or object (key) is constant
 * 6- in a loop time complexity is the length of the loop * complexity whatever happens inside the loop
 */

/**
 * As N grows the loop grows so the Big O of this is O(n) 
 */
 function logAtleast(n) {
     for ( let i =1; i < Math.max(5, n); i++) {
         console.log(i);
     }
 }


 /**
  * if N  =4, the loop 4 times
  * if N  = 6 the loop 5 times so the big O of this is O(1)
  */
 function logMin(n) {
    for ( let i =1; i < Math.min(5, n); i++) {
        console.log(i);
    } 
 }
