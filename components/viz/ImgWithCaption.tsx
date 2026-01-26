import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ImgWithCaptionProps = {
  caption: ReactNode; // Just 1 span please
  img: string;
  maxWidth?: number;
};

export const ImgWithCaption = ({
  img,
  caption,
  maxWidth,
}: ImgWithCaptionProps) => {
  return (
    <div
      className={cn(
        "full-bleed my-12 mx-auto",
        maxWidth && `max-w-[${maxWidth}px]`,
      )}
    >
      <img src={img} className="w-full" alt="data art image" />
      <div className="flex justify-end">
        <p className="text-slate-500 text-sm text-right max-w-[250px] mt-4 !leading-snug">
          {caption}
        </p>
      </div>
    </div>
  );
};
