"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Download } from "lucide-react"

export function DemoDownload() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [downloadLink, setDownloadLink] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to generate download link
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setDownloadLink("https://download.teamify.com/demo/teamify-demo-v1.0.exe")
    }, 1500)
  }

  const handleDownload = () => {
    // In a real app, this would trigger the actual download
    console.log("Downloading from:", downloadLink)

    // For demo purposes, we'll just show an alert
    alert("Download started! In a real application, this would download the actual demo file.")
  }

  return (
    <div className="text-center">
      {isSuccess ? (
        <div className="space-y-6">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold">Your Demo is Ready!</h3>
          <p className="mb-6">
            We've sent a confirmation email to <span className="text-orange-500">{email}</span> with additional
            instructions.
          </p>
          <Button
            onClick={handleDownload}
            className="bg-orange-500 hover:bg-orange-600 text-white w-full py-6 text-lg flex items-center justify-center"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Demo Now
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            By downloading, you agree to our{" "}
            <a href="/#" className="text-orange-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/#" className="text-orange-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl font-bold mb-4">Get Instant Access</h3>
          <p className="mb-6">Enter your email to receive your demo download link.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-black"
              />
            </div>
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white w-full py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Get Demo Access"}
            </Button>
          </form>
          <div className="mt-6 space-y-3">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">No Payment required</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">14-day full access to all features</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">Available for Windows, Mac, and Linux</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

