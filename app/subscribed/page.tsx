import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "You're subscribed | Data to Art",
  description: "Thanks for joining the Data to Art newsletter.",
  // Only reached after confirming the newsletter email: keep it out of search engines.
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="wrapper">
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center max-w-[600px] mx-auto py-24">
        <div className="text-6xl mb-8">🎉</div>
        <h1 className="!text-5xl !font-normal mb-6">You&apos;re in!</h1>
        <p className="mb-4">
          Thanks for confirming your subscription to the <b>Data to Art</b>{" "}
          newsletter.
        </p>
        <p className="mb-12">
          You&apos;ll hear from me when new artists join the gallery, when I
          share a new dataviz project, and when there&apos;s a new tip to read.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/artists" className={cn(buttonVariants())}>
            Meet the artists
          </Link>
          <Link
            href="/artworks"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Browse the artworks
          </Link>
        </div>
      </section>
    </div>
  );
}
