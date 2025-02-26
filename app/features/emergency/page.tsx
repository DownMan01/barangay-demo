import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Phone, AlertTriangle, Users, MapPin, AlertCircle } from "lucide-react"

export default function EmergencyFeaturePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="container mx-auto py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Emergency Response System</h1>
          <p className="text-xl text-muted-foreground">
            Quick and efficient emergency response management for your barangay.
          </p>
        </div>

        {/* Active Alerts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Active Alerts</h2>
          <div className="grid gap-4">
            {activeAlerts.map((alert, index) => (
              <Alert key={index} variant={alert.variant}>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="ml-2">{alert.title}</AlertTitle>
                <AlertDescription className="ml-6">{alert.description}</AlertDescription>
              </Alert>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <contact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{contact.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{contact.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      {contact.phone}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Response Teams */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Response Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {responseTeams.map((team, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <team.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{team.name}</h3>
                        <p className="text-sm text-muted-foreground">{team.members} members</p>
                      </div>
                    </div>
                    <Badge variant={team.status === "Active" ? "default" : "secondary"}>{team.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{team.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Team
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Emergency Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {guidelines.map((guideline, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{guideline.title}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {guideline.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2">
                          <span className="font-medium text-foreground">{stepIndex + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-destructive text-destructive-foreground">
          <CardContent className="flex flex-col items-center text-center p-8">
            <AlertTriangle className="h-12 w-12 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Emergency? Call Our Hotline</h2>
            <p className="text-3xl font-bold mb-6">911</p>
            <Button variant="secondary" size="lg">
              View Emergency Procedures
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const activeAlerts = [
  {
    title: "Flood Warning",
    description: "Heavy rainfall expected. Residents in low-lying areas please be alert.",
    variant: "destructive",
  },
  {
    title: "Power Interruption",
    description: "Scheduled maintenance from 10 AM to 2 PM tomorrow.",
    variant: "default",
  },
]

const emergencyContacts = [
  {
    name: "Barangay Emergency Hotline",
    description: "24/7 Emergency Response",
    phone: "(02) 8911-1234",
    icon: Phone,
  },
  {
    name: "Fire Station",
    description: "Fire Emergency Response",
    phone: "(02) 8912-5678",
    icon: AlertTriangle,
  },
  {
    name: "Police Station",
    description: "Police Emergency",
    phone: "(02) 8913-9012",
    icon: AlertCircle,
  },
]

const responseTeams = [
  {
    name: "Disaster Response Team",
    members: 15,
    status: "Active",
    description: "Trained for natural disaster response and rescue operations.",
    icon: AlertTriangle,
  },
  {
    name: "Medical Response Team",
    members: 10,
    status: "Active",
    description: "Emergency medical services and first aid response.",
    icon: Users,
  },
  {
    name: "Security Team",
    members: 12,
    status: "Active",
    description: "Community security and peace maintenance.",
    icon: AlertCircle,
  },
  {
    name: "Evacuation Team",
    members: 8,
    status: "Standby",
    description: "Manages evacuation procedures and safe zones.",
    icon: MapPin,
  },
]

const guidelines = [
  {
    title: "During Natural Disasters",
    steps: [
      "Stay calm and follow evacuation procedures",
      "Keep emergency kit ready",
      "Monitor official announcements",
      "Help vulnerable neighbors",
    ],
  },
  {
    title: "Medical Emergencies",
    steps: [
      "Call emergency hotline immediately",
      "Provide clear location details",
      "Follow first aid procedures",
      "Wait for medical team arrival",
    ],
  },
  {
    title: "Fire Emergencies",
    steps: [
      "Evacuate the area immediately",
      "Call fire emergency number",
      "Don't use elevators",
      "Help others evacuate safely",
    ],
  },
]

