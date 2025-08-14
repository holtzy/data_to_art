"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Project } from "@/lib/project-list";

export type ImageWithModalProps = {
  width: number;
  src: string;
  project: Project;
};

export const ImageWithModal = ({
  src,
  project,
  width,
}: ImageWithModalProps) => {
  return (
    <article style={{ width, boxSizing: "border-box", padding: 8 }}>
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full rounded-md overflow-hidden cursor-pointer">
            <img
              src={src}
              alt={project.name}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
              loading="lazy"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 w-auto max-w-[90vw] max-h-[90vh] flex justify-center items-center">
          <img
            src={src}
            alt={project.name}
            className="max-w-full max-h-full object-contain"
          />
          <DialogClose />
        </DialogContent>
      </Dialog>
    </article>
  );
};
