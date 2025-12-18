import { QuoteSection } from "@/components/QuoteSection";
import SocialMediaButtons from "@/components/SocialMediaButtons";

export default function AboutPage() {
  return (
    <>
      <div className="wrapper mt-40">
        <h1>About Data To Art</h1>
        <p>
          Data to Art began as a meeting — between a curator and a dataviz
          passionate fascinated by the emotional side of data.
        </p>
        <p>
          At the crossroads of exhibition design, digital creation, and visual
          exploration, we imagine spaces where information turns into matter,
          color, and emotion.
        </p>
      </div>

      <section className="max-w-[800px] mx-auto mt-16">
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
              <SocialMediaButtons />
            </div>
          </div>
        </div>
      </section>

      <div className="wrapper mt-22">
        <h3>Let's create an exhibition</h3>
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
          conversations between experts and citizens. Because when data is well
          told, it can change the way we see the world.
        </p>
      </div>
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
      <a href="https://www.data-to-viz.com">Data-to-Viz</a> and the Python Graph{" "}
      <a href="https://www.python-graph-gallery.com">Gallery</a>, so chances
      are, you’ve already benefited from his work without even knowing it!
    </p>
  </>
);

const MartheDescription = (
  <>
    <p>
      Marthe Viallet curates and designs exhibitions that connect data, art, and
      science to tell new stories about today’s world.
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
