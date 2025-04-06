import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DemoDownload } from "@/components/demo-download"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Laptop, Clock, Users, Zap } from "lucide-react"

export default function Demo() {
  return (
    <main className="min-h-screen flex flex-col relative bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image src="/images/background.png" alt="Office background" fill className="object-cover opacity-50" priority />
      </div>

      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />

        <div className="container mx-auto flex-1 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Try Our <span className="text-orange-500">Free Demo</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Experience the power of Teamify with our fully-functional demo. No Payment required.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Experience Teamify Today</h2>
              <div className="space-y-4 mb-8">
                <p>
                  Our demo gives you full access to all Premium features for 14 days, allowing you to explore how
                  Teamify can transform your team's collaboration.
                </p>
                <p>
                  Set up your virtual office, invite team members, and discover the tools that thousands of companies
                  rely on to stay productive and connected.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: <Clock className="h-5 w-5 text-orange-500" />,
                    text: "14-day full access to Premium features",
                  },
                  { icon: <Users className="h-5 w-5 text-orange-500" />, text: "Invite up to 10 team members" },
                  { icon: <Zap className="h-5 w-5 text-orange-500" />, text: "No Payment required" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-0.5">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/80 rounded-lg p-8">
              <DemoDownload />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Available on All Your Devices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Monitor className="h-12 w-12 text-orange-500" />,
                  title: "Web Browser",
                  description: "Access Teamify from any modern web browser. No installation required.",
                },
                {
                  icon: <Smartphone className="h-12 w-12 text-orange-500" />,
                  title: "Mobile App",
                  description: "Stay connected on the go with our iOS and Android apps.",
                },
                {
                  icon: <Laptop className="h-12 w-12 text-orange-500" />,
                  title: "Desktop App",
                  description: "Download our desktop app for Windows, Mac, and Linux for the best experience.",
                },
              ].map((platform, index) => (
                <Card key={index} className="bg-gray-800/80 border-none">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4">{platform.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{platform.title}</h3>
                      <p className="text-gray-300">{platform.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Full Experience?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              After trying our demo, upgrade to a full plan to unlock all features and invite your entire team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6" asChild>
                <Link href="/plans">View Pricing Plans</Link>
              </Button>
              <Button variant="outline" className="border-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                <Link href="/contact-us">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

