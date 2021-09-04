/*

In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

*/

function letterCount(s){
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        let prop = s[i];
        if (obj[prop] === undefined) {
            obj[prop] = 1;
        } else {
            obj[prop] += 1;
        }
    }
    return obj;
  }

  console.log(letterCount("codewars"));