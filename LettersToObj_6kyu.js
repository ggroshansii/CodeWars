/*

In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

*/

function letterCount(s){
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj.s[i] === undefined) {
            obj.s[i] = 1;
        } else {
            obj.s[i] += 1;
        }
    }
    return obj;
  }

  console.log(letterCount("codewars"));