import { bg, loginBg } from "../../public/images";

import Image from "next/image";

export default function LoginBackground() {
  return (
    <div className="fixed inset-0 left-0 top-0 -z-10 overflow-hidden w-screen h-screen">
      <Image
        src={loginBg}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  );
}
