const products = [
  {name: "cherry", price: 1.50, quantity: 0, productId: 100, image: "images/cherry.jpg"},
  {name: "orange", price: 2.75, quantity: 0, productId: 101, image: "images/orange.jpg"},
  {name: "strawberry", price: 3.20, quantity: 0, productId: 102, image: "images/strawberry.jpg"}
];

const cart = [];

function addProductToCart(productId) {
  if (productId === 100){
    cart.push(products[0])}
  else if (productId === 101) {
    cart.push(products[1])}
  else if (productId === 102) {
    cart.push(products[2])
    }
  }

//function findById(){
  //const addedProduct  
  //let cartItems = '';
 // let product0 = product[0]['productId'];
//  -should get the correct product based on the productId
  //- should then increase the product's quantity
  //- if the product is not already in the cart, add it to the cart


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/


module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}