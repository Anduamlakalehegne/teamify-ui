import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image src="/images/background.png" alt="Office background" fill className="object-cover opacity-50" priority />
      </div>

      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />

        <div className="container mx-auto flex-1 flex flex-col justify-center items-center py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome To Your <span className="text-orange-500">Virtual Office</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg" asChild>
              <Link href="/demo">Instant Demo</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-orange-500 text-white bg-orange-500/10 px-8 py-6 text-lg"
            >
              <Link href="/setup">Setup Your Company</Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

