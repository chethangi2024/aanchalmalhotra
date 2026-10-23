import type { Metadata } from "next";
import ProjectSlideshow from "@/components/visual-art/ProjectSlideshow";
import { inPraiseOfShadowsSlides } from "@/data/visualArtData";

export const metadata: Metadata = {
  title: "In Praise of Shadows | Visual Art & Research | Aanchal Malhotra",
  description:
    "Limited edition intaglio on copper after Jun'ichirō Tanizaki, 2014, by Aanchal Malhotra.",
};

const aboutSection = {
  title: "About",
  content: (
    <>
      <p>
        The title of this series is borrowed from and dedicated to the seminal work,{" "}
        <em className="italic">In Praise of Shadows</em> by Jun&apos;ichirō Tanizaki, written in 1933, on
        traditional oriental aesthetics contrasted against modern society and change.
        In it, Tanizaki ruminates on themes of darkness and shadow, subtlety and
        cloudiness, once significant in conventional Japanese architecture, but that
        are slowly being replaced by gleam, shine, brightness and opacity. He
        describes the quieter nuances of everyday life like the smells and sounds of
        rain, the ambience of dark alcoves, the richness of gold embroidery, the aged
        delicacy of patina and the discovery of beauty in shadow and shade. And
        through perceptive examples comparing the light and dark, he makes a
        contrast between Eastern and Western societies. Inspired by the essay, this
        series seeks to establish the same — it aims to find the silence of
        dark places, the subtleties of texture, the quietness of low light through
        imagery.
      </p>
      <p>
        It was created as a part Val David&apos;s Atelier de l&apos;île&apos;s{" "}
        <em className="italic">Residency for Artists Early in Their Career</em>
      </p>
    </>
  ),
};

export default function InPraiseOfShadowsPage() {
  return (
    <ProjectSlideshow
      slides={inPraiseOfShadowsSlides}
      projectTitle="In Praise of Shadows"
      projectSubtitle="Traditional Printmaking, 2014"
      aboutSection={aboutSection}
    />
  );
}
