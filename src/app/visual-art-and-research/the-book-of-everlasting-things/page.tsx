import type { Metadata } from "next";
import EverlastingThingsSlideshow from "@/components/visual-art/EverlastingThingsSlideshow";
import { everlastingThingsSlides } from "@/data/visualArtData";

export const metadata: Metadata = {
  title: "The Book of Everlasting Things | Visual Art & Research | Aanchal Malhotra",
  description:
    "Visual research archives, photographic fieldwork, ittar distillery notes, and material studies for The Book of Everlasting Things by Aanchal Malhotra.",
};

export default function TheBookOfEverlastingThingsPage() {
  return <EverlastingThingsSlideshow slides={everlastingThingsSlides} />;
}
