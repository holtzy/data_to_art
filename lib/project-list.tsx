import { ReactNode } from "react";
import { artistList } from "./artist-list";

export type Project = {
  name: string;
  folder: string;
  link: string;
  artist: (typeof artistList)[number]["folder"]; // must be one of the artist in the artistList object!
  date: Date;
  descriptionShort: ReactNode;
};

export const projectList: Project[] = [
  ////////
  ///////
  // FLORENT LAVERGNE
  ////////
  ///////
  {
    name: "Naturality",
    folder: "naturality",
    link: "https://www.behance.net/gallery/223921953/The-Gradient-of-Naturality-France",
    artist: "florent-lavergne",
    date: new Date("2021-08-02"),
    descriptionShort: (
      <>
        <p>
          What if nature could tell us where it thrives — and where it’s fading
          away? This map reveals the hidden gradient of naturality across
          France, inviting you to explore the unseen impact of humans on
          ecosystems.
        </p>
      </>
    ),
  },
  {
    name: "Wet Feet",
    folder: "wet-feet",
    link: "https://www.behance.net/gallery/124067143/Wet-Feet-Data-Visualization",
    artist: "florent-lavergne",
    date: new Date("2025-08-06"),
    descriptionShort: (
      <>
        <p>
          A data-driven visualization of coastal flood risk today and in 2100,
          under two greenhouse gas emission scenarios.
        </p>
      </>
    ),
  },
  ////////
  ///////
  // JEREMY WANNER
  ////////
  ///////
  {
    name: "Glove Rose",
    folder: "glove-rose",
    link: "https:",
    artist: "jeremy-wanner",
    date: new Date("2025-08-06"),
    descriptionShort: (
      <>
        <p>
          The Glove Rose is a new species of Rose, created using Olympic boxing
          data from the PerfAnalytics research project. The data first is
          collected through a markerless technique using only pre-calibrated
          cameras around the boxing ring. Computer visions algorithms developed
          by the research team transform the video flux into useful insights for
          athletes and coaches. Together with Alexandre Schortgen PhD candidate
          at INSEP and INRIA within the PerfAnalytics team, we later turned the
          data captured at the french Olympic Qualification Tournament into a
          new specie of roses : Rosa Pugilatu. More commonly known as the Glove
          Rose, it blossoms following an Olympic flowering cycle. Each rose
          represents different facets of a boxing match : if it is growing in
          the direction of the outcome of a fight, beware of its fierce thorns,
          which are all blows to the opponent wishing to pick it!
        </p>
      </>
    ),
  },

  ////////
  ///////
  // NICK WHITELEY
  ////////
  ///////
  {
    name: "Vanishing Points",
    folder: "vanishing-points",
    link: "https://vanishingpoints.live/#tiger",
    artist: "nick-whiteley",
    date: new Date("2025-08-06"),
    descriptionShort: (
      <>
        <p>Write description from totem digital age</p>
      </>
    ),
  },

  ////////
  ///////
  // ALISA SINGER
  ////////
  ///////
  {
    name: "Environmental Graphiti",
    folder: "environmental-graphiti",
    link: "https://www.environmentalgraphiti.org/",
    artist: "alisa-singer",
    date: new Date("2025-08-06"),
    descriptionShort: (
      <>
        <p>
          Environmental Graphiti transforms ecological data into striking visual
          narratives, merging art and sustainability to spark reflection on our
          natural world.
        </p>
      </>
    ),
  },

  ////////
  ///////
  // SOHA
  ////////
  ///////
  {
    name: "Gaza",
    folder: "gaza",
    link: "https:",
    artist: "soha-elghany",
    date: new Date("2024-09-01"),
    descriptionShort: (
      <>
        <p>
          From 6th Oct 2023 - 8th August 2024: 33,696 Palestinian people were
          killed, each dot is someone who was killed.{" "}
        </p>
      </>
    ),
  },

  ////////
  ///////
  // LAURA CASTRO
  ////////
  ///////
  {
    name: "Fresquita Party",
    folder: "fresquita-party",
    link: "ll",
    artist: "laura-castro",
    date: new Date("2018-01-01"),
    descriptionShort: (
      <>
        <p>
          Fresquita Party is a visual exploration of a 60-song Spotify playlist,
          aimed at uncovering who is behind the music we casually consume.
          Inspired by contemporary feminist movements and personal curiosity,
          the project collects and analyzes data about the artists, including
          gender, age, genre, nationality, and career timeline, to reveal
          patterns of representation and diversity. It seeks to answer questions
          like: How many women are producing the music I listen to? Are they at
          the start or peak of their careers? The result is a colorful,
          data-driven snapshot of the playlist’s authors.
        </p>
      </>
    ),
  },
  {
    name: "Dos Juegos",
    folder: "dos-juegos",
    link: "ll",
    artist: "laura-castro",
    date: new Date("2025-08-06"),
    descriptionShort: (
      <>
        <p></p>
      </>
    ),
  },

  ////////
  ///////
  // LAURA CASTRO
  ////////
  ///////
  {
    name: "Names on the moon",
    folder: "names-on-the-moon",
    link: "https://www.behance.net/gallery/168652141/The-Names-on-the-Moon",
    artist: "cinzia-bongino",
    date: new Date("2023-02-01"),
    descriptionShort: (
      <>
        <p>
          A visualization of the lunar surface features through their assigned
          names, categorizing them by people, places, proper nouns, and
          astronaut-named sites, and presenting the data in detailed lunar
          portraits inspired by NASA’s maps.
        </p>
      </>
    ),
  },
];
