import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Star } from "lucide-react"

const comics = [
  {
    id: 1,
    title: "The Last Hero",
    chapters: 156,
    rating: 4.8,
    genre: "Action",
    status: "Ongoing",
    coverImage: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    title: "Spirit Walker",
    chapters: 89,
    rating: 4.6,
    genre: "Fantasy",
    status: "Ongoing",
    coverImage: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "Urban Tales",
    chapters: 245,
    rating: 4.9,
    genre: "Drama",
    status: "Completed",
    coverImage: "/placeholder.svg?height=400&width=300",
  },
]

export default function Browse() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-serif">Browse Comics</h1>
        <div className="flex gap-2">
          <Badge variant="secondary">All</Badge>
          <Badge variant="outline">Popular</Badge>
          <Badge variant="outline">New</Badge>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {comics.map((comic) => (
          <Link href={`/comic/${comic.id}`} key={comic.id}>
            <Card className="overflow-hidden hover:ring-2 hover:ring-primary transition-all duration-300">
              <div className="relative aspect-[3/4]">
                <Image src={comic.coverImage || "/placeholder.svg"} alt={comic.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2 font-serif">{comic.title}</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{comic.chapters} chapters</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-primary" />
                  <span>{comic.rating}</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <Badge variant="secondary">{comic.genre}</Badge>
                  <Badge variant="outline">{comic.status}</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

