import Link from "next/link";
import { EmailButton } from "./EmailButton";

export const Contact = () => {
  return (
    <section id="contact" className="full-bleed bg-repeat bg-[length:auto]">
      <div
        style={{ backgroundImage: "url('/asset/texture.png')" }}
        className="flex justify-center items-center h-[600px]"
      >
        <div className="flex flex-col justify-center items-center max-w-[700px] mx-auto bg-white/90 py-20 px-10 text-black">
          <h2 className="mb-4 border-none">Want to submit your work?</h2>
          <p className="mb-12 text-center max-w-lg">
            <Link href="/">Data To Art</Link> is a curated online gallery
            celebrating outstanding data art projects. Reach out if you’d like
            to submit your work for consideration.
          </p>

          <EmailButton
            name={"Submit your work"}
            link="wakeupdataviz@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};
