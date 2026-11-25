import { Check, ShoppingCartPlusIcon } from "lucide-react"
import useAddToCart from "#/hooks/useAddToCart"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"
import { useEffect, useState } from "react"

interface AddToCartButtonProps {
	variantId: number
	quantity: number
}

export default function AddToCartButton({
	variantId,
	quantity,
}: AddToCartButtonProps) {
	const { addToCart, isAdding } = useAddToCart()
	const [isInCooldown, setIsInCooldown] = useState(false)

	useEffect(() => {
		if (isInCooldown) {
			const timeout = setTimeout(() => setIsInCooldown(false), 3000)

			return () => clearTimeout(timeout)
		}
	}, [isInCooldown])

	function handleAddToCart() {
		addToCart(variantId, quantity)
		setIsInCooldown(true)
	}

	return (
		<Button
			size="lg"
			className="flex-1 transition-all"
			onClick={handleAddToCart}
			disabled={isAdding || isInCooldown}
		>
			{isAdding ? (
				<Spinner />
			) : isInCooldown ? (
				<Check />
			) : (
				<ShoppingCartPlusIcon />
			)}
			{isInCooldown ? "נוסף לסל בהצלחה!" : "הוסף לסל"}
		</Button>
	)
}
