import { EmailButton } from "./EmailButton";

export const Contact = () => {
  return (
    <section className="full-bleed bg-repeat bg-[length:auto]">
      <div
        style={{ backgroundImage: "url('/asset/texture.png')" }}
        className="flex justify-center items-center h-[600px]"
      >
        <div className="flex flex-col justify-center items-center max-w-[700px] mx-auto bg-white/90 py-20 px-10 text-black">
          <h2 className="mb-4 border-none">Know an artist?</h2>
          <p className="mb-12 text-center max-w-lg">
            We’re always looking to enrich our gallery with outstanding data
            art. If you are—or know—an artist whose work deserves to be
            featured, we’d love to hear from you.
          </p>
          <EmailButton
            name={"Suggest an artist"}
            link="wakeupdataviz@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};
