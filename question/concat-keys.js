/*
  [
    { animal: 'tiger', fruits: 'apple' },
    { animal: 'flamingo', fruits: 'grape' },
    { animal: 'elephant', fruits: 'peach' }
  ]

  上記のような、配列に含まれるオブジェクトのkeyごとに値をまとめた新しい配列を返す。
  また、返す値の各keyに対する配列は昇順でソートする。
  上記の場合は、
  [
    {
      animal: ['elephant', 'flamingo', 'tiger'],
      fruits: ['apple', 'grape', 'peach']
    }
  ]
  という配列が返る。

  @param {Array} array
  @returns {Array}
*/
import 'babel-core/polyfill';
export default function(array) {
  const ret = array.reduce((result, currentObject) => {
    objectForEach(currentObject, (val, key) => {
      const values = getValues(val);
      result[key] = result[key] || []
      values.forEach(v => {
        if (!result[key].includes(v)) {
          result[key].push(v);
          result[key].sort();
        }
      });
    });
    return result;
  }, {});

  return [ret];
}

function getValues(value) {
  if (typeof value === 'string') return [value];
  return Object.values(value);
}

function objectForEach(object, callback, thisArg = null) {
  Object.keys(object).forEach((key, i, keys) => {
    callback.call(thisArg, object[key], key, i, keys, object);
  });
}
