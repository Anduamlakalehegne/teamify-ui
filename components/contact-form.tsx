"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Contact form submitted:", formData)
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card className="bg-gray-800/80 border-none text-white">
        <CardContent className="pt-6 flex flex-col items-center justify-center p-12">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-center text-gray-300 mb-6">
            Thank you for reaching out. We've received your message and will get back to you shortly.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              })
            }}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-800/80 border-none text-white">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm">
                Your Name <span className="text-orange-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white text-black"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">
                Your Email <span className="text-orange-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white text-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white text-black"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm">
                Subject <span className="text-orange-500">*</span>
              </Label>
              <Select value={formData.subject} onValueChange={handleSelectChange} required>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="billing">Billing Question</SelectItem>
                  <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm">
              Your Message <span className="text-orange-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white text-black min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={isLoading}>
            {isLoading ? "Sending Message..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

