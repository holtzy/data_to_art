"use client";

type ParallaxProps = {
  text: string;
  imageUrl: string;
  height?: number;
};

export default function Parallax({
  text,
  imageUrl,
  height = 400,
}: ParallaxProps) {
  return (
    <section className="full-bleed my-8">
      <div
        className="bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('${imageUrl}')`, height }}
      >
        <div className="h-full flex items-center justify-center bg-black/0">
          <h1 className="text-5xl text-white font-bold">{text}</h1>
        </div>
      </div>
    </section>
  );
}
