import { EmailButton } from "./EmailButton";

export const Contact = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col justify-center items-center py-12 max-w-[700px] mx-auto bg-slate-50 px-30">
        <h2 className="mb-4">Know an artist?</h2>
        <p className="mb-12 text-center">
          We’re always looking to enrich our gallery with outstanding data art.
          If you are—or know—an artist whose work deserves to be featured, we’d
          love to hear from you.
        </p>
        <EmailButton
          name={"Suggest an artist"}
          link="wakeupdataviz@gmail.com"
        />
      </div>
    </section>
  );
};
