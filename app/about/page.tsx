import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="container py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About BIMS</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering barangays with modern technology for better governance and community service.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground">
                To provide innovative digital solutions that enhance barangay governance, streamline administrative
                processes, and improve community services through technology.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Award className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground">
                To be the leading provider of digital transformation solutions for barangays across the Philippines,
                creating more efficient and connected communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{member.position}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const coreValues = [
  {
    title: "Innovation",
    description: "Continuously improving our solutions to meet evolving community needs.",
  },
  {
    title: "Integrity",
    description: "Maintaining the highest standards of honesty and transparency in all operations.",
  },
  {
    title: "Excellence",
    description: "Delivering quality service and solutions that exceed expectations.",
  },
  {
    title: "Community",
    description: "Fostering strong relationships and collaboration within barangays.",
  },
]

const teamMembers = [
  {
    name: "Juan Dela Cruz",
    position: "Chief Executive Officer",
    description: "Leading the vision and strategy for BIMS development and implementation.",
  },
  {
    name: "Maria Santos",
    position: "Chief Technology Officer",
    description: "Overseeing the technical architecture and innovation of our platform.",
  },
  {
    name: "Pedro Reyes",
    position: "Community Relations Director",
    description: "Managing relationships with barangays and ensuring customer success.",
  },
]

