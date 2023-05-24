import { v4 as uuid } from "uuid";

import puffer from "../../assets/images/puffer.jpg"
import sweatshirt from "../../assets/images/sweatshirt.jpg"

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */



export const products = [
  {
    _id: uuid(),
    img: puffer,
    title: 'Jacket',
    inStock: true,
    rating: 3.5,
    price: 499,
    productDescription: "Puffer jacket for all weathers",
    categoryName: 'jackets',
  },
  {
    _id: uuid(),
    img: sweatshirt,
    title: 'red sweatshirt',
    inStock: false,
    rating: 4.5,
    price: 600,
    productDesc: "Lorem ipsum",
    categoryName: 'sweatshirts',
  },
  {
    _id: uuid(),

    title: 'Women sweatshirt',
    img: sweatshirt,
    inStock: true,
    rating: 5.0,
    price: 299,
    productDesc: "Lorem ipsum",
    categoryName: 'sweatshirts',
  },
  {
    _id: uuid(),

    title: 'trouser',
    img: sweatshirt,
    inStock: true,
    rating: 4.7,
    price: 700,
    productDesc: "Lorem ipsum",
    categoryName: 'others',
  },
  {
    _id: uuid(),

    title: 'denim jacket',
    img: sweatshirt,
    inStock: true,
    rating: 3.8,
    price: 399,
    productDesc: "Lorem ipsum",
    categoryName: 'jackets',
  },
  {
    _id: uuid(),

    title: 'Hoodie',
    img: sweatshirt,
    inStock: true,
    rating: 4.2,
    price: 499,
    productDesc: "Lorem ipsum",
    categoryName: 'sweatshirts',
  },
  {
    _id: uuid(),

    title: 'Shirts',
    img: sweatshirt,
    inStock: true,
    rating: 5.0,
    price: 699,
    productDesc: "Lorem ipsum",
    categoryName: 'sweatshirts',
  },
  {
    _id: uuid(),
    img: puffer,
    title: 'Coat',
    inStock: true,
    rating: 2.7,
    price: 250,
    productDesc: "Lorem ipsum",
    categoryName: 'coats',
  },
  {
    _id: uuid(),
    img: puffer,
    title: 'Muffler',
    inStock: true,
    rating: 3.8,
    price: 550,
    productDesc: "Lorem ipsum",
    categoryName: 'others',
  },
];