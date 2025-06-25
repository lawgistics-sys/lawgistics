// components/ChatBox.tsx
import {
  Paperclip,
  ArrowUpCircle,
  Globe,
  Lightbulb,
  Search,
  Cog,
} from "lucide-react";

export default function ChatBox() {
  return (
    <div className="bg-[#FFFFFFDB] backdrop-blur-md rounded-xl p-6 mt-8 w-full max-w-2xl mx-auto text-black">
      <p>"Hi there! I'm your AI assistant—how can I support you today?"</p>
      <div className="flex justify-between items-center mt-4 text-black">
        <div className="flex space-x-4">
          <Globe />
          <Lightbulb />
          <Cog />
          <Search />
        </div>
        <div className="flex space-x-4">
          <Paperclip />
          <ArrowUpCircle />
        </div>
      </div>
    </div>
  );
}
