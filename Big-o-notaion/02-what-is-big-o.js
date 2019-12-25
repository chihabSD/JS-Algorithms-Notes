/**
 * Big O is:
 *  We say that an algorithm is O(f(n)) if the number of simple operations that the computer
 * has to perform is eventually less than a constant times f(n) as N increase
 * 
 * meaning: the relationship between the input the the run time
 * for example:
 * f(n) could be linear (f(n) = n) the run time scales
 * f(n) could be quadratic (f(n) = n2) the run time squares
 * ............... or constant (f(n) =1) the run time will always be constant
 * ...... or f(n) could be something entirely different!
 */

/**
 * 
 * This will always have 3 operations so 
 * its has a Big O of 1 
 */
const addUpTo = (n) => {
    return n * (n + 1) /2
}

/**
 * The number of operations is (eventually) bounded by a multiple of N
 * as N grows the loop grows
 */
const  sumSolution1 = (n) => {
    let total = 0;
for (let i = 0; i <= n; i++) {
    total += i;
}
     return total
 }

 /**
  * we have nested loops, so as N grows N is going to = N number of operation roughly
  * but this is not N of 2N rather is its
  * 
  * O(n2) the run time is N square
  */
 function printAllPairs (n) {
     for ( var i = 0; i < n ; i++) {
         for ( var j =0; j < n; j++){
             console.log(i, j)
         }
     }
 }