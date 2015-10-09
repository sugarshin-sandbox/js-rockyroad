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
  array.forEach((v, i) => {
    let el = array.splice(i, 1)[0];
    usedCharacters.push(el);
    if (array.length === 0) {
      permuted.push(usedCharacters.slice());
    }
    permute(array, permuted, usedCharacters);
    array.splice(i, 0, el);
    usedCharacters.pop();
  });
  return permuted
};
