'use strict';

let arr = ['12', '54356', '2352367', '9540', '45', '3212', '934'];
let resultArray = [];
let primeNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith(2) || arr[i].startsWith(4)) {
    resultArray.push(arr[i]);
  }
}

for (let number = 2; number < 100; number++) {
  let flag = true;

  for (let divider = 2; divider < number; divider++) {
    if (number % divider == 0) {
      flag = false;
      break;
    }
  }

  if (flag === true) {
    primeNumbers.push(number);
  }
}

for (let i = 0; i < primeNumbers.length; i++) {
  console.log(`${primeNumbers[i]} - Делители этого числа 1 и ${primeNumbers[i]}`);
}

console.log('Исходный массив:', arr);
console.log('Отфильтрованный массив:', resultArray);