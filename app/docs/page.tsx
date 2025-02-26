import { MainNav } from "@/components/main-nav"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Book, FileText, Settings, HelpCircle, Users, AlertTriangle } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="container mx-auto py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground">
            Learn how to use the Barangay Information Management System effectively.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search documentation..." />
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {/* Navigation Sidebar */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <Button key={index} variant="ghost" className="w-full justify-start">
                    <section.icon className="mr-2 h-4 w-4" />
                    {section.title}
                  </Button>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="getting-started">
              <TabsList>
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="api">API</TabsTrigger>
              </TabsList>

              <TabsContent value="getting-started" className="space-y-6">
                {gettingStarted.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-sm dark:prose-invert">{item.content}</div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="features">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {features.map((feature, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <feature.icon className="h-5 w-5" />
                              {feature.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="api">
                <Card>
                  <CardContent className="p-6">
                    <div className="prose prose-sm dark:prose-invert">
                      <h3>API Documentation</h3>
                      <p>
                        Comprehensive API documentation for integrating with the Barangay Information Management System.
                      </p>
                      {/* Add API documentation content here */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

const sections = [
  { title: "Getting Started", icon: Book },
  { title: "Features", icon: FileText },
  { title: "API Reference", icon: Settings },
  { title: "FAQs", icon: HelpCircle },
]

const gettingStarted = [
  {
    title: "Introduction",
    content: (
      <>
        <p>
          Welcome to the Barangay Information Management System documentation. This guide will help you understand and
          utilize the system effectively.
        </p>
        <h4 className="text-lg font-semibold mt-4 mb-2">Prerequisites</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Valid barangay credentials</li>
          <li>Internet connection</li>
          <li>Modern web browser</li>
        </ul>
      </>
    ),
  },
  {
    title: "Quick Start Guide",
    content: (
      <>
        <p>Follow these steps to get started with the system:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li>Register your barangay account</li>
          <li>Complete the verification process</li>
          <li>Set up your barangay profile</li>
          <li>Start managing your community</li>
        </ol>
      </>
    ),
  },
]

const features = [
  {
    title: "Resident Management",
    description: "Learn how to manage resident profiles and information.",
    icon: Users,
  },
  {
    title: "Document Processing",
    description: "Guide to processing and managing barangay documents.",
    icon: FileText,
  },
  {
    title: "Emergency Response",
    description: "Understanding the emergency response system.",
    icon: AlertTriangle,
  },
  {
    title: "Settings & Configuration",
    description: "Customizing the system for your barangay.",
    icon: Settings,
  },
]

