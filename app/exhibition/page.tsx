"use client";

import { useEffect, useState } from "react";
import { DataArtEventTable } from "./DataArtEventTable";
import { DataArtEvent } from "./DataArtEventTable";
import { Contact } from "@/components/Contact";
import { Spacing } from "@/components/Spacing";
import { Button } from "@/components/ui/button";

type Row = {
  [key: string]: string;
};

const URL =
  "https://docs.google.com/spreadsheets/d/1lXvTLBOsCudCMOvByLq0yruGwssWXjSqSOHg41Nh6iQ/export?format=tsv&gid=1987880223";

export default function ExibPage() {
  const [data, setData] = useState<DataArtEvent[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.text())
      .then((text) => {
        const rows = text.split("\n").map((r) => r.split("\t"));
        const headers = rows[0];
        const items = rows.slice(1).map((r) =>
          headers.reduce((acc: Row, header, i) => {
            acc[header.trim()] = r[i] ?? "";
            return acc;
          }, {})
        );
        setData(items as DataArtEvent[]);
      })
      .catch(() => setError("Failed to fetch Google Sheet data."));
  }, []);

  return (
    <div>
      {error && <p className="text-red-600">{error}</p>}
      {!error && data.length === 0 && <p>Loading data from Google Sheets...</p>}

      <div className="mt-44 flex flex-col items-center bg-gradient-to-t from-transparent to-white">
        <h1 className="text-9xl">Data Art Exhibitions</h1>

        <p className="text-center max-w-96">
          Across museums, festivals, galleries, and public spaces, data is
          increasingly becoming a material for artistic, narrative, and spatial
          exploration.
        </p>
        <div className="mt-10 flex gap-2">
          <Button variant={"outline"}>See events</Button>
          <Button>Add an event</Button>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <p>
          This page brings together a curated selection of past, ongoing, and
          upcoming exhibitions where data visualization plays a central role —
          whether as the core of the exhibition or as a key component within a
          broader curatorial project. From fully data-driven installations to
          exhibitions that integrate maps, infographics, and visual narratives,
          this listing reflects the growing presence of data as a cultural and
          expressive medium.
        </p>
      </div>

      <Spacing />

      <div className="max-w-[1100px] mx-auto">
        {data.length > 0 && <DataArtEventTable events={data} />}
      </div>

      <Spacing />

      <Contact />
    </div>
  );
}
