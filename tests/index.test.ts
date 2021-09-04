const { yr, logic, asyncLogic, domCreate } = require('../prob.js');

import {ex} from '../esmmodule';

test('test', () => {
  expect(yr(1, 0)).toBeCloseTo(0);
  expect(yr(1, 1)).toBe(-1);
})

describe('logic', () => {
  test('logic', () => {
    expect(logic('123456')).toBe('654321');
  })
  test('logic', () => {
    expect(logic('1234')).toBe('1234');
  })
})

describe('async function', () => {
  test('123', (done) => {
    asyncLogic((res: any) => {
      expect(res).toBe(123);
      done();
    })
  })
})

test('esm', () => {
  expect(ex(3)).toBe(12*3);
})

test('dom', () => {
  let el = domCreate();
  expect(el).toBeInstanceOf(HTMLButtonElement);
  expect(el.textContent).toBe('1234');
})