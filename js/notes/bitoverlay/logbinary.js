module.exports = logBinary;

function logBinary(num) {
	const chars = [];
	const keys = [];
	let key = 1;

	// while(num > 0) {
	while(chars.length < 8) {
		if (1 & num) {
			chars.unshift('1');
		} else {
			chars.unshift('_');
		}
		let header = `${key}`;
		header = header.padStart(4);
		keys.push(header);
		key *= 2;
		num = num >> 1;
	}
	// console.log('512 256 128  64  32  16   8   4   2   1')
	console.log(keys.reverse().join(''));
	console.log('   ' + chars.join('   '))
}
