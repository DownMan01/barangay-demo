import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { Users, FileText, MessageSquare, AlertTriangle, BarChart3 } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back, Admin User</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Residents</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,234</div>
              <p className="text-xs text-muted-foreground">+180 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82</div>
              <p className="text-xs text-muted-foreground">23 new today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Complaints</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">12 resolved this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Emergency Reports</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">2 active incidents</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Monthly Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MonthlyStats />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentActivities />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function MonthlyStats() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Requests Processed</span>
          <span className="font-medium">452</span>
        </div>
        <div className="h-2 rounded-full bg-muted">
          <div className="h-full w-4/5 rounded-full bg-primary" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Complaints Resolved</span>
          <span className="font-medium">89</span>
        </div>
        <div className="h-2 rounded-full bg-muted">
          <div className="h-full w-3/5 rounded-full bg-primary" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Emergency Response</span>
          <span className="font-medium">98%</span>
        </div>
        <div className="h-2 rounded-full bg-muted">
          <div className="h-full w-[98%] rounded-full bg-primary" />
        </div>
      </div>
    </div>
  )
}

function RecentActivities() {
  const activities = [
    {
      title: "Resident Registration",
      description: "New resident registered in Barangay 1",
      time: "5 minutes ago",
    },
    {
      title: "Permit Approved",
      description: "Business permit approved for Store XYZ",
      time: "1 hour ago",
    },
    {
      title: "Complaint Filed",
      description: "Noise complaint submitted in Zone 3",
      time: "2 hours ago",
    },
    {
      title: "Emergency Alert",
      description: "Flash flood warning issued for low-lying areas",
      time: "3 hours ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start gap-4 rounded-lg border p-4">
          <div className="flex-1 space-y-1">
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
          </div>
          <p className="text-sm text-muted-foreground">{activity.time}</p>
        </div>
      ))}
    </div>
  )
}

