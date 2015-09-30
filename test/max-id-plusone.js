import assert from 'power-assert';
import func from '../question/max-id-plusone';

describe('max-id-plusone', () => {

  it('is a function', () => {
    assert.deepEqual(typeof func, 'function', 'max-id-plusone.js is a function');
  });

  it('case 1', () => {
    const actual = func([
      {
        id: 2,
        name: 'other'
      },
      {
        id: 4,
        name: 'other'
      },
      {
        id: 10,
        name: 'other'
      }
    ]);

    const expected = 11;

    assert(actual === expected);
  });

  it('case 2', () => {
    const actual = func([
      {
        id: 0,
        name: 'other'
      },
      {
        id: -2,
        name: 'other'
      },
      {
        id: 3,
        name: 'other'
      }
    ]);

    const expected = 4;

    assert(actual === expected);
  });

});
