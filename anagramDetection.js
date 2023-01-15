// write the function isAnagram
// var isAnagram = function(test, original) {
//     let testArr = test.toLowerCase().split("").sort()
//     let originalArr = original.toLowerCase().split("").sort()
//     return testArr.join("").toString() === originalArr.join("").toString()
// }


// REFACTORED 1
// var isAnagram = function(test, original) {
//     return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("")
// }

// REFACTORED 2
// var isAnagram = function(test, original) {
//     test = test.toLowerCase().split("").sort().join("")
//     original = original.toLowerCase().split("").sort().join("")
//     return test === original
// };

// REFACTORED 3
const isAnagram = (test, original) => { test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("")}

console.log(isAnagram("foefet", "toffee")) // true, 'The word "foefet" is an anagram of "toffee"')
console.log(isAnagram("Buckethead", "DeathCubeK")) // true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
console.log(isAnagram("Twoo", "WooT")) // true, 'The word "Twoo" is an aconsole.log

console.log(isAnagram("dumble", "bumble")) // false, 'Characters do not match for test case "dumble", "bumble"')
console.log(isAnagram("ound", "round")) // false, 'Missing characters for test case "ound", "round"')
console.log(isAnagram("apple", "pale")) // false, 'Same letters, but different count')