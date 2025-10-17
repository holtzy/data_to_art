"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button, buttonVariants } from "./ui/button";

export const EmailButton = ({
  link,
  name,
  variant = "default",
}: {
  link: string;
  name: string;
  variant?: "default" | "outline";
}) => {
  const [text, setText] = useState("Copy");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"lg"} variant={variant}>
          {name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="rounded-none shadow-2xl">
        <div className="p-4">
          <p className="text-sm ">Please use this email adress:</p>
          <div className="flex gap-2 mt-2">
            <div className={buttonVariants({ variant: "outline" })}>{link}</div>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                setText("✅");
              }}
              variant={"default"}
            >
              {text}
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
