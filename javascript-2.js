
function shop() {
  let stock = [
    { name: "product 1", price: 15 },
    { name: "product 2", price: 10 },
    { name: "product 3", price: 20 },
    { name: "product 4", price: 25 },
    { name: "product 5", price: 17 },
    { name: "product 6", price: 16 },
    { name: "product 7", price: 16 },
  ];
  console.log(stock.length);
  console.log(`There are ${stock.length} products in stock.`);
  let cart = [];
  return function() {
    cart.push(stock);
    console.log(stock.length);
    console.log(`You have ${stock.length} products in your cart.`);
    cart.push(stock.length++);
    console.log(`There are no more products to be added.`);
  };
}
const shopping = shop();
shopping();