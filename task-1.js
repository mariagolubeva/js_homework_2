//1. Замыканием сделайте функцию, которая считает и выводит количество своих вызовов.

function getAmountOfCalls(){
    let count = 1;
    return function getCount(){
        console.log(count);
        count++;
    }
}

let number = getAmountOfCalls();
number();
number();
number();
number();