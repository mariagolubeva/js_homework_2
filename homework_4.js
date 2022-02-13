let str_1 = 'Maria';
let str_2 = '7';
let str_3 = '';

let num_1 = 5;
let num_2 = 1;
let num_3 = 0;

let boolean_true = true;
let boolean_false = false;

//Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
console.log("string+boolean: " + (str_1 + boolean_true));
console.log("string+number: " + (str_1 + num_1));
console.log("number+boolean: " + (num_1 + boolean_true));

//Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
console.log("string * boolean: " + (str_1 * boolean_true)); //NaN
console.log("string * number: " + (str_1 * num_1)); //NaN
console.log("string * boolean: " + (str_2 * boolean_true)); 
console.log("string * number: " + (str_2 * num_1)); 
console.log("number * boolean: " + (num_1 * boolean_true));

//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

console.log("string / boolean: " + (str_1 / boolean_true)); //NaN
console.log("string / number: " + (str_1 / num_1)); //NaN
console.log("string / boolean: " + (str_2 / boolean_true)); 
console.log("string / number: " + (str_2 / num_1)); 
console.log("number / boolean: " + (num_1 / boolean_true));
console.log("number / boolean: " + (num_1 / boolean_false)); //Infinity

//Выполнить явное преобразование(number, string, boolean)
console.log(`string to number:  ${parseInt(str_1)} <- type is ${typeof(parseInt(str_1))}`); //NaN
console.log(`string to number:  ${parseInt(str_2)} <- type is ${typeof(parseInt(str_2))}`);
console.log(`boolean to number:  ${Number(boolean_true)} <- type is ${typeof(Number(boolean_true))}`);
console.log(`number to string:  ${num_1.toString()} <- type is ${typeof(num_1.toString())}`);
console.log(`number to string:  ${String(num_1)} <- type is ${typeof(String(num_1))}`);
console.log(`boolean to string:  ${boolean_true.toString()} <- type is ${typeof(boolean_true.toString())}`);
console.log(`string to boolean:  ${Boolean(str_1)} <- type is ${typeof(Boolean(str_1))}`);
console.log(`string to boolean:  ${Boolean(str_3)} <- type is ${typeof(Boolean(str_3))}`);
console.log(`number to boolean:  ${Boolean(num_2)} <- type is ${typeof(Boolean(num_2))}`);
console.log(`number to boolean:  ${Boolean(num_3)} <- type is ${typeof(Boolean(num_3))}`);