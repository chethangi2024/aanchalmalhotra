export interface AnthologyItem {
  id: string;
  chapterTitle: string;
  bookTitle: string;
  editors: string;
  publisherYear: string;
  coverImage?: string;
  excerptUrl?: string;
  excerptLabel?: string;
}

export interface EssayArticleItem {
  id: string;
  title: string;
  publication: string;
  year: number | string;
  url?: string;
}

export const anthologiesData: AnthologyItem[] = [
  {
    id: "dogs-of-war",
    chapterTitle: "Dogs of War",
    bookTitle: "The Book of Dog",
    editors: "Edited by Hemali Sodhi",
    publisherYear: "HarperCollins India, 2022",
    coverImage: "/images/other-writing/The Book of Dog.jpg",
  },
  {
    id: "dr-usha-mehta",
    chapterTitle: "I Have Faith In My People - Dr. Usha Mehta and the Congress Underground Radio",
    bookTitle: "Our Freedoms: Essays and Stories from India's best writers",
    editors: "Edited by Nilanjana Roy",
    publisherYear: "Juggernaut, 2021",
    coverImage: "/images/other-writing/Our Freedoms.jpg",
    excerptUrl: "https://theprint.in/pageturner/excerpt/underground-congress-radio-during-freedom-struggle-and-usha-mehta/591863/",
    excerptLabel: "Read an Excerpt",
  },
  {
    id: "material-memory-partition",
    chapterTitle: "Material Memory and the Partition of India: A Narrative Interview with Aanchal Malhotra by E. Dawson Varughese",
    bookTitle: "India at 70: Multidisciplinary Approaches",
    editors: "Edited by Ruth Maxey and Paul McGarr",
    publisherYear: "Routledge, 2019",
    coverImage: "/images/other-writing/India at 70 -Multidisciplinary Approaches.jpg",
  },
  {
    id: "no-more-places",
    chapterTitle: "There Are No More Places to Migrate to",
    bookTitle: "Departures in Critical Qualitative Research",
    editors: "Edited by Devika Chawla",
    publisherYear: "University of California Press, 2019",
    coverImage: "/images/other-writing/Departures in Critical Qualitative Research.jpg",
  },
  {
    id: "sepia-toned-past",
    chapterTitle: "A Sepia-toned past - A photo album travels from Maghiana to Delhi",
    bookTitle: "Looking Back: The 1947 Partition of India 70 Years On",
    editors: "Edited by Tarun K. Saint, Debjani Sengupta and Rakhshanda Jalil",
    publisherYear: "Orient Black Swan, 2017",
    coverImage: "/images/other-writing/Looking Back - The 1947 Partition of India 70 Years On.jpg",
  },
];

export const selectedEssaysArticlesData: EssayArticleItem[] = [
  {
    id: "labour-of-historical-fiction",
    title: "On the Labour of Historical Fiction",
    publication: "Outlook Magazine",
    year: 2022,
    url: "https://www.outlookindia.com/books/outlook-anniversary-issue-the-labour-of-historical-fiction",
  },
  {
    id: "photo-archive-vishwa-nath-vij",
    title: "The photo archive of Vishwa Nath Vij",
    publication: "Museum of Material Memory",
    year: 2022,
    url: "https://museumofmaterialmemory.com/the-photo-archive-of-vishwa-nath-vij/",
  },
  {
    id: "avon-ladys-perfume-brooch",
    title: "The Avon Lady’s Perfume Brooch",
    publication: "Museum of Material Memory",
    year: 2022,
    url: "https://museumofmaterialmemory.com/the-avon-ladys-perfume-brooch/",
  },
  {
    id: "singer-sewing-machine",
    title: "A Singer sewing machine as old as India",
    publication: "Museum of Material Memory",
    year: 2022,
    url: "https://museumofmaterialmemory.com/a-sewing-machine-as-old-as-independent-india/",
  },
  {
    id: "small-h-history-life",
    title: "The Small h history of Life",
    publication: "Wasafiri",
    year: 2022,
    url: "https://wasafiri.org/content/the-small-h-history-of-life-by-aanchal-malhotra/",
  },
  {
    id: "why-partition-potent-personal",
    title: "Why Partition feels so potent and personal even 75 years later",
    publication: "The Times of India",
    year: 2022,
    url: "https://timesofindia.indiatimes.com/blogs/voices/why-partition-feels-so-potent-and-personal-even-75-years-later/",
  },
  {
    id: "is-reconciliation-still-possible",
    title: "Is reconciliation still possible for India and Pakistan, 75 years after Partition?",
    publication: "The Globe and Mail, Toronto",
    year: 2022,
    url: "https://www.theglobeandmail.com/opinion/article-is-reconciliation-still-possible-for-india-and-pakistan-75-years-after/",
  },
  {
    id: "1897-bubonic-plague",
    title: "When the 1897 bubonic plague ravaged India",
    publication: "Mint Lounge",
    year: 2020,
    url: "https://www.livemint.com/mint-lounge/features/when-the-1897-bubonic-plague-ravaged-india-11587876174403.html",
  },
  {
    id: "face-to-face-interviews-pandemic",
    title: "With face to face interviews ruled out during the pandemic, how are oral historians coping",
    publication: "Scroll",
    year: 2020,
    url: "https://scroll.in/article/972903/with-face-to-face-interviews-ruled-out-during-the-pandemic-how-are-oral-historians-coping",
  },
  {
    id: "trail-guru-nanak-dev",
    title: "On the trail of Guru Nanak Dev's travels from Tibet to Iran",
    publication: "Indian Express",
    year: 2019,
    url: "https://indianexpress.com/article/express-sunday-eye/the-seekers-path-6107331/",
  },
  {
    id: "canny-poster-propaganda-japan",
    title: "The canny poster propaganda used by Japan in WWII",
    publication: "Scroll",
    year: 2019,
    url: "https://scroll.in/magazine/912337/kill-all-the-british-sucking-indian-blood-the-canny-poster-propaganda-used-by-japan-in-wwii",
  },
  {
    id: "teenager-traces-indentured-labourer",
    title: "A teenager traces her Indian great-great grandmother's life as an indentured labourer in Fiji",
    publication: "Scroll",
    year: 2018,
    url: "https://scroll.in/magazine/886645/a-teenager-traces-her-indian-great-great-grandmothers-life-as-an-indentured-labourer-in-fiji",
  },
  {
    id: "kapur-and-kapoor",
    title: "Kapur and Kapoor: Two friends survived Partition and changed the way Indians drank tea and coffee",
    publication: "Scroll",
    year: 2017,
    url: "https://scroll.in/magazine/830360/kapur-and-kapoor-two-friends-survived-partition-and-changed-the-way-indians-drank-tea-and-coffee",
  },
  {
    id: "dont-love-delhi",
    title: "I don't love Delhi: Meet the capital's most compelling chronicler, Mayank Austen Soofi",
    publication: "Scroll",
    year: 2016,
    url: "https://scroll.in/article/801533/",
  },
];
