import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Demo", href: "/demo" },
]

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Documentation", href: "/docs" },
  { label: "Community", href: "/community" },
  { label: "FAQs", href: "/faqs" },
]

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container mx-auto py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {/* About Section */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold">About BIMS</h3>
          <p className="text-sm text-muted-foreground">
            Modernizing barangay management through digital transformation and efficient service delivery.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Youtube className="h-4 w-4" />
            </Button>
          </div>
        </div>
  
        {/* Quick Links */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Support */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="space-y-2 text-sm">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Newsletter */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <p className="text-sm text-muted-foreground">
            Subscribe to our newsletter for updates and news.
          </p>
          <div className="flex justify-center md:justify-start gap-2">
            <Input placeholder="Enter your email" type="email" />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
  
      <Separator className="my-8" />
  
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} BIMS. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="/sitemap" className="hover:text-primary transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </div>
  </footer>
  
  )
}
