const binarySearch = require('./index');

describe('binarySearch', () => {

	test('binarySearch is a function', () => {
		expect(typeof binarySearch).toEqual('function');
	  });

	// do a binary search five different ways(!)
	it('returns -1, when array is empty', () => {
		expect(binarySearch(3, [])).toBe(-1);
	});

	it('returns -1, when not present', () => {
		expect(binarySearch(3, [1])).toBe(-1);
		expect(binarySearch(0, [1, 3, 5])).toBe(-1);
		expect(binarySearch(2, [1, 3, 5])).toBe(-1);
		expect(binarySearch(4, [1, 3, 5])).toBe(-1);
		expect(binarySearch(6, [1, 3, 5])).toBe(-1);
		expect(binarySearch(0, [1, 3, 5, 7])).toBe(-1);
		expect(binarySearch(2, [1, 3, 5, 7])).toBe(-1);
		expect(binarySearch(4, [1, 3, 5, 7])).toBe(-1);
		expect(binarySearch(6, [1, 3, 5, 7])).toBe(-1);
		expect(binarySearch(8, [1, 3, 5, 7])).toBe(-1);
	});

	it('finds binarySearch a value in an array, when present', () => {

		expect(binarySearch(1, [1])).toBe(0);
	
		expect(binarySearch(1, [1, 3, 5])).toBe(0);
		expect(binarySearch(3, [1, 3, 5])).toBe(1);
		expect(binarySearch(5, [1, 3, 5])).toBe(2);

		expect(binarySearch(1, [1, 3, 5, 7])).toBe(0);
		expect(binarySearch(3, [1, 3, 5, 7])).toBe(1);
		expect(binarySearch(5, [1, 3, 5, 7])).toBe(2);
		expect(binarySearch(7, [1, 3, 5, 7])).toBe(3);

		expect(binarySearch(13, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])).toBe(13);
	});

});
