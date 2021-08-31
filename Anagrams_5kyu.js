/*


What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false



Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


*/

function anagrams(word, words) {

const matches = [];
const targetObj = {};


targetWord = word.split("");
for (let i = 0; i < targetWord.length; i++) {
    let letter = word[i];
    if (targetObj[letter] === undefined) {
        targetObj[letter] = 1;
    } else {
        targetObj[letter] += 1;
    }
}

function createTestObj(testArr) {
    for (let i = 0; i < testArr.length; i++) {
        let testObj = {};
        for (let j = 0; j < testArr[i].length; j++) {
            let letter = testArr[i][j];
            if (testObj[letter] === undefined) {
                testObj[letter] = 1;
            } else {
                testObj[letter] += 1;
            }
        }
        if (checkEquality(targetObj, testObj)) {
            matches.push(testArr[i]);
        }

      
    }

}




function checkEquality(targetObj, obj) {

    let objProp = Object.getOwnPropertyNames(obj);
    let targetObjProp = Object.getOwnPropertyNames(targetObj);

    let objValues = Object.values(obj);
    let targetObjvalues = Object.values(targetObj);
    let objValSum = objValues.reduce((accum, currentValue) => accum + currentValue);
    let targetObjValSum = targetObjvalues.reduce((accum, currentValue) => accum + currentValue);

    if (targetObjValSum !== objValSum) {
        return;
    }

    for (let k = 0; k < targetObjProp.length; k++) {
        let propName = targetObjProp[k];
        if (targetObj[propName] !== obj[propName]) {
            return;
    }
    }
    for (let k = 0; k < targetObjProp.length; k++) {
        let propName = objProp[k];
        if (targetObj[propName] !== obj[propName]) {
            return;
    }
    }
    return true;
}


createTestObj(words);

return matches;

}


//console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
//console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));