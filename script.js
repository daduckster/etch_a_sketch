// const gridContainer = document.getElementById('grid-container');
// const gridCell = document.createElement('div');
// gridCell.innerHTML = 'TEXT';
// gridCell.classList.add('grid-cell');
// gridContainer.appendChild(gridCell);

// const gridSize = document.getElementById('grid-size-input').value;
// console.log(gridSize);

// const gridSize = document.getElementById('grid-size-input');

const gridSizeInput = document.getElementById('grid-size-input');
const gridContainer = document.getElementById('grid-container');
const refreshButton = document.getElementById('refresh-button');

refreshButton.addEventListener('click', () => {
	gridContainer.innerHTML = '';
	gridSizeInput.value = '';
});

gridSizeInput.addEventListener('keypress', e => {
	if (e.code === 'Enter') {
		e.preventDefault();

		if (gridSizeInput.value > 50) {
			alert('Your number should be between 1 and 50');
			return;
		}

		let gridSize = e.target.value ** 2;

		gridContainer.innerHTML = '';

		gridContainer.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
		gridContainer.style.gridTemplateRows = `repeat(${e.target.value}, 1fr)`;

		for (i = 1; i <= gridSize; i++) {
			const gridCell = document.createElement('div');
			gridCell.classList.add('grid-cell');
			gridCell.addEventListener('mouseover', e => removeColor(e));
			gridCell.addEventListener('mouseleave', e => changeColor(e));
			gridContainer.appendChild(gridCell);
		}

		//=== VERSION WITH FLEXBOX, WORKS SHITTY=====
		// const gridRow = e.target.value;
		// const gridSize = +gridRow * +gridRow;
		// for (let i = 0; i < +gridSize; i++) {
		// 	gridCell = document.createElement('div');
		// 	gridCell.classList.add('grid-cell');
		// 	gridCell.style.width = `${(gridContainer.clientWidth - 1) / +gridRow}px`;
		// 	gridCell.style.height = `${(gridContainer.clientHeight - 1) / +gridRow}px`;
		// 	gridContainer.appendChild(gridCell);
		// }
	}
});

function removeColor(e) {
	const gridCell = e.target;
	gridCell.classList.remove('grid-cell');
	gridCell.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

function changeColor(e) {
	const gridCell = e.target;
	// gridCell.classList.remove('grid-cell');
	// gridCell.classList.add('grid-cell-changed');
	let colors = [ '#0ff0fc', '#fc74fd', '#21fc0d', '#ccff00', '#bf00ff', '#55ffff', '#8f00f1', '#fffc00' ];
	let randomColor = colors[Math.floor(Math.random() * colors.length)];
	// let r = Math.floor(Math.random() * 256);
	// let g = Math.floor(Math.random() * 256);
	// let b = Math.floor(Math.random() * 256);
	// let randomColor = `rgb(${r}, ${g}, ${b})`;

	// // let h = Math.floor(Math.random() * 30) + 180;
	// let h = 60;
	// let s = 100;
	// let l = 70;
	// let randomColor = `hsl(${h}deg, ${s}%, ${l}%)`;

	gridCell.style.backgroundColor = randomColor;
}
