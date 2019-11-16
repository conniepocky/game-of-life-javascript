
function gameOfLife(seed) {
	
	var cell = 4
	var numberOfNeighbours = 0
	var rightNeighbour = seed[cell+1]
	var rightDownNeighbour = seed[cell+4]
	var downNeighbour = seed[cell+3]
	var leftDownNeighbour = seed[cell+2]
	var leftNeighbour = seed[cell-1]
	var topLeftNeighbour = seed[cell-4]
	var topNeighbour = seed[cell-3]
	var topRightNeighbour = seed[cell-2]

	if (rightNeighbour == true ) {
		numberOfNeighbours++;
	} 
	if (rightDownNeighbour == true) {
		numberOfNeighbours++;
	}
	if (downNeighbour == true) {
		numberOfNeighbours++;
	}
	if (leftDownNeighbour == true) {
		numberOfNeighbours++;
	}
	if (topLeftNeighbour == true) {
		numberOfNeighbours++;
	}
	if (topNeighbour == true) {
		numberOfNeighbours++;
	}
	if (topRightNeighbour == true) {
		numberOfNeighbours++;
	}

	var cellAlive;

	if (numberOfNeighbours <2) {
		cellAlive = false
	} else if (numberOfNeighbours == 2 || numberOfNeighbours == 3) {
		cellAlive = true;
	}

	return [false, false, false,
		false, cellAlive, false,
		false, false, false]

}

module.exports = gameOfLife;
