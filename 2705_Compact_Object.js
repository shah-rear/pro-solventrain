/*

2705. Compact Objec

Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 
Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.
Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 

Constraints:

obj is a valid JSON object
2 <= JSON.stringify(obj).length <= 106

*/

// Solution: 1

function compactObject(input) {
    if (Array.isArray(input)) {
      // If input is an array, filter out falsy values recursively
      return input
        .filter((value) => {
          return value !== null && value !== undefined && value !== false && value !== 0;
        })
        .map((value) => compactObject(value));
    } else if (typeof input === "object" && input !== null) {
      // If input is an object, recursively remove falsy values
      const result = {};
      for (const key in input) {
        const value = input[key];
        if (value !== null && value !== undefined && value !== false) {
          result[key] = compactObject(value);
        }
      }
      return result;
    } else {
      // For non-array and non-object values, return as is
      return input;
    }
  }

// Solution: 2

  var compactObject_02 = function(obj) {
    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            const tempArray = [];
            for (let index = 0; index < obj.length; index++) {
                if (Boolean(obj[index])) {
                    tempArray.push(compactObject_02(obj[index]));
                }
            }
            return tempArray;
        } else {
            const tempObject = {};
            for (const key in obj) {
                if (Boolean(obj[key])) {
                    tempObject[key] = compactObject_02(obj[key]);
                }
            }
            return tempObject;
        }
    }
    return obj;
};