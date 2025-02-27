"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Building2, Users, FileText, MessageSquare, AlertTriangle, HelpCircle, BookOpen, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const features = [
  { title: "Resident Management", href: "/features/residents", description: "Register and manage resident information with ease.", icon: Users },
  { title: "Document Processing", href: "/features/documents", description: "Streamlined barangay certification and permit processing.", icon: FileText },
  { title: "Complaint System", href: "/features/complaints", description: "Efficient handling of resident complaints and concerns.", icon: MessageSquare },
  { title: "Emergency Response", href: "/features/emergency", description: "Quick response system for emergencies and disasters.", icon: AlertTriangle },
];

const resources = [
  { title: "Documentation", href: "/docs", description: "Learn how to use the Barangay Information Management System.", icon: BookOpen },
  { title: "Help Center", href: "/help", description: "Get support and answers to common questions.", icon: HelpCircle },
  { title: "Contact Support", href: "/contact", description: "Reach out to our support team for assistance.", icon: Phone },
];

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 transition-colors hover:opacity-80">
          <Building2 className="h-6 w-6 text-primary" />
          <div className="hidden md:block">
            <span className="text-lg font-bold">BIMS</span>
            <span className="text-xs text-muted-foreground">Barangay Management</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex flex-grow justify-center">
          <NavigationMenuList className="gap-4">
            <NavItem href="/" label="Home" isActive={pathname === "/"} />
            <Dropdown label="Features" items={features} isActive={pathname.includes("/features")} />
            <Dropdown label="Resources" items={resources} isActive={pathname.includes("/resources")} />
            <NavItem href="/demo" label="Demo" isActive={pathname === "/demo"} />
            <NavItem href="/dashboard" label="Dashboard (Demo)" isActive={pathname === "/dashboard"} />
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section */}
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
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={cn(
          "fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transition-transform transform md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex flex-col gap-4">
          <Button variant="ghost" size="icon" className="self-end" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </Button>

          <NavItem href="/" label="Home" isActive={pathname === "/"} onClick={() => setIsOpen(false)} />
          <DropdownMobile label="Features" items={features} onClose={() => setIsOpen(false)} />
          <DropdownMobile label="Resources" items={resources} onClose={() => setIsOpen(false)} />
          <NavItem href="/demo" label="Demo" isActive={pathname === "/demo"} onClick={() => setIsOpen(false)} />
          <NavItem href="/dashboard" label="Dashboard (Demo)" isActive={pathname === "/dashboard"} onClick={() => setIsOpen(false)} />

          <ModeToggle />
          <Button variant="outline" className="w-full" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

// Reusable Components

const NavItem = ({ href, label, isActive, onClick }: { href: string; label: string; isActive: boolean; onClick?: () => void }) => (
  <Link href={href} legacyBehavior passHref>
    <NavigationMenuLink
      className={cn(
        "block px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
      onClick={onClick}
    >
      {label}
    </NavigationMenuLink>
  </Link>
);

const Dropdown = ({ label, items, isActive }: { label: string; items: any[]; isActive: boolean }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger className={cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")}>
      {label}
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-64 gap-2 p-3">
        {items.map((item) => (
          <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} />
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

const DropdownMobile = ({ label, items, onClose }: { label: string; items: any[]; onClose: () => void }) => (
  <details className="border-b">
    <summary className="px-4 py-2 text-sm font-medium">{label}</summary>
    <ul className="px-4 py-2 space-y-2">
      {items.map((item) => (
        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} onClick={onClose} />
      ))}
    </ul>
  </details>
);

const ListItem = ({ title, href, icon: Icon, onClick }: { title: string; href: string; icon: any; onClick?: () => void }) => (
  <li>
    <Link href={href} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition" onClick={onClick}>
      <Icon className="h-4 w-4 text-primary" />
      <span>{title}</span>
    </Link>
  </li>
);
