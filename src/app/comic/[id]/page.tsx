import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Mock data for a single comic
const comic = {
  id: 1,
  title: "Comic 1",
  description: "This is a description of Comic 1. It's an exciting story full of adventure and surprises.",
  author: "John Doe",
  artist: "Jane Smith",
  genre: "Action",
  status: "Ongoing",
  coverImage: "/placeholder.svg?height=400&width=300",
  chapters: [
    { id: 1, title: "Chapter 1", number: 1 },
    { id: 2, title: "Chapter 2", number: 2 },
    { id: 3, title: "Chapter 3", number: 3 },
    // Add more chapters as needed
  ],
}

export default function ComicPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Image
            src={comic.coverImage || "/placeholder.svg"}
            alt={comic.title}
            width={300}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{comic.title}</h1>
          <p className="text-gray-600 mb-4">{comic.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <p>
              <strong>Author:</strong> {comic.author}
            </p>
            <p>
              <strong>Artist:</strong> {comic.artist}
            </p>
            <p>
              <strong>Genre:</strong> {comic.genre}
            </p>
            <p>
              <strong>Status:</strong> {comic.status}
            </p>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
          <div className="space-y-2">
            {comic.chapters.map((chapter) => (
              <Link href={`/comic/${comic.id}/chapter/${chapter.id}`} key={chapter.id}>
                <Button variant="outline" className="w-full justify-start">
                  Chapter {chapter.number}: {chapter.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

