import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

// export const categories = [
//   {
//     _id: uuid(),
//     categoryName: "fiction",
//     description:
//       "literature in the form of prose, especially novels, that describes imaginary events and people",
//   },
//   {
//     _id: uuid(),
//     categoryName: "non-fiction",
//     description:
//       "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
//   },
//   {
//     _id: uuid(),
//     categoryName: "horror",
//     description:
//       "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
//   },
// ];

export const categories = [
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/G/31/img23/HPC/CatPage/Halo_434x434_3_V2._SS400_QL85_.jpg",

    categoryName: "supplements",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/7197avBhrVL._AC_UF226,226_FMjpg_.jpg",
    categoryName: "equipments",
  },
  {
    _id: uuid(),
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/HPC/CatPage/SBC-2.jpg",
    categoryName: "nutrition",
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/G/31/img22/HPC/CatPage/Halo_434x434_2._SS400_QL85_.jpg",
    categoryName: "ayurveda",
  },
];