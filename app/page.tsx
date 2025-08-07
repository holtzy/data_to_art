"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Data To Art</h1>
      <Link href="/artists">Artists</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
}
