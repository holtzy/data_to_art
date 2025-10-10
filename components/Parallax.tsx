"use client";

import { useModal } from "@/context/ModalContext";
import { ReactNode } from "react";

type ParallaxProps = {
  imageUrl: string;
  text?: string;
  height?: number;
  caption?: ReactNode;
};

export default function Parallax({
  text,
  caption,
  imageUrl,
  height = 400,
}: ParallaxProps) {
  const { openModal } = useModal();

  return (
    <section className="full-bleed my-8">
      <div
        className="bg-fixed bg-center bg-cover cursor-pointer"
        style={{ backgroundImage: `url('${imageUrl}')`, height }}
        onClick={() =>
          openModal({
            imgPath: imageUrl,
          })
        }
      >
        <div className="h-full flex items-center justify-center bg-black/0">
          <h1 className="text-center bg-white/20 text-black text-5xl font-bold max-w-[400px]">
            {text}
          </h1>
        </div>
      </div>
      <div className="flex justify-end text-right text-sm text-slate-600 mt-2">
        <div className="max-w-[250px]">{caption}</div>
      </div>
    </section>
  );
}
