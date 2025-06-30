// components/HeaderBar.tsx
"use client";

import { ChevronDown, History, SquarePen, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between pl-14 px-6 py-4 bg-transparent text-white">
      {/* Left-side (icons or logo can go here) */}
      <div className="flex items-center space-x-6"></div>

      {/* Right-side Auth Buttons */}
      <div className="flex items-center space-x-4">
        <p className="font-semibold text-2xl"> Account</p>
        <div className=" bg-black p-2 rounded-full">
          <User />
        </div>
      </div>
    </header>
  );
}
