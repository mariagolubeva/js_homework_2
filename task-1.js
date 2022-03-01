//1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

let array = [1, 4, 7, 12, 8, 3];

console.log(`Initial array: ${array} `);
let newArray = reverseArray(array);
console.log(`Reversed array: ${newArray} `);

function reverseArray(array) {
  return array.reverse();
}

//переопределение reverse
function reverseArrayoOverridden(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
      }
    return newArray;
  }
