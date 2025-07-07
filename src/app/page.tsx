"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Background from "@/components/Background";
import ChatBox from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Header from "@/components/Logo";
import NavButtons from "@/components/NavButtons";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.push("/login"); // Redirect to login page
    }
  }, [router]);

  return (
    <main className="h-full w-full min-h-full flex-1 flex flex-col items-center justify-center relative text-white">
      <Background />
      <Header />
      <NavButtons />
      <ChatBox />
      <Footer />
    </main>
  );
}
