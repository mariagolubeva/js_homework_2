//5) сортировка массива по возрастанию/убыванию

let array = [1, 4, 7, 12, 8, 3];

console.log(`Initial array: ${array} `);
let ascSortedArray = ascSort(array);
console.log(`Array sorted in ascending order: ${ascSortedArray} `);
let descSortedArray = descSort(array);
console.log(`Array sorted in descending order: ${descSortedArray} `);

//по возрастанию
function ascSort(array) {
    return array.sort(function(a, b) {
        return a - b;
      });;
  }

//по убыванию
function descSort(array) {
    return array.sort(function(a, b) {
        return b - a;
      });;
  }

//по возрастанию - переопределенная
function ascSortOverridden(array) {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
          }
        }
      }
  }

//по убыванию - переопределенная
function descSortOverridden(array) {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (array[i] < array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
          }
        }
      }
  }