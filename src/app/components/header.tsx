import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b border-border/40 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold font-serif">
            ComicRead
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/browse" className="text-sm hover:text-primary transition-colors">
              Browse
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </Button>
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            Sign In
          </Button>
        </div>
      </nav>
    </header>
  )
}

