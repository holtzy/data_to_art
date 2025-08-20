import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ArtistGallerySectionProps = { imgs: string[] };

export const ArtistGallerySection = ({ imgs }: ArtistGallerySectionProps) => {
  return (
    <>
      <h2 className="mb-6">Gallery</h2>
      <div className="full-bleed flex justify-center mb-12">
        <Carousel opts={{ align: "start" }} className="w-[90%]">
          <CarouselContent>
            {imgs.map((img, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
                <img src={img} alt={`TOOD`} className="h-72 object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};
