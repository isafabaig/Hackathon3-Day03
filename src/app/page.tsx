import Image from "next/image";
import Hero from "@/components/Hero";
import Catalogue from "@/components/Catalogue";

export default function Home() {
  return(
    <div>
      <Hero />
      <Catalogue />
    </div>
  )
}