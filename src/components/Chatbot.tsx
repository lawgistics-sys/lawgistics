"use client";
import {
  Paperclip,
  ArrowUpCircle,
  Globe,
  Lightbulb,
  Search,
  Cog,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TypingDots from "./TypingDots";

export default function ChatBox() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null); // 1. Add ref
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text: "Hi there! I'm your AI assistant—how can I support you today?",
    },
  ]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue.replace(/^[\s\n]+/, ""),
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
    };
    setLoading(false);
    return obj;
  };
  return (
    <div className="bg-[#FFFFFFDB] backdrop-blur-md rounded-xl p-6 pb-0 pr-0 mt-8 w-full max-w-2xl mx-auto text-black flex flex-col h-[400px]">
      {/* Messages Area */}
      <div className="mb-4 overflow-y-auto space-y-2 flex-1 scrollbar-thin">
        {messages.map((msg, idx) => (
          <div
            key={msg.id}
            ref={idx === messages.length - 1 ? messagesEndRef : null}
            className={`py-2 rounded pr-6 ${
              msg.sender === "assistant" ? "text-left" : "text-right"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <TypingDots />}
      </div>

      {/* Input Area */}
      <div className="flex justify-between items-start text-black mt-2 pr-6">
        <div className="flex space-x-4">
          <Globe />
          <Lightbulb />
          <Cog />
          <Search />
        </div>
        <textarea
          className="w-full resize-none bg-transparent outline-none border-none focus:outline-none h-12 focus:border-none text-black mx-2"
          placeholder="Type your message..."
          value={inputValue.replace(/^[\s\n]+/, "")}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevents newline on enter
              handleSendMessage();
            }
          }}
        />
        <div className="flex space-x-4">
          <Paperclip />
          <ArrowUpCircle
            className="cursor-pointer"
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}
