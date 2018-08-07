// Select DOM elements
let input = document.getElementById('sizePicker');
let canvas = document.getElementById('pixelCanvas');

//Event listener for the submit button
input.addEventListener('submit', function(e) {
    e.preventDefault();
    let width = document.getElementById('inputWeight').value;
	let height = document.getElementById('inputHeight').value;
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
                cell.style.backgroundColor = document.getElementById('colorPicker').value;
            });
            row.appendChild(cell);
        }
    }
}