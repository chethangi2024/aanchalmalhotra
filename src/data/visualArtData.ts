export interface VisualProjectIndexItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface GallerySlide {
  id: number;
  image: string;
  title: string;
  caption?: string;
  alt: string;
}

export const visualArtProjects: VisualProjectIndexItem[] = [
  {
    id: "the-book-of-everlasting-things",
    title: "The Book of Everlasting Things",
    subtitle: "Research, 2017-2022",
    image: "/images/visual-art/everlasting-things/6.jpg",
    href: "/visual-art-and-research/the-book-of-everlasting-things",
  },
  {
    id: "remnants-of-a-separation",
    title: "Remnants of A Separation",
    subtitle: "Research and Exhibition, 2013-2018",
    image: "/images/visual-art/remnants/Thumbnail.jpg",
    href: "/books/remnants-of-a-separation/reading-guide",
  },
  {
    id: "in-praise-of-shadows",
    title: "In Praise of Shadows",
    subtitle: "Traditional Printmaking, 2014",
    image: "/images/visual-art/in-praise-of-shadows/1.jpg",
    href: "/visual-art-and-research/in-praise-of-shadows",
  },
];

export const inPraiseOfShadowsSlides: GallerySlide[] = [
  {
    id: 1,
    image: "/images/visual-art/in-praise-of-shadows/1.jpg",
    title: "In Praise of Shadows after Jun'ichirō Tanizaki, 2014",
    caption: "Limited edition intaglio on copper\n8.5 x 11 inch plate on 11x 15 inch Arches paper",
    alt: "In Praise of Shadows print 1",
  },
  {
    id: 2,
    image: "/images/visual-art/in-praise-of-shadows/2.jpg",
    title: "In Praise of Shadows after Jun'ichirō Tanizaki, 2014",
    caption: "Limited edition intaglio on copper\n8.5 x 11 inch plate on 11x 15 inch Arches paper",
    alt: "In Praise of Shadows print 2",
  },
  {
    id: 3,
    image: "/images/visual-art/in-praise-of-shadows/3.jpg",
    title: "In Praise of Shadows after Jun'ichirō Tanizaki, 2014",
    caption: "Limited edition intaglio on copper\n8.5 x 11 inch plate on 11x 15 inch Arches paper",
    alt: "In Praise of Shadows print 3",
  },
  {
    id: 4,
    image: "/images/visual-art/in-praise-of-shadows/4.jpg",
    title: "In Praise of Shadows after Jun'ichirō Tanizaki, 2014",
    caption: "Limited edition intaglio on copper\n8.5 x 11 inch plate on 11x 15 inch Arches paper",
    alt: "In Praise of Shadows print 4",
  },
];

export const inPraiseOfShadowsAbout = {
  title: "About",
  text: "The title of this series is borrowed from and dedicated to the seminal work, In Praise of Shadows by Jun'ichirō Tanizaki, written in 1933, on traditional oriental aesthetics contrasted against modern society and change. In it, Tanizaki ruminates on themes of darkness and shadow, subtlety and cloudiness, once significant in conventional Japanese architecture, but that are slowly being replaced by gleam, shine, brightness and opacity. He describes the quieter nuances of everyday life like the smells and sounds of rain, the ambience of dark alcoves, the richness of gold embroidery, the aged delicacy of patina and the discovery of beauty in shadow and shade. And through perceptive examples comparing the light and dark, he makes a contrast between Eastern and Western societies. Inspired by the essay, this series seeks to establish the same — it aims to find the silence of dark places, the subtleties of texture, the quietness of low light through imagery.\n\nIt was created as a part Val David's Atelier de l'île's Residency for Artists Early in Their Career",
};

