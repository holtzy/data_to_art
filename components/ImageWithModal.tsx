"use client";

import { useModal } from "@/context/ModalContext";

export type ImageWithModalProps = {
  width: number;
  imgPath: string;
};

export const ImageWithModal = ({ imgPath, width }: ImageWithModalProps) => {
  const { openModal } = useModal();

  return (
    <div style={{ width, boxSizing: "border-box", padding: 8 }}>
      <div
        className="w-full overflow-hidden cursor-pointer rounded-none"
        onClick={() =>
          openModal({
            imgPath,
          })
        }
      >
        <img
          src={imgPath}
          alt="data art img"
          className="w-full h-auto block object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  );
};
