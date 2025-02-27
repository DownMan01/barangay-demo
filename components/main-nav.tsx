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
import { Building2, Users, FileText, MessageSquare, AlertTriangle, HelpCircle, BookOpen, Phone, X } from "lucide-react"
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

const navConfig = [
  { title: "Home", href: "/" },
  { 
    title: "Features", 
    href: "/features",
    subItems: features,
  },
  { 
    title: "Resources", 
    href: "/resources",
    subItems: resources,
  },
  { title: "Demo", href: "/demo" },
  { title: "Dashboard (demo)", href: "/dashboard" },
];

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 transition-colors hover:opacity-80">
          <Building2 className="h-6 w-6 text-primary" />
          <div className="hidden md:block">
            <span className="text-lg font-bold block leading-none">BIMS</span>
            <span className="text-[0.65rem] text-muted-foreground">Barangay Management</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex flex-grow justify-center">
          <NavigationMenuList className="gap-2">
            {navConfig.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.subItems ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary",
                        pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.subItems.map((subItem) => (
                          <ListItem
                            key={subItem.title}
                            title={subItem.title}
                            href={subItem.href}
                            className={pathname === subItem.href ? "text-primary" : ""}
                          >
                            <div className="flex items-center gap-2">
                              <subItem.icon className="h-4 w-4" />
                              <span>{subItem.description}</span>
                            </div>
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary",
                        pathname === item.href ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button className="text-sm" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-background border-t ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navConfig.map((item) => (
            <div key={item.title} className="space-y-2">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className={cn(
                      "w-full flex justify-between items-center py-2 px-3 rounded-md",
                      pathname.startsWith(item.href) ? "text-primary bg-accent" : "text-foreground hover:bg-accent"
                    )}
                  >
                    <span>{item.title}</span>
                    <span className={cn(
                      "transform transition-transform",
                      openSubmenu === item.title ? "rotate-180" : ""
                    )}>
                      ▼
                    </span>
                  </button>
                  {openSubmenu === item.title && (
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-2 py-2 px-3 rounded-md text-sm",
                            pathname === subItem.href ? "text-primary bg-accent" : "text-foreground hover:bg-accent"
                          )}
                        >
                          <subItem.icon className="h-4 w-4" />
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2 px-3 rounded-md",
                    pathname === item.href ? "text-primary bg-accent" : "text-foreground hover:bg-accent"
                  )}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile Auth Buttons */}
          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
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
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
