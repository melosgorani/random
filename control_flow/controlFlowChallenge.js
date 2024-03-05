let number = 10;
if(number % 2 === 0){
    console.log(number + ' is even')
} else {
    console.log(number + ' is odd')
};

let age = 24;

if(age <= 18){
    console.log('You are a minor')
} else if (age <= 65){
    console.log('You are an adult')
} else if (age >= 65){
    console.log('You are a senior citizen')
};

let letter = 'e';

if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
    console.log('Letter e is a vowel')
} else {
    console.log('Letter e is a consonant')
};

let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;
let largestNum;

if(numberOne > numberTwo && numberOne > numberThree) {
  largestNum = numberOne;
} 
else if(numberTwo > numberOne && numberTwo > numberThree) {
  largestNum = numberTwo;
} 
else{
  largestNum = numberThree;
}

console.log(largestNum);


let password = 'Test1233';
const regex = new RegExp('\^[A-Za-z0-9\]+$');

if(password.length <= 8) {
    console.log('Password is too short')
};
if(regex.test(password)){
    console.log('Password accepted')
};
if(password !== 'Test1233'){
    console.log('Password is rejected')
};
