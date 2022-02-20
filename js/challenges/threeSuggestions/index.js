// 'use strict';
// --- Directions

// Complete the 'suggestUpToThree' function below.

// The function is expected to return an array of string arrays.
// Inputs:
//  1. repository (string array)
//  2. userQuery (string)
  
function buildWordMap(repository) {
    let result = {};
    if (!Array.isArray(repository)) { return result; }

    for (let word of repository) {
        if (typeof word !== 'string' || word.length < 2) {
            break;
        }
        for (let i = word.length; i >= 2; i--) {
            const lowerWord = word.toLowerCase();
            const key = lowerWord.slice(0,i);
            if (!result[key]) {
                result[key] = [lowerWord];
            } else {
                result[key].push(lowerWord);
            }
            //console.log(result)
        }
    }
    return result;
}

function suggestUpToThree(repository, customerQuery) {
    const result = [];
    if (typeof customerQuery !== 'string' || customerQuery.length < 2) {
        return result;
    }
    customerQuery = customerQuery.toLowerCase();
        
    const wordMap = buildWordMap(repository);
    // console.log(wordMap);
    
    for (let i = 2; i <= customerQuery.length; i++) {
        const key = customerQuery.slice(0, i);
        const suggestions = wordMap[key];
        if (suggestions) {
            result.push(suggestions.sort().slice(0,3));
        }       
    }
    // console.log(customerQuery);
    // console.log(result.join('-'))
    return result;
}


module.exports = { suggestUpToThree };
