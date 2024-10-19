// Функція отримує масив товарів і повертає всі товари, які мають ціну нижчу за 100 або вищу за 500
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js."

const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 250 },
  { name: 'Shirt', price: 30 },
  { name: 'Watch', price: 120 },
  { name: 'Tablet', price: 550 },
  { name: 'Shoes', price: 75 },
  { name: 'PlayStation', price: 590 }
];

function getProductsNotInPriceRange(products) {
  if (!Array.isArray(products)) {
    throw new Error("Input must be an array of products");
  }

  return products
    .filter(product => {
      if (typeof product !== 'object' || typeof product.price !== 'number') {
        throw new Error("Each item in the array must be an object with a valid 'price' property");
      }
      return product.price < 100 || product.price > 500;
    })
    .map(product => product.name); 
}

console.log(getProductsNotInPriceRange(products));
module.exports = getProductsNotInPriceRange;