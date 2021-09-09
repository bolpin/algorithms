// determine if all chars in a string are unique
// What if you can't use additional data structures?
export function allUnique(str) {
    if (str.length < 2) { return true; }
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}


module.exports = allUnique;


