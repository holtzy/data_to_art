import { QuoteSection } from "@/components/QuoteSection";
import SocialMediaButtons, {
  SocialMediaButtonsMarthe,
} from "@/components/SocialMediaButtons";
import { Spacing } from "@/components/Spacing";
import { ArtScienceCursorSection } from "../(home)/ArtScienceCursorSection";
import Link from "next/link";
import { EmailButton } from "@/components/EmailButton";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { Contact } from "@/components/Contact";

export default function AboutPage() {
  return (
    <>
      <div className="wrapper mt-40">
        <center>
          <h1>About Data To Art</h1>
          <p className="max-w-96">
            Data To Art began as a meeting between a curator and a dataviz
            passionate. Both fascinated by the emotional side of data.
          </p>
        </center>
      </div>

      <div className="full-bleed mt-2">
        <div className="px-4">
          <ImgWithCaption
            img="/expo/expo2.jpg"
            caption={
              <span>
                Work by Kirell Benzi at the{" "}
                <a
                  href="https://www.behance.net/gallery/134515025/Dataviz-exhibition-I-Exposition-dataviz-I-Nantes-I-2021"
                  target="_blank"
                >
                  Nantes Digital Week
                </a>
                . Soon included in Data To Art.
              </span>
            }
          />
        </div>
      </div>

      <Spacing />

      <section className="wrapper bg-slate-50 py-24">
        <h1>Why this website?</h1>

        <p>
          We've long been fascinated by the many ways information can be
          represented. Some artists use data as a medium to create truly
          beautiful works.
        </p>

        <p>
          But these masterpieces are scattered across the internet, with no
          central place to discover or showcase them. That's why we created{" "}
          <Link href="/">Data To Art</Link>.
        </p>

        <p>
          Marthe has curated Data Art for years and knows its community and
          languages inside out. Yan is a software engineer passionate about
          dataviz. Bringing our skills together to build this project was a
          natural step.
        </p>

        <p>
          We carefully select the best data artists and present their work in a
          thoughtful, beautiful way.
        </p>

        <p>
          Data To Art is free, hybrid, and inclusive. It celebrates diverse
          approaches and styles, offering a space for creators to experiment and
          innovate. We invite you to experience data differently — to see its
          beauty, and to discover how it can move, inspire, and spark
          reflection.
        </p>

        <Spacing />

        <section>
          <div className="max-w-[800px] mx-auto mt-16">
            <div className="flex justify-center items-start gap-8">
              {/* Yan */}
              <div className="flex flex-col justify-start items-end text-right w-1/2">
                <img
                  src="/asset/yan-holtz.png"
                  alt="A picture of Yan Holtz"
                  width={120}
                  height={120}
                  className="rounded-full mb-2"
                />
                <div className="mb-4 mt-2">{YanHoltzDescription}</div>
                <div className="opacity-60 hover:opacity-100">
                  <SocialMediaButtons />
                </div>
              </div>

              {/* Marthe */}
              <div className="flex flex-col justify-start items-start w-1/2">
                <img
                  src="/asset/marthe-viallet.jpg"
                  alt="A picture of Marthe Viallet"
                  width={120}
                  height={120}
                  className="rounded-full mb-2"
                />
                <div className="mb-4 mt-2">{MartheDescription}</div>
                <div className="opacity-60 hover:opacity-100">
                  <SocialMediaButtonsMarthe />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Spacing />

      <section className="wrapper">
        <h1>What is Data Art</h1>
        <p className="drop-cap">
          Data art is a creative practice that transforms raw data into visually
          compelling artworks. By blending aesthetics with information, data
          artists use charts, patterns, and interactive visuals to reveal
          stories, emotions, and insights hidden within datasets.{" "}
        </p>
        <p className="mb-12">
          Data art acts as a cursor between science and abstraction. Some works
          feel like scientific figures, with annotations and numbers that speak
          for themselves. Others drift into pure abstraction, only revealing
          their meaning with extra context.
        </p>
        <ArtScienceCursorSection />
        <p>
          While data art and generative art both involve digital creativity,
          they are not the same. Data art specifically uses real-world data as
          its source material, aiming to visualize information, patterns, or
          stories embedded in that data.
        </p>
        <QuoteSection
          text="Data art reveals meaning from datasets, while generative art
                emphasizes process, randomness, and system-driven creativity."
        />
      </section>

      <Spacing />

      <section>
        <div className="wrapper mt-22">
          <h1>Create an exhibition</h1>
          <p>
            A data-art exhibition is more than a visual event: it’s a form of
            mediation, a collective experience, and a meeting point between art,
            science, and society.
          </p>
          <p>
            By giving data a physical and poetic form, we make visible what
            usually remains abstract — climate, health, mobility, human emotion.
            These works awaken curiosity, wonder, and reflection, redefining our
            relationship to information.
          </p>
          <p>
            For institutions, cultural festivals, and public organizations, data
            exhibitions are a powerful tool for awareness, innovation, and
            dialogue. They turn data into a sensitive language and open new
            conversations between experts and citizens. Because when data is
            well told, it can change the way we see the world.
          </p>
          <div className="my-8">
            <EmailButton
              name="Contact"
              variant="default"
              link="wakeupdataviz@gmail.com"
            />
          </div>
        </div>
      </section>

      <Spacing />

      <Contact />
    </>
  );
}

const YanHoltzDescription = (
  <>
    <p>
      <a href="https://www.yan-holtz.com">Yan Holtz</a> is a data visualization
      expert and software engineer with 10 years of experience helping
      researchers and companies craft their charts.
    </p>
    <p>
      He’s also the creator of popular sites like{" "}
      <a href="https://www.data-to-viz.com">Data-to-Viz</a> and the Graph{" "}
      Galleries, so chances are, you’ve already benefited from his work without
      even knowing it!
    </p>
  </>
);

const MartheDescription = (
  <>
    <p>
      <Link href="https://www.wakeupdataviz.com/" target="_blank">
        Marthe Viallet
      </Link>{" "}
      curates and designs exhibitions that connect data, art, and science to
      tell new stories about today’s world.
    </p>
    <p>
      Specialized in data visualization, data art, and scientific mediation, she
      creates immersive experiences that make data visible, emotional, and
      meaningful.
    </p>
    <p>
      At the crossroads of design, research, and digital culture, she
      collaborates with institutions, festivals, and local authorities to reveal
      the beauty and storytelling power of information.
    </p>
  </>
);
