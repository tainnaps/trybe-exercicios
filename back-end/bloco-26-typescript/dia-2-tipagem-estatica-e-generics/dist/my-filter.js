"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myFilter(arr, callback) {
    const returnedArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        const isTrue = callback(arr[i], i, arr);
        if (isTrue) {
            returnedArr.push(arr[i]);
        }
    }
    return returnedArr;
}
console.log(myFilter([2, 3, 5, 7, 8], (item, index, arr) => item >= 5 && item < 8));
console.log(myFilter(['Joana', 'Elize'], (item, index, arr) => !item.includes('a')));
console.log(myFilter(['Joana', 1], (item, index, arr) => item != 1));
