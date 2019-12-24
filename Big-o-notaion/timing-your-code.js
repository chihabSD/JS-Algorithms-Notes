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

//  timing of the first solution
//  console.log( sumSolution1(5))
let t1 = performance.now();
sumSolution1(1000000000);
let t2 = performance.now();
console.log(`sum solution 1 ${(t2- t1)} / 1000} seconds.` )

//  Solution 2
const sumSolution2 =(n) => { 
    return n * (n + 1 ) / 2;
}

// console.log(sumSolution2(5))