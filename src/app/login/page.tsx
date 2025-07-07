"use client";

import Image from "next/image";
import { useState } from "react";
import { facebook, google, loginBg, logo, x } from "../../../public/images";
import { useRouter } from "next/navigation";

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
    <div className="min-h-full flex flex-1">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 relative justify-center items-center px-8 py-6 rounded-l-[2rem]">
        <Image
          src={loginBg}
          alt="Robot Justice"
          fill
          priority
          className="object-cover rounded-l-[2rem] z-0"
        />
        <div className="absolute inset-0 bg-[#0855B724] bg-opacity-60 rounded-l-[2rem] z-10"></div>
        <div className="relative z-20 text-white self-end w-full text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to Lawgistic.ai</h1>
          <p className="text-lg">Sign in or Create a new account with us.</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 bg-[#EAEAEA7A] p-8 flex flex-col justify-center items-center rounded-l-[2rem]">
        <div className="max-w-md w-full space-y-6 flex flex-col justify-evenly h-full">
          {/* Logo and Title */}
          <div className="flex flex-col items-center space-y-2">
            <Image src={logo} alt="Logo" width={48} height={48} />
            <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                User Name
              </label>
              <input
                type="email"
                placeholder="ab@example.com"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-right text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#052945] text-white py-2 rounded-full hover:bg-[#031b2c] transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 text-gray-400">
            <hr className="flex-1 border-gray-300" /> or sign up using{" "}
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-4">
            <Image
              src={google}
              alt="Google"
              width={42}
              height={42}
              className="cursor-pointer"
            />
            <Image
              src={facebook}
              alt="Facebook"
              width={42}
              height={42}
              className="cursor-pointer"
            />
            <Image
              src={x}
              alt="X"
              width={42}
              height={42}
              className="cursor-pointer"
            />
          </div>

          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
