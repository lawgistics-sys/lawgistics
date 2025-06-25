"use client";

import { bg } from "../../public/images";

import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute inset-0 left-14 -z-10 overflow-hidden">
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  );
}
