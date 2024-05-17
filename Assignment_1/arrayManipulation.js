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


/**Task 2*/
function formatArrayStrings(arrayOfStrings, processedArray) {
    if(arrayOfStrings.length <= 0 || processedArray.length <= 0 || arrayOfStrings.length !== processedArray.length) return;

    let formattedStrings = arrayOfStrings.map((string, index)=> {
        if(processedArray[index] % 2 === 0){
            return string.toUpperCase();
        }
        return string.toLowerCase();
    });
    return formattedStrings;
};

/**Task 2 Test*/
let processedArray = processArray(numArrayTest);
let rawStrings = ["miChael", "perRy", "Nii", "jOmO", "oSaH", "TeTTey"];
console.log(formatArrayStrings(rawStrings, processedArray));
