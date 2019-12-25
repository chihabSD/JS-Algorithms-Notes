/**
 * Rules of Thumb
 * 
 * 1- constant don't matter for example:
 * 
 * O(2n) will be come => O(N
 * O(500) => O(1
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
 * 6- in a loop time complexity is the length of the loop 
 */