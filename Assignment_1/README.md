# 11318179 
## Tettey Michael Perry

###  Task 1

Created a ``processArray`` function that takes an array of numbers as arguments.
It then maps each  `number` in the array and returns the square of the number if it is `odd` or the tripled number if it is `even`.
It terminates if the array is null or empty and returns an array of the squared and tripled numbers if its not.




### Task 2
Created a ``formatArrayStrings`` function that takes an array of strings and the processed array from ``Task 1`` as arguments.
It then maps each  `string` in the array of strings against a corresponding index in the array of numbers and returns the `capitalized string` if the number is `odd` or a `lower case string` if it the number is `even`.
It terminates if both arrays are null or empty or not of the same length and returns an array of the `capitalized and lowercase strings`.

### Task 3

Created a ``createUserProfile`` function that takes an array of strings that was used as argument in `Task 2` and the returned formatted strings array that were also returned form `Task 2` as arguments.
It then maps each  `name` in the array of strings against a corresponding index in the array of formatted Strings and returns an array of objects of the form 
```js
let userProfile = {
    id : index + 1,
    origninalName: name,
    modifiedName: formattedStrings[index],
}
```
The `id` is always incremented by one, `originalName` is from the array of strings and `modifiedName` is from the array of formatted strings.
It terminates if both arrays are null or empty or not of the same length and returns an array of the `userProfile` objects.