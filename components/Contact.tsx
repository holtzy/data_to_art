"use client";

import { useEffect, useRef } from "react";

// Kit (ConvertKit) inline form. The embed script renders the form right next
// to where the <script> tag sits, so we append it inside a container on mount.
const KIT_FORM_UID = "256ff54468";
const KIT_FORM_SRC = `https://prodigious-trailblazer-3628.kit.com/${KIT_FORM_UID}/index.js`;

const KitForm = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    // Guard against double-mount in dev (React strict mode).
    if (!container || container.querySelector("script")) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = KIT_FORM_SRC;
    script.dataset.uid = KIT_FORM_UID;
    container.appendChild(script);
  }, []);

  return <div ref={ref} className="w-full flex justify-center" />;
};

export const Contact = () => {
  return (
    <section id="newsletter" className="full-bleed bg-repeat bg-[length:auto]">
      <div
        style={{ backgroundImage: "url('/asset/texture.png')" }}
        className="flex justify-center items-center min-h-[600px] py-16"
      >
        <div className="flex flex-col justify-center items-center max-w-[700px] mx-auto bg-white/90 py-16 px-10 text-black">
          <h2 className="mb-4 border-none text-center">Stay in the loop</h2>
          <p className="mb-6 text-center max-w-lg">
            Join the newsletter to hear when <b>new artists</b> join the
            gallery, follow my little <b>dataviz projects</b>, and get the{" "}
            <b>tips</b> I&apos;m writing.
          </p>
          <KitForm />
        </div>
      </div>
    </section>
  );
};
