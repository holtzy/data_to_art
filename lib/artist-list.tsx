import { ReactNode } from "react";

export type Artist = {
  name: string;
  descriptionShort: ReactNode;
  folder: string;
  location: [number, number];
  homepageLink: string;
  linkedinLink?: string;
  city: string;
};

export const artistList = [
  {
    name: "Florent Lavergne",
    descriptionShort: (
      <>
        Florent is a data visualization designer who transforms data into
        compelling visual art. He blends creativity and clarity to turn complex
        information into meaningful stories.
      </>
    ),
    folder: "florent-lavergne",
    location: [3.0795, 45.7935],
    city: "Clermont Ferrand - 🇫🇷",
    homepageLink: "behance.net/lavergneflor",
    linkedinLink: "https://www.linkedin.com/in/lavergneflor",
  },
  {
    name: "Soha Elghany",
    descriptionShort: (
      <>
        <p>
          A data visualisation designer that focuses on humanising data through
          data art.
        </p>
      </>
    ),

    folder: "soha-elghany",
    location: [0.1276, 51.5072],
    city: "London - 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    homepageLink: "https://public.tableau.com/app/profile/soha.elghany/vizzes",
    linkedinLink: "https://www.linkedin.com/in/soha-elghany/",
  },
  {
    name: "Laura Castro",
    descriptionShort: (
      <>
        <p>
          Laura Castro bridges product and information design to create data
          stories that are not only insightful but also seamlessly woven into
          user-centered digital experiences.
        </p>
      </>
    ),
    folder: "laura-castro",
    location: [8.5417, 47.3769],
    city: "Zurich - 🇨🇭",
    homepageLink: "www.iamlauracastro.com",
    linkedinLink: "https://www.linkedin.com/in/lauracastrosoto/",
  },

  {
    name: "Cinzia Bongino",
    descriptionShort: (
      <>
        <p>
          Cinzia is a graphic, information, and web designer specializing in
          data visualization and UI/UX design. She also creates research-driven
          artistic projects, blending data journalism with storytelling
          techniques.
        </p>
      </>
    ),
    folder: "cinzia-bongino",
    location: [7.6869, 45.0703],
    city: "Turin - 🇮🇹",
    homepageLink: "https://www.cinziabongino.com",
    linkedinLink: "https://www.linkedin.com/in/cinzia-bongino-b8ab8a7a/",
  },

  {
    name: "Jeremy Wanner",
    descriptionShort: (
      <>
        <p>
          Jeremy Wanner is a data scientist and creative from the Jura
          mountains, transforming digital raw material into playful, tangible,
          and interactive data art for diverse audiences.
        </p>
      </>
    ),
    folder: "jeremy-wanner",
    location: [2.3514, 48.8575],
    city: "Paris - 🇫🇷",
    homepageLink: "https://oiiwa.fr/",
    linkedinLink: "https://www.linkedin.com/in/jeremy-wanner-oiiwa/",
  },

  {
    name: "Nick Whiteley",
    descriptionShort: (
      <>
        <p>
          Nick Whiteley is a designer based in the French Alps, founder of TOTEM
          Design Company, who uses thoughtful, honest design and data
          visualization to create impactful brands and raise awareness about
          environmental and social issues.
        </p>
      </>
    ),
    folder: "nick-whiteley",
    location: [6.6432, 44.8994],
    city: "Briançon - 🇫🇷",
    homepageLink: "https://totem-digital.com",
    linkedinLink: "https://www.linkedin.com/in/nhwhiteley",
  },

  {
    name: "Marlène Dorgny",
    descriptionShort: (
      <>
        <p>
          Marlene Dorgny is a French information designer who transforms data
          into clear, meaningful, and beautifully structured stories, with a
          special passion for network mapping.
        </p>
      </>
    ),
    folder: "marlene-dorgny",
    location: [2.3514, 48.8575],
    city: "Paris - 🇫🇷",
    homepageLink: "https://www.md-graphiste.com",
    linkedinLink: "https://www.linkedin.com/in/marlenedorgny/",
  },

  {
    name: "Marta Sierra",
    descriptionShort: (
      <>
        <p>
          Marta creates handmade data visualizations that turn personal
          feelings, habits, and memories into expressive visual forms. Her work
          sits between data, emotion, and self-awareness, exploring what
          standard charts can’t capture.
        </p>
      </>
    ),
    folder: "marta-sierra",
    location: [52.3676, 4.9041],
    city: "Amsterdam - 🇳🇱",
    homepageLink: "martaviz.nl",
    linkedinLink:
      "https://www.linkedin.com/in/martasierragarcia/?originalSubdomain=nl",
  },

  {
    name: "Alisa Singer",
    descriptionShort: (
      <>
        <p>
          Alisa Singer is a digital artist who transforms climate data and
          social issues into vibrant, thought-provoking visual art that inspires
          awareness and reflection.
        </p>
      </>
    ),
    folder: "alisa-singer",
    location: [87.6324, 41.8832],
    city: "Chicago - 🇺🇸",
    homepageLink: "https://www.environmentalgraphiti.org/",
    linkedinLink:
      "https://www.linkedin.com/in/martasierragarcia/?originalSubdomain=nl",
  },

  {
    name: "Florian Melki",
    descriptionShort: (
      <>
        <p>
          Florian is a data analyst who explores human behavior through creative
          data visualization, turning complex patterns into engaging, human
          stories.
        </p>
      </>
    ),
    folder: "florian-melki",
    location: [1.5536, 47.2184],
    city: "Nantes - 🇫🇷",
    homepageLink: "https://www.behance.net/florianm1",
    linkedinLink: "https://www.linkedin.com/in/florian-m-26842718/",
  },

  {
    name: "Florian Melki",
    descriptionShort: (
      <>
        <p>
          Florian is a data analyst who explores human behavior through creative
          data visualization, turning complex patterns into engaging, human
          stories.
        </p>
      </>
    ),
    folder: "florian-melki",
    location: [1.5536, 47.2184],
    city: "Nantes - 🇫🇷",
    homepageLink: "https://www.behance.net/florianm1",
    linkedinLink: "https://www.linkedin.com/in/florian-m-26842718/",
  },

  {
    name: "Anne-Laure Fréant",
    descriptionShort: (
      <>
        <p>
          Anne-Laure Freant is a French artist and technical writer who explores
          how knowledge and memory are shaped, encoded, and preserved across
          time and technology.
        </p>
      </>
    ),
    folder: "anne-laure-freant",
    location: [2.1686, 41.3874],
    city: "Barcelona - 🇪🇸",
    homepageLink: "https://anne-laure-freant.gitbook.io/art-gallery",
    linkedinLink: "https://www.linkedin.com/in/annelaurefreant/",
  },
] as const satisfies readonly Artist[];
