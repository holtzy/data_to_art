"use client";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export type DataArtEvent = {
  name: string;
  link: string;
  from: string;
  to: string;
  location: string;
  artists: string;
  description: string;
  descriptionShort: string;
};

type Row = {
  [key: string]: string;
};

const URL =
  "https://docs.google.com/spreadsheets/d/1lXvTLBOsCudCMOvByLq0yruGwssWXjSqSOHg41Nh6iQ/export?format=tsv&gid=1987880223";

export function DataArtEventTable() {
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

  const customStyles = {
    rows: {
      style: {
        minHeight: "75px", // default is 48px
        maxHeight: "75px", // optional, to enforce exact height
        height: "50px", // some versions support this
      },
    },
  };

  const columns = [
    {
      name: "Name",
      selector: (row: DataArtEvent) => row.name,
      sortable: true,
      minWidth: "200px",
      wrap: true,
      cell: (row: DataArtEvent) => {
        return <span className="font-opensauce text-sm py-2">{row.name}</span>;
      },
    },
    {
      name: "Location",
      selector: (row: DataArtEvent) => row.location,
      sortable: true,
      minWidth: "120px",

      wrap: true,
      cell: (row: DataArtEvent) => {
        return <span className="font-opensauce text-sm">{row.location}</span>;
      },
    },
    {
      name: "When",
      minWidth: "120px",
      selector: (row: DataArtEvent) => new Date(row.from).getTime(),
      sortable: true,
      cell: (row: DataArtEvent) => {
        const date = new Date(row.from).toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
        return <span className="font-opensauce text-sm">{date}</span>;
      },
    },

    {
      name: "Status",
      cell: (row: DataArtEvent) => {
        const status = getStatus(row.from, row.to);

        // Map status label to colors
        const colors: Record<string, string> = {
          Past: "bg-[#A0AEC0]/90", // soft gray-blue
          Running: "bg-[#F6AD55]/90", // muted warm orange
          Upcoming: "bg-[#90CDF4]/90", // gentle sky blue
        };

        return (
          <Badge className={`font-opensauce text-sm ${colors[status.label]}`}>
            {status.label}
          </Badge>
        );
      },
      sortable: false,
      minWidth: "80px",
    },
    {
      name: "Link",
      cell: (row: DataArtEvent) =>
        row.link ? (
          <Link href={row.link} target="_blank" className="font-opensauce">
            Read more
          </Link>
        ) : (
          <span className="text-sm text-gray-400">No link</span>
        ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "Description",
      cell: (row: DataArtEvent) => (
        <span className="text-xs text-gray-600 font-opensauce py-2">
          {row.descriptionShort}
        </span>
      ),
      wrap: true,
      minWidth: "350px",
    },
  ];

  return (
    <>
      {error && <p className="text-red-600">{error}</p>}

      {!error && data.length === 0 && (
        <p className="text-xs">Loading data...</p>
      )}

      {data.length > 0 && (
        <DataTable
          columns={columns}
          data={data}
          highlightOnHover
          responsive
          striped
          defaultSortFieldId={3} // Sort by "From" by default
          customStyles={customStyles}
        />
      )}
    </>
  );
}

// Helper function for status pill
const getStatus = (from: string, to: string) => {
  const now = new Date();
  const start = new Date(from);
  const end = new Date(to);

  if (end < now) return { label: "Past", color: "bg-red-100 text-red-800" };

  if (start <= now && end >= now)
    return { label: "Running", color: "bg-orange-100 text-orange-800" };

  return { label: "Upcoming", color: "bg-green-100 text-green-800" };
};
