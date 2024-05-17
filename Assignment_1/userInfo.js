import {formatArrayStrings} from "./arrayManipulation.js";

function createUserProfile(arrayOfStrings, formattedStrings) {
  if (
    arrayOfStrings.length <= 0 ||
    formattedStrings.length <= 0 ||
    arrayOfStrings.length !== formattedStrings.length
  )
    return;
  let userProfiles = arrayOfStrings.map((name, index) => {
    return {
      id: index + 1,
      originalName: name,
      modifiedName: formattedStrings[index],
    };
  });
  return userProfiles;
}

let rawStrings = ["miChael", "perRy", "Nii", "jOmO", "oSaH", "TeTTey"];
let numArray = [1, 2, 3, 4, 5, 6];
let formattedStrings = formatArrayStrings(rawStrings, numArray);
console.log(createUserProfile(rawStrings, formattedStrings));
