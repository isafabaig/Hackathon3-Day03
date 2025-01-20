// import { defineQuery } from "next-sanity";


// export const allCars = defineQuery(`
//     *[_type == "car"] {
//       _id,
//       name,
//       brand,
//       type,
//       fuelCapacity,
//       transmission,
//       seatingCapacity,
//       pricePerDay,
//       originalPrice,
//       tags,
//       "imageUrl": image.asset->url
//     }
//   `);
  
// queries.ts

import { defineQuery } from "next-sanity";

export const allCars = defineQuery(`
    *[_type == "car"] {
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      originalPrice,
      tags,
      "imageUrl": image.asset->url
    }
  `);


