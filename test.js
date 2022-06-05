const test = require('ava');
const {getInventory} = require('./inventoryData');
const {productMostInStock, inventoryClusters, recommendProducts} = require('./inventoryProcessor');

test('Gets the product with most availability in stock', (t) => {
    const PRODUCT_ID_WITH_MAX_STOCK = 18;
    t.is(productMostInStock().productId, PRODUCT_ID_WITH_MAX_STOCK);
});


test('Groups products by categories', (t) => {
    const DISTINCT_CATEGORY_GROUPS_COUNT = 8
    const producedClusters = inventoryClusters();
    const producedClustersJoined = producedClusters
        .map(cluster => cluster.map(product => product.productId).sort().join(','));

    t.is(producedClusters.length, DISTINCT_CATEGORY_GROUPS_COUNT);

    const expectedClustersProductIds = [
        [4],
        [1, 2],
        [3, 5, 6],
        [7, 8 ,9],
        [10, 11],
        [12, 16],
        [13, 15, 18, 20],
        [14, 17, 19]
    ];
    let clustersMatch = true;
    for (const expectedCluster of expectedClustersProductIds) {
        const expectedClusterJoined = expectedCluster.sort().join(',');
        clustersMatch = producedClustersJoined.indexOf(expectedClusterJoined) === -1 ? false: clustersMatch;
    }
    t.truthy(clustersMatch);
});

// test('Recommends products at random with less or equal combined calories of the input', (t) => {
//     const MAX_COMBINED_CALORIES = 1300;
//     const recommendedProducts = recommendProducts(MAX_COMBINED_CALORIES);
//     const caloriesCombined = recommendedProducts.reduce((sum, currentProduct) => sum + currentProduct.servingCalories, 0);
//     t.truthy(caloriesCombined <= MAX_COMBINED_CALORIES);
// });

// test('Recommends products creates the list randomly', (t) => {
//     const MAX_COMBINED_CALORIES = 1300;
//     const recommendedProductsFirstRun = recommendProducts(MAX_COMBINED_CALORIES).map(product => product.productId).sort().join(',');
//     const recommendedProductsSecondRun = recommendProducts(MAX_COMBINED_CALORIES).map(product => product.productId).sort().join(',');
//     t.truthy(recommendedProductsFirstRun !== recommendedProductsSecondRun);
// });
