import type { Metadata } from "next";
import EverlastingThingsClient from "@/components/visual-art/EverlastingThingsClient";
import { everlastingThingsSlides } from "@/data/visualArtData";

export const metadata: Metadata = {
  title: "The Book of Everlasting Things | Visual Art & Research | Aanchal Malhotra",
  description:
    "Visual research archives, photographic fieldwork, ittar distillery notes, and material studies for The Book of Everlasting Things by Aanchal Malhotra.",
};

export default function TheBookOfEverlastingThingsPage() {
  return <EverlastingThingsClient slides={everlastingThingsSlides} />;
}
