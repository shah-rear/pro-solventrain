/*Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
*/


// Approach 1: Using a for loop and Array.push
// One way to solve this problem is to iterate through the input array using a for loop, and for each element, call the filtering function with two arguments - the element itself and its index.
// If the filtering function returns a truthy value, add the element to a result array using the push method.

var filter = function(arr, fn) {
    return arr.map((value, index) => {
      if (fn(value, index)) {
        return value;
      }
    }).reduce((result, value) => {
      if (value !== undefined) {
        result.push(value);
      }
      return result;
    }, []);
  };

// Approach 2: Using Array.reduce
// Another way to solve this problem is to use the Array.reduce method. We can use Array.reduce to accumulate the elements that satisfy the filtering function into a new array.

var filter = function(arr, fn) {
    return arr.reduce((result, value, index) => {
      if (fn(value, index)) {
        result.push(value);
      }
      return result;
    }, []);
  };

// Approach 3: Using Array.forEach

// We can also solve this problem using the Array.forEach method. We can use Array.forEach to iterate through the input array, and for each element, call the filtering function with two arguments - the element itself and its index.
// If the filtering function returns a truthy value, add the element to a result array using the push method.


var filter = function(arr, fn) {
  const result = [];
  arr.forEach((value, index) => {
    if (fn(value, index)) {
      result.push(value);
    }
  });
  return result;
};

// Approach 4: Using Array.map and Array.reduce
// We can also use the Array.map method to create a new array containing only the elements that satisfy the filtering function, and then use Array.reduce to remove any undefined elements from the result array.

var filter = function(arr, fn) {
  return arr.map((value, index) => {
    if (fn(value, index)) {
      return value;
    }
  }).reduce((result, value) => {
    if (value !== undefined) {
      result.push(value);
    }
    return result;
  }, []);
};

// Approach 5: Using Array.flatMap()

// The flatMap method applies a function to each element of an array and flattens the result into a new array.
// In this case, the function passed to flatMap takes two arguments, the current element i and its index j, and uses a ternary operator to check if fn(i, j) is truthy. If it is, the function returns an array containing i, otherwise it returns an empty array.
// The flatMap method flattens these arrays into a new array containing only the elements that satisfies our filtering function.

var filter = function(arr, fn) {
    return arr.flatMap((i, j) => fn(i, j) ? [i] : []);
};