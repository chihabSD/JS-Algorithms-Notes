/**
 * 
 * Write a function that calculates the sum of all numbers from 1 up to and including the number n
 */

//  Solution 1
let total = 0;
const  sumSolution1 = (n) => {
for (let i = 0; i <= n; i++) {
    total += i;
}
     return total
 }

//  Solution 2
const sumSolution2 =(n) => { 
    return n * (n + 1 ) / 2;
}

//  Using timing 
/**
 * different machines will record different times
 * the same machine will record different times!
 * for faster algoritms, speed measurements many not be precise 
 * 
 * For example using
 * let t1 = preformance.now()
 */

//  Using operation computation
/**
 *  Time is determined by the operation type
 * for example: 
 * in solution2, we have 1 mult, 1 add and 1 div 
 * so there are 3 calculation only
 * 
 * In solution 1:
 * we have more operation, so if N is 20 there are 20 operation and more 
 * As N grows , the number of operation grows with N
 */
