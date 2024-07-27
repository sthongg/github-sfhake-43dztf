/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // Your code here 
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    let currItem = arr[i]

    if(Array.isArray(currItem)) {
      newArr.push(...flatten(currItem))

    } else {
      newArr.push(currItem)
    }
  }
  return newArr
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  