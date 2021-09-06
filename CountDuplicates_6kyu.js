
/*

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

*/

function duplicateCount(text){
    let obj = {};
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        let prop = text[i].toLowerCase();
        if (obj[prop] === undefined) {
            obj[prop] = 1;
        } else {
            obj[prop] += 1;
        }
    }
    for (const value of Object.values(obj)) {
        if (value >= 2) {
            count++;
        }
    }
    return count;
  }

  console.log(duplicateCount('aabbcde'));