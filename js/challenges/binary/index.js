// find the index of an element in an array using
// a binary search technique


const indexOf = (val, ar) => {
	let lower = 0;
	let upper = ar.length - 1;

	while (upper >= lower) {
		let mid = lower + Math.floor((upper-lower) / 2);
		if (ar[mid] === val) {
			return mid;
		}
		if (ar[mid] > val) {
			upper = mid - 1;
		}
		if (ar[mid] < val) {
			lower = mid + 1;
		}
	} 
	
	return -1;
}


// const googleDatabase = [
// 	'cats.com',
// 	'souprecipes.com',
// 	'flowers.com',
// 	'catpictures.com',
// 	'myfavoritecats.com',
// 	'animals.com',
// 	'icanhazcatz.com'
// ]

// const googleSearch = (searchInput, db=googleDatabase) => {
// 	const matches = db.filter( website => {
// 		return website.includes(searchInput);
// 	})
// 	return matches.length > 3 ? matches.slice(0,3) : matches;
// }
// // console.log(googleSearch('cat'));


// const makeValidator = function(rules) {
// 	return (password) => {
// 		for(const rule of rules) {
// 			if(!rule(password)) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	}
// };

module.exports = {
	indexOf
};