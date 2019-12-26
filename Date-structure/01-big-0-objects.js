/**
 * Looking at objects through Big O
 * 
 * Objects work well when you don't need order
 * 
 * 
 * Javascript is able to add something to an object in constant time and able to retrieve and update in constant time
 * 
 * insertion - O(1) => linear 
 * removal - O(1) => linear 
 * searching 0(N)
 * access => o(1)
 * */

 let student = {
     firstName: 'Chihabeddine',
     isStudent: true,
     favNumbers : [1,4,5,6]
 }

 /**
  *                  Big O of objects Methods
  * Object.keys(student) => O(N) as items grows we have to visit and added to the array 
  * Object.entries(student), compile key and value so its simplified to O(N)
  * object.hasOwnProperty("firstname") , this is constant time
  */