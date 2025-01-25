import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">ComicRead</h3>
            <p className="text-sm text-muted-foreground">
              Your premium destination for reading comics, manga, and manhwa online.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Browse</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/browse" className="hover:text-primary">
                  Popular
                </Link>
              </li>
              <li>
                <Link href="/browse" className="hover:text-primary">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="/browse" className="hover:text-primary">
                  Genres
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ComicRead. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

