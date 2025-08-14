"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { BookDashed, Circle, Minus } from "lucide-react";
import { Logo } from "./Logo";

const NAVBAR_HEIGHT = 80;

const Navbar = () => {
  return (
    <nav
      className="fixed bg-opacity-0 w-full backdrop-blur-sm z-30 font-extralight"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div className="h-full max-w-[700px] mx-auto">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-4 flex items-center">
            <Link
              href="/artists"
              className={
                buttonVariants({ variant: "ghost" }) + " " + "no-decoration"
              }
            >
              Artists
            </Link>
          </div>

          <div className="col-span-4 flex items-center">
            <Logo />
          </div>

          <div className="col-span-4 flex items-center justify-end">
            <Link
              href="/artworks"
              className={
                buttonVariants({ variant: "ghost" }) + " " + "no-decoration"
              }
            >
              Artworks
            </Link>

            <Link
              href="/projects"
              className={
                buttonVariants({ variant: "ghost" }) + " " + "no-decoration"
              }
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
