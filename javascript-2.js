function shop() {
  let stock = [
    { name: "product 1", price: 10 },
    { name: "product 2", price: 20 },
    { name: "product 3", price: 30 },
    { name: "product 4", price: 40 },
    { name: "product 5", price: 50 },
    { name: "product 6", price: 60 },
    { name: "product 7", price: 70 },
  ];
  console.log(stock);
  console.log(`There are ${stock.length} products in stock.`);
  let cart = [];
  let my_Cart = stock.concat(cart);
  console.log(my_Cart);
  console.log(`You have ${my_Cart.length} products in your cart.`)
  my_Cart.push('product 8');
  console.log(my_Cart);
  return function() {
    if(my_Cart.length > 7) {
      console.log(`There are no more products to be added.`);
    } else {
      console.log(`You have ${my_Cart.length} products in your cart.`);
    }
  };
}
const shopping = shop();
shopping();