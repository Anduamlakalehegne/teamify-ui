"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { OrderSummary } from "@/components/order-summary"

export default function Order() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "standard"
  const billing = searchParams.get("billing") || "monthly"

  return (
    <main className="min-h-screen flex flex-col relative bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image src="/images/background.png" alt="Office background" fill className="object-cover opacity-50" priority />
      </div>

      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />

        <div className="container mx-auto flex-1 flex flex-col justify-center py-8">
          <OrderSummary initialPlan={plan} initialBilling={billing} />
        </div>

        <Footer />
      </div>
    </main>
  )
}

