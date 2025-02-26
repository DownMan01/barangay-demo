"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Building2,
  FileText,
  Home,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  AlertTriangle,
  Wallet,
} from "lucide-react"

const sidebarItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Residents", href: "/residents", icon: Users },
  { title: "Requests & Permits", href: "/requests", icon: FileText },
  { title: "Complaints", href: "/complaints", icon: MessageSquare },
  { title: "Barangay Info", href: "/barangay", icon: Building2 },
  { title: "Emergency", href: "/emergency", icon: AlertTriangle },
  { title: "Financials", href: "/financials", icon: Wallet },
  { title: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="p-6">
        <div className="flex items-center gap-2 font-semibold">
        <a href="/"><Home className="h-6 w-6" /> </a>
         <a href="/">BIMS</a>
        </div>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

