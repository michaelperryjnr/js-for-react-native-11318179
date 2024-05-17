/**Task 1 */
function processArray(numArray) {
  if (numArray.length <= 0) return;

  let processedArray = numArray.map((number) => {
    if (number % 2 === 0) {
      return number ** 2;
    } else {
      return number * 3;
    }
  });
  return processedArray;
}

/**Task 1 Test */
let numArrayTest = [1,2,3,4,5,6,];
console.log(processArray(numArrayTest));


