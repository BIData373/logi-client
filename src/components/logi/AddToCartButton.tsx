import { ShoppingCartPlusIcon } from "lucide-react"
import useAddToCart from "#/hooks/useAddToCart"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"

interface AddToCartButtonProps {
	variantId: number
	quantity: number
}

export default function AddToCartButton({
	variantId,
	quantity,
}: AddToCartButtonProps) {
	const { addToCart, isAdding } = useAddToCart()

	function handleAddToCart() {
		addToCart(variantId, quantity)
	}

	return (
		<Button
			size="lg"
			className="flex-1"
			onClick={handleAddToCart}
			disabled={isAdding}
		>
			{isAdding ? <Spinner /> : <ShoppingCartPlusIcon />}
			הוסף לסל
		</Button>
	)
}
