// Give a sorted array of integers a, find an integer x from a such that value of
// abs(a[0] -x) + abs9a[1] - x ) + .. + abs(a[a] -1) - x)

const media = a => {
    const isEven =  a.length % 2 ===0 // check if array is even
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]// if even, take the array / 2 and - 1
} 

console.log(media([2, 4,7])) // result  = 4
console.log(media([3, 6,7])) // result  = 6
console.log(media([5, 10, 11, 13, 15, 16, 23, 26])) // result  = 13

