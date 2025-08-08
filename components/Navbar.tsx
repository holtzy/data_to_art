"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { useContext } from "react";

const NAVBAR_HEIGHT = 80;

const Navbar = () => {
  return (
    <nav
      className="fixed bg-opacity-0 w-full backdrop-blur-sm z-30"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div className="wrapper h-full">
        <div className="flex flex-row justify-between items-center">
          {/* LEFT: course logo */}
          <Link href="/" className="invisible sm:visible no-decoration">
            Data To Art
          </Link>

          {/* RIGHT: Buttons */}
          <div className="flex space-x-2 items-center">
            <a href="https://discord.gg/rJSRamzwmV" target="_blank">
              <img
                src="/asset/discord-logo.webp"
                alt="discord logo"
                width={30}
                height={30}
                className="transition ease-in-out duration-300 hover:brightness-150"
              />
            </a>

            <Link
              href="/login"
              className={
                buttonVariants({ variant: "outline" }) + " " + "no-decoration"
              }
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
