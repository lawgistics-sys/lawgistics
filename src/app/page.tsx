"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ChatBox from "@/components/Chatbot";

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
      <ChatBox />
    </main>
  );
}
