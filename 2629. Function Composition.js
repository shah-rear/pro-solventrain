/*

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

 

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
 

Constraints:

-1000 <= x <= 1000
0 <= functions.length <= 1000
all functions accept and return a single integer

*/


var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

/*
The reduceRight method is used to iterate over the array of functions from right to left.
The accumulator (acc) is initially set to the input value (x), and each function in the array is applied to the accumulator.
The result is the output of the composition of functions.
*/

// Using Array.prototype.reduce():

var compose = (functions) => {
  return functions.reduce((acc, fn) => {
    return (x) => acc(fn(x));
  }, (x) => x);
};

// Using the spread operator and Function.prototype.bind():

var compose = (functions) => {
  const composed = functions.reduceRight((acc, fn) => {
    return acc.bind(null, fn);
  }, (x) => x);
  return composed;
};

// Using the spread operator and Function.prototype.call():

var compose = (functions) => {
  const composed = (x) => {
    return functions.reduceRight((acc, fn) => {
      return fn.call(null, acc);
    }, x);
  };
  return composed;
};

// Using the spread operator and Function.prototype.apply():

var compose = (functions) => {
  const composed = functions.reduceRight((prevFn, nextFn) => {
    return function(x) {
      return prevFn.apply(null, [nextFn(x)]);
    };
  }, function(x) { return x; });
  
  return composed;
};
// Using recursion:

var compose = (functions) => {
  if (functions.length === 0) {
    return (x) => x;
  } else if (functions.length === 1) {
    return functions[0];
  } else {
    const [fn, ...rest] = functions;
    return (x) => fn(compose(rest)(x));
  }
};