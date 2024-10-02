import { CheckoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

export function StepAddress({setStep}: Props) {
  return (
    <div className="">...</div>
  )
}