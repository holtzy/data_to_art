"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { projectList } from "@/lib/project-list";
import Link from "next/link";
import { useEffect, useState } from "react";

type Row = {
  [key: string]: string;
};

const URL =
  "https://docs.google.com/spreadsheets/d/1lXvTLBOsCudCMOvByLq0yruGwssWXjSqSOHg41Nh6iQ/edit?gid=1987880223#gid=1987880223";

export default function ExibPage() {
  const [data, setData] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Convert your Sheet URL into a direct CSV export link
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/1lXvTLBOsCudCMOvByLq0yruGwssWXjSqSOHg41Nh6iQ/export?format=csv&gid=1987880223";

    fetch(csvUrl)
      .then((res) => res.text())
      .then((text) => {
        const rows = text.split("\n").map((r) => r.split(","));
        const headers = rows[0];
        const items = rows.slice(1).map((r) =>
          headers.reduce((acc: Row, header, i) => {
            acc[header.trim()] = r[i] ?? "";
            return acc;
          }, {})
        );
        setData(items);
      })
      .catch(() => setError("Failed to fetch Google Sheet data."));
  }, []);

  return (
    <div>
      {error && <p className="text-red-600">{error}</p>}
      {!error && data.length === 0 && <p>Loading data from Google Sheets...</p>}

      <div className="mt-44 flex flex-col items-center bg-gradient-to-t from-transparent to-white">
        <h1 className="text-9xl">Exhibitions</h1>
        <p className="text-center max-w-62">{}</p>
      </div>
      <div className="wrapper">
        {data.length > 0 && (
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                {Object.keys(data[0]).map((key) => (
                  <th
                    key={key}
                    className="border border-gray-300 px-3 py-2 text-left"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-50">
                  {Object.keys(row).map((key) => (
                    <td key={key} className="border border-gray-300 px-3 py-2">
                      {row[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
