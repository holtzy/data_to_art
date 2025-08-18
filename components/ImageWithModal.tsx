import { projectList } from "@/lib/project-list";

import { useModal } from "@/context/ModalContext";

export type ImageWithModalProps = {
  width: number;
  imgPath: string;
};

export const ImageWithModal = ({ imgPath, width }: ImageWithModalProps) => {
  const { openModal } = useModal();

  const parts = imgPath.split("/");
  const foundAuthor = parts[2];
  const foundProject = parts[3];

  const project = projectList.find(
    (p) => p.artist === foundAuthor && p.folder === foundProject
  );

  return (
    <div style={{ width, boxSizing: "border-box", padding: 8 }}>
      <div
        className="w-full rounded-md overflow-hidden cursor-pointer"
        onClick={() =>
          openModal({
            imgPath,
            projectName: project?.name,
          })
        }
      >
        <img
          src={imgPath}
          alt={project?.name || ""}
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
