//4. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

let array = [12, 3, 'f', 232, 'maria', 'eugeni'];

displayElements(array);

function displayElements(array) {
	console.log(array.shift());
	
	if (array.length !== 0) {
		displayElements(array);
	}
}