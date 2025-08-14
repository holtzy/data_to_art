import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Artist = {
  folder: string;
};

interface AvatarRowProps {
  artistList: Artist[];
}

export default function AvatarRow({ artistList }: AvatarRowProps) {
  return (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      {artistList.map((a, i) => (
        <div key={i}>
          <Avatar className="w-12 h-12">
            <AvatarImage src={`/artist/${a.folder}.webp`} alt={a.folder} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      ))}
    </div>
  );
}
