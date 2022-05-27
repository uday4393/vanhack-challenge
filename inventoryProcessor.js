const {getInventory} = require("./inventoryData");
const products = getInventory();

const productMostInStock = () => {
    // Get Product with max stock
    let productMostInStock = products[0];
    products.map( item => {
        if(item.instockCount > productMostInStock.instockCount)
            productMostInStock = item;
    })
    return productMostInStock;
};
const inventoryClusters = () => {
    // return array of categories
    let result = [];
    let categories=[];
    
    return result;
};
const recommendProducts = (maxCalories) => {
    // Write code here
};

exports.productMostInStock = productMostInStock;
exports.inventoryClusters = inventoryClusters;
exports.recommendProducts = recommendProducts;

