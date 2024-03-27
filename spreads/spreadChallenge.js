let arrayOne = [1,2,3];
let arrayTwo = [4,5,6];
let combinedArray = [...arrayOne, ...arrayTwo];

console.log(combinedArray);

let originalArray = ['banana', 'apple', 'cherry'];
let newArray = ['orange', 'strawberry'];
let allArray = [...newArray, ...originalArray];

console.log(allArray);

let originalObj = {name : 'John', age : 30};
let newObj = {...originalObj, gender : 'Male'};

console.log(newObj);

let numbersArray = [4,8,1,6,9,2];
let arrLength = numbersArray.length;
let largest = numbersArray[0];

for(let i = 0; i < arrLength; i++){
    if(numbersArray[i] > largest){
        largest = numbersArray[i];
    }
}
console.log(largest);

let originalArr = ['banana', 'apple', 'cherry'];

let sortedArray = originalArr.sort();
console.log(sortedArray);