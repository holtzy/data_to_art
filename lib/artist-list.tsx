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
        <p>
          Florent is a data visualization designer who transforms data into
          compelling visual art. He blends creativity and clarity to turn
          complex information into meaningful stories.
        </p>
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
    location: [44.8994, 6.6432],
    city: "Clermont Ferrand - 🇫🇷",
    homepageLink: "https://totem-digital.com",
    linkedinLink: "https://www.linkedin.com/in/nhwhiteley",
  },

  {
    name: "Marlène Dorgny",
    descriptionShort: (
      <>
        <p>
          Marlene Dorgny est une graphiste d’information française. Elle a
          découvert la datavisualisation en tapant dans Google la question d’un
          client « comment rendre un tableau joli ? ». Elle a découvert une
          discipline mêlant l’analyse et le design, le sens avant le beau, le
          fond avant mais avec la forme. Se plonger dans des données, trouver
          l’histoire qui se cache derrière, structurer le tout pour transmettre
          une information compréhensible et utile, telle est la démarche à
          chaque fois passionnante. En 2018, elle commence à visualiser un livre
          sur la scène musicale mancunienne. Sous forme de témoignages, le livre
          raconte comment les personnes se sont croisées, connectées, ont fait
          de la musique ensemble. Une passion pour la cartographie de réseaux
          était née.
        </p>
      </>
    ),
    folder: "marlene-dorgny",
    location: [48.8575, 2.3514],
    city: "Clermont Ferrand - 🇫🇷",
    homepageLink: "https://www.md-graphiste.com",
    linkedinLink: "https://www.linkedin.com/in/marlenedorgny/",
  },

  {
    name: "Marta Sierra",
    descriptionShort: (
      <>
        <p>
          I'm an information designer, but graphics sometimes can’t touch me.
          Outside work, I explore feelings I can’t always name. I started
          journaling, then began collecting data and making it visual. I create
          handmade pieces from personal data. Habits, memories, moods. It’s a
          slow, reflective process that helps me listen to myself. I move away
          from standard charts, experimenting with intuitive, expressive forms.
          My work sits between data, emotion and self-awareness.
        </p>
      </>
    ),
    folder: "marta-sierra",
    location: [52.3676, 4.9041],
    city: "Clermont Ferrand - 🇫🇷",
    homepageLink: "martaviz.nl",
    linkedinLink:
      "https://www.linkedin.com/in/martasierragarcia/?originalSubdomain=nl",
  },

  {
    name: "Alisa Singer",
    descriptionShort: (
      <>
        <p>
          Alisa believes climate change to be the most critical challenge facing
          our world and sought to find a way to use her art to further efforts
          to bring awareness to the issue. She was attracted by the inherently
          aesthetic design elements of scientific charts and graphs, and
          intrigued by the idea of using art to give them dramatic effect.
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
] as const satisfies readonly Artist[];
