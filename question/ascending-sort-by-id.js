/*
  [
    { id: 4, name: 'sugar' },
    { id: 2, name: 'shin' },
    { id: 7, name: 'shin' },
    ...
  ]

  上記のようなプロパティをもつオブジェクトを要素にもつ配列を引数にとり、
  `id` の値で昇順でオブジェクトをソートした配列の新しい参照を返す

  @param {Array} array
  @returns {Array}
*/

export default function(array) {
  return array.slice().sort((a, b) => a.id - b.id);
}
