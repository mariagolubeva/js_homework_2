//5. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
//И так, пока сумма не станет однозначным числом (9 и менее). Использовать рекурсию.

let number = 15983;
var sum = 0;

console.log(singleDigitSum(number));

function singleDigitSum(number){
    sum =  digitsSum(number);
    while(true){
        if(sum.toString().length === 1){
            return number;
        } else {
            return digitsSum(sum);
        }
    }
}

function digitsSum(n) {
    n = `${n}`;
    if(n.length === 1){
        return Number(n);
    } else {
        return Number(n[0]) + digitsSum(n.slice(1));
    }
  }


