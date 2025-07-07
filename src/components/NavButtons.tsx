// components/NavButtons.tsx
const buttons = [
  "Troubleshoot",
  "Privacy & Policy",
  "Research & Analysis",
  "Top Search",
  "About Us",
];

export default function NavButtons() {
  return (
    <div className="flex justify-center flex-wrap gap-3 mt-6">
      {buttons.map((btn) => (
        <button
          key={btn}
          className="bg-black text-white px-4 py-1.5 rounded-lg hover:bg-white/20 transition"
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
