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
	let colors = [ '#0ff0fc', '#fc74fd', '#21fc0d', '#ccff00', '#bf00ff', '#55ffff', '#8f00f1', '#fffc00' ];
	let randomColor = colors[Math.floor(Math.random() * colors.length)];
	gridCell.style.backgroundColor = randomColor;
}
