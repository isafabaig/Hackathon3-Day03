import { createClient } from "next-sanity"

const client = createClient ({
    projectId : "prrthhuu",
    dataset : "production",
    useCdn : true,
    apiVersion : "2023-10-10"

})

export async function sanityFetch({query, params = {}} : {query : string, params? : any}){
return await client.fetch(query, params)
}

// fetch.ts

// fetch.ts

// fetch.ts

// fetch.ts
// export async function fetchCars() {
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_SANITY_API_ENDPOINT}?query=*[_type == "car"] {
//         _id,
//         name,
//         brand,
//         type,
//         fuelCapacity,
//         transmission,
//         seatingCapacity,
//         pricePerDay,
//         originalPrice,
//         tags,
//         "imageUrl": image.asset->url
//       }`);
  
//       if (!response.ok) {
//         throw new Error('Failed to fetch cars');
//       }
  
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//       throw new Error('Failed to fetch cars');
//     }
//   }
  

