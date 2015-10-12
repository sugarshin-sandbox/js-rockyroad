/*
  {
    a: 100,
    b: 10,
    c: 101,
    d: 10
  }

  上記のような、オブジェクトのkeyと値を逆にして新しいオブジェクトを返す。
  上記の場合は、
    {
      10: ['b', 'd'],
      100: ['a'],
      101: ['c']
    }
  というオブジェクトが返る。

  @param {Object} object
  @returns {Object}
*/
import 'babel-core/polyfill';
export default function(object) {
  return objectReduce(object, (result, currentVal, currentKey, i, keys) => {
    if (result[currentVal]) {
      result[currentVal].add(currentKey);
    } else {
      result[currentVal] = new Set([currentKey]);
    }

    if (i === keys.length - 1) {
      return objectReduce(result, (ret, val, key) => {
        ret[key] = Array.from(val);
        return ret;
      }, {});
    }

    return result;
  }, {});
}

function objectReduce(object, callback, initialValue, thisArg = null) {
  return Object.keys(object).reduce((returnValue, currentKey, i, keys) => {
    return callback.call(thisArg, returnValue, object[currentKey], currentKey, i, keys, object);
  }, initialValue);
}
