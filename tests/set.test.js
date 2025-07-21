import { strict as assert } from 'node:assert'
import set from '../src/set.js'

const obj = {}

set(obj, 'key1', 'value1')
assert.deepEqual(obj.key1, 'value1', 'Функция работает неверно!')
// if (obj.key1 !== 'value1') {
//   throw new Error('Функция работает неверно!')
// }

set(obj, 'key1', 'next value')
assert.deepEqual(obj.key1, 'next value', 'Функция работает неверно!')
// if (obj.key1 !== 'next value') {
//   throw new Error('Функция работает неверно!')
// }

console.log('Все тесты пройдены!')