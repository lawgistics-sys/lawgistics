"use client";
import {
  Globe,
  Lightbulb,
  Search,
  Cog,
  ArrowUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypingDots from "./TypingDots";
import NavButtons from "./NavButtons";
import Logo from "./Logo";
interface Messages {
  id: number;
  sender: string;
  text: string;
  source: string;
};

export default function ChatBox() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null); // 1. Add ref
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Messages[]>([]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue.replace(/^[\s\n]+/, ""),
      source: "",
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    const response = await getAnswer();
    setMessages((prev) => [...prev, response]);
  };
  const getAnswer = async () => {
    setLoading(true);
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: inputValue, // use user input
      }),
    });

    const data = await response.json();

    const obj = {
      id: messages.length + 2,
      sender: "assistant",
      text: data?.answer,
      source: "",
    };
    if (inputValue.toLocaleLowerCase().includes("case study")) {
      obj.source =
        "https://roysrijan.github.io/chatbot/" +
        (data?.sources?.[0]?.metadata?.source || "");
    }
    setLoading(false);
    return obj;
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div
        className={`flex flex-col items-center w-full transition-all duration-700
          ${
            messages.length > 0
              ? "opacity-0 -translate-y-32 pointer-events-none hidden"
              : "opacity-100 translate-y-0 "
          }
        `}
        style={{ willChange: "opacity, transform" }}
      >
        <Logo />
        <NavButtons />
      </div>

      <div
        className={`mb-4 overflow-y-auto space-y-2 scrollbar-thin flex-1 w-4/5 max-h-[480px] ${
          messages.length > 0 ? "" : "hidden"
        }`}
      >
        {messages.map((msg, idx) => (
          <div
            key={msg.id}
            ref={idx === messages.length - 1 ? messagesEndRef : null}
            className={`py-2 rounded pr-6 ${
              msg.sender === "assistant" ? "text-left" : "text-right"
            }`}
          >
            {msg.text}
            {msg.source && (
              <div className="text-xs text-gray-500 mt-1">
                Source:{" "}
                <a href={msg.source} target="_blank" rel="noopener noreferrer">
                  {msg.source}
                </a>
              </div>
            )}
          </div>
        ))}
        {loading && <TypingDots />}
      </div>
      {/* Messages Area */}

      {/* Input Area */}
      <div
        className={`bg-transparent text-white rounded-xl p-6 pr-0 w-full max-w-2xl mx-auto flex flex-col h-[170px] transition-all duration-700 min-w-4/5
          ${messages.length > 0 ? "opacity-100 translate-y-16" : "opacity-100"}
        `}
      >
        {/* Input Area */}
        <div className="relative w-full border border-white p-6 rounded-xl text-white mt-2 pr-6 h-full items-end min-w-4/5">
          <div className="relative">
            <textarea
            className="w-full h-full resize-none bg-transparent outline-none border-none focus:outline-none focus:border-none text-white mx-2 min-h-full flex flex-1 "
            placeholder="Ask Your Right..."
              value={inputValue.replace(/^[\s\n]+/, "")}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            {/* Floating Buttons Centered and Overlapping */}
            <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-15 flex space-x-2 z-10 bg-[#2b2b2b]">
              <button className="shadow-lg rounded-full p-2 hover:bg-gray-100 transition">
                <Globe size={20} />
              </button>
              <button className="shadow-lg rounded-full p-2 hover:bg-gray-100 transition">
                <Lightbulb size={20} />
              </button>
              <button className="shadow-lg rounded-full p-2 hover:bg-gray-100 transition">
                <Cog size={20} />
              </button>
              <button className="shadow-lg rounded-full p-2 hover:bg-gray-100 transition">
                <Search size={20} />
              </button>
            </div>
            <div className="absolute right-2 bottom-0 translate-y-15 flex space-x-2">
              <button
                className="bg-white shadow-lg rounded-md p-2 hover:white transition text-white"
                onClick={handleSendMessage}
                type="button"
              >
                <ArrowUp color="black" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
