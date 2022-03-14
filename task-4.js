// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который
// с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с
// помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2,
// а затем найдет сумму полученных чисел и выведет на экран.

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

function getNum1(){
    return new Promise((res, rej) => {
        let random = getRandomNumber(1,5);
        setTimeout(() => {
            console.log(random);
            res(random);
        }, 3000)
        })
}

function getNum2(){
    return new Promise((res, rej) => {
        let random = getRandomNumber(6, 10);
        setTimeout(() => {
            console.log(random);
            res(random);
        }, 5000)
        })
}

async function getSum(){
    let result1 = await getNum1();
    let result2 = await getNum2();
    console.log(result1 + result2);
}

getSum();