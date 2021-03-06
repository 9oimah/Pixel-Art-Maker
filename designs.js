// Select DOM elements
let input = document.getElementById('sizePicker');
let canvas = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');
let inputtedWidth = document.getElementById('inputWeight');
let inputtedHeight = document.getElementById('inputHeight');

//Event listener for the submit button
input.addEventListener('submit', function(e) {
	e.preventDefault();
	let width = inputtedWidth.value;
	let height = inputtedHeight.value;
	makeGrid(width, height);
});

//Event listener for the reset button
input.addEventListener('reset', function(e) {
	if (canvas.innerHTML) {
		canvas.innerHTML = '';
	}
});

function makeGrid(width, height) {
	//Clears the canvas
	if (canvas.innerHTML) {
		canvas.innerHTML = '';
	}
	
	//Nested loop to draw the canvas
	for (let x = 0; x < height; x++) {
		let row = document.createElement('tr');
		canvas.appendChild(row);
		
		for (let y = 0; y < width; y++) {
			let cell = document.createElement('td');
			cell.addEventListener('click', function() {
				cell.style.backgroundColor = color.value;
			});
			row.appendChild(cell);
		}
	}
}