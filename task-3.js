// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться
// результата getNum, затем возводить его в квадрат и выводить на экран.

function getRandomNumber(){
    return Math.floor(Math.random() * (5 -1 +1) +1);
}

function getNum1(){
    return new Promise((res, rej) => {
        let random = getRandomNumber();
        setTimeout(() => {
            console.log(random);
            res(random);
        }, 3000)
        })
}

async function getSum(){
    let result = await getNum1();
    let resultSqrt = Math.pow(result, 2);
    console.log(resultSqrt);
    return resultSqrt;
}

getSum();