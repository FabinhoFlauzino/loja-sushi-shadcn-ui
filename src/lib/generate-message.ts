import { useCartStore } from "@/stores/cart-store"
import { useCheckoutStore } from "@/stores/checkout-store"

export const generateMessage = () => {
  const { name, address } = useCheckoutStore(state => state)
  const { cart } = useCartStore(state => state)

  return `**Dadosdo cliente:**`

}