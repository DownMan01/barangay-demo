import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Search,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Filter,
  Plus,
  FileCheck,
  FileClock,
  FileX,
} from "lucide-react"

export default function DocumentsFeaturePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Hero Section with Stats */}
      <div className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto py-16">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Document Processing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Streamline your document requests and processing with our digital system.
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

      <div className="container mx-auto py-6">
        <Tabs defaultValue="available" className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
            <TabsList className="bg-muted/60">
              <TabsTrigger value="available">Available Documents</TabsTrigger>
              <TabsTrigger value="requests">My Requests</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>
            <div className="flex gap-3 w-full sm:w-auto">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Request
              </Button>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10 bg-muted/50" placeholder="Search documents..." />
          </div>

          <TabsContent value="available" className="grid py-3 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableDocuments.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{doc.title}</h3>
                        <p className="text-sm text-muted-foreground">Processing time: {doc.processingTime}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">₱{doc.fee}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                  <Button className="w-full">Request Document</Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            {documentRequests.map((request, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="h-16 w-16 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{request.document}</h3>
                          <p className="text-sm text-muted-foreground">Request ID: {request.id}</p>
                        </div>
                        <Badge variant={getStatusVariant(request.status)}>{request.status}</Badge>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          Requested: {request.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <AlertCircle className="h-4 w-4" />
                          Priority: {request.priority}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4" />
                          Payment: {request.payment}
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

          <TabsContent value="templates" className="py-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {documentTemplates.map((template, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.format}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

         {/* Call to Action */}
         <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to improve your document processing?</h2>
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
    label: "Total Requests",
    value: "1,234",
    icon: FileText,
  },
  {
    label: "Completed",
    value: "956",
    icon: FileCheck,
  },
  {
    label: "Processing",
    value: "245",
    icon: FileClock,
  },
  {
    label: "Rejected",
    value: "33",
    icon: FileX,
  },
]

const availableDocuments = [
  {
    title: "Barangay Clearance",
    description: "Official document certifying residency and good standing in the barangay.",
    fee: "50.00",
    processingTime: "1-2 working days",
  },
  {
    title: "Business Permit",
    description: "Required permit for operating a business within the barangay.",
    fee: "500.00",
    processingTime: "3-5 working days",
  },
  {
    title: "Certificate of Indigency",
    description: "Document certifying financial status for assistance programs.",
    fee: "0.00",
    processingTime: "1 working day",
  },
]

const documentRequests = [
  {
    id: "REQ-001",
    document: "Barangay Clearance",
    date: "Feb 25, 2024",
    status: "Ready",
    priority: "Normal",
    payment: "Paid",
  },
  {
    id: "REQ-002",
    document: "Business Permit",
    date: "Feb 24, 2024",
    status: "Processing",
    priority: "High",
    payment: "Pending",
  },
  {
    id: "REQ-003",
    document: "Certificate of Indigency",
    date: "Feb 23, 2024",
    status: "Pending",
    priority: "Normal",
    payment: "N/A",
  },
]

const documentTemplates = [
  {
    name: "Barangay Clearance Template",
    format: "DOCX, PDF",
  },
  {
    name: "Business Permit Application",
    format: "DOCX, PDF",
  },
  {
    name: "Complaint Form",
    format: "DOCX, PDF",
  },
]

function getStatusVariant(status: string) {
  switch (status) {
    case "Ready":
      return "default"
    case "Processing":
      return "secondary"
    case "Pending":
      return "outline"
    default:
      return "default"
  }
}

