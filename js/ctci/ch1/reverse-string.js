// reverse a string
function reverseString(str) {
	return str.split('').reduce( (reversed, char) => char + reversed, '')
}

module.exports = reverseString