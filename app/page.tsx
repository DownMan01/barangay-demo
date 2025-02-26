import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { ArrowRight, Users, FileText, Bell, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <MainNav />
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Modernizing Barangay Management
          </h1>
          <p className="max-w-[640px] text-lg text-muted-foreground sm:text-xl">
            Connect, streamline, and enhance barangay services with our comprehensive information management system.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <feature.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="border-t bg-muted/50">
        <div className="container py-16 md:py-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Trusted by Barangays</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold md:text-4xl">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container py-16 md:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {index + 1}
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50">
        <div className="container py-16 md:py-24">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="max-w-[600px] text-muted-foreground">
              Join the growing network of barangays using our system to improve their services.
            </p>
            <Button size="lg" asChild>
              <Link href="/register">Register Your Barangay</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Resident Management",
    description: "Efficiently manage resident information and records digitally.",
    icon: Users,
  },
  {
    title: "Document Processing",
    description: "Streamline permits and certification requests.",
    icon: FileText,
  },
  {
    title: "Real-time Updates",
    description: "Get instant notifications for important announcements.",
    icon: Bell,
  },
  {
    title: "Secure System",
    description: "Advanced security measures to protect sensitive data.",
    icon: Shield,
  },
]

const stats = [
  {
    value: "50+",
    label: "Barangays",
  },
  {
    value: "100k+",
    label: "Residents",
  },
  {
    value: "1M+",
    label: "Documents Processed",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
]

const steps = [
  {
    title: "Register Your Barangay",
    description: "Create an account and set up your barangay profile with essential information.",
  },
  {
    title: "Configure Settings",
    description: "Customize the system according to your barangay's specific needs and requirements.",
  },
  {
    title: "Start Managing",
    description: "Begin using the platform to efficiently manage your barangay's operations.",
  },
]

