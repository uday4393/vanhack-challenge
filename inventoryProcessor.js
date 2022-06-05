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
    let categories={};
    products.map(item => {
        if(categories[item.categories]){
            categories[item.categories].push(item);
        }else categories[item.categories] = [item]
    })
    for(const item in categories){
        result.push(categories[item])
    }
    return result;
};
const recommendProducts = (maxCalories) => {
    if(maxCalories > 1500) throw new Error('Max Calories should be less than 1500')
    // Shuffle Array
    let currentCalCount = 0;
    let result = [];
    const shuffledProducts = suffle(products);
    for(const item in shuffledProducts){
        if(currentCalCount + shuffledProducts[item].servingCalories > maxCalories) break;
        if(currentCalCount + shuffledProducts[item].servingCalories < maxCalories) { 
            result.push(shuffledProducts[item]);
            currentCalCount += shuffledProducts[item].servingCalories;
        }
    }
    return result;
};

const suffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

exports.productMostInStock = productMostInStock;
exports.inventoryClusters = inventoryClusters;
exports.recommendProducts = recommendProducts;

