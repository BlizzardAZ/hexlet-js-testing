import { strict as assert } from 'node:assert'
import capitalize from '../src/capitalize.js'

assert.equal(capitalize('hello'), 'Hello', 'Функция работает неверно!')
assert.equal(capitalize(''), '', 'Функция работает неверно!')

console.log('Все тесты пройдены!')
