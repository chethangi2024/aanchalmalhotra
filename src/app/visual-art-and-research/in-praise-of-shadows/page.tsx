import type { Metadata } from "next";
import InPraiseOfShadowsClient from "@/components/visual-art/InPraiseOfShadowsClient";

export const metadata: Metadata = {
  title: "In Praise of Shadows | Visual Art & Research | Aanchal Malhotra",
  description:
    "Limited edition intaglio on copper after Jun'ichirō Tanizaki, 2014, by Aanchal Malhotra.",
};

export default function InPraiseOfShadowsPage() {
  return <InPraiseOfShadowsClient />;
}
