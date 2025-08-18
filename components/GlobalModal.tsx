"use client";

import { useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { projectList, Project } from "@/lib/project-list";

export const GlobalModal = () => {
  const { modalData, closeModal, setModalData } = useModal();
  const imgPath = modalData?.imgPath;

  if (!modalData || !imgPath) return null;

  // Recover the project from the image path
  const parts = imgPath.split("/");
  const foundAuthor = parts[2];
  const foundProject = parts[3];

  const project = projectList.find(
    (p) => p.artist === foundAuthor && p.folder === foundProject
  );

  if (!project) return null;

  const { name } = project;

  // Get index of current project in the list
  const currentIndex = projectList.findIndex(
    (p) => p.artist === project.artist && p.folder === project.folder
  );

  const showPrev = () => {
    const prevIndex =
      (currentIndex - 1 + projectList.length) % projectList.length;
    const prevProject = projectList[prevIndex];
    const firstImg = `/project/${prevProject.artist}/${prevProject.folder}/01-full.webp`;
    setModalData({ imgPath: firstImg });
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % projectList.length;
    const nextProject = projectList[nextIndex];
    const firstImg = `/project/${nextProject.artist}/${nextProject.folder}/01-full.webp`;
    setModalData({ imgPath: firstImg });
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalData) return;
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalData, currentIndex]);

  return (
    <Dialog open={!!modalData} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-7xl w-full p-10">
        <div className="flex gap-8">
          <img
            src={imgPath}
            alt={name || "Image"}
            className="max-h-[70vh] object-contain rounded-md flex-shrink-0"
          />

          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{name}</h2>
              <p className="text-gray-600">{name}</p>
            </div>
            <div className="mt-4 self-end flex gap-2">
              <Button onClick={showPrev}>Prev</Button>
              <Button onClick={showNext}>Next</Button>
            </div>
          </div>
        </div>

        <DialogClose />
      </DialogContent>
    </Dialog>
  );
};
