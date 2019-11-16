
function gameOfLife(seed) {
	
	var nextState = []

	for (let row = 0;  row < seed.length; row++) {
		
		for (let cell = 0; cell < row.length; cell++) {

			var numberOfNeighbours = 0
			var rightNeighbour = seed[row][cell+1]
			var rightDownNeighbour = seed[row][cell+4]
			var downNeighbour = seed[row][cell+3]
			var leftDownNeighbour = seed[row][cell+2]
			var leftNeighbour = seed[row][cell-1]
			var topLeftNeighbour = seed[row][cell-4]
			var topNeighbour = seed[row][cell-3]
			var topRightNeighbour = seed[row][cell-2]

			if (rightNeighbour === "😎" ) {
				numberOfNeighbours++;
			} 
			if (rightDownNeighbour === "😎") {
				numberOfNeighbours++;
			}
			if (downNeighbour === "😎") {
				numberOfNeighbours++;
			}
			if (leftDownNeighbour === "😎") {
				numberOfNeighbours++;
			}
			if (topLeftNeighbour === "😎") {
				numberOfNeighbours++;
			}
			if (topNeighbour === "😎") {
				numberOfNeighbours++;
			}
			if (topRightNeighbour === "😎") {
				numberOfNeighbours++;
			}

			var cellAlive;

			if (numberOfNeighbours <2) {
				cellAlive = "😇"
			} else if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
				cellAlive = "😎";
			}

			nextState.push(cellAlive)
		}
	}

	console.log(seed)
	console.log("dfgjhdghhu")
	console.log(nextState)
	console.log("😄")


	return nextState 

}

module.exports = gameOfLife;
