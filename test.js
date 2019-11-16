const gameOfLife = require("./main.js");

test("when a cell has less than 2 neighbours the cell dies", () => {
	let board = [false, false, false,
		     true, true, false,
		     false, false, false]
	let expectedBoard = [false, false, false,
			     false, false, false,
			     false, false, false]
	const result = gameOfLife(board);

	expect(result).toEqual(expectedBoard);
});

test("when a cell has less than 2 neighbours the cell dies", () => {
	let board = [false, false, false,
		     false, true, true,
		     false, false, false]
	let expectedBoard = [false, false, false,
			     false, false, false,
			     false, false, false]

	const result = gameOfLife(board);

	expect(result).toEqual(expectedBoard);

});

test("when a cell has 2 or 3 neighbours it lives", () => {
	let board = [true, false, false,
	             false, true, false,
		     false, false, true]
	let expectedBoard = [false, false, false,
			     false, true, false,
			     false, false, false]
	
	const result = gameOfLife(board);
	
	expect(result).toEqual(expectedBoard);

});

