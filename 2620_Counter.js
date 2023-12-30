/*

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

Constraints:

-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"

*/

/*
 * @param {number} n
 * @return {Function} counter
 */

function createCounter(n) {
    let counterValue = n;
  
    return function counter() {
      const result = counterValue;
      counterValue += 1;
      return result;
    };
  }

  var createCounter = function(n) {
    return ()=> n++
};


function createCounter(start) {
    let count = start;
    return function() {
      return count++;
    }
  }

function* createCounter(start) {
  let count = start;
  while (true) {
    yield count++;
  }
}

const counter = createCounter(10);
console.log(counter.next().value); // 10
console.log(counter.next().value); // 11
console.log(counter.next().value); // 12

/*

1. Closures - As I mentioned earlier, closures are an important
concept in JavaScript, and understanding how they work is essential 
for solving the counter function problem. Closures are 
created whenever a function is defined inside another function, and
the inner function has access to the variables and parameters of the 
outer function.

2. Higher-order functions - The counter function is an example of a 
higher-order function, which is a function that takes one or more 
functions as arguments or returns a function as its result. In this 
case, the `createCounter` function takes an initial count as a 
parameter and returns an inner function that increments and returns 
the count on each call.

3. Function expressions - The implementation of the counter function 
using a closure involves using a function expression to define the 
inner function. Function expressions are a way to define a function 
as a value that can be assigned to a variable or passed as an 
argument to another function.

4. Arrow functions - Arrow functions are a shorthand syntax for 
defining functions in JavaScript, and they are commonly used in 
functional programming. The counter function can also be implemented 
using an arrow function, as I showed in one of the previous solutions.

5. Arrays and array methods - In the test cases for the counter 
function problem, the function is called multiple times and the 
results are returned as an array. To implement this, we can use an 
array to store the results and an array method like `map()` to call 
the function multiple times and add the results to the array.

*/