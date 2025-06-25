import Image from "next/image";
import { logo } from "../../public/images";

// components/Header.tsx
export default function Logo() {
  return (
    <div className="text-center text-white mt-12 space-y-4 flex flex-col items-center">
      <Image src={logo} alt="Logo" className="w-24 h-36" />
      <h1 className="text-4xl font-bold">Welcome to Lawgistic.ai</h1>
    </div>
  );
}
