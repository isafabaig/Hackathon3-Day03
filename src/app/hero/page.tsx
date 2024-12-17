import React from "react";
import Image from "next/image";
import Pickdrop from "@/components/Pickdrop";

export default function Hero() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <div className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <Image
          src={"/image/Ads 1.png"}
          alt=""
          width={640}
          height={360}
          className="max-w-full"
        />
        <Image
          src={"/image/Ads 2.png"}
          alt=""
          width={640}
          height={360}
          className="max-w-full"
        />
      </div>

      <Pickdrop />
    </div>
  );
}
