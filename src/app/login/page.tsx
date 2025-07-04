"use client";

import Image from "next/image";
import { useState } from "react";
import {
  facebook,
  google,
  x,
} from "../../../public/images";
import { useRouter } from "next/navigation";
import LoginBackground from "@/components/LoginBackground";
import { User } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    sessionStorage.setItem("isLoggedIn", "true");

    alert("Logged in successfully!");
    router.push("/"); // Redirect to home page after login
    // e.g., useRouter().push('/dashboard') if routing is set up
  };

  return (
    <div className="min-h-full flex flex-1 pb-20">
      <LoginBackground />
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 relative justify-center items-center px-8  rounded-l-[2rem]">
        <div className="absolute inset-0 rounded-l-[2rem] z-10"></div>
        <div className="relative z-20 text-white self-end w-full text-left">
          <p className="text-lg">
            Copyright © 2025 Lawgistic.ai. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 bg-[#636060] p-8 flex flex-col justify-evenly items-center rounded-[2rem] shadow-2xl shadow-black/20">
        <h2 className="text-2xl font-medium text-center mb-6 text-white font-sans">
          LOGIN
        </h2>

        <div className="mb-4 w-2/3">
          <label className="block text-sm font-medium mb-1 text-white">
            USER NAME
          </label>
          <div className="bg-[#E8E8E833] rounded-full px-4 py-2 flex items-center text-white">
            <span className="mr-2">
              <User />
            </span>
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
        </div>

        <div className="mb-6 w-2/3 text-white">
          <label className="block text-sm font-medium mb-1">PASSWORD</label>
          <div className="bg-[#E8E8E833] rounded-full px-4 py-2 flex items-center">
            <span className="mr-2">
              <User />
            </span>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-transparent outline-none text-white w-full "
            />
          </div>
        </div>

        <button
          className="w-2/3 bg-white text-black font-semibold py-2 rounded-full mb-3"
          onClick={handleLogin}
        >
          LOGIN
        </button>

        <div className="text-right text-sm text-gray-300 mb-6 hover:underline cursor-pointer">
          Forgot Password?
        </div>

        <div className="text-center mb-4 text-sm text-white">
          OR SIGN UP USING
        </div>
        <div className="flex justify-center gap-4 mb-6">
          <Image src={facebook} alt="" className="w-6 h-6 cursor-pointer" />
          <Image src={x} alt="" className="w-6 h-6 cursor-pointer" />
          <Image src={google} alt="" className="w-6 h-6 cursor-pointer" />
        </div>

        <div className="text-center text-sm text-gray-300">
          Don&apos;t have an account?{" "}
          <button className="underline font-medium">Register</button>
        </div>
      </div>
    </div>
  );
}
