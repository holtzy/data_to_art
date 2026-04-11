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
          Fresquita Party is a data-driven visualization project that analyzes a
          60-song Spotify playlist to reveal patterns of gender, diversity, and
          career representation among the artists behind the music.
        </p>
      </>
    ),
  },
  {
    name: "Dos Juegos",
    folder: "dos-juegos",
    link: "http://dosjuegos.es/index.html",
    artist: "laura-castro",
    date: new Date("2019-01-01"),
    descriptionShort: (
      <>
        <p>
          Dos Juegos is an experimental project that visualizes the trajectories
          of basketball players to explore how data analysis and visualization
          can enhance team performance and decision-making in sports.
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
  {
    name: "Waste Streams",
    folder: "waste-streams",
    link: "https://www.cinziabongino.com/projects/waste-streams.html",
    artist: "cinzia-bongino",
    date: new Date("2023-02-01"),
    descriptionShort: (
      <>
        <p>
          A data-driven installation that visualizes Romania’s and Europe’s
          waste management systems as interconnected conveyor belts.
        </p>
      </>
    ),
  },

  ////////
  ///////
  // MARLENE
  ////////
  ///////
  {
    name: "Riot Grrrl",
    folder: "riot",
    link: "https://md-graphiste.com/portfolio_page/the-dataviz-riot-grrrl-project/",
    artist: "marlene-dorgny",
    date: new Date("2023-02-01"),
    descriptionShort: (
      <>
        <p>
          The dataviz Riot Grrrl project explores the feminist punk movement
          that emerged in the early 1990s in the Pacific Northwest of the United
          States.
        </p>
      </>
    ),
  },
  {
    name: "Manchester Music City",
    folder: "manchester",
    link: "https://md-graphiste.com/portfolio_page/manchester-music-city-1976-1996/",
    artist: "marlene-dorgny",
    date: new Date("2023-02-01"),
    descriptionShort: (
      <>
        <p>
          A data-driven network map revealing the web of relationships that
          shaped Manchester’s vibrant music scene from 1976 to 1996.
        </p>
      </>
    ),
  },

  ////////
  ///////
  // MARTA SIERRA
  ////////
  ///////
  {
    name: "Inner Metrics",
    folder: "inner-metrics",
    link: "https://martaviz.nl/journal-dataviz",
    artist: "marta-sierra",
    date: new Date("2022-01-01"),
    descriptionShort: (
      <>
        <p>
          A fun and creative challenge for experimenting with data visualization
          techniques using personal data.
        </p>
      </>
    ),
  },

  ////////
  ///////
  //FLORIAN MELKI
  ////////
  ///////
  {
    name: "Le temps qui nous manque",
    folder: "missing-time",
    link: "https://www.behance.net/gallery/234144353/50-nuances-de-dataviz",
    artist: "florian-melki",
    date: new Date("2025-08-09"),
    descriptionShort: (
      <>
        <p>
          An exploration of the author own life data, where he visualized his
          sleep, work, and daily rhythms in dozens of creative, experimental
          ways to reveal hidden patterns.
        </p>
      </>
    ),
  },

  ////////
  ///////
  // ANNE LAURE FREANT
  ////////
  ///////
  {
    name: "Flood necklace",
    folder: "flood-necklace",
    link: "https://datartefacts.hypotheses.org/",
    artist: "anne-laure-freant",
    date: new Date("2025-08-09"),
    descriptionShort: (
      <>
        <p>
          A ceramic datasculpture made from Loire Valley clay, where each sphere
          represents a recorded flood of the Loire River in Orléans between 1800
          and 2003.
        </p>
      </>
    ),
  },
  {
    name: "The Life of a River",
    folder: "life-of-a-river",
    link: "https://datartefacts.hypotheses.org/",
    artist: "anne-laure-freant",
    date: new Date("2025-08-09"),
    descriptionShort: (
      <>
        <p>
          A wooden datasculpture representing monthly water height data of the
          Loire River in Orléans from 2000 to 2022, each disc symbolizing a year
          in the river’s changing flow.
        </p>
      </>
    ),
  },

  ////////
  ///////
  // COUPLE IN DATA
  ////////
  ///////
  {
    name: "Human Rights Fans",
    folder: "human-rights-fans",
    link: "https://www.instagram.com/coupleindata/",
    artist: "couple-in-data",
    date: new Date("2022-01-01"),
    descriptionShort: (
      <>
        <p>
          A scarf visualizing the thousands of migrant workers who died building
          stadiums for the Qatar World Cup, turning data into a wearable symbol
          that reminds us who we should truly support: human rights.
        </p>
      </>
    ),
  },
  {
    name: "Parity Under Construction",
    folder: "parity-under-construction",
    link: "https://www.instagram.com/coupleindata/",
    artist: "couple-in-data",
    date: new Date("2024-01-01"),
    descriptionShort: (
      <>
        <p>
          A redesigned advertising trophy with 28% of its form removed to
          reflect the gap separating women from equality in creative direction,
          turning an award into a critique and a call to action.
        </p>
      </>
    ),
  },
  {
    name: "Loving Routine",
    folder: "loving-routine",
    link: "https://www.instagram.com/coupleindata/",
    artist: "couple-in-data",
    date: new Date("2020-01-01"),
    descriptionShort: (
      <>
        <p>
          Everyday couple life during Covid-19 reimagined through tangible data
          visualizations, turning private routines into physical charts and
          objects that question the paradox of intimacy and data privacy.
        </p>
      </>
    ),
  },
  ////////
  ///////
  // LOUD NUMBERS
  ////////
  ///////
  {
    name: "Scorched Earth",
    folder: "scorched-earth",
    link: "https://www.loudnumbers.net/scorchedearth",
    artist: "loud-numbers",
    date: new Date("2024-01-01"),
    descriptionShort: (
      <>
        <p>
          An audiovisual artwork based on daily fire counts from the Swedish
          county of Skåne during the extreme summer of 2018, blending data
          sonification with audio-reactive visuals.
        </p>
      </>
    ),
  },
  {
    name: "The Carrington Event",
    folder: "the-carrington-event",
    link: "https://www.loudnumbers.net/carringtonevent",
    artist: "loud-numbers",
    date: new Date("2024-01-01"),
    descriptionShort: (
      <>
        <p>
          A collaboration telling the story of the largest solar storm in
          recorded history, transforming archival data from 1859 into audiovisual
          experiences designed to be played live and exhibited in gallery spaces.
        </p>
      </>
    ),
  },
  {
    name: "On Standby",
    folder: "on-standby",
    link: "https://www.loudnumbers.net",
    artist: "loud-numbers",
    date: new Date("2024-01-01"),
    descriptionShort: (
      <>
        <p>
          A 10-hour sound art piece based on energy data collected overnight
          from volunteers in Malmö, Sweden — a meditative symphony of the unseen
          energy that hums in our homes every night.
        </p>
      </>
    ),
  },

  {
    name: "Cuts of Corruption",
    folder: "cuts-of-corruption",
    link: "https://www.instagram.com/coupleindata/",
    artist: "couple-in-data",
    date: new Date("2022-01-01"),
    descriptionShort: (
      <>
        <p>
          A data visualization project by Couple in Data exploring corruption
          through physical objects and tangible data.
        </p>
      </>
    ),
  },
];
