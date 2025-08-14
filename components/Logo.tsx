import { Minus } from "lucide-react";
import Link from "next/link";

export const Logo = ({}) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Minus className="text-black" size={8} />
      <Link
        href="/"
        className="invisible sm:visible no-decoration uppercase text-xl font-brown-sugar font-bold"
      >
        Data <span className="text-sm">To</span> Art
      </Link>
      <Minus className="text-black" size={8} />
    </div>
  );
};
