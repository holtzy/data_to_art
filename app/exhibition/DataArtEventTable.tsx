"use client";

import DataTable from "react-data-table-component";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type DataArtEvent = {
  name: string;
  link: string;
  from: string;
  to: string;
  location: string;
  artists: string;
  description: string;
};

type DataArtEventTableProps = {
  events: DataArtEvent[];
};

export function DataArtEventTable({ events }: DataArtEventTableProps) {
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

  const columns = [
    {
      name: "Name",
      selector: (row: Event) => row.name,
      sortable: true,
      minWidth: "200px",
      wrap: true,
    },
    {
      name: "Location",
      selector: (row: Event) => row.location,
      sortable: true,
      wrap: true,
    },
    {
      name: "From",
      selector: (row: Event) => new Date(row.from).getTime(),
      format: (row: Event) => new Date(row.from).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "To",
      selector: (row: Event) => new Date(row.to).getTime(),
      format: (row: Event) => new Date(row.to).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Status",
      cell: (row: Event) => {
        const status = getStatus(row.from, row.to);
        return (
          <span
            className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              status.color
            )}
          >
            {status.label}
          </span>
        );
      },
      sortable: false,
      minWidth: "120px",
    },
    {
      name: "Description",
      cell: (row: Event) => (
        <span className="text-xs text-gray-600">{row.description}</span>
      ),
      wrap: true,
      minWidth: "350px",
    },
    {
      name: "Link",
      cell: (row: Event) =>
        row.link ? (
          <Link
            href={row.link}
            target="_blank"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            View
          </Link>
        ) : (
          <span className="text-xs text-gray-400">No link</span>
        ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={events}
      pagination
      highlightOnHover
      responsive
      striped
      defaultSortFieldId={3} // Sort by "From" by default
    />
  );
}
