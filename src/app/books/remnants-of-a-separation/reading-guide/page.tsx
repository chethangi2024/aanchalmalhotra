import type { Metadata } from "next";
import ReadingGuidePageClient from "@/components/books/ReadingGuidePageClient";

export const metadata: Metadata = {
  title: "Remnants of a Separation — A Reading Guide | Aanchal Malhotra",
  description:
    "Companion reading guide, oral history archive, chapter breakdown, and material memory exhibition notes for Remnants of a Separation by Aanchal Malhotra.",
};

export default function ReadingGuidePage() {
  return <ReadingGuidePageClient />;
}
