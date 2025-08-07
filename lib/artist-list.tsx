import { ReactNode } from "react";
import { Project } from "./project-list";

export type Artist = {
  name: string;
  descriptionShort: ReactNode;
  descriptionLong: ReactNode;
  folder: string;
  location: [number, number];
  homepageLink: string;
  linkedinLink?: string;
};

export const artistList = [
  {
    name: "Florent Lavergne",
    descriptionShort: (
      <>
        <p></p>
      </>
    ),
    descriptionLong: (
      <>
        <p>
          Florent is an information designer focused on geospatial and
          environmental data, working with Microsoft's AI For Good Lab. I love
          exploring the intersection of data and art, and turning complex and
          difficult topics into inviting visual experiences. I use 3D tools and
          photo editing techniques to achieve the natural textures and color
          palettes that define my graphic identity.
        </p>
      </>
    ),
    folder: "florent-lavergne",
    location: [12, 12],
    homepageLink: "behance.net/lavergneflor",
    linkedinLink: "https://www.linkedin.com/in/lavergneflor",
  },
  {
    name: "Soha Elghany",
    descriptionShort: (
      <>
        <p></p>
      </>
    ),
    descriptionLong: (
      <>
        <p>
          Soha is a data visualisation designer that focuses on humanising data
          through data art. There is just something about data when it comes to
          real life events and figuring out a way to visualise it in a way that
          can tell a powerful story and provoke emotion that she is passionate
          about, especially figuring out how to do provoke an emotional reaction
          from the audience. We as human being are visual creatures and showing
          a spreadsheet of number doesnt tell a story that can tug at people's
          empathy level, instead the visual representation of that story does a
          better job.
        </p>
      </>
    ),
    folder: "soha-elghany",
    location: [12, 12],
    homepageLink: "https://public.tableau.com/app/profile/soha.elghany/vizzes",
    linkedinLink: "https://www.linkedin.com/in/soha-elghany/",
  },
  {
    name: "Laura Castro",
    descriptionShort: (
      <>
        <p></p>
      </>
    ),
    descriptionLong: (
      <>
        <p>
          Laura Castro – Information and Product Designer. I translate complex
          data into visual stories. With a background in audiovisual
          communication, graphic design, and a master’s in infographics and data
          visualization, I navigate the intersection of science, design, and
          technology to craft clear and engaging experiences.
        </p>
      </>
    ),
    folder: "laura-castro",
    location: [12, 12],
    homepageLink: "www.iamlauracastro.com",
    linkedinLink: "https://www.linkedin.com/in/lauracastrosoto/",
  },

  {
    name: "Cinzia Bongino",
    descriptionShort: (
      <>
        <p></p>
      </>
    ),
    descriptionLong: (
      <>
        <p>
          Cinzia Bongino is a graphic, information, and web designer with a
          specialization in data visualization and UI/UX design. She has taught
          two courses as a visiting professor at the Gengdan Institute of
          Beijing University of Technology; since 2024, she teaches a
          postgraduate course in UX/UI design at IED Milano. Aside from
          commercial work, she sometimes develops research projects for artistic
          contexts, in which she combines data journalism and storytelling
          techniques.
        </p>
      </>
    ),
    folder: "cinzia-bongino",
    location: [45.0703, 7.6869],
    homepageLink: "https://www.cinziabongino.com",
    linkedinLink: "https://www.linkedin.com/in/cinzia-bongino-b8ab8a7a/",
  },

  {
    name: "Jeremy Wanner",
    descriptionShort: (
      <>
        <p></p>
      </>
    ),
    descriptionLong: (
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
    homepageLink: "https://oiiwa.fr/",
    linkedinLink: "https://www.linkedin.com/in/jeremy-wanner-oiiwa/",
  },

  {
    name: "Nick Whiteley",
    descriptionShort: (
      <>
        <p></p>
      </>
    ),
    descriptionLong: (
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
    homepageLink: "https://totem-digital.com",
    linkedinLink: "https://www.linkedin.com/in/nhwhiteley",
  },

  {
    name: "Marlène Dorgny",
    descriptionShort: (
      <>
        <p></p>
      </>
    ),
    descriptionLong: (
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
    homepageLink: "https://www.md-graphiste.com",
    linkedinLink: "https://www.linkedin.com/in/marlenedorgny/",
  },

  {
    name: "Marta Sierra",
    descriptionShort: (
      <>
        <p></p>
      </>
    ),
    descriptionLong: (
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
    homepageLink: "martaviz.nl",
    linkedinLink:
      "https://www.linkedin.com/in/martasierragarcia/?originalSubdomain=nl",
  },

  {
    name: "Alisa Singer",
    descriptionShort: (
      <>
        <p></p>
      </>
    ),
    descriptionLong: (
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
    location: [41.8832, 87.6324],
    homepageLink: "https://www.environmentalgraphiti.org/",
    linkedinLink:
      "https://www.linkedin.com/in/martasierragarcia/?originalSubdomain=nl",
  },
] as const satisfies readonly Artist[];
