import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className=" my-6 text-sm text-white/80 bottom-0 flex gap-x-2 items-center justify-center">
      By using Lawgistic.Ai Chat, you agree to our Terms of Service and Privacy
      Policy
      <Facebook className="ml-2" />
      <Instagram />
    </div>
  );
}
