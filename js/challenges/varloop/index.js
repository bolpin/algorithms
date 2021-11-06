// --- Directions
// consider using var vs let for declaring a loop variable
// 


function loop3() {
	let fns = [];
	for (var i = 0; i < 3; i++) {
		fns.push(function(i) {
			return function(){
			console.log(i);
			return;
		}}(i)
	)}

	for (let fn of fns) {
		fn();
	}
}


loop3();
module.exports = loop3;