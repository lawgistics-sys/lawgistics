import { Download, Home, Plus, Rocket, Search } from "lucide-react";
import Image from "next/image";
import { logo_small } from "../../public/images";

export default function Sidebar() {
  return (
    <div className="w-32 bg-transparent flex flex-col justify-between items-center py-4 text-white px-5">
      {/* Top icon */}
      <div className="gap-y-6 flex flex-col items-center">
        <Image
          className=""
          src={logo_small}
          alt=""
          width={76}
          height={52}
        ></Image>

        {/* Center icons */}
        <div className="flex flex-col items-center gap-y-6">
          <div className=" rounded-full p-2 bg-[#565656]">
            <Plus size={24} />
          </div>
          <div className="flex flex-col items-center text-xs gap-y-3">
            <Home size={24} />
            <span className="text-[16px]">HOME</span>
          </div>
          <div className="flex flex-col items-center text-xs gap-y-3">
            <Search size={24} />
            <span className="text-[16px]">DISCOVER</span>
          </div>
        </div>
      </div>

      {/* Bottom icons */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center text-xs gap-y-3">
          <Rocket size={24} />
          <span className="text-[16px]">UPGRADE</span>
        </div>
        <div className="flex flex-col items-center text-xs gap-y-3">
          <Download size={24} />
          <span className="text-[16px]">INSTALL</span>
        </div>
      </div>
    </div>
  );
}
