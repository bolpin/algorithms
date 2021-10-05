const {
	indexOf
} = require("./index")

describe('indexOf', () => {
	// do a binary search five different ways(!)
	it('returns -1, when array is empty', () => {
		expect(indexOf(3, [])).toBe(-1);
	});

	it('returns -1, when not present', () => {
		expect(indexOf(3, [1])).toBe(-1);
		expect(indexOf(0, [1, 3, 5])).toBe(-1);
		expect(indexOf(2, [1, 3, 5])).toBe(-1);
		expect(indexOf(4, [1, 3, 5])).toBe(-1);
		expect(indexOf(6, [1, 3, 5])).toBe(-1);
		expect(indexOf(0, [1, 3, 5, 7])).toBe(-1);
		expect(indexOf(2, [1, 3, 5, 7])).toBe(-1);
		expect(indexOf(4, [1, 3, 5, 7])).toBe(-1);
		expect(indexOf(6, [1, 3, 5, 7])).toBe(-1);
		expect(indexOf(8, [1, 3, 5, 7])).toBe(-1);
	});

	it('finds indexOf a value in an array, when present', () => {

		expect(indexOf(1, [1])).toBe(0);
	
		expect(indexOf(1, [1, 3, 5])).toBe(0);
		expect(indexOf(3, [1, 3, 5])).toBe(1);
		expect(indexOf(5, [1, 3, 5])).toBe(2);

		expect(indexOf(1, [1, 3, 5, 7])).toBe(0);
		expect(indexOf(3, [1, 3, 5, 7])).toBe(1);
		expect(indexOf(5, [1, 3, 5, 7])).toBe(2);
		expect(indexOf(7, [1, 3, 5, 7])).toBe(3);

		expect(indexOf(13, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])).toBe(13);
	});

});
