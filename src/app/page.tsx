import { sanityFetch } from "@/sanity/lib/fetch";
import { allCars } from "@/sanity/lib/queries";
import Image from "next/image";
import Hero from "./hero/page";

type Car = {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string[];
  imageUrl: string;
};

export default async function CarsPage() {
    const cars: Car[] = await sanityFetch({ query: allCars });


  return (
    <main>
      <div>
        <Hero />
      </div>
    <div>
      <h1 className="text-4xl font-bold p-4">Popular Cars</h1>
      <div className="grid grid-cols-3 gap-4">
        {cars.map((car: Car) => (
          <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center" key={car._id}>
            <Image
              src={car.imageUrl}
              alt={car.name}
              className="w-60"
              width={500}
              height={300}
              priority
            />

            <h2 className="text-xl font-bold text-center">{car.name}</h2>
            <p className="text-center">{car.brand}</p>
            <p className="text-center">{car.type}</p>
            <p className="text-center">Fuel: {car.fuelCapacity}</p>
            <p className="text-center">Transmission: {car.transmission}</p>
            <p className="text-center">Seating: {car.seatingCapacity}</p>
            <p className="text-center">Price/Day: {car.pricePerDay}</p>
            <p className="text-center">Original Price: {car.originalPrice}</p>
            <div className="flex gap-2 flex-wrap">
              {car.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </main>

  );
}
