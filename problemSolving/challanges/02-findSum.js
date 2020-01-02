/**
 * Write a function that returns sum of two numbers
 * write a function that return sum of all number regardless of # of params
 */

 const returnTwoNum = (a , b ) => {
     return a + b
 }

 console.log(returnTwoNum(2,3))
 
 // return sum of all args
 const returnSumAll = (...args) => {
     let sum = 0;
    //  for (let i = 0; i < args.length; i++) {
    //      sum += args[i]
    //  }
    // return args.reduce((previous, current) => {
    //     return previous + current
    // })
    args.forEach(number => {
        sum += number
    });
    return sum;
   
    }
    
    console.log(returnSumAll(2,3))
