//3) Напишите код который будет разбивать число на заданное количество рандомных чисел 
//сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части 
//(сумма трех чисел будет равна 15) (4,6,5)
// а) числа изначальное число целое, числа разбивки - целые (4,6,5)
// б) числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

//a
let integerNumber = getRandomIntValue(10, 20);
console.log(`\nNumber = ${integerNumber}`);
let partsAmount = getRandomIntValue(3, 6);
console.log(`Parts amount = ${partsAmount}`);
splitNumberIntoIntParts(integerNumber, partsAmount);

//b
let fractionalNumber = getRandomFractValue(10, 20);
console.log(`\nNumber = ${fractionalNumber}`);
let partsAmount2 = getRandomIntValue(3, 6);
console.log(`Parts amount = ${partsAmount2}`);
splitNumberIntoFractParts(fractionalNumber, partsAmount2);

//метод для получения рандомного целого числа
function getRandomIntValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//метод для получения рандомного дробного числа (с двумя знаками после запятой)
function getRandomFractValue(min, max) {
    return Math.floor((Math.random() * (max - min) + min) * 100) / 100;;
  }

//метод для разделения числа NUMBER на PARTSAMOUNT целых чисел
function splitNumberIntoIntParts(number, partsAmount) {
    let integerNumbersArray = new Array(partsAmount);
    let rest = number;
    for(let i = 0; i < partsAmount; i++){
        //если число - последнее число массива, то оно равняется остатку
        if(i === partsAmount - 1){
            integerNumbersArray[i] = rest; 
            //console.log(numbersArray[i]);
        }
        //если это все остальные числа, они вычисляются рандомно, 
        //но не должны превышать количество оставшихся для расчета в массиве чисел
        //(чтобы следующие в массиве числа могли быть как минимум единицами)
        else {
            integerNumbersArray[i] = getRandomIntValue(1, rest - partsAmount + i);
            //console.log(numbersArray[i]);
            rest -= integerNumbersArray[i];
        }
    }
    console.log(`Integer array = ${integerNumbersArray}`);
}

//метод для разделения числа NUMBER на PARTSAMOUNT дробных чисел
function splitNumberIntoFractParts(number, partsAmount) {
    let fractionslNumbersArray = new Array(partsAmount);
    let rest = number;
    for(let i = 0; i < partsAmount; i++){
        //если число - последнее число массива, то оно равняется остатку
        if(i === partsAmount - 1){
            fractionslNumbersArray[i] = Math.floor(rest * 100) / 100;
            //console.log(numbersArray[i]);
        } 
        //если это все остальные числа, они вычисляются рандомно, 
        //но не должны превышать количество оставшихся для расчета в массиве чисел * 0,01
        //(чтобы следующие в массиве числа могли быть как минимум 0,01)
        else {
            fractionslNumbersArray[i] = getRandomFractValue(1, rest - (partsAmount + i) * 0,01);
            //console.log(numbersArray[i]);
            rest -= fractionslNumbersArray[i];
        }
    }
    console.log(`Fractional array = ${fractionslNumbersArray}`);
}