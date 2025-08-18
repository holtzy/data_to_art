"use client";

import { useModal } from "@/context/ModalContext";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const GlobalModal = () => {
  const { modalData, closeModal } = useModal();

  if (!modalData) return null;

  return (
    <Dialog open={!!modalData} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-7xl w-full p-10">
        <div className="flex gap-8">
          <img
            src={modalData.imgPath}
            alt={modalData.projectName || "Image"}
            className="max-h-[70vh] object-contain rounded-md flex-shrink-0"
          />

          <div className="flex flex-col justify-between">
            <div>
              {modalData.projectName && (
                <>
                  <h2 className="text-2xl font-bold mb-2">
                    {modalData.projectName}
                  </h2>
                  <p className="text-gray-600">{modalData.projectName}</p>
                </>
              )}
            </div>
            <div className="mt-4 self-end">
              <Button onClick={() => console.log("Button clicked")}>
                Action
              </Button>
            </div>
          </div>
        </div>

        <DialogClose />
      </DialogContent>
    </Dialog>
  );
};
