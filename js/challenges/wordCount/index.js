// note, we can save space and time if we know we're
// only going to need the count of one word:
// We obviously have to look at each word in the
// array, so in O(ar.length) we can just do a linear
// count of occurrances

// This function takes extra space and time for the 
// benefit of having later O(1) lookups of any word
// we're interested in
const buildWordCounts = function(ar){
  const wordCounts = {};
  for (let word of ar) {
    wordCounts[word] = wordCounts[word]+1 || 1;
  }
  return wordCounts;
}

const wordCount = function(ar, word) {
  const wordCounts = buildWordCounts(ar);
  return wordCounts[word] || 0;
}


module.exports = { wordCount };
