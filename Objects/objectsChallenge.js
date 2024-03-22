let employee = {
    name : 'Melo',
    age : 26,
    salary : '1000',
    jobTitle : 'Server',
    takeBreak : function(){
        console.log('Melo is on break')
    }
};
console.log(employee);
employee.takeBreak();

let bankAccount = {
    accNumber : '55555',
    balance : 2000,
    accType : 'Checking',
    deposit : function(){
        console.log('Funds deposited')
    },
    withDraw : function(){
        console.log('Funds withdrawn')
    },
    transfer : function(){
        console.log('Funds transfered')
    }
}; 

console.log(bankAccount);
bankAccount.deposit();
bankAccount.withDraw();
bankAccount.transfer();

let dog = {
    breed : 'Labrador',
    age : 2,
    color : 'Brown',
    bark : function(){
        console.log('Dog barks')
    },
    fetch : function(){
        console.log('Fetches the ball')
    }
};

console.log(dog);
dog.bark();
dog.fetch();

let product = {
    name : 'Shovel',
    price : 10,
    manufacturer : 'USA',
    category : 'Gardening',
    description : 'Used for digging'
};

product.price = product.price + 10;
delete product.description;

console.log(product);

let blogPosts = [
    {
        title : "Harry Potter",
        author : "J.K.Rowling",
        date : "2001-02-28",
        content : "Fictional story"
    },
    {
        title : "Java Script 101",
        authot : "Melos Gorani",
        date : "2024-03-21",
        content : "Java Script lessons"
    }
];

let isEmpty = blogPosts.date

if(typeof isEmpty === "field" && isEmpty.length === 0){
    console.log("The field is empty");
} else if (isEmpty === null){
    console.log("The field is null");
} else {
    console.log("The field is not empty or null")
}