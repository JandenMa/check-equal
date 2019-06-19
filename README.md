# check-equal

> This is a Javascript library to check two objects whether equal (includes type), object can be array/string/number/JSON/function, etc.

## Install

- npm

  ```sh
  npm install check-equal --save
  ```

- yarn

  ```sh
  yarn add check-equal --save
  ```

## Change Logs

- v1.0.0 - v1.0.3: First published version, it can be used in frontend
- v1.0.4 - v1.0.6: Updated webpack config, now it can be used in frontend and backend

## Usage

- Import

- ```javascript
  import { checkEqual } from 'check-equal'
  ```

- Require

  ```javascript
  const { checkEqual } = require('check-equal')
  ```

## Example

```javascript
//Check two numbers

checkEqual(1, 1) //true

checkEqual(1, 2) //false

checkEqual(1.2, 1.2) //true

//Check two strings

checkEqual('1', '1') //true

checkEqual('1', '2') //false

checkEqual('Tom', 'Jerry') //false

//Check different types

checkEqual('1', 1) //false

checkEqual('false', false) //false

//Check two booleans

checkEqual(true, true) //true

checkEqual(true, false) //false

//Check two arrays (will sort array items automatically, ignore the array which has different types)

checkEqual([1, 2, 3], [1, 2, 3]) //true

checkEqual([1, 2, 3], [3, 1, 2]) //true

checkEqual([1, 2, 3], [1, 2]) //false (different length)

checkEqual(['a', 'b', 'c'], ['a', 'b', 'c']) //true

checkEqual(['a', 'b', 'c'], ['b', 'c', 'a']) //true

checkEqual(['a', 'b', 'c'], ['a', 'B', 'c']) //false

//Check two Objects

checkEqual(
  { a: '1', b: 2, c: false, d: [1, 3, 5, 7], e: { x: 'x', y: 'y' } },

  { a: '1', b: 2, c: false, d: [1, 3, 5, 7], e: { x: 'x', y: 'y' } }
) //true

checkEqual(
  { a: '1', b: 2, c: false, d: [3, 7, 1, 5] },

  { a: '1', b: 2, c: false, d: [1, 3, 5, 7] }
) //true

checkEqual(
  { a: '1', b: 2, c: false, d: [1, 3, 5, 7], e: { x: 'x', y: 'y', z: 'z' } },

  { a: '1', b: 2, c: false, d: [1, 3, 5, 7], e: { x: 'x', y: 'y' } }
) //false

checkEqual({ a: '2', b: 2, c: false }, { a: '1', b: 2, c: false }) //false

checkEqual({ a: '1', b: 2, c: true }, { a: '1', b: 2, c: false }) //false

checkEqual({ a: '1', b: 0, c: false }, { a: '1', b: 2, c: false }) //false
```
