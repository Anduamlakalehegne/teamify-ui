"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, Camera } from "lucide-react"

export function SetUpYourOffice() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    companySize: "0-10",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, companySize: value }))
  }

  const handleLogoClick = () => {
    fileInputRef.current?.click()
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setLogoPreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <Card className="w-full max-w-md bg-gray-800/80 text-white border-none">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Set Up Your Office</CardTitle>
        <div
          className="mx-auto mt-4 w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center border-2 border-blue-800 relative overflow-hidden cursor-pointer group"
          onClick={handleLogoClick}
        >
          {logoPreview ? (
            <div className="w-full h-full">
              <img src={logoPreview || "/placeholder.svg"} alt="Company logo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
          ) : (
            <>
              <span className="text-sm text-gray-300 absolute">Logo here</span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Upload className="w-6 h-6 text-white" />
              </div>
            </>
          )}
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleLogoChange} />
        </div>
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
              placeholder="Email Here..."
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="companyName" className="text-sm">
              Your Company Name <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="companyWebsite" className="text-sm">
              Your Company Website <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="companyWebsite"
              name="companyWebsite"
              placeholder="Website Here..."
              value={formData.companyWebsite}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm">
              Company Size <span className="text-orange-500">*</span>
            </Label>
            <RadioGroup value={formData.companySize} onValueChange={handleRadioChange} className="space-y-1">
              <div className="flex items-center justify-between bg-white text-black px-3 py-2 rounded-sm">
                <Label htmlFor="option-1" className="text-sm font-normal cursor-pointer">
                  0 to 10 Employees
                </Label>
                <RadioGroupItem id="option-1" value="0-10" className="text-orange-500" />
              </div>
              <div className="flex items-center justify-between bg-white text-black px-3 py-2 rounded-sm">
                <Label htmlFor="option-2" className="text-sm font-normal cursor-pointer">
                  11 to 50 Employees
                </Label>
                <RadioGroupItem id="option-2" value="11-50" className="text-orange-500" />
              </div>
              <div className="flex items-center justify-between bg-white text-black px-3 py-2 rounded-sm">
                <Label htmlFor="option-3" className="text-sm font-normal cursor-pointer">
                  &gt; Than 50 Employees
                </Label>
                <RadioGroupItem id="option-3" value="50+" className="text-orange-500" />
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-1">
            <Label htmlFor="password" className="text-sm">
              Confirm Password <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Confirm Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
            Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

