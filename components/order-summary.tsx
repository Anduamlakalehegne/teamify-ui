"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

// Define the pricing data
const pricingData = {
  monthly: {
    standard: {
      title: "Standard",
      price: "$99",
      period: "Per Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    premium: {
      title: "Premium",
      price: "$299",
      period: "Per Month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      recommended: true,
    },
  },
  yearly: {
    standard: {
      title: "Standard",
      price: "$1000",
      period: "Per Year",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    premium: {
      title: "Premium",
      price: "$1800",
      period: "Per Year",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      recommended: true,
    },
  },
}

interface OrderSummaryProps {
  initialPlan: string
  initialBilling: string
}

export function OrderSummary({ initialPlan = "standard", initialBilling = "monthly" }: OrderSummaryProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    initialBilling === "yearly" ? "yearly" : "monthly",
  )
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "premium">(
    initialPlan === "premium" ? "premium" : "standard",
  )

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-6">
          Your Order <span className="text-orange-500">Summary</span>
        </h1>
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

      <Card className="bg-gray-800/80 border-none text-white">
        <CardHeader>
          <CardTitle>Select Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedPlan}
            onValueChange={(value) => setSelectedPlan(value as "standard" | "premium")}
            className="space-y-4"
          >
            {["standard", "premium"].map((plan) => {
              const planData = pricingData[billingCycle][plan as "standard" | "premium"]
              return (
                <div
                  key={plan}
                  className={`flex items-center justify-between p-4 rounded-md ${
                    selectedPlan === plan ? "bg-gray-700" : "bg-gray-700/50"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value={plan} id={plan} className="text-orange-500" />
                    <div>
                      <Label htmlFor={plan} className="text-base font-medium">
                        {planData.title}
                      </Label>
                      <p className="text-sm text-gray-400">{planData.description}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    {planData.recommended && (
                      <Badge className="mb-1 bg-white text-black border-none text-xs">Recommended</Badge>
                    )}
                    <div className="text-xl font-bold">{planData.price}</div>
                    <div className="text-xs text-gray-400">{planData.period}</div>
                  </div>
                </div>
              )
            })}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="bg-orange-500 hover:bg-orange-600">Continue to Payment</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

