import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Spacing } from "@/components/Spacing";
import { EmailButton } from "@/components/EmailButton";

export const metadata: Metadata = {
  title: "Let's add your work | Data to Art",
  description:
    "A short guide for invited artists: what we need to include your work on Data To Art and spread the word about it.",
  // Shared by DM only: keep it out of search engines.
  robots: { index: false, follow: false },
};

const CONTACT_EMAIL = "yan.holtz.data@gmail.com";

// The artist whose pages are used as the reference example throughout the guide.
const EXAMPLE_ARTIST = "/artist/florent-lavergne";
const EXAMPLE_PROJECT = "/artist/florent-lavergne/naturality";

type Step = {
  emoji: string;
  title: string;
  intro: React.ReactNode;
  items: React.ReactNode[];
  note?: React.ReactNode;
  example: { href: string; label: string };
};

const steps: Step[] = [
  {
    emoji: "1️⃣",
    title: "Tell us who you are",
    intro: "This is the top of your artist page.",
    items: [
      "Your name, as you want it displayed",
      "One sentence that sums up your work",
      "A photo of you",
      "Your city and country",
      "Your website and social links",
    ],
    example: { href: EXAMPLE_ARTIST, label: "Florent's artist page" },
  },
  {
    emoji: "2️⃣",
    title: "Share your story",
    intro: "A short bio that introduces you and your practice.",
    items: [
      "2 to 4 paragraphs: your background, the themes you explore, your tools",
      "Your favorite piece: we'll feature it next to your photo",
    ],
    example: { href: EXAMPLE_ARTIST, label: "Florent's bio" },
  },
  {
    emoji: "3️⃣",
    title: "Pick 1 to 3 projects",
    intro: "Each project gets its own page. For each one, send:",
    items: [
      "Its title and date",
      "One or two sentences to describe it",
      "A few paragraphs on the idea, the data you used, and how you made it",
      "A link to where it lives online, if there is one",
    ],
    note: (
      <>
        <strong>✨ We&apos;re really open to format.</strong> Have a specific
        idea? A video, a schema, something interactive? Just let us know!
      </>
    ),
    example: { href: EXAMPLE_PROJECT, label: "the Naturality project page" },
  },
  {
    emoji: "4️⃣",
    title: "Add your images",
    intro: "This is what makes the pages beautiful.",
    items: [
      "5 to 10 images per project: the full piece, details, process, prints",
      "As large as you have them, without watermarks",
    ],
    example: { href: EXAMPLE_PROJECT, label: "the images in Naturality" },
  },
  {
    emoji: "5️⃣",
    title: "Send it in one folder",
    intro: "Put everything in a single shared folder and email us the link.",
    items: [
      "Google Drive, Dropbox or WeTransfer all work",
      "Rough texts are fine: we polish them for you",
    ],
    example: { href: "/artists", label: "all our artists" },
  },
];

const StepCard = ({ step }: { step: Step }) => (
  <div className="flex gap-5 border border-black/10 bg-white p-6 sm:p-8">
    <span className="text-3xl leading-none shrink-0">{step.emoji}</span>
    <div className="min-w-0">
      <h3 className="!mt-0 !font-normal !text-3xl">{step.title}</h3>
      <p className="!mt-2 opacity-60">{step.intro}</p>
      <ul className="!my-4 space-y-1">
        {step.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {step.note && (
        <p className="!mt-0 mb-4 text-sm border border-dashed border-black/20 bg-slate-50 p-4">
          {step.note}
        </p>
      )}
      <Link
        href={step.example.href}
        target="_blank"
        className="no-underline inline-flex items-center gap-1 text-sm bg-slate-100 hover:bg-slate-200 px-3 py-1.5 transition-colors"
      >
        <span className="uppercase tracking-wider text-xs opacity-60 mr-1">
          Example
        </span>
        {step.example.label}
        <ArrowUpRight size={14} />
      </Link>
    </div>
  </div>
);

export default function SubmitPage() {
  return (
    <>
      <div className="wrapper mt-40">
        <div className="flex flex-col items-center text-center">
          <h1>Let&apos;s add your work to Data To Art</h1>
          <p className="max-w-md">
            Here is what we need to include your work and spread the word
            about it.
          </p>
          <div className="mt-8">
            <EmailButton name="Email us" link={CONTACT_EMAIL} />
          </div>
        </div>
      </div>

      <Spacing />

      <section className="wrapper">
        <div className="space-y-6">
          {steps.map((step) => (
            <StepCard key={step.title} step={step} />
          ))}
        </div>
      </section>

      <Spacing />

      <section className="wrapper bg-slate-50 py-16">
        <h3 className="!mt-0 !font-normal !text-3xl">🎉 What happens next</h3>
        <p className="!mt-2">
          We build your pages and send you a preview. Nothing goes live until
          you&apos;re happy with it.
        </p>
        <p className="text-sm opacity-60">
          Your work stays yours. We always credit you and link back to you,
          and we can change or remove anything whenever you ask.
        </p>
      </section>

      <section className="wrapper my-24">
        <div className="flex flex-col items-center text-center">
          <p>
            Questions, or ready to send? Write to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <div className="mt-6">
            <EmailButton name="Email us" link={CONTACT_EMAIL} />
          </div>
        </div>
      </section>
    </>
  );
}
