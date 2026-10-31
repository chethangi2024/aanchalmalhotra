"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import type { GallerySlide } from "@/data/visualArtData";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import { LightboxItem } from "@/data/types";

interface EverlastingThingsClientProps {
  slides: GallerySlide[];
}

export default function EverlastingThingsClient({
  slides,
}: EverlastingThingsClientProps) {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = slides.map((slide) => ({
    src: slide.image,
    alt: slide.alt || slide.caption || "The Book of Everlasting Things research image",
    caption: slide.caption || "",
  }));

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const handlePrevImage = useCallback(() => {
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + lightboxItems.length) % lightboxItems.length;
    });
  }, [lightboxItems.length]);

  const handleNextImage = useCallback(() => {
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % lightboxItems.length;
    });
  }, [lightboxItems.length]);

  return (
    <div className="w-full pt-10 md:pt-14 pb-20 md:pb-28 bg-[var(--color-bg)]">
      <div className="editorial-container">
        <div className="w-full font-[family-name:var(--font-serif-body)]">
          {/* Centered Project Header */}
          <div className="text-center mb-10 md:mb-14">
            <h1
              style={{
                fontSize: "24px",
                letterSpacing: "0.15em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal font-[family-name:var(--font-serif-display)]"
            >
              The Book of Everlasting Things
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Gallery Grid matching Remnants of a Separation editions styling */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-start">
              {slides.map((slide, idx) => (
                <div key={slide.id} className="flex flex-col items-center text-center w-full">
                  <button
                    type="button"
                    onClick={() => handleOpenLightbox(idx)}
                    className="group w-full max-w-[200px] flex flex-col items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] cursor-pointer"
                    aria-label={`View enlarged research image ${idx + 1}: ${slide.caption || slide.alt || "Research image"}`}
                  >
                    <div className="relative w-full aspect-[4/3] flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={slide.image}
                        alt={slide.alt || slide.caption || "Research image"}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 200px"
                        className="object-contain"
                        priority={idx <= 3}
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* About Section - Directly beneath gallery, matching In Praise of Shadows */}
            <div className="mt-14 sm:mt-18 pt-8 sm:pt-10 border-t border-[var(--color-border-subtle)] text-left">
              <h2
                className="font-normal text-[#222222] m-0 mb-5 font-[family-name:var(--font-serif-display)]"
                style={{ fontSize: "22px" }}
              >
                About
              </h2>
              <div className="text-[17px] leading-[26px] text-[#000000] [font-variant-numeric:oldstyle-nums] font-normal not-italic text-justify [text-align-last:left] space-y-5">
                <p className="m-0 leading-[26px]">
                  This Visual Research Guide spans the five years I spent working on{" "}
                  <em className="italic">The Book of Everlasting Things</em>. It is meandering and fragmented
                  by design, offering insight into the process I undertook to build a historical novel that spans
                  nearly a century.
                </p>

                <p className="m-0 leading-[26px]">
                  It began with vials of perfume. My maternal grandfather, Vishwa Nath Vij, who worked as a
                  chemist at the Indian pharmaceutical company Dabur, received fragrance samples to use in
                  soaps and shampoos. Sometimes their names were ordinary fruits and flowers, but other times,
                  they were flamboyant, like Arabian Dreams, Meadow-Mist, Rambo, and Dream Girl. He would bring
                  these samples home and—as my mother recalled fondly from her childhood—mix them into the
                  water of the air cooler during summertime, so that the whole house would eventually be doused
                  in perfume. If it were rose one day, then it would be apricot on another, and lemongrass on the
                  third. And in 2017, when my mother told this story, it was with such simple childish delight
                  that it made me wish I’d been there. This singular memory of hers became the anchor upon which
                  this story began to take shape.
                </p>

                <p className="m-0 leading-[26px]">
                  Along with acquiring an amateur knowledge of traditional perfumery, I used the scent
                  memories [and indeed also the likeness -{" "}
                  <em className="italic">a mole on his right cheekbone</em>] of my grandfather to build the
                  character of Vivek. A soldier with the Indian Expeditionary Forces on the Western Front during
                  WW1, his body breaking in the trenches by day and nestling into memory by night, he nurtured an
                  extraordinary attentiveness to scent, dreaming of perfumes beyond the stench of war.
                </p>

                <p className="m-0 leading-[26px]">
                  Upon his return to India, I imagined Vivek with a nephew, who would inherit his profound sense
                  of smell. <em className="italic">Samir, the boy who swallowed the monsoon,</em> grew up in the
                  family ittar shop in the Walled City of Lahore, a city that also held my history. The Lahore of
                  the novel was constructed memory by memory, through family member’s descriptions of homes and
                  schools, architecture, social life, and the ambience of growing up in as magnificent and
                  complete a city as pre-Partition Lahore had been.
                </p>

                <p className="m-0 leading-[26px]">
                  While the city is separated from me by a border, I was fortunate to travel there for fieldwork,
                  walking the streets of my ancestors. I was immediately captivated by the Calligraphy Bazar of
                  Wazir Khan Mosque, where the studios of great masters had once been, alcoves of red brick
                  framed by ornate columns. Years later, when I began writing, it felt natural to make it one of
                  the hearts of the novel.
                </p>

                <p className="m-0 leading-[26px]">
                  The research for this book was multidisciplinary, drawing on imagery, oral history, maps,
                  sensorial prompts, linguistic, historical, and archival research, as well as my earlier life
                  as a visual artist. When writing scenes, I thought deeply about the acrobatic and malleable
                  nature of language and how to render words as one would images, in sweeps of colour and
                  sensation. This felt particularly important in imagining Firdaus, for whom language was both
                  written and visual. To shape her character, a girl learning calligraphy and embellishment of
                  traditional manuscripts from her father, Altaf, I went back to the years spent studying
                  paper-making and book-binding. I learnt about the old papermakers of Lahore and the
                  collaborations they had with perfumers for divine manuscripts. And for a time, I too became
                  like Firdaus, a person who presses leaves and flowers –{" "}
                  <em className="italic">
                    the keeper of her own private seasons, who sought refuge in the solitary leaf, the oddly
                    shaped stone, anything that shrank the vastness of the world into the periphery of her palm
                  </em>
                  .
                </p>

                <p className="m-0 leading-[26px]">
                  I wrote large sections of the book by hand, and included here are glimpses of that process -
                  notebooks, illustrations, research outlines, and marked-up manuscripts.
                </p>

                <p className="m-0 leading-[26px]">
                  The Book of Everlasting Things may have begun with my mother’s memory of scent, but I could not
                  have known where it would eventually lead me: across history, partition lines, oceans and
                  amidst the depth of memory. This Guide is but a record of that journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={activeLightboxIndex !== null}
        items={lightboxItems}
        currentIndex={activeLightboxIndex ?? 0}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </div>
  );
}
