import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Users, FileText, Bell, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="container mx-auto py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Experience BIMS in Action</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a tour of our Barangay Information Management System and discover how it can transform your barangay
            operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {demoFeatures.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {feature.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <Button className="mt-6 w-full" variant="outline" asChild>
                  <Link href={feature.link}>
                    Try Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">Register now and experience the full potential of our system.</p>
          <Button size="lg" asChild>
            <Link href="/register">Register Your Barangay</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const demoFeatures = [
  {
    title: "Resident Management",
    description: "Experience our comprehensive resident database system",
    icon: Users,
    link: "/demo/residents",
    points: ["Digital resident profiles", "Quick search and filtering", "Family grouping", "Resident history tracking"],
  },
  {
    title: "Document Processing",
    description: "Try our streamlined document processing system",
    icon: FileText,
    link: "/demo/documents",
    points: ["Online application forms", "Automated document generation", "Digital signatures", "Status tracking"],
  },
  {
    title: "Announcements",
    description: "See how you can keep residents informed",
    icon: Bell,
    link: "/demo/announcements",
    points: ["Multi-channel notifications", "Emergency alerts", "Event scheduling", "SMS integration"],
  },
  {
    title: "Security Features",
    description: "Explore our robust security measures",
    icon: Shield,
    link: "/demo/security",
    points: ["Role-based access control", "Audit trails", "Data encryption", "Backup systems"],
  },
]

