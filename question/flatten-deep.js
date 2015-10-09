/*
  [
    [],
    [[[]]],
    [[]]
    ...
  ]

  多次元配列を引数に受け取り、
  1次元配列に変換した配列の新しい参照を返す

  @param {Array} array
  @returns {Array}
*/

export default function(array) {
  return flattenDeep(array);
}

function flattenDeep(array, result) {
  result = result || [];
  array.forEach(el => {
    if (Array.isArray(el)) {
      flattenDeep(el, result);
    } else {
      result.push(el);
    }
  });
  return result;
}
