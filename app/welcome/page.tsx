"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface CompanyData {
  companyName: string
  companyWebsite: string
  companySize: string
  industry: string
  companyEmail: string
  companyPhone: string
  address: string
  logo?: string
}

export default function Welcome() {
  const router = useRouter()
  const [companyData, setCompanyData] = useState<CompanyData | null>(null)

  useEffect(() => {
    // Check if company data exists
    const storedData = localStorage.getItem("companyData")

    if (storedData) {
      setCompanyData(JSON.parse(storedData))
    } else {
      // If no company data, redirect to setup
      router.push("/setup")
    }
  }, [router])

  if (!companyData) {
    return null // Or a loading spinner
  }

  return (
    <main className="min-h-screen flex flex-col relative bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image src="/images/background.png" alt="Office background" fill className="object-cover opacity-50" priority />
      </div>

      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />

        <div className="container mx-auto flex-1 flex flex-col justify-center items-center py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome To Your <span className="text-orange-500">Virtual Office</span>
            </h1>
            <p className="text-xl text-gray-300">
              Your company <span className="text-orange-500 font-semibold">{companyData.companyName}</span> has been
              successfully set up!
            </p>
          </div>

          <Card className="w-full max-w-2xl bg-gray-800/80 border-none mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                {companyData.logo && (
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-orange-500">
                      <img
                        src={companyData.logo || "/placeholder.svg"}
                        alt={`${companyData.companyName} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Company Details</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>
                        <span className="text-gray-400">Name:</span> {companyData.companyName}
                      </li>
                      <li>
                        <span className="text-gray-400">Website:</span> {companyData.companyWebsite}
                      </li>
                      <li>
                        <span className="text-gray-400">Size:</span> {companyData.companySize} employees
                      </li>
                      <li>
                        <span className="text-gray-400">Industry:</span> {companyData.industry}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>
                        <span className="text-gray-400">Email:</span> {companyData.companyEmail}
                      </li>
                      {companyData.companyPhone && (
                        <li>
                          <span className="text-gray-400">Phone:</span> {companyData.companyPhone}
                        </li>
                      )}
                      {companyData.address && (
                        <li>
                          <span className="text-gray-400">Address:</span> {companyData.address}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg" asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>

            <Button variant="outline" className="border-white hover:bg-white/10 text-white px-8 py-6 text-lg" asChild>
              <Link href="/plans">Explore Plans</Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

