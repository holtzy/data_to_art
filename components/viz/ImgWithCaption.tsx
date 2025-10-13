import { ReactNode } from "react";

type ImgWithCaptionProps = {
  caption: ReactNode; // Just 1 span please
  img: string;
};

export const ImgWithCaption = ({ img, caption }: ImgWithCaptionProps) => {
  return (
    <div className="full-bleed my-12">
      <div className="">
        <img src={img} className="w-full" />
        <div className="flex justify-end">
          <p className="text-slate-500 text-sm text-right max-w-[250px] mt-4 !leading-snug">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};
