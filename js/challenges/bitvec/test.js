const BitVector = require('./index');

test('buildBitVector function is defined', () => {
  expect(BitVector).toBeDefined();
});

describe('has a static size, established on construction', () => {
	const bv = new BitVector(3);

	test('can return its length', () => {
		expect(bv.length()).toEqual(3);
	});

	test('setting an element outside range throws', () => {
		expect(() => {
			bv.set(5);
		}).toThrow('index out of range');
	})
});

describe('set, get, unset, clear', () => {
	const bv = new BitVector(100);

	test('indices are 0 by default', () => {
		expect(bv.get(0)).toEqual(0);
		expect(bv.get(31)).toEqual(0);
		expect(bv.get(32)).toEqual(0);
		expect(bv.get(64)).toEqual(0);
		expect(bv.get(65)).toEqual(0);
	});

	test('indices can be set', () => {
		bv.clear();
		bv.set(0);
		bv.set(32);
		bv.set(65);
		expect(bv.get(0)).toEqual(1);
		expect(bv.get(1)).toEqual(0);

		expect(bv.get(31)).toEqual(0);
		expect(bv.get(32)).toEqual(1);
		expect(bv.get(33)).toEqual(0);

		expect(bv.get(64)).toEqual(0);
		expect(bv.get(65)).toEqual(1);
		expect(bv.get(66)).toEqual(0);
	});

	test('setting is idempotent', () => {
		bv.clear();
		bv.set(65);
		bv.set(65);
		expect(bv.get(64)).toEqual(0);
		expect(bv.get(65)).toEqual(1);
		expect(bv.get(66)).toEqual(0);
	});

	test('indices can be unset', () => {
		bv.set(32);
		expect(bv.get(32)).toEqual(1);
		bv.unset(32);
		expect(bv.get(32)).toEqual(0);
	});

	test('the vector can be reset to 0s', () => {
		bv.set(1);
		bv.clear();
		expect(bv.get(1)).toEqual(0);
	});

		bv.set(1);
});
