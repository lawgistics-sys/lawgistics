export default function TypingDots() {
  return (
    <div className="flex space-x-1 mt-2 rounded-full p-2 bg-gray-100 w-fit ">
      <span className="dot-animation w-1 h-1 bg-black rounded-full animate-bounce delay-0" />
      <span className="dot-animation w-1 h-1 bg-black rounded-full animate-bounce delay-150" />
      <span className="dot-animation w-1 h-1 bg-black rounded-full animate-bounce delay-300" />
    </div>
  );
}
