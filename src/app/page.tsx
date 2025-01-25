import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Bookmark, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="relative">
      <div className="geometric-bg">
        <section className="container mx-auto px-4 pt-20 pb-32 text-center">
          <div className="space-y-4 max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 font-serif">
              Your Digital Comic
              <br />
              Reading Experience
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive into a vast collection of manga, manhwa, and comics. Experience seamless reading with our premium
              platform.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Reading <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="secondary">
              Browse Library
            </Button>
          </div>
        </section>
      </div>

      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-serif">Vast Library</h3>
            <p className="text-muted-foreground">
              Access thousands of titles from various genres, updated regularly with the latest releases.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <Bookmark className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-serif">Track Progress</h3>
            <p className="text-muted-foreground">
              Keep track of your reading progress and bookmark your favorite series.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-serif">Daily Updates</h3>
            <p className="text-muted-foreground">Stay up to date with new chapters from your favorite series.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

