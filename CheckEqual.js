//#region Check two objects are equal or not, includes type
//these three function below are all recursive function
/**
 * @description Check two objects are equal or not, includes type
 * @param {String|Number|Array|JSON} objA
 * @param {String|Number|Array|JSON} objB
 * @returns {Boolean} equal or not
 * @author Janden Ma
 * @version 1.0.0
 */
export const checkEqual = (objA, objB) => {
  //if either of A and B is empty or undefined, return objA===objB
  if (!objA || !objB) return objA === objB;
  //if type of A isn't equal type of B, needn't compare more and return false
  if (typeof objA !== typeof objB) return false;
  //if types of A and B are object
  if (typeof objA === "object") {
    let _objectAIsArray = true,
      _objectBIsArray = true;
    //if obj has length property, it means that it is an array
    if (!Object.prototype.hasOwnProperty.call(objA, "length"))
      _objectAIsArray = false;
    if (!Object.prototype.hasOwnProperty.call(objB, "length"))
      _objectBIsArray = false;
    //if _objectAIsArray isn't equal _objectBIsArray, it means one of them is Array, another is Object
    if (_objectAIsArray !== _objectBIsArray) return false;
    //if all of them are array
    if (_objectAIsArray && _objectBIsArray) {
      return checkArrayEqual(objA, objB);
    } else {
      //else all of them are object
      return checkObjectEqual(objA, objB);
    }
  } else {
    return objA === objB;
  }
};

/**
 * @description Check two Arrays are equal or not
 * @param {Array} arrA
 * @param {Array} arrB
 * @returns {Boolean} equal or not
 * @author Janden Ma
 * @version 1.0.0
 */
const checkArrayEqual = (arrA, arrB) => {
  //if the length of arrays are different, needn't compare more and return false
  if (arrA.length !== arrB.length) return false;
  let _equal = true;
  //sort array first
  sortArray(arrA);
  sortArray(arrB);
  for (let i = 0, l = arrA.length; i < l; i++) {
    if (!checkEqual(arrA[i], arrB[i])) {
      _equal = false;
      break;
    }
  }
  return _equal;
};

/**
 * @description Check two Objects are equal or not
 * @param {Object|JSON} objA
 * @param {Object|JSON} objB
 * @returns {Boolean} equal or not
 * @author Janden Ma
 * @version 1.0.0
 */
const checkObjectEqual = (objA, objB) => {
  let _keysA = Object.keys(objA),
    _keysB = Object.keys(objB);
  //if the length of Object keys are different, needn't compare more and return false
  if (_keysA.length !== _keysB.length) return false;
  let _equal = true;
  _keysA.forEach(key => {
    //if key in objA is not in objB, CheckEqual will return false
    if (!checkEqual(objA[key], objB[key])) {
      _equal = false;
    }
  });
  return _equal;
};

/**
 * @description sort the array
 * @param {Array} arr the array which needs to be sorted
 * @author Janden Ma
 * @version 1.0.0
 */
const sortArray = arr => {
  arr.sort((a, b) => {
    //if type of neighboring items in array are different, needn't sort
    if (typeof a !== typeof b) return 0;
    //if type of items in array are number or string, sort ascending
    if (typeof a === "number") return a - b;
    if (typeof a === "string") {
      let _a = a.toUpperCase(),
        _b = b.toUpperCase();
      if (_a < _b) return -1;
      if (_a > _b) return 1;
      return 0;
    }
    //other types of neighboring items in array, needn't sort
    return 0;
  });
};
//#endregion
