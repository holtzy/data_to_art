"use client";

import { Quote } from "lucide-react";

type QuoteProps = {
  text: string;
};

export const QuoteSection = ({ text }: QuoteProps) => {
  return (
    <div className="full-bleed my-20">
      <div className="relative flex justify-center max-w-[700px] mx-auto">
        <div className="absolute -top-4 -left-8">
          <Quote className="fill-black stroke-0" />
        </div>
        <div className="absolute -bottom-4 -right-8">
          <Quote className="fill-black stroke-0" />
        </div>
        <span className="text-4xl ">{text}</span>
      </div>
    </div>
  );
};
