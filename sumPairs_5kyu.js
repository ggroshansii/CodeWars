/*

Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

*/


///BEFORE REFACTORING FOR EFFICIENCY: ß
function sumPairs(ints, s) {
    let matches = [];
    let finalMatch = [];

    for (let i = 0; i < ints.length; i++) {
        for (let j = 0; j < ints.length; j++) {
            if (ints[i] + ints[j] === s) {
                if (i < j) {
                    matches.push([ints[i], ints[j], [i], [j]]);
                }

            }
        }
    } if (matches.length > 0) {
        for (let i = 0; i < matches.length; i++) {
            if (finalMatch.length === 0) {
                finalMatch.push(matches[i]);
            } else if (finalMatch[0][3] > matches[i][3]) {
                finalMatch.pop();
                finalMatch.push(matches[i]);
            }
        }
        return [finalMatch[0][0], finalMatch[0][1]];
    }
    return undefined;
}

    console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)) // [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
    console.log(sumPairs([1, -2, 3, 0, -6, 1], -6))//, [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
    console.log(sumPairs([20, -13, 40], -7))//, undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
    console.log(sumPairs([1, 2, 3, 4, 1, 0], 2))//, [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
    console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))//, [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
    console.log(sumPairs([4, -2, 3, 3, 4], 8))//, [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
    console.log(sumPairs([0, 2, 0], 0))//, [0, 0]//, "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
    console.log(sumPairs([5, 9, 13, -3], 10))//, [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");
