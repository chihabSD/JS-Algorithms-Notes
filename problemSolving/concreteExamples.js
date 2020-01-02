// Write a function that takes in a String and return counts of each character in the String

function countString(aString) {
    // make object
    let result = {};
    //loop over String for each character
    for ( var char of aString) {
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
 // if char is a number/letter and key in object add ont to count
    //return object
    return result
}
function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && 
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)) {
        return false
    }
    return true
}


const output = countString('Chihabeddine')
console.log(output);

function charCount2 (str) {
    let result = {};
    for (const c of str) {
        let char = [c];
        if(result[char] > 0) {
            result[char]++
        } else {
            result[char] =1;
        }
    }
    return result;
}

console.log(charCount2 ("hello"))

function  usingES6 (text) {
    const result = {};
    [...text].forEach( letter => {
        let char = [letter];
        result[char] > 0 ? result[char]++: result[char] =1
    })
    return result;
}
console.log(usingES6("chihab"));


