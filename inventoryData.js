const getInventory = () => {
   return  [
                {
                   productId: 1, // unique product identifier
                   name: 'Mars Bar', // the name of the product
                   producer: 'Mars Co', // the producer of the product
                   categories: ['chocolate', 'energy bar'], // array of categories the product belongs to
                   instockCount: 12, // the amount of the product available in stock
                   servingCalories: 300 // the amount of calories the product has per serving
                },
               {
                   productId: 2,
                   name: 'Chewy',
                   producer: 'Quaker',
                   categories: ['chocolate', 'energy bar'],
                   instockCount: 112,
                   servingCalories: 280
               },
               {
                   productId: 3,
                   name: 'Organic Dark Maple',
                   producer: '365 industries',
                   categories: ['pantry essentials'],
                   instockCount: 50,
                   servingCalories: 200
               },
               {
                   productId: 4,
                   name: 'Sushi box',
                   producer: 'Genji Sushi',
                   categories: ['prepared food'],
                   instockCount: 110,
                   servingCalories: 400
               },
               {
                   productId: 5,
                   name: 'Destination Series Olive Oil',
                   producer: 'California Olive Ranch',
                   categories: ['pantry essentials'],
                   instockCount: 15,
                   servingCalories: 50
               },
               {
                   productId: 6,
                   name: 'Dill Pickles',
                   producer: 'Bubbies',
                   categories: ['pantry essentials'],
                   instockCount: 45,
                   servingCalories: 170
               },
               {
                   productId: 7,
                   name: 'Beef Ribeye Steak',
                   producer: 'Whole Foods Market',
                   categories: ['meat', 'steak'],
                   instockCount: 15,
                   servingCalories: 500
               },
               {
                   productId: 8,
                   name: 'Boneless Beef Steak',
                   producer: 'Whole Foods Market',
                   categories: ['meat', 'steak'],
                   instockCount: 25,
                   servingCalories: 500
               },
               {
                   productId: 9,
                   name: 'Beef Tenderloin Steak',
                   producer: 'Whole Foods Market',
                   categories: ['meat', 'steak'],
                   instockCount: 5,
                   servingCalories: 400
               },
               {
                   productId: 10,
                   name: 'Boneless Chicken Breast',
                   producer: '',
                   categories: ['meat', 'chicken'],
                   instockCount: 500,
                   servingCalories: 350
               },
               {
                   productId: 11,
                   name: 'Chicken Thighs',
                   producer: '',
                   categories: ['meat', 'chicken'],
                   instockCount: 400,
                   servingCalories: 380
               },
               {
                   productId: 12,
                   name: 'Almond Butter',
                   producer: 'Kraft',
                   categories: ['pantry essentials', 'spreads'],
                   instockCount: 56,
                   servingCalories: 400
               },
               {
                   productId: 13,
                   name: 'Kidney beans',
                   producer: '365 Wholefoods',
                   categories: ['pantry essentials', 'beans'],
                   instockCount: 33,
                   servingCalories: 400
               },
               {
                   productId: 14,
                   name: 'Salsa',
                   producer: 'Heinz',
                   categories: ['pantry essentials', 'sauces'],
                   instockCount: 1,
                   servingCalories: 300
               },
               {
                   productId: 15,
                   name: 'Chickpeas',
                   producer: '365 Wholefoods',
                   categories: ['pantry essentials', 'beans'],
                   instockCount: 400,
                   servingCalories: 340
               },
               {
                   productId: 16,
                   name: 'Creamy Peanut Butter',
                   producer: 'Kraft',
                   categories: ['pantry essentials', 'spreads'],
                   instockCount: 56,
                   servingCalories: 500
               },
               {
                   productId: 17,
                   name: 'Ketchup',
                   producer: 'Heinz',
                   categories: ['pantry essentials', 'sauces'],
                   instockCount: 554,
                   servingCalories: 350
               },
               {
                   productId: 18,
                   name: 'Black beans',
                   producer: '365 Wholefoods',
                   categories: ['pantry essentials', 'beans'],
                   instockCount: 999,
                   servingCalories: 320
               },
               {
                   productId: 19,
                   name: 'Kitchen Mayo',
                   producer: 'Heinz',
                   categories: ['pantry essentials', 'sauces'],
                   instockCount: 4,
                   servingCalories: 200
               },
               {
                   productId: 20,
                   name: 'Garbanzo Beans',
                   producer: '365 Wholefoods',
                   categories: ['pantry essentials', 'beans'],
                   instockCount: 657,
                   servingCalories: 300
               }
    ];
}
exports.getInventory = getInventory;
