"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function SignUpForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      console.log("Signup form submitted:", formData)

      // Redirect to login page after successful signup
      router.push("/sign-in")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="w-full max-w-md bg-gray-800/80 text-white border-none">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Complete Your Signup</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-sm">
              Enter Your Name <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="First & Last Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm">
              Enter Your Email <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email Here"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password" className="text-sm">
              Create Password <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Type Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="confirmPassword" className="text-sm">
              Confirm Password <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Continue"}
          </Button>

          <div className="text-center text-xs text-gray-400">
            By proceeding you are agreeing to the{" "}
            <Link href="/terms" className="text-orange-500 hover:underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-orange-500 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-gray-300">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-orange-500 hover:underline">
            Sign In
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

