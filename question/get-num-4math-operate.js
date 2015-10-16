/*
  {
    add: [343, 32, 234, 32],
    sub: [243, 44, 12, 4],
    multi: [4, 12, 4],
    div: [13, 434, 314]
  }

  上記のようなプロパティをもつオブジェクトを第2引数にとり、第1引数で渡された数値に対して、
  プロパティそれぞれに対応する四則演算を、その値である数値、
  または数値が格納された配列それぞれで行いその結果を返す

  小数点以下は切り捨てる

  @param {Number} number
  @param {Object} object
  @returns {Number}
*/

export default function(number, object) {
  const result = objectReduce(object, (returnValue, val, key) => {
    const operator = mapOperator(key);
    if (Array.isArray(val)) {
      return val.reduce((result, num) => {
        return eval(`${result} ${operator} ${num}`);
      }, returnValue);
    }

    return eval(`${returnValue} ${operator} ${val}`);
  }, number);

  return Math.floor(result);
}

function objectReduce(object, callback, initialValue, thisArg = null) {
  return Object.keys(object).reduce((returnValue, currentKey, i) => {
    return callback.call(thisArg, returnValue, object[currentKey], currentKey, i, object);
  }, initialValue);
}

function mapOperator(keyword) {
  switch (keyword) {
  case 'add':
    return '+';
  case 'sub':
    return '-';
  case 'multi':
    return '*';
  case 'div':
    return '/';
  }
}
