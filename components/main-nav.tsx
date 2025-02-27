"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Building2,
  Users,
  FileText,
  MessageSquare,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  Phone,
  Menu,
  ChevronRight,
} from "lucide-react"

const features = [
  {
    title: "Resident Management",
    href: "/features/residents",
    description: "Register and manage resident information with ease.",
    icon: Users,
  },
  {
    title: "Document Processing",
    href: "/features/documents",
    description: "Streamlined barangay certification and permit processing.",
    icon: FileText,
  },
  {
    title: "Complaint System",
    href: "/features/complaints",
    description: "Efficient handling of resident complaints and concerns.",
    icon: MessageSquare,
  },
  {
    title: "Emergency Response",
    href: "/features/emergency",
    description: "Quick response system for emergencies and disasters.",
    icon: AlertTriangle,
  },
]

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Learn how to use the Barangay Information Management System.",
    icon: BookOpen,
  },
  {
    title: "Help Center",
    href: "/help",
    description: "Get support and answers to common questions.",
    icon: HelpCircle,
  },
  {
    title: "Contact Support",
    href: "/contact",
    description: "Reach out to our support team for assistance.",
    icon: Phone,
  },
]

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 transition-colors hover:opacity-80">
            <Building2 className="h-6 w-6 text-primary" />
            <div className="block">
              <span className="text-lg font-bold block leading-none">BIMS</span>
              <span className="text-[0.65rem] text-muted-foreground">Barangay Management</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex mx-auto">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
                    pathname === "/" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  pathname.includes("/features") ? "text-primary" : "text-muted-foreground",
                )}
              >
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {features.map((feature) => (
                    <ListItem
                      key={feature.title}
                      title={feature.title}
                      href={feature.href}
                      className={pathname === feature.href ? "text-primary" : ""}
                    >
                      <div className="flex items-center gap-2">
                        <feature.icon className="h-4 w-4" />
                        <span>{feature.description}</span>
                      </div>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  pathname.includes("/resources") ? "text-primary" : "text-muted-foreground",
                )}
              >
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resources.map((resource) => (
                    <ListItem
                      key={resource.title}
                      title={resource.title}
                      href={resource.href}
                      className={pathname === resource.href ? "text-primary" : ""}
                    >
                      <div className="flex items-center gap-2">
                        <resource.icon className="h-4 w-4" />
                        <span>{resource.description}</span>
                      </div>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
                    pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Demo
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <ModeToggle />

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button className="text-sm" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] lg:hidden">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-2 text-lg font-semibold",
                    pathname === "/" ? "text-primary" : "text-foreground",
                  )}
                >
                  Home
                </Link>

                {/* Mobile Features */}
                <div className="space-y-4">
                  <h4 className="font-medium text-muted-foreground">Features</h4>
                  {features.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-2 text-sm",
                        pathname === item.href ? "text-primary" : "text-foreground",
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </Link>
                  ))}
                </div>

                {/* Mobile Resources */}
                <div className="space-y-4">
                  <h4 className="font-medium text-muted-foreground">Resources</h4>
                  {resources.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-2 text-sm",
                        pathname === item.href ? "text-primary" : "text-foreground",
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </Link>
                  ))}
                </div>

                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-2 text-lg font-semibold",
                    pathname === "/dashboard" ? "text-primary" : "text-foreground",
                  )}
                >
                  Demo
                </Link>

                {/* Mobile Auth Buttons */}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" asChild>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Sign in
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

