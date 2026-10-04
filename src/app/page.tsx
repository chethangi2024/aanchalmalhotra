import BookLanding from "@/components/books/BookLanding";
import FeaturedBookSpotlight from "@/components/books/FeaturedBookSpotlight";
import AuthorWorkspaceSection from "@/components/author/AuthorWorkspaceSection";
import { getAllBooks, getBookBySlug } from "@/data/books";
import { featuredBookConfig } from "@/data/featuredBook";
import { authorHomepageData } from "@/data/authorHomepage";

export default function Home() {
  const allBooks = getAllBooks();

  // Section 01: The three published main books
  const landingThreeBooks = [
    allBooks.find((b) => b.slug === "remnants-of-a-separation")!,
    allBooks.find((b) => b.slug === "in-the-language-of-remembering")!,
    allBooks.find((b) => b.slug === "the-book-of-everlasting-things")!,
  ].filter(Boolean);

  // Section 02: Featured upcoming book spotlight (A Handful of Home)
  const featuredBook =
    getBookBySlug(featuredBookConfig.bookSlug) ||
    allBooks.find((b) => b.slug === "a-handful-of-home")!;

  return (
    <main id="homepage-content">
      {/* SECTION 01: Three-book landing composition */}
      <BookLanding books={landingThreeBooks} />

      {/* SECTION 02: Forthcoming book spotlight (A Handful of Home) */}
      {featuredBook && (
        <FeaturedBookSpotlight
          book={featuredBook}
          details={featuredBookConfig.customDetails}
        />
      )}

      {/* SECTION 03: Author / Biography / Workspace Section */}
      <AuthorWorkspaceSection data={authorHomepageData} />
    </main>
  );
}
