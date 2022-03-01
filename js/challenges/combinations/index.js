// --- Directions

function combinations(ar) {
  if (ar.length === 0) { return [[]] }; // base case

  const [head, ...rest] = ar;

  const combinationsWithoutHead = combinations(rest);

  
  const combinationsWithHead = [];

  combinationsWithoutHead.forEach( c => {
    const combinationWithHead = [...c, head];
    combinationsWithHead.push(combinationWithHead);
  });

  // console.log(`${head}: ${combinationsWithoutHead.join(' - ')}`);
  // console.log(`${head}: ${combinationsWithHead.join(' - ')}`);

	return [...combinationsWithoutHead, ...combinationsWithHead];
}

// console.log(combinations('abcd'.split('')))

module.exports = combinations;
