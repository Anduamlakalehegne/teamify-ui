import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactUsPage() {
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or need assistance? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Send Message
                </Button>
              </form>

              
            </div>

            

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      <Mail className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email Us</h3>
                      <p className="text-gray-300">support@teamify.com</p>
                      <p className="text-gray-300">sales@teamify.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      <Phone className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Call Us</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Visit Us</h3>
                      <p className="text-gray-300">123 Innovation Drive</p>
                      <p className="text-gray-300">San Francisco, CA 94103</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      <Clock className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Business Hours</h3>
                      <p className="text-gray-300">Monday-Friday: 9am-5pm EST</p>
                      <p className="text-gray-300">Saturday-Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-medium">How do I get started with Teamify?</h3>
                    <p className="text-gray-300 text-sm">
                      Simply sign up for an account, set up your company profile, and invite your team members.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Is there a free trial available?</h3>
                    <p className="text-gray-300 text-sm">
                      Yes, we offer a 14-day free trial with full access to all features.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Can I upgrade or downgrade my plan?</h3>
                    <p className="text-gray-300 text-sm">
                      Yes, you can change your plan at any time through your account settings.
                    </p>
                  </div>
                  <Link href="#" className="text-orange-500 hover:text-orange-400 text-sm inline-block mt-2">
                    View all FAQs →
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

