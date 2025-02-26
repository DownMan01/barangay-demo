"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MainNav } from "@/components/main-nav"
import { ChevronRight, ChevronLeft, Building2, User, Mail, Lock, MapPin, Phone } from "lucide-react"

export default function RegisterPage() {
  const [step, setStep] = React.useState(1)
  const totalSteps = 3

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Background with gradient and pattern */}
      <div className="relative flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 bg-[url('')] bg-repeat opacity-5" />

        {/* Registration Card */}
        <Card className="w-full max-w-2xl relative bg-background/80 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">Register Your Barangay</CardTitle>
              <span className="text-sm text-muted-foreground">
                Step {step} of {totalSteps}
              </span>
            </div>
            <CardDescription>
              Join our network of modern barangays and improve your community management
            </CardDescription>
          </CardHeader>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-muted">
            <div
              className="h-full bg-primary transition-all duration-300 ease-in-out"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>

          <CardContent className="p-6">
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="barangay-name">Barangay Name</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="barangay-name" placeholder="Enter barangay name" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City/Municipality</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="city" placeholder="Enter city/municipality" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="province">Province</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="province" placeholder="Enter province" className="pl-10" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-name">Administrator Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="admin-name" placeholder="Enter full name" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Select>
                    <SelectTrigger id="position" className="w-full">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chairman">Barangay Chairman</SelectItem>
                      <SelectItem value="secretary">Barangay Secretary</SelectItem>
                      <SelectItem value="treasurer">Barangay Treasurer</SelectItem>
                      <SelectItem value="other">Other Position</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="Enter email address" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="phone" type="tel" placeholder="Enter contact number" className="pl-10" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Create Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="Enter password" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="confirm-password" type="password" placeholder="Confirm password" className="pl-10" />
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="p-4 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-2">Password requirements:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>At least 8 characters long</li>
                      <li>Must include at least one uppercase letter</li>
                      <li>Must include at least one number</li>
                      <li>Must include at least one special character</li>
                    </ul>
                  </CardContent>
                </Card>
                <div className="rounded-lg border p-4 text-sm text-muted-foreground">
                  By registering, you agree to our Terms of Service and Privacy Policy.
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between p-6">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
            ) : (
              <div />
            )}
            {step < totalSteps ? (
              <Button onClick={nextStep}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button className="bg-primary">Complete Registration</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

