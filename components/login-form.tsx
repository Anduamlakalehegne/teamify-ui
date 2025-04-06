"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      console.log("Login form submitted:", formData)

      // Store login state in localStorage
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userEmail", formData.email)

      // Redirect to home page
      router.push("/")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="w-full max-w-md bg-gray-800/80 text-white border-none">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome Back</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-sm">
                Enter Your Password <span className="text-orange-500">*</span>
              </Label>
              <Link href="/#" className="text-xs text-orange-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
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

          <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Continue"}
          </Button>

          <div className="text-center text-xs text-gray-400">
            By proceeding you are agreeing to the{" "}
            <Link href="/@" className="text-orange-500 hover:underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/@" className="text-orange-500 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-gray-300">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-orange-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

