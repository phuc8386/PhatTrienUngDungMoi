//Cau1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

//Cau2
const products = [
  new Product(1, "Laptop Pro", 1500, 10, "Electronics", true),
  new Product(2, "Wireless Mouse", 25, 50, "Accessories", true),
  new Product(3, "Mechanical Keyboard", 120, 25, "Accessories", true),
  new Product(4, "4K Monitor", 400, 0, "Electronics", false),
  new Product(5, "USB-C Hub", 45, 100, "Accessories", true),
  new Product(6, "Smartphone X", 800, 5, "Electronics", false),
];

console.log("All Products:");
console.log(products);

//Cau3
const productNamesAndPrices = products.map(p => ({ name: p.name, price: p.price }));
console.log("Product Names and Prices:");
console.log(productNamesAndPrices);

//Cau4
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("In-Stock Products:");
console.log(inStockProducts);

//Cau5
const hasProductOver30 = products.some(p => p.price > 30);
console.log("Has Product Over $30:");
console.log(hasProductOver30); 

//Cau6
const areAllAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);
  console.log("Are All Accessories Available:");
console.log(areAllAccessoriesAvailable); 

//Cau7
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("Total Inventory Value:");
console.log(`Total value: ${totalInventoryValue}`);

//Cau8
console.log("Product Details:");
for (const product of products) {
  console.log(`${product.name} – ${product.category} – ${product.isAvailable ? 'Available' : 'Not Available'}`);
}


//Cau9
console.log("First Product Properties:");
const firstProduct = products[0];
for (const key in firstProduct) {
  if (Object.hasOwnProperty.call(firstProduct, key)) {
    console.log(`Property: ${key} - Value: ${firstProduct[key]}`);
  }
}


//Cau10
const availableInStockProductNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);
console.log("Available In-Stock Product Names:");
console.log(availableInStockProductNames);
