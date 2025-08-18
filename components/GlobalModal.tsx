"use client";

import { ReactNode, useEffect, useState } from "react";
import { useModal } from "@/context/ModalContext";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { projectList } from "@/lib/project-list";
import { a } from "@react-spring/web";

export const GlobalModal = () => {
  const { modalData, closeModal, setModalData } = useModal();
  const imgPath = modalData?.imgPath;

  const [isTall, setIsTall] = useState<boolean | null>(null);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalData) return;
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalData]);

  if (!modalData || !imgPath) return null;

  const parts = imgPath.split("/");
  const foundAuthor = parts[2];
  const foundProject = parts[3];

  const currentIndex = projectList.findIndex(
    (p) => p.artist === foundAuthor && p.folder === foundProject
  );
  const project = projectList[currentIndex];

  if (!project) return null;

  const { name, artist, descriptionShort, folder, date } = project;

  const showPrev = () => {
    const prevIndex =
      (currentIndex - 1 + projectList.length) % projectList.length;
    const prevProject = projectList[prevIndex];
    setModalData({
      imgPath: `/project/${prevProject.artist}/${prevProject.folder}/01-full.webp`,
    });
    setIsTall(null); // reset
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % projectList.length;
    const nextProject = projectList[nextIndex];
    setModalData({
      imgPath: `/project/${nextProject.artist}/${nextProject.folder}/01-full.webp`,
    });
    setIsTall(null); // reset
  };

  // Detect image aspect ratio
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setIsTall(img.naturalHeight / img.naturalWidth > 0.7); // tall if height > width
  };

  return (
    <Dialog open={!!modalData} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-7xl sm:h-[90vh] w-full p-10 overflow-scroll">
        {isTall ? (
          <TallImgModalContent
            name={name}
            handleImageLoad={handleImageLoad}
            path={imgPath}
            descriptionShort={descriptionShort}
            artist={artist}
          />
        ) : (
          <WideImgModalContent
            name={name}
            handleImageLoad={handleImageLoad}
            path={imgPath}
            descriptionShort={descriptionShort}
            artist={artist}
          />
        )}

        <div className="flex flex-col justify-between">
          <div className="mt-4 self-end flex gap-2">
            <Button onClick={showPrev}>Prev</Button>
            <Button onClick={showNext}>Next</Button>
          </div>
        </div>

        <DialogClose />
      </DialogContent>
    </Dialog>
  );
};

type ModalContentProps = {
  name: string;
  handleImageLoad: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  path: string;
  descriptionShort: ReactNode;
  artist: string;
};

const TallImgModalContent = ({
  name,
  path,
  handleImageLoad,
  descriptionShort,
  artist,
}: ModalContentProps) => {
  return (
    <div className="flex h-full w-full">
      {/* Image */}
      <div className="flex-1 flex justify-center items-center overflow-hidden">
        <img
          src={path}
          alt={name || "Image"}
          className="max-h-[80vh] max-w-full object-contain"
          onLoad={handleImageLoad}
        />
      </div>

      {/* Fixed width text */}
      <div className="w-80 flex flex-col justify-center p-4 gap-2 bg-white">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600">{descriptionShort}</p>
        <p>{artist}</p>
      </div>
    </div>
  );
};

const WideImgModalContent = ({
  name,
  path,
  handleImageLoad,
  descriptionShort,
  artist,
}: ModalContentProps) => {
  return (
    <div className="flex flex-col h-full w-full ">
      {/* Image */}
      <div className="flex justify-center items-start overflow-hidden flex-1">
        <img
          src={path}
          alt={name || "Image"}
          className="max-h-[60vh] max-w-full object-contain"
          onLoad={handleImageLoad}
        />
      </div>

      {/* Text below */}
      <div className="wrapper">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600">{descriptionShort}</p>
        <p>{artist}</p>
      </div>
    </div>
  );
};
