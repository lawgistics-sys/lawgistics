import Image from "next/image";
import { logo_big } from "../../public/images";

// components/Header.tsx
export default function Logo() {
  return (
    <div className="text-center text-white mt-12 space-y-4 flex flex-col items-center">
      <Image src={logo_big} alt="Logo" className="max-w-[432px] max-h-28" />
    </div>
  );
}
