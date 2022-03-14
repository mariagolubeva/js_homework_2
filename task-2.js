// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат
// его работы на экран.

function getRandomNumber(){
    return Math.floor(Math.random() * (5 -1 +1) +1);
}

let count = 1;

function getTimeout(){
    return new Promise((res, rej) => {
        let random = getRandomNumber();
        setTimeout(() => {
            console.log("Random = " + random + " Count = " + count);
            res(count);
            count ++;
        }, random * 1000)
        })
}

let promise1 = getTimeout();
let promise2 = getTimeout();
let promise3 = getTimeout();

Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log(value);
  });