/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

*/

function spinWords(string) {
    let splitStr = string.split(" ");
    let updatedStr = [];
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length < 5) {
            updatedStr.length === 0
                ? updatedStr.push(splitStr[i])
                : updatedStr.push(" ", splitStr[i]);
        } else {
            let reversedWord = splitStr[i].split("").reverse().join("");
            updatedStr.length === 0
                ? updatedStr.push(reversedWord)
                : updatedStr.push(" ", reversedWord);
        }
    }
    return updatedStr.join("");
}

console.log(spinWords("welcome"));
