# check-equal

> This is a Javascript library to check two objects whether equal (includes type), object can be array/string/number/JSON/function, etc.



## Install

- npm

  ``` sh
  npm install check-equal --save
  ```

- yarn

  ``` sh
  yarn add check-equal --save
  ```



## Usage

- Import

- ``` javascript
  import {CheckEqual} from 'check-equal'
  ```

- Require

  ```javascript
  const {CheckEqual} = require('check-equal')
  ```



## Example

```javascript
//Check two numbers 
CheckEqual(1, 1); //true
CheckEqual(1, 2); //false
CheckEqual(1.2, 1.2); //true

//Check two strings
CheckEqual('1', '1'); //true
CheckEqual('1', '2'); //false
CheckEqual('Tom', 'Jerry'); //false

//Check different types
CheckEqual('1', 1); //false
CheckEqual('false', false); //false

//Check two booleans
CheckEqual(true, true); //true
CheckEqual(true, false); //false

//Check two arrays (will sort array items automatically, ignore the array which has different types)
CheckEqual([1, 2, 3], [1, 2, 3]); //true
CheckEqual([1, 2, 3], [3, 1, 2]); //true
CheckEqual([1, 2, 3], [1, 2]); //false (different length)
CheckEqual(['a', 'b', 'c'], ['a', 'b', 'c']); //true
CheckEqual(['a', 'b', 'c'], ['b', 'c', 'a']); //true
CheckEqual(['a', 'b', 'c'], ['a', 'B', 'c']); //false

//Check two Objects
CheckEqual(
  {a: '1', b: 2, c: false, d:[1, 3, 5, 7], e:{x: 'x', y: 'y'}}, 
  {a: '1', b: 2, c: false, d:[1, 3, 5, 7], e:{x: 'x', y: 'y'}}
); //true
CheckEqual(
  {a: '1', b: 2, c: false, d:[3, 7, 1, 5]}, 
  {a: '1', b: 2, c: false, d:[1, 3, 5, 7]}
); //true
CheckEqual(
  {a: '1', b: 2, c: false, d:[1, 3, 5, 7], e:{x: 'x', y: 'y', z: 'z'}}, 
  {a: '1', b: 2, c: false, d:[1, 3, 5, 7], e:{x: 'x', y: 'y'}}
); //false
CheckEqual({a: '2', b: 2, c: false}, {a: '1', b: 2, c: false}); //false
CheckEqual({a: '1', b: 2, c: true}, {a: '1', b: 2, c: false}); //false
CheckEqual({a: '1', b: 0, c: false}, {a: '1', b: 2, c: false}); //false
```