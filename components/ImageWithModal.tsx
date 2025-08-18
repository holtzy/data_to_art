import { Project, projectList } from "@/lib/project-list";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type ImageWithModalProps = {
  width: number;
  imgPath: string;
};

export const ImageWithModal = ({ imgPath, width }: ImageWithModalProps) => {
  console.log("imgpath", imgPath);

  const parts = imgPath.split("/");
  const foundAuthor = parts[2];
  const foundProject = parts[3];

  const project = projectList.find(
    (p) => p.artist === foundAuthor && p.folder === foundProject
  );

  if (!project) {
    return null;
  }

  const { name } = project;

  return (
    <article style={{ width, boxSizing: "border-box", padding: 8 }}>
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full rounded-md overflow-hidden cursor-pointer">
            <img
              src={imgPath}
              alt={name}
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

        <DialogContent className="p-6 max-w-[calc(100%)] flex gap-6 items-start">
          {/* Left: Image */}
          <img
            src={imgPath}
            alt={name}
            className="max-h-[70vh] object-contain rounded-md flex-shrink-0"
          />

          {/* Right: Text + Button */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-600">{project.name}</p>
            </div>
            <div className="mt-4 self-end">
              <Button onClick={() => console.log("Button clicked")}>
                Action
              </Button>
            </div>
          </div>

          <DialogClose />
        </DialogContent>
      </Dialog>
    </article>
  );
};
