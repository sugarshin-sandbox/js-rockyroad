/*
  'a.b.c' のような文字列をもとに
  オブジェクトの対象プロパティをフィルタリングした新しいオブジェクトを返す

  const o = {
    a: {
      b: {
        c: 2,
        f: ''
      },
      e: [5, '']
    },
    d: 3
  };
  const r = func(o, 'a.b.c');
  console.log(r); // =>
    {
      a: {
        b: {
          f: ''
        },
        e: [5, '']
      },
      d: 3
    }

  @param {Object} object
  @param {String} keyPath
  @returns {Object}
*/

export default function(object, keyPath) {
  const keys = keyPathToArray(keyPath);
  const ret = cloneDeep(object);
  delete getValue(ret, keys.filter((k, i, array) => i !== array.length - 1))[keys.pop()];
  return ret;
}

function keyPathToArray(keyPath) {
  const keys = keyPath.split('.');
  let ret = [];
  let index = 0;
  for (let i = 0, l = keys.length; i < l; i++) {
    let key = keys[i];
    if (/[a-zA-Z]+\[[0-9]+\]$/.test(key)) {
      ret[index++] = key.slice(0, key.indexOf('['));
      ret[index++] = key.slice(key.indexOf('[') + 1, key.indexOf(']'));
    } else {
      ret[index++] = key;
    }
  }
  return ret;
}

function getValue(object, keys) {
  return keys.reduce((result, key) => (result[key]), object);
}

function cloneDeep(object) {
  return Object.keys(object).reduce((result, key) => {
    if (isObject(object[key])) {
      result[key] = clone(object[key]);
    } else if (Array.isArray(object[key])) {
      result[key] = object[key].map(el => el);
    } else {
      result[key] = object[key];
    }
    return result;
  }, {});
}

function clone(object) {
  return Object.keys(object).reduce((result, key) => {
    result[key] = object[key];
    return result;
  }, {});
}

function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}
