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
    location: [12, 12],
    city: "Clermont Ferrand - 🇫🇷",
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
          I come from the Jura mountains where I spent my childhood between
          forest trails and sports fields. After following a sports-study
          training in handball until the baccalaureate, I moved to Switzerland
          to study biomechanics at the Swiss Federal Institute of Technology
          (EPFL) in Lausanne. During my studies, I passionately discovered the
          multiple facets of scientific outreach for the general public. In
          2020, I joined the French National Institute of Sport, Expertise, and
          Performance (INSEP) and its Medalability project as a data-scientist,
          analyzing international competition in preparation for the Paris 2024
          Games. At the same time, I devoted my free time to turning everyday
          tools into means of artistic expression. Passionate about detours and
          creation, I founded Oiiwa in 2024. From my digital adventure
          playground, I transform a digital raw material into a fun and
          intelligible form. Aimed at a wide range of audiences and whether
          intended for printed, digital or plastic media, my creations are new
          ways of interacting with data by making them tangible and interactive!
        </p>
      </>
    ),
    folder: "jeremy-wanner",
    location: [48.8575, 2.3514],
    city: "Clermont Ferrand - 🇫🇷",
    homepageLink: "https://oiiwa.fr/",
    linkedinLink: "https://www.linkedin.com/in/jeremy-wanner-oiiwa/",
  },

  {
    name: "Nick Whiteley",
    descriptionShort: (
      <>
        <p>
          Installé dans les alpes françaises, Nick Whiteley est designer et
          fondateur de totem design company, un studio spécialisé dans la
          création d’identités visuelles, de web design et le développement de
          stratégies numériques. Son approche allie esthétique et engagement,
          avec une attention particulière à l’impact social et environnemental
          du design. Inspiré par un documentaire sur les gorilles de montagne,
          il s’est tourné vers la data visualisation pour sensibiliser à la
          disparition des espèces et à la dégradation des habitats naturels. À
          la croisée de l’illustration et de la data, son travail montre une
          volonté de faire du design un outil de compréhension et d’impact
          émotionnel, au service d’enjeux concrets.
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
