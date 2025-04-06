import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%201-HMI6IsBhlamlrWkj4uFmBVzsPnn1lc.png"
          alt="Dark workspace with laptop"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-orange-500">Teamify</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to transform how teams work together in the digital age
            </p>
          </div>

          {/* Our Story Section */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-4">
                  Teamify was founded in 2023 with a simple yet powerful vision: to create a virtual office environment
                  that truly bridges the gap between remote and in-person collaboration.
                </p>
                <p className="text-gray-300 mb-4">
                  Our founders experienced firsthand the challenges of managing distributed teams across different time
                  zones and cultures. They recognized that existing tools were fragmented, forcing teams to juggle
                  multiple platforms for communication, project management, and document sharing.
                </p>
                <p className="text-gray-300">
                  This insight led to the development of Teamify – a comprehensive virtual office platform that brings
                  together all the tools teams need in one seamless environment, enabling them to work together as
                  effectively as if they were in the same physical space.
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6">
                <div className="aspect-video bg-slate-600 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-white text-sm">Company timeline video</p>
                </div>
                <div className="flex justify-between">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">2023</div>
                    <div className="text-gray-300 text-sm">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">15+</div>
                    <div className="text-gray-300 text-sm">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">500+</div>
                    <div className="text-gray-300 text-sm">Teams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">50k+</div>
                    <div className="text-gray-300 text-sm">Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <span className="text-orange-500 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Collaboration Without Boundaries</h3>
                <p className="text-gray-300">
                  We believe that great work happens when people can collaborate freely, regardless of physical location
                  or time zone.
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <span className="text-orange-500 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Simplicity in Design</h3>
                <p className="text-gray-300">
                  We're committed to creating intuitive, user-friendly tools that enhance productivity without adding
                  complexity.
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <span className="text-orange-500 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Continuous Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible in virtual collaboration, always seeking better
                  ways to connect teams.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Leadership Team</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="w-24 h-24 rounded-full bg-slate-600 mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-white">Jane Doe</h3>
                  <p className="text-orange-500 mb-2">Co-Founder & CEO</p>
                  <div className="flex justify-center space-x-2">
                    <a href="#" className="text-gray-300 hover:text-white">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to join us on our mission?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

