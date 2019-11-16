const gameOfLife = require("./main.js");

test.skip("when a cell has less than 2 neighbours the cell dies", () => {
	let board = ["😇", "😇", "😇",
		     "😎", "😎", "😇",
		     "😇", "😇", "😇"]
	let expectedBoard = ["😇", "😇", "😇",
			     "😇", "😇", "😇",
			     "😇", "😇", "😇"]
	const result = gameOfLife(board);

	expect(result).toEqual(expectedBoard);
});

test.skip("when a cell has less than 2 neighbours the cell dies", () => {
	let board = ["😇", "😇", "😇",
		     "😇", "😎", "😎",
		     "😇", "😇", "😇"]
	let expectedBoard = ["😇", "😇", "😇",
			     "😇", "😇", "😇",
			     "😇", "😇", "😇"]

	const result = gameOfLife(board);

	expect(result).toEqual(expectedBoard);

});

test("when a cell has 2 or 3 neighbours it lives", () => {
	let board = [["😎", "😇", "😇"],
	             ["😇", "😎", "😇"],
		     ["😇", "😇", "😎"]]
	let expectedBoard = [["😇","😇","😇"],
			     ["😇", "😎","😇"],
			     ["😇","😇","😇"]]
	
	const result = gameOfLife(board);
	
	expect(result).toEqual(expectedBoard);

});
	

