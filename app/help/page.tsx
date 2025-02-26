import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, BookOpen, MessageSquare, Video, FileText } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="container mx-auto py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Search our knowledge base or browse frequently asked questions below.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search help articles..." />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQs */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
                <p className="text-primary-foreground/90">Our support team is ready to assist you.</p>
              </div>
              <Button variant="secondary" size="lg" asChild>
                <a href="/contact">Contact Support</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const quickLinks = [
  {
    title: "Getting Started",
    description: "Learn the basics of using BIMS",
    icon: BookOpen,
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step guides",
    icon: Video,
  },
  {
    title: "Documentation",
    description: "Detailed system documentation",
    icon: FileText,
  },
  {
    title: "Community Support",
    description: "Connect with other users",
    icon: MessageSquare,
  },
]

const faqs = [
  {
    question: "How do I register my barangay?",
    answer:
      "To register your barangay, click on the 'Get Started' button and follow the registration process. You'll need to provide basic information about your barangay and create administrator credentials.",
  },
  {
    question: "What documents can be processed through BIMS?",
    answer:
      "BIMS can process various documents including barangay clearances, business permits, certificates of residency, and other common barangay certifications.",
  },
  {
    question: "How secure is the resident information?",
    answer:
      "We implement industry-standard security measures including data encryption, secure access controls, and regular security audits to protect all resident information.",
  },
  {
    question: "Can residents submit requests online?",
    answer:
      "Yes, residents can submit document requests and other applications online through the resident portal once their account is verified.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on the 'Forgot Password' link on the login page and follow the instructions sent to your registered email address.",
  },
]

