// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function getRandomNumber(){
    return Math.floor(Math.random() * (5 -1 +1) +1);
}

function getTimeout(){
    return new Promise((res, rej) => {
        let random = getRandomNumber();
        setTimeout(() => {
            console.log(random);
            res(random);
        }, random * 1000)
        })
}

let promise1 = getTimeout();
let promise2 = getTimeout();
let promise3 = getTimeout();

Promise.all([promise1, promise2, promise3])
.then((data) => {
    let sum = data.reduce((acc, next) => {
        return acc + next;
    })
    console.log(sum);
    return sum;
})