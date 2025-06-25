import ChatBox from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Header from "@/components/Logo";
import NavButtons from "@/components/NavButtons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full min-h-full flex-1 flex flex-col items-center justify-center relative text-white">
      <Header />
      <NavButtons />
      <ChatBox />
      <Footer />
    </main>
  );
}
