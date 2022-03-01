//3. Дан массив с числами [1, -2, 3, 0, 4, -5, 6, -11]. Оставьте в нем только положительные числа. 
//Затем извлеките квадратный корень и этих чисел

let array = [1, -2, 3, 0, 4, -5, 6, -11];

function changeArray(array){
    let newArray = [];
        array.filter(number => number > 0).forEach(function(item){
            newArray.push(Math.sqrt(item))
          });
return newArray;
}

console.log(changeArray(array));