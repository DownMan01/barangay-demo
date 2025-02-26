import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  UserPlus,
  Filter,
  Download,
  Users,
  ChevronRight,
  UserCheck,
  ClockIcon as UserClock,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react"

export default function ResidentsFeaturePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Hero Section with Stats */}
      <div className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto py-16">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Resident Management</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Efficiently manage resident information with our comprehensive system.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <Tabs defaultValue="residents" className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
            <TabsList className="bg-muted/60">
              <TabsTrigger value="residents">All Residents</TabsTrigger>
              <TabsTrigger value="households">Households</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <div className="flex gap-3 w-full sm:w-auto">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Resident
              </Button>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10 bg-muted/50" placeholder="Search residents by name, ID, or address..." />
          </div>

          <TabsContent value="residents" className="space-y-6">
            {residents.map((resident, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="h-24 w-24 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold">{resident.name}</h3>
                          <p className="text-sm text-muted-foreground">ID: {resident.id}</p>
                        </div>
                        <Badge variant={resident.status === "Active" ? "default" : "secondary"}>
                          {resident.status}
                        </Badge>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          {resident.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          {resident.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {resident.address}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {resident.registered}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="households" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {households.map((household, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Household #{household.id}</span>
                    <Badge variant="outline">{household.members} members</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      Head: {household.head}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {household.address}
                    </div>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
      {/* Add this before the closing div of the main container */}
      <div className="container mx-auto py-12">
        <Card className="bg-[#0A1A2F] text-white overflow-hidden">
          <CardContent className="relative p-12 text-center">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background/0" />

            {/* Content */}
            <div className="relative space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Ready to modernize your resident management?</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Start managing your community more efficiently with our digital system today.
              </p>
              <Button size="lg" variant="secondary" className="mt-4">
                Get Started
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const stats = [
  {
    label: "Total Residents",
    value: "2,856",
    icon: Users,
  },
  {
    label: "Active Residents",
    value: "2,685",
    icon: UserCheck,
  },
  {
    label: "Pending Verification",
    value: "171",
    icon: UserClock,
  },
  {
    label: "Households",
    value: "945",
    icon: MapPin,
  },
]

const residents = [
  {
    id: "RES-001",
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    phone: "+63 912 345 6789",
    address: "123 Main St., Zone 1",
    registered: "Jan 15, 2024",
    status: "Active",
  },
  {
    id: "RES-002",
    name: "Maria Santos",
    email: "maria@example.com",
    phone: "+63 923 456 7890",
    address: "456 Park Ave., Zone 2",
    registered: "Feb 1, 2024",
    status: "Active",
  },
  {
    id: "RES-003",
    name: "Pedro Reyes",
    email: "pedro@example.com",
    phone: "+63 934 567 8901",
    address: "789 Oak Rd., Zone 3",
    registered: "Feb 20, 2024",
    status: "Pending",
  },
]

const households = [
  {
    id: "HH-001",
    head: "Juan Dela Cruz",
    members: 4,
    address: "123 Main St., Zone 1",
  },
  {
    id: "HH-002",
    head: "Maria Santos",
    members: 3,
    address: "456 Park Ave., Zone 2",
  },
  {
    id: "HH-003",
    head: "Pedro Reyes",
    members: 5,
    address: "789 Oak Rd., Zone 3",
  },
]

