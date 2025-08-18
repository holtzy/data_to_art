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
        className="w-full rounded-md overflow-hidden cursor-pointer"
        onClick={() =>
          openModal({
            imgPath,
          })
        }
      >
        <img
          src={imgPath}
          alt={"data art img"}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
};
