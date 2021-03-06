const antwerp = require("./antwerp")
const chicago = require("./chicago")
const toronto = require("./toronto")
const san_francisco = require("./san_francisco")

module.exports.mocks = {
  "51.219448,4.402464": antwerp,
  "43.653225,-79.383186": toronto,
  "41.878113,-87.629799": chicago,
  "37.7749295,-122.4194155": san_francisco,
};
    
const mockImages = [
  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg",
,
  // "https://foodiesfeed.com/wp-content/uploads/2016/02/beef-burger-with-homemade-baked-potatoes.webp",
  // "https://cdn-bpjnb.nitrocdn.com/OYIwvoehFpjfwbFiMuywPdKkECkPgdOp/assets/static/optimized/rev-6bb020f/wp-content/uploads/2020/04/gin-and-tonic-cocktail-with-orange-and-thyme.jpg",
  // "https://foodiesfeed.com/wp-content/uploads/2020/07/english-breakfast.jpg",
  // "https://foodiesfeed.com/wp-content/uploads/2019/01/orange-cheese-pancakes.webp",
  // "https://foodiesfeed.com/wp-content/uploads/2015/03/basic-italian-pizza-margherita.webp",
  // "https://foodiesfeed.com/wp-content/uploads/2019/07/neapolitan-pizza-margherita.jpg",
  // "https://foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes.webp",
];

module.exports.addMockImages=(restaurant)=>{

  const randomImage =[Math.ceil(Math.random()*(mockImages.length-1))];
// //   restaurant.photos= restaurant.photos.map((p)=>{
// //   // Math.ceil() rounded a number upward to its nearest integer
// //  //  Math.ceil(5.4) =6
// //   return mockImages[Math.ceil(Math.random()*(mockImages.length-1))]
    restaurant.photos =mockImages[randomImage]
    return restaurant;
}