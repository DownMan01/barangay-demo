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
import { Building2, Users, FileText, MessageSquare, AlertTriangle, HelpCircle, BookOpen, Phone } from "lucide-react"
import { useState } from "react"
import { Menu } from "lucide-react" 


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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
  <div className="container mx-auto flex h-16 items-center justify-between">
    {/* Logo Section */}
    <Link href="/" className="flex items-center gap-2 transition-colors hover:opacity-80">
      <Building2 href="/" className="h-6 w-6 text-primary" />
      <div className="hidden md:block">
        <span className="text-lg font-bold block leading-none">BIMS</span>
        <span className="text-[0.65rem] text-muted-foreground">Barangay Management</span>
      </div>
    </Link>

    {/* Center Navigation */}
    <NavigationMenu className="hidden md:flex flex-grow justify-center">
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
          <Link href="/demo" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
                pathname === "/demo" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Demo
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/dashboard" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
                pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Dashboard(demo)
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    {/* Right Section */}
    <div className="flex items-center gap-4">
      <ModeToggle />
      <div className="hidden md:flex items-center gap-4">
        <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary" asChild>
          <Link href="/login">Sign in</Link>
        </Button>
        <Button className="text-sm" asChild>
          <Link href="/register">Get Started</Link>
        </Button>
      </div>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-6 w-6" />
      </Button>
    </div>
  </div>

  {/* Mobile Navigation Indicator */}
  <div className="h-0.5 bg-primary/5 md:hidden">
    <div
      className="h-full w-1/4 bg-primary transition-transform duration-300"
      style={{
        transform: `translateX(${
          pathname === "/"
            ? "0%"
            : pathname.startsWith("/features")
              ? "100%"
              : pathname.startsWith("/resources")
                ? "200%"
                : pathname.startsWith("/demo")
                  ? "300%"
                  : "0%"
        })`,
      }}
    />
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
