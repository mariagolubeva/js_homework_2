//3) записать в массив ряд фибаначи начиная с N члена с длинной массива M

let number = 5;
let length = 7;
let array = [];
createArray(array, number, length);
console.log(array);

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function createArray(array, number, length) {
    let nextNumberValue = fib(number);
    for (i = 0; i < length; i++) {
        array.push(nextNumberValue);
        nextNumberValue = fib(number + 1);
        number++;
      }
  }