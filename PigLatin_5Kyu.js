/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.s

*/

function pigIt(str){
    let newStr = [];
    let strSplit = str.split(" ");
    for (let i = 0; i < strSplit.length; i++) {
        if ('?!,:;-[]{}()\'\"\.'.includes(strSplit[i]) === false) {
            let newWord = strSplit[i].slice(1) + strSplit[i][0] + "ay";
            newStr.push(newWord);
        } else {
            console.log(strSplit[i])
            newStr.push(strSplit[i]);
        }
    }
    return newStr.join(" ");
  }

  console.log(pigIt('Pig latin is cool'));