//1) Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. 
//У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

let firstPlayerPoints = 0;
let secondPlayerPoints = 0;

for(let i = 0; i < 3; i++){
    firstPlayerPoints += getRandomValue(1,6);
    secondPlayerPoints += getRandomValue(1,6);
}

console.log(`First player points = ${firstPlayerPoints}`); 
console.log(`Second player points = ${secondPlayerPoints}`);

result(firstPlayerPoints, secondPlayerPoints);

function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function result(firstPlayerScore, secondPlayerScore){
    if(firstPlayerScore > secondPlayerScore){
        console.log(`First player wins`);
    } else if (firstPlayerScore === secondPlayerScore){
        console.log(`Friendship wins`);
    } else {
        console.log(`Second player wins`);
    }
}
