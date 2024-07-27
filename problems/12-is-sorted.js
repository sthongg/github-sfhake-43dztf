/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// solving iteratively
// function isSortedIter(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false
//     }
//   }
//   return true
// }

function isSorted(arr) {
  // Your code here 
  if (arr.length < 2) {
    return true
  }
  if (arr[0] > arr[1]) {
    return false
  }

  // arr.shift() // one method if you don't wanna slice
  // return isSorted(arr)

  return isSorted(arr.slice(1))

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
