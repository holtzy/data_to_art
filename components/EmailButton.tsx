"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button, buttonVariants } from "./ui/button";

export const EmailButton = ({ link, name }: { link: string; name: string }) => {
  const [text, setText] = useState("Copy");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"lg"} variant={"default"}>
          {name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <div className="p-4">
          <p className="text-sm text-slate-500">
            Please use this email adress:
          </p>
          <div className="flex gap-2 mt-2">
            <div className={buttonVariants({ variant: "outline" })}>{link}</div>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                setText("✅");
              }}
            >
              {text}
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
