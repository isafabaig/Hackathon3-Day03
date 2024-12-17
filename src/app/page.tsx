import Image from "next/image";
import Hero from "./hero/page";
import Catalogue from "./catalogue/page";

export default function Home() {
  return(
    <div>
      <Hero />
      <Catalogue />
    </div>
  )
}