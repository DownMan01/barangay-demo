import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Clock, CheckCircle, XCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ComplaintsFeaturePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="container mx-auto py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Complaint Management System</h1>
          <p className="text-xl text-muted-foreground">
            Efficiently track and resolve community concerns with our advanced complaint management system.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-6">
                <stat.icon className="h-8 w-8 text-primary mb-2" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground text-center">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Complaints */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {complaints.map((complaint, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{complaint.title}</h3>
                      <p className="text-sm text-muted-foreground">{complaint.description}</p>
                    </div>
                    <Badge variant={getStatusVariant(complaint.status)}>{complaint.status}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{complaint.progress}%</span>
                    </div>
                    <Progress value={complaint.progress} className="h-2" />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Submitted by: {complaint.submittedBy}</span>
                    <span className="text-muted-foreground">{complaint.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process Flow */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complaint Resolution Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-4">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to improve your complaint management?</h2>
            <p className="mb-6">Start managing community concerns more efficiently today.</p>
            <Button variant="secondary" size="lg">
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const stats = [
  {
    label: "Total Complaints",
    value: "124",
    icon: MessageSquare,
  },
  {
    label: "In Progress",
    value: "45",
    icon: Clock,
  },
  {
    label: "Resolved",
    value: "67",
    icon: CheckCircle,
  },
  {
    label: "Pending",
    value: "12",
    icon: XCircle,
  },
]

const complaints = [
  {
    title: "Street Light Malfunction",
    description: "Street light at Zone 1 Block 4 has been non-functional for 3 days",
    status: "In Progress",
    progress: 75,
    submittedBy: "Juan Dela Cruz",
    date: "2 days ago",
  },
  {
    title: "Garbage Collection Issue",
    description: "Irregular garbage collection in Zone 2",
    status: "Pending",
    progress: 25,
    submittedBy: "Maria Santos",
    date: "1 day ago",
  },
  {
    title: "Noise Complaint",
    description: "Excessive noise from construction site during quiet hours",
    status: "Resolved",
    progress: 100,
    submittedBy: "Pedro Reyes",
    date: "3 days ago",
  },
]

const process = [
  {
    title: "Submit",
    description: "Resident files a complaint through the system",
    icon: MessageSquare,
  },
  {
    title: "Review",
    description: "Officials assess the complaint details",
    icon: Clock,
  },
  {
    title: "Process",
    description: "Take necessary actions to resolve the issue",
    icon: CheckCircle,
  },
  {
    title: "Resolve",
    description: "Mark as resolved and notify the resident",
    icon: CheckCircle,
  },
]

function getStatusVariant(status: string) {
  switch (status) {
    case "Resolved":
      return "default"
    case "In Progress":
      return "secondary"
    case "Pending":
      return "outline"
    default:
      return "default"
  }
}

