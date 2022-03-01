//6) удалить из массива все повторяющиеся элементы

//let array = [1, 4, 5, 12, 12, 4, 7, 1, 12, 13, 7, 12, 8, 3, 12, 4, 4, 7, 4];
let array = ['maria', 'alex', 'eugeni', 'maria', 'maria', 'alex'];

console.log(`Initial array: ${array} `);
removeRepetitions(array);
console.log(`New array: ${array} `);

function removeRepetitions(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++){
                if (array[i] === array[j]) {
                    array.splice(j, 1);
                    j--;
                  }
            }
        }
      
  }