export const everlastingThingsSlides: GallerySlide[] = [
  {
    id: 1,
    image: "/images/visual-art/everlasting-things/1.jpg",
    title: "The Book of Everlasting Things",
    caption: "The place where Samir and Firdaus had khattati lessons each week - Calligraphy Bazar, Wazir Khan Mosque, Lahore",
    alt: "Calligraphy Bazar, Wazir Khan Mosque, Lahore",
  },
  {
    id: 2,
    image: "/images/visual-art/everlasting-things/2.jpg",
    title: "The Book of Everlasting Things",
    caption: "Calligraphy Bazar, Wazir Khan Mosque, Lahore",
    alt: "Calligraphy Bazar, Wazir Khan Mosque, Lahore",
  },
  {
    id: 3,
    image: "/images/visual-art/everlasting-things/3.png",
    title: "The Book of Everlasting Things",
    caption: "The distillery after which the Vij distillery was modeled - ML Ram Narain Perfume distillery, Kannauj",
    alt: "ML Ram Narain Perfume distillery, Kannauj",
  },
  {
    id: 4,
    image: "/images/visual-art/everlasting-things/4.jpg",
    title: "The Book of Everlasting Things",
    caption: "The degh-bhapka distillation apparatus, ML Ram Narain Perfume distillery, Kannauj",
    alt: "The degh-bhapka distillation apparatus, Kannauj",
  },
  {
    id: 5,
    image: "/images/visual-art/everlasting-things/5.jpeg",
    title: "The Book of Everlasting Things",
    caption: "The old houses in androon Lahore",
    alt: "The old houses in androon Lahore",
  },
  {
    id: 6,
    image: "/images/visual-art/everlasting-things/6.jpg",
    title: "The Book of Everlasting Things",
    caption: "The incense lit by Vivek Nath Vij each day",
    alt: "The incense lit by Vivek Nath Vij each day",
  },
  {
    id: 7,
    image: "/images/visual-art/everlasting-things/7.jpg",
    title: "The Book of Everlasting Things",
    caption: "Agarwood, one of the main ingredients of the gem-like Gauhar",
    alt: "Agarwood, main ingredient of Gauhar",
  },
  {
    id: 8,
    image: "/images/visual-art/everlasting-things/8.jpeg",
    title: "The Book of Everlasting Things",
    caption: "A bottle of Bergamot oil kept over time, sourced by Vivek from Italy",
    alt: "A bottle of Bergamot oil kept over time",
  },
  {
    id: 9,
    image: "/images/visual-art/everlasting-things/9 Kuppis.JPG",
    title: "The Book of Everlasting Things",
    caption: "Miniature kuppis made with untanned camel leather. In their large size, they are capable of holding volumes of liquid for maceration",
    alt: "Miniature kuppis made with untanned camel leather",
  },
  {
    id: 10,
    image: "/images/visual-art/everlasting-things/10.PNG",
    title: "The Book of Everlasting Things",
    caption: "Savitri’s hands, weaving a garland of marigold flowers",
    alt: "Savitri’s hands, weaving a garland of marigold flowers",
  },
  {
    id: 11,
    image: "/images/visual-art/everlasting-things/11.png",
    title: "The Book of Everlasting Things",
    caption: "My maternal grandfather, on whom the character of Vivek is based, showing me a box of perfume samples from his life as a chemist",
    alt: "Aanchal Malhotra's maternal grandfather with perfume samples",
  },
  {
    id: 12,
    image: "/images/visual-art/everlasting-things/12.JPG",
    title: "The Book of Everlasting Things",
    caption: "The qalams used by Firdaus in her khattati and naqqashi work",
    alt: "The qalams used by Firdaus in her khattati and naqqashi work",
  },
  {
    id: 13,
    image: "/images/visual-art/everlasting-things/13.jpg",
    title: "The Book of Everlasting Things",
    caption: "“From a large leather-bound book, Firdaus extracted a red leaf, pressed and dehydrated to perfection.”",
    alt: "Pressed red leaf",
  },
  {
    id: 14,
    image: "/images/visual-art/everlasting-things/14.png",
    title: "The Book of Everlasting Things",
    caption: "‘Firdaus, have you ever seen the changing colours of a jasmine flower?’ - January 10, 1944",
    alt: "Changing colours of a jasmine flower",
  },
  {
    id: 15,
    image: "/images/visual-art/everlasting-things/15.JPG",
    title: "The Book of Everlasting Things",
    caption: "“Samir Vij would write Firdaus Khan three hundred and eighty-eight letters, one for every week, whether they saw each other or not.”",
    alt: "Samir Vij letters to Firdaus Khan",
  },
  {
    id: 16,
    image: "/images/visual-art/everlasting-things/16.jpg",
    title: "The Book of Everlasting Things",
    caption: "Notes for the Dictionary of Poetic Words, Chapter 15",
    alt: "Notes for the Dictionary of Poetic Words, Chapter 15",
  },
  {
    id: 17,
    image: "/images/visual-art/everlasting-things/17.JPG",
    title: "The Book of Everlasting Things",
    caption: "“Through the delicate lace eyelets in the mats, he caught a glimpse of her, green eyes downcast, face impervious.”",
    alt: "Delicate lace eyelets in mats",
  },
  {
    id: 18,
    image: "/images/visual-art/everlasting-things/18.jpeg",
    title: "The Book of Everlasting Things",
    caption: "“After his shift at the hospital, Samir would take pleasure in the quiet walk home, and on weekends, strolled all the way down to the river Seine and back.”",
    alt: "River Seine in Paris",
  },
  {
    id: 19,
    image: "/images/visual-art/everlasting-things/19.jpg",
    title: "The Book of Everlasting Things",
    caption: "Indian soldiers travelling upstream on a barge, 1916_NAM.1983-12-72-236",
    alt: "Indian soldiers travelling upstream on a barge, 1916",
  },
  {
    id: 20,
    image: "/images/visual-art/everlasting-things/20.jpg",
    title: "The Book of Everlasting Things",
    caption: "An Indian Cavalry Horse hospital in a French Factory, Estre Blanche, France, photographed by Charles H. D. Girdwood",
    alt: "Indian Cavalry Horse hospital in a French Factory",
  },
  {
    id: 21,
    image: "/images/visual-art/everlasting-things/21.jpg",
    title: "The Book of Everlasting Things",
    caption: "Some Indian Cavalry Troops Preparing a Meal, Estre Blanche, France, photographed by Charles H. D. Girdwood",
    alt: "Indian Cavalry Troops Preparing a Meal",
  },
  {
    id: 22,
    image: "/images/visual-art/everlasting-things/22.jpg",
    title: "The Book of Everlasting Things",
    caption: "Indian soldiers in trench, 1915_NAM. 1976-05-52-73",
    alt: "Indian soldiers in trench, 1915",
  },
  {
    id: 23,
    image: "/images/visual-art/everlasting-things/23.jpg",
    title: "The Book of Everlasting Things",
    caption: "Notes planning out the WW1 sections",
    alt: "Notes planning out the WW1 sections",
  },
  {
    id: 24,
    image: "/images/visual-art/everlasting-things/24 Letter from British Library_IOR_L_MIL_5_825_1 - INDIAN BASE POST OFFICE, BOULOGNE- Reports of the Censor of Indian Mails in France- Vol 1.jpg",
    title: "The Book of Everlasting Things",
    caption: "Excerpt of letter from British Library IOR_L_MIL_5_825_1 - Indian Base Post Office, Boulogne - Reports of the Censor of Indian Mails in France- Vol 1",
    alt: "Excerpt of letter from British Library IOR_L_MIL_5_825_1",
  },
  {
    id: 25,
    image: "/images/visual-art/everlasting-things/25 Letter from British Library_IOR_L_MIL_5_825_2  - Reports of the Censor of Indian Mails in France- Vol 1.jpg",
    title: "The Book of Everlasting Things",
    caption: "Excerpt of letter from British Library IOR_L_MIL_5_825_2 - Reports of the Censor of Indian Mails in France- Vol 1",
    alt: "Excerpt of letter from British Library IOR_L_MIL_5_825_2",
  },
  {
    id: 26,
    image: "/images/visual-art/everlasting-things/26.jpg",
    title: "The Book of Everlasting Things",
    caption: "Vivek writing to his father, Som Nath, from the Western Front in 1915",
    alt: "Vivek writing to his father Som Nath from the Western Front",
  },
  {
    id: 27,
    image: "/images/visual-art/everlasting-things/27.JPG",
    title: "The Book of Everlasting Things",
    caption: "The perfumer, Jahnvi Nandan at her atelier in Paris, 2017, building Vivek's smellscape of war on the Western Front",
    alt: "Perfumer Jahnvi Nandan building Vivek's smellscape in Paris",
  },
  {
    id: 28,
    image: "/images/visual-art/everlasting-things/28.jpg",
    title: "The Book of Everlasting Things",
    caption: "Building smellscapes, 2017",
    alt: "Building smellscapes, 2017",
  },
  {
    id: 29,
    image: "/images/visual-art/everlasting-things/29.JPG",
    title: "The Book of Everlasting Things",
    caption: "‘It is a thing of great comfort to know that at least perfume cannot be restricted by borders,’ Yusuf Ahmed said, standing with Samir by the Medici Fountain",
    alt: "Medici Fountain",
  },
  {
    id: 30,
    image: "/images/visual-art/everlasting-things/30.jpg",
    title: "The Book of Everlasting Things",
    caption: "‘I have spent more years thinking about the past than the number of years when the past actually happened’, Samir said to Anouk",
    alt: "Samir and Anouk reflection",
  },
  {
    id: 31,
    image: "/images/visual-art/everlasting-things/31.jpg",
    title: "The Book of Everlasting Things",
    caption: "Research",
    alt: "Research",
  },
  {
    id: 32,
    image: "/images/visual-art/everlasting-things/32.jpg",
    title: "The Book of Everlasting Things",
    caption: "Research, detail",
    alt: "Research, detail",
  },
  {
    id: 33,
    image: "/images/visual-art/everlasting-things/33.jpg",
    title: "The Book of Everlasting Things",
    caption: "Workspace, Delhi, 2020",
    alt: "Workspace, Delhi, 2020",
  },
  {
    id: 34,
    image: "/images/visual-art/everlasting-things/34.jpg",
    title: "The Book of Everlasting Things",
    caption: "Workspace, Delhi,2021",
    alt: "Workspace, Delhi, 2021",
  },
  {
    id: 35,
    image: "/images/visual-art/everlasting-things/35.jpeg",
    title: "The Book of Everlasting Things",
    caption: "The novel makes it back to Wazir Khan Mosque, Lahore, 2024",
    alt: "The novel makes it back to Wazir Khan Mosque, Lahore, 2024",
  },
  {
    id: 36,
    image: "/images/visual-art/everlasting-things/36.jpg",
    title: "The Book of Everlasting Things",
    caption: "Firdaus, inspired by the final perfume of Samir’s life, composed by Jahnvi Nandan of The Perfume Library",
    alt: "Firdaus perfume composed by Jahnvi Nandan",
  },
  {
    id: 37,
    image: "/images/visual-art/everlasting-things/37.jpg",
    title: "The Book of Everlasting Things",
    caption: "",
    alt: "The Book of Everlasting Things research archive",
  },
];
