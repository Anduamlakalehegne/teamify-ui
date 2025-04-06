"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"
import Link from "next/link"

// Define the pricing data
const pricingData = {
  monthly: [
    {
      title: "Standard",
      price: "$99",
      period: "/ Per Month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
      buttonText: "Choose Plan",
      buttonLink: "/order?plan=standard&billing=monthly",
    },
    {
      title: "Premium",
      price: "$299",
      period: "/ Per Month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
      buttonText: "Choose Plan",
      buttonLink: "/order?plan=premium&billing=monthly",
      recommended: true,
    },
    {
      title: "Enterprise",
      price: "Custom Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
      buttonText: "Contact Us",
      buttonLink: "/contact-us",
    },
  ],
  yearly: [
    {
      title: "Standard",
      price: "$990",
      period: "/ Per Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
      buttonText: "Choose Plan",
      buttonLink: "/order?plan=standard&billing=yearly",
    },
    {
      title: "Premium",
      price: "$2990",
      period: "/ Per Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
      buttonText: "Choose Plan",
      buttonLink: "/order?plan=premium&billing=yearly",
      recommended: true,
    },
    {
      title: "Enterprise",
      price: "Custom Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
      buttonText: "Contact Us",
      buttonLink: "/contact-us",
    },
  ],
}

export function PlansDisplay() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Flexible <span className="text-orange-500">Plans</span>
        </h1>
        <p className="text-xl">Choose a plan that work best for you & your team</p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="relative flex items-center p-1 bg-gray-800 rounded-full w-80">
          {" "}
          {/* Increased width to 80 */}
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`relative z-10 w-1/2 py-2 text-sm font-medium transition-colors duration-200 ${
              billingCycle === "monthly" ? "text-white" : "text-gray-400"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`relative z-10 w-1/2 py-2 text-sm font-medium transition-colors duration-200 ${
              billingCycle === "yearly" ? "text-white" : "text-gray-400"
            }`}
          >
            <div className="flex items-center justify-center">
              Yearly
              <span
                className={`ml-2 text-xs transition-colors duration-200 ${billingCycle === "yearly" ? "bg-gray-600" : "bg-orange-500"}  text-white px-2 py-0.5 rounded-full`}
              >
                Save 50%
              </span>
            </div>
          </button>
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 z-0 h-full rounded-full bg-orange-500"
            initial={false}
            animate={{
              left: billingCycle === "monthly" ? "0%" : "50%",
              width: "50%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingData[billingCycle].map((plan, index) => (
          <div key={`${plan.title}-${index}`} className="bg-gray-800/90 rounded-lg p-6 flex flex-col relative">
            {plan.recommended && (
              <div className="absolute -top-3 right-4">
                <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded">Recommended</div>
              </div>
            )}
            <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{plan.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.period && <span className="text-sm text-gray-300">{plan.period}</span>}
            </div>

            <ul className="space-y-2 mb-6 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full ${
                plan.title === "Premium"
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-white border-orange-500"
              }`}
              asChild
            >
              <Link href={plan.buttonLink}>{plan.buttonText}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

