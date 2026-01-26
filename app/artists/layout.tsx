import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists | Data to Art",
  description:
    "Meet the talented artists behind Data to Art. Explore the work of international data visualization designers who transform complex data into stunning visual experiences.",
};

export default function ArtistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
