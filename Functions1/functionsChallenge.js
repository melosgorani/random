// 1
function sum(numArray) {
    let add = 0;
    for (let a = 0; a < numArray.length; a++) {
        let Addindex = numArray[a];
        add += Addindex;
    }
    return add;
}

console.log(sum([1, 2, 3, 4]));

// 2
function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseString("hello"));


// 3
function filterAdults(people) {
    return people.filter(person => person.age > 18);
}

let people = [
    { name: 'Alexa', age: 25, gender: 'female'},
    { name: 'John', age: 17, gender: 'male'},
    { name: 'Melo', age: 30, gender: 'male'},
    { name: 'Ron', age: 20, gender: 'male'}
];

console.log(filterAdults(people));


// 4
function filterEvenNumbers(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

let numberArray = [1,2,3,4,5,6,8,35,66];
console.log(filterEvenNumbers(numberArray));


// 5
function filterStringsStartingWithA(array) {
    return array.filter(str => str.charAt(0).toUpperCase() === 'A');
}

let strings = ["Apple", "Banana", "Airplane", "Orange", "Animal"];
console.log(filterStringsStartingWithA(strings)); 


// 6
function filterBooksPublishedAfter2000(books) {
    return books.filter(book => book.published >= 2000).map(book => book.title);
}

let books = [
    { title: 'Book 1', author: 'Author 1', published: 1998 },
    { title: 'Book 2', author: 'Author 2', published: 2005 },
    { title: 'Book 3', author: 'Author 3', published: 1999 },
    { title: 'Book 4', author: 'Author 4', published: 2002 }
];

console.log(filterBooksPublishedAfter2000(books));


// 7
function findLargerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(findLargerNumber(5, 10)); 


// 8
function findSmallestNum(arr) {
    let smallestNum = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
    }
    return smallestNum;
}
let numArray = [32,4,90,22];
console.log(findSmallestNum(numArray));


// 9
let array = ["String", "Array", "Functions"];

function longestString(array) {
    let long1 = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i].length > long1.length) {
            long1 = array[i];
        }
    }
    return long1;
}
console.log(longestString(array));


// 10
function filterStudentsWithGradeA(students) {
    return students.filter(student => student.grade === 'A');
}

let students = [
    { name: 'Melo', grade: 'A' },
    { name: 'John', grade: 'B' },
    { name: 'Jack', grade: 'A' },
    { name: 'David', grade: 'C' }
];

console.log(filterStudentsWithGradeA(students));