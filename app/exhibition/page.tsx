"use client";

import { useEffect, useState } from "react";
import { DataArtEventTable } from "./DataArtEventTable";
import { DataArtEvent } from "./DataArtEventTable";

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

  console.log("data", data);

  return (
    <div>
      {error && <p className="text-red-600">{error}</p>}
      {!error && data.length === 0 && <p>Loading data from Google Sheets...</p>}

      <div className="mt-44 flex flex-col items-center bg-gradient-to-t from-transparent to-white">
        <h1 className="text-9xl">Exhibitions</h1>
        <p className="text-center max-w-62">{}</p>
      </div>

      <div className="max-w-[1100px] mx-auto">
        {data.length > 0 && <DataArtEventTable events={data} />}
      </div>
    </div>
  );
}
