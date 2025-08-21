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
    date: new Date("2023-08-06"),
    descriptionShort: (
      <>
        <p>
          The Glove Rose is a unique data art project that transforms Olympic
          boxing analytics into a blooming digital rose, visually capturing the
          dynamics and outcomes of each match.
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
        <p>
          A generative design project that visualizes endangered species
          populations, where each dot represents a living animal and the image
          gradually disappears as numbers decline.
        </p>
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
  {
    name: "Missing Migrants",
    folder: "missing-migrants",
    link: "https://public.tableau.com/app/profile/soha.elghany/viz/MissingMigrantsprintpt_1/Dashboard13",
    artist: "soha-elghany",
    date: new Date("2022-31-05"),
    descriptionShort: (
      <>
        <p>
          The Missing Migrants Project tracks people who died or went missing
          during migration toward international destinations. Each spiral
          represents a migration route, and each mark along it corresponds to an
          individual incident.
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
