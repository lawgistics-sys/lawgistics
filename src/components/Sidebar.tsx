// components/Sidebar.tsx
"use client";

import {
  Plus,
  Globe,
  Lightbulb,
  Cog,
  Search,
  FileText,
  Edit2,
} from "lucide-react";

export default function Sidebar() {
  const iconStyle = "p-2 hover:bg-gray-200 rounded-md transition";

  return (
    <aside className="fixed left-0 h-full w-14 bg-white flex flex-col items-center py-4 space-y-6">
      <button className={iconStyle} title="New Chat">
        <Edit2 size={20} />
      </button>
      <button className={iconStyle} title="Globe">
        <Globe size={20} />
      </button>
      <button className={iconStyle} title="Ideas">
        <Lightbulb size={20} />
      </button>
      <button className={iconStyle} title="Settings">
        <Cog size={20} />
      </button>
      <button className={iconStyle} title="Search">
        <Search size={20} />
      </button>
      <button className={iconStyle} title="Add">
        <Plus size={20} />
      </button>
      <button className={iconStyle} title="Docs">
        <FileText size={20} />
      </button>
    </aside>
  );
}
