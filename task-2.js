//2) Подсчитать как много пятниц 13-го было с 01/01/2000 до сегодня. 
//(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

let day = 0;
let fromDate = new Date(2000, 0, 13);
let toDate = new Date();
let count = 0;

while(fromDate < toDate){
    if(fromDate.getDate() === 13 && fromDate.getDay() === 5){
        count++;
    }
    day++;
    fromDate = new Date(2000, 0, day);
}

console.log(`Fridays 13 amount = ${count}`)