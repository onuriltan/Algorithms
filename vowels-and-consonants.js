// https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
const vowels = ["a", "e", "i", "o", "u"];

function vowelsAndConsonants(inputString) {
    let foundVowels = [];
    let remaining = [];
    for(let i = 0; i < inputString.length; i++) {
        if(vowels.includes(inputString[i])) {
            foundVowels.push(inputString[i]);
        } else {
            remaining.push(inputString[i])
        }
    }
    for (let i = 0; i < foundVowels.length; i++) {
        console.log(foundVowels[i])
    }
    for (let i = 0; i < remaining.length; i++) {
        console.log(remaining[i])
    }
}

vowelsAndConsonants("javascriptloops");


