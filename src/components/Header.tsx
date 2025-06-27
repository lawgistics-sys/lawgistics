// components/HeaderBar.tsx
"use client";

import { ChevronDown, History, SquarePen } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between pl-14 px-6 py-4 bg-white">
      {/* Left-side (icons or logo can go here) */}
      <div className="flex items-center space-x-6">
        <SquarePen />
        <History />
        <div className="flex space-x-2 items-center">
          <span className="font-semibold">Model</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Right-side Auth Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/login">
          <button className="bg-[#082f49] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#061e30] transition">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="border border-[#082f49] text-[#082f49] px-4 py-2 rounded-md font-semibold hover:bg-[#082f49]/10 transition">
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
}
