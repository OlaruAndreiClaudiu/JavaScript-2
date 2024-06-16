let cart = [
    { id: 1, name: "prod 1", price: 12 },
    { id: 2, name: "prod 2", price: 20.99 },
  ];
  
  function getProductsFromCart() {
    return cart;
  }
  
  function countProducts() {
    return cart.length;
  }
  
  function getNumberOfProductsFromCart() {
    return `${countProducts()} products.`;
  }
  
  // {id:12, name:'prod 23', price:123}
  function addProductToCart(product) {
    cart.push(product);
  
    return getUpdatedCart();
  }
  
  function getUpdatedCart() {
    console.table(cart);
  
    return;
  }
  
  function removeProductFromCart(productId) {
    cart = cart.filter((product) => product.id !== productId);
  
    return getUpdatedCart();
  }
  
  function getTotal() {
    const initialTotalValue = 0; // initially, the total is 0 RON
  
    const calculationLogic = (total, product) => {
      const calculatedTotal = Math.round(total + product.price);
  
      return calculatedTotal;
    };
  
    return cart.reduce(calculationLogic, initialTotalValue);
  }
  
  function getCheckoutInfo() {
    const total = getTotal();
    const numberOfProducts = countProducts();
    const productsList = getProductsFromCart();
    const description = "Your cart contains:" + productsList;
  
    //   const info = {
    //     total: getTotal(),
    //     numberOfProducts: countProducts(),
    //     productsList: getProductsFromCart(),
    //     descriptionMessage: "Your cart contains:" + productsList,
    //   };
  
    // OR
  
    //   const info = {
    //     total,
    //     numberOfProducts,
    //     productsList,
    //     descriptionMessage: description,
    //   };
  
    return {
      total,
      numberOfProducts,
      productsList,
      descriptionMessage: description,
    };
  }