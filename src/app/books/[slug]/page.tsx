import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBookBySlug, getAllBooks } from "@/data/books";
import BookDetailClient from "@/components/books/BookDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const books = getAllBooks();
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {
      title: "Book Not Found | Aanchal Malhotra",
    };
  }

  return {
    title: `${book.title} | Aanchal Malhotra`,
    description: book.synopsis[0] || `Details and information about ${book.title} by Aanchal Malhotra.`,
  };
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return <BookDetailClient book={book} />;
}
