type FiveImgsGalleryProps = {
  images: string[]; // Expecting exactly 5 image URLs
  height?: number;
};

export default function FiveImgsGallery({
  images,
  height = 500,
}: FiveImgsGalleryProps) {
  if (images.length !== 5) {
    return <p>Error: Exactly 5 images are required.</p>;
  }

  return (
    <div className="flex gap-2  my-8" style={{ height }}>
      {/* Big left image */}
      <div className="w-1/3 h-full overflow-hidden">
        <img
          src={images[0]}
          alt={`Gallery image 1`}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-2/3 h-full grid grid-cols-2 grid-rows-2 gap-2  ">
        {images.slice(1).map((src, i) => (
          <div key={i} className="overflow-hidden ">
            <img
              src={src}
              alt={`Gallery image ${i + 2}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
