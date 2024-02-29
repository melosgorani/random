let students = ['John', 'Kate', 'Melo', 'Jennifer', 'Jack'];
console.log(students.length);

let poppedValue = students.pop();
console.log(poppedValue);

let count = students.push("Eric");
console.log(count);
console.log(students);

let shiftedValue = students.shift();
console.log(shiftedValue);
console.log(students);

console.log(students.unshift('Jim'));

let newStudents = students.splice(2, 0, 'Jose');
console.log(newStudents);
console.log(students);

console.log(students.includes('Melo'));

console.log(students.reverse());

console.log(students.lastIndexOf('Melo'));

console.log(['John' === 'Jack']);
