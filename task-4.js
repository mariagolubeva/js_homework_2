//4) даны 2 4-хзначных числа с неповторяющимися цифрами, 
//надо определить сколько цифр в этих числах совпадают по значению и позиции 
//и сколько только по значению (3487 и 3794 ---> 1 и 2 )

let number_1 = 3487;
let number_2 = 3790;

let valueMatchesAmount = checkValue(number_1, number_2);
console.log(`Amount of matches by value: ${valueMatchesAmount} `);

let valueAndPositionMatchesAmount = checkValueAndPosition(number_1, number_2);
console.log(`Amount of matches by value and position: ${valueAndPositionMatchesAmount} `);

function checkValue(number_1, number_2) {
    let array_1 = String(number_1).split('');
    let array_2 = String(number_2).split('');
    let amount = 0;
    for (i = 0; i < array_1.length; i++) {
        for (j = 0; j < array_2.length; j++) {
            if(array_1[i] === array_2[j]){
                amount++;
            }
        }
      }
    return amount;
  }

  function checkValueAndPosition(number_1, number_2) {
    let array_1 = String(number_1).split('');
    let array_2 = String(number_2).split('');
    let amount = 0;
    for (i = 0; i < array_1.length; i++) {
            if(array_1[i] === array_2[i]){
                amount++;
        }
      }
    return amount;
  }