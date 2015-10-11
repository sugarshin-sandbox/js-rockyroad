/*
  オブジェクトを要素に持つ配列を受け取り、
  第２引数で渡されたオブジェクトのプロパティと値が
  すべて一致するオブジェクトの新しい参照を返す
  見つからない場合は`null`を返す

  @param {Array} array
  @param {Object} object
  @returns {Object}
*/

export default function(array, object) {
  return array.reduce((result, currentObject) => {
    return includesObject(currentObject, object) ? currentObject : result;
  }, null);
}

function includesObject(object, otherObject) {
  const otherObjectKeys = Object.keys(otherObject);
  if (!includesKey(object, otherObjectKeys)) return false;
  for (let key in otherObject) {
    let val = object[key];
    let otherObjectVal = otherObject[key];
    if (Array.isArray(otherObjectVal)) {
      if (!isEqualArray(otherObjectVal, val)) return false;
    } else {
      if (otherObjectVal !== val) return false;
    }
  }
  return true;
}

function includesKey(object, keys) {
  return keys.every(key => Object.keys(object).indexOf(key) > -1);
}

function isEqualArray(value, other) {
  return value.every((el, i) => other[i] === el);
}
