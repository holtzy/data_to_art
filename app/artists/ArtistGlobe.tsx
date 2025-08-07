"use client";

import { useRef } from "react";
import Globe from "globe.gl";
import { artistList } from "@/lib/artist-list";

export function ArtistGlobe() {
  const globeEl = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!globeEl.current) return;

  //   const globe = Globe()(globeEl.current)
  //     .backgroundColor("white")
  //     .globeImageUrl("/earth-blue-marble.jpg")
  //     .labelsData(artistList)
  //     .labelLat((d) => d.location[0])
  //     .labelLng((d) => d.location[1])
  //     .labelText((d) => d.name)
  //     //   .labelImg((d) => {
  //     //     return "/artists" + d.folder + ".webp";
  //     //   })
  //     .labelSize(() => 1.5)
  //     .labelDotRadius(() => 0.4)
  //     .labelColor(() => "rgba(30, 64, 175, 0.9)") // tailwind blue-800
  //     .labelResolution(2);

  //   globe.controls().autoRotate = true;
  //   globe.controls().autoRotateSpeed = 0.3;

  //   // Optional: zoom level and initial position
  //   globe.pointOfView({ lat: 20, lng: 0, altitude: 2 });

  //   // Handle responsiveness
  //   const resize = () =>
  //     globe.width(window.innerWidth).height(window.innerHeight);
  //   resize();
  //   window.addEventListener("resize", resize);

  //   return () => window.removeEventListener("resize", resize);
  // }, []);

  return <div ref={globeEl} className="w-full h-32" />;
}
