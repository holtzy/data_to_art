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
          <h1 className="text-center bg-white/20 text-black text-5xl font-bold max-w-[400px]">
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
}
