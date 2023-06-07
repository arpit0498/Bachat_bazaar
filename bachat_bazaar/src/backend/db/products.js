import { v4 as uuid } from "uuid";



/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */



export const products = [
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61Hj3PwqMbL._SX569_.jpg",
    title: 'Vitamin C',
    inStock: true,
    rating: 3.5,
    price: 499,
    productDesc: " Natural Vitamin C and Zinc for Immunity - 60 ",
    categoryName: 'supplements',
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71s0tJ-iLtL._SX569_.jpg",
    title: 'Complan',
    inStock: true,
    rating: 4.5,
    price: 600,
    productDesc: "Complan is a nutrition and health drink ",
    categoryName: 'nutrition',
  },
  {
    _id: uuid(),

    title: 'Muscleblaze',
    img: "https://m.media-amazon.com/images/I/613bnSZnZ9L._SX569_.jpg",
    inStock: true,
    rating: 5.0,
    price: 899,
    productDesc: "HIGH PROTEIN FOR SUPERIOR MUSCLE GAINS",
    categoryName: 'nutrition',
  },
  {
    _id: uuid(),

    title: "ActiveX ",
    img: "https://m.media-amazon.com/images/I/51jFob5N3RL._SX569_.jpg",
    inStock: true,
    rating: 4.7,
    price: 700,
    productDesc: "Smart Weighing Bathroom Scale ",
    categoryName: 'equipments',
  },
  {
    _id: uuid(),

    title: 'Creatine',
    img: "https://m.media-amazon.com/images/I/51lKJfKikhL._AC_UL600_FMwebp_QL65_.jpg",
    inStock: true,
    rating: 3.8,
    price: 399,
    productDesc: "Nutrition Creatine Monohydrate 100gms",
    categoryName: 'supplements',
  },
  {
    _id: uuid(),

    title: 'Saffola Oats',
    img: "https://m.media-amazon.com/images/I/51798gwdj+L._SY300_SX300_.jpg",
    inStock: true,
    rating: 4.2,
    price: 499,
    productDesc: "High Protein & Fibre | Healthy Cereal for weight loss",
    categoryName: 'nutrition',
  },
  {
    _id: uuid(),

    title: 'Pintola Butter',
    img: "https://m.media-amazon.com/images/I/71NANIn2jhL._SX679_.jpg",
    inStock: true,
    rating: 5.0,
    price: 699,
    productDesc: "All Natural Peanut Butter (Crunchy) | Unsweetened |",
    categoryName: 'nutrition',
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/91i9rdecBvL._SX679_.jpg",
    title: 'Museli',
    inStock: true,
    rating: 2.7,
    price: 250,
    productDesc: "High in Vitamins B1, B2, B3, B6, Folate ,Protein and Fibre",
    categoryName: 'nutrition',
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61JShmuu8FL._SY879_.jpg",
    title: 'Skipping rope',
    inStock: true,
    rating: 1.8,
    price: 80,
    productDesc: "Cotton Rope Skipping Ropes (Pack of 1) ",
    categoryName: 'equipments',
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/410sfO2U5wL._SX300_SY300_QL70_FMwebp_.jpg",
    title: 'Himalaya Ashvagandha',
    inStock: true,
    rating: 1.8,
    price: 80,
    productDesc: "General Wellness Tablets, 60 Tablets | Stress Relief ",
    categoryName: 'ayurveda',
  }, {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71tH6y4K-SL._SX679_.jpg",
    title: 'Dabur Chyawanprash',
    inStock: true,
    rating: 1.8,
    price: 280,
    productDesc: "Immunity, helps build Strength and for Stamina ",
    categoryName: 'ayurveda',
  },
];