//2) найти максимальное значение числа в массиве ([3,67,15...])

let array = [56, 1, 4, 69, 7, 12, 8, 3, 37];

let maxValue = maxArrayValue(array);
console.log(`Max array value: ${maxValue} `);

function maxArrayValue(array) {
    let maxValue = array[0];
    for (i = 0; i < array.length; i++) {
        if(array[i] > maxValue)
        {
            maxValue = array[i];
        }
      }
    return maxValue;
  }