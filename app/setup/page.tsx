import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SetUpYourOffice } from "@/components/set-up-your-office"

export default function Setup() {
  return (
    <main className="min-h-screen flex flex-col relative bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image src="/images/background.png" alt="Office background" fill className="object-cover opacity-50" priority />
      </div>

      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />

        <div className="container mx-auto flex-1 flex justify-center items-center py-8">
          <SetUpYourOffice />
        </div>

        <Footer />
      </div>
    </main>
  )
}

