let products = [
    { name: "Jeans", price: 30, quantity: 5},
    { name: "Hats", price: 10, quantity: 10},
    { name: "Sweaters", price: 25, quantity: 3},
    { name: "Socks", price: 5, quantity: 4},
    { name: "Gloves", price: 15, quantity: 15 }
];

for(let value of products){
    console.log(value.name, ":" + "$" + value.price);
}

let cheapestProduct = products[0];
let productsLength = products.Length;
let i = 1;

while(i < productsLength) {
    if (products[i].price < cheapestProduct.price){
        cheapestProduct = products[i];
    }
    i++
}
console.log(`Cheapest product -> ${cheapestProduct.name} with price -> $${cheapestProduct.price}`);

let total = 0;
for(let i = 0; i < products.length; i++){
    total += products[i].price;
}
console.log(`Total value of all products : ${total}`)

for(i in products){
    console.log(products[i]);
}

let numbers = 100;

for (let i = 1; i <= numbers; i++) {

        if (((i % 3) == 0) && ((i % 5) == 0)) 
        {
                console.log("fizzbuzz");
        } else if ((i % 5) == 0) 
        {
                console.log("fizz");
        } else if ((i % 7) == 0) 
        {
                console.log("buzz");
        } else {
                console.log(i); 
        }
}
