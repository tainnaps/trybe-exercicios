import { Callback } from './types';

function myFilter<T>(arr: T[], callback: Callback<T>): T[] {
  const returnedArr: T[] = [];

  for (let i: number = 0; i < arr.length; i += 1) {
    const isTrue: boolean = callback(arr[i], i, arr);

    if (isTrue) {
      returnedArr.push(arr[i]);
    }
  }

  return returnedArr;
}

console.log(myFilter<number>([2, 3, 5, 7, 8], (item, index, arr) => item >= 5 && item < 8));

console.log(myFilter<string>(['Joana', 'Elize'], (item, index, arr) => !item.includes('a')));

console.log(myFilter<string | number>(['Joana', 1], (item, index, arr) => item != 1));
