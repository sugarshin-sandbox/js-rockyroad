/*
  いくつかの number を要素にもつ配列を引数にとり
  それらを結合したときの最大値を返す

  @param {Array} array
  @returns {Number}
*/

export default function(array) {
  return Math.max(...permute(array).map(array => +array.join('')));
}

function permute(array, permuted = [], usedCharacters = []) {
  array.forEach((num, i, thisArray) => {
    usedCharacters.push(num);
    thisArray.splice(i, 1);
    if (thisArray.length === 0) {
      permuted.push(usedCharacters.slice());
    }
    permute(thisArray, permuted, usedCharacters);
    thisArray.splice(i, 0, num);
    usedCharacters.pop();
  });
  return permuted
};
